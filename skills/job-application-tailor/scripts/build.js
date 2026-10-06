const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, AlignmentType, LevelFormat,
  TabStopType, BorderStyle, ExternalHyperlink,
} = require("docx");

const PAGE_W = 12240, PAGE_H = 15840;
const M_SIDE = 864;   // 0.6"
const M_TB = 720;     // 0.5"
const CONTENT_W = PAGE_W - 2 * M_SIDE;
const FONT = "Calibri";
const ACCENT = "1F3A5F";

// density (mutated per-document for compact mode)
let BODY = 20, SH_BEFORE = 160, SH_AFTER = 60, BUL_AFTER = 30, LINE = 252, ROLE_BEFORE = 120;

function sectionHeader(text) {
  return new Paragraph({
    spacing: { before: SH_BEFORE, after: SH_AFTER },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: ACCENT, space: 1 } },
    children: [new TextRun({ text: text.toUpperCase(), bold: true, size: 19, color: ACCENT, font: FONT, characterSpacing: 20 })],
  });
}
function roleLine(left, dates) {
  return new Paragraph({
    tabStops: [{ type: TabStopType.RIGHT, position: CONTENT_W }],
    spacing: { before: ROLE_BEFORE, after: 20 },
    children: [
      new TextRun({ text: left, bold: true, size: BODY + 1, font: FONT }),
      new TextRun({ text: "\t" + dates, size: 19, color: "555555", font: FONT }),
    ],
  });
}
function bullet(text) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { after: BUL_AFTER, line: LINE },
    children: [new TextRun({ text, size: BODY, font: FONT })],
  });
}
function contactPart(item) {
  if (item.url) {
    return new ExternalHyperlink({ link: item.url, children: [new TextRun({ text: item.text, size: 19, font: FONT, color: ACCENT })] });
  }
  return new TextRun({ text: item.text, size: 19, font: FONT, color: "333333" });
}

function buildResume(c, outPath) {
  if (c.compact) { BODY = 19; SH_BEFORE = 76; SH_AFTER = 26; BUL_AFTER = 10; LINE = 224; ROLE_BEFORE = 70; }
  else { BODY = 20; SH_BEFORE = 160; SH_AFTER = 60; BUL_AFTER = 30; LINE = 252; ROLE_BEFORE = 120; }
  const M_TBv = c.compact ? 480 : M_TB;
  const children = [];

  children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 20 },
    children: [new TextRun({ text: c.name, bold: true, size: 40, font: FONT, color: "111111", characterSpacing: 10 })] }));
  children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 40 },
    children: [new TextRun({ text: c.title, size: 22, font: FONT, color: ACCENT, bold: true })] }));
  const sep = () => new TextRun({ text: "   ·   ", size: 19, font: FONT, color: "999999" });
  const contactRuns = [];
  c.contact.forEach((item, i) => { if (i > 0) contactRuns.push(sep()); contactRuns.push(contactPart(item)); });
  children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 40 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: "CCCCCC", space: 4 } }, children: contactRuns }));

  const renderExtra = () => {
    if (!c.extra) return;
    children.push(sectionHeader(c.extra.header));
    children.push(new Paragraph({ spacing: { before: 40, after: 20, line: LINE },
      children: [ new TextRun({ text: c.extra.lead + "  ", bold: true, size: BODY, font: FONT }), new TextRun({ text: c.extra.body, size: BODY, font: FONT }) ] }));
  };

  const sections = {};
  sections.summary = () => {
    children.push(sectionHeader("Summary"));
    children.push(new Paragraph({ spacing: { after: 40, line: LINE }, children: [new TextRun({ text: c.summary, size: BODY, font: FONT })] }));
  };
  sections.skills = () => {
    children.push(sectionHeader("Skills"));
    c.skills.forEach(s => children.push(new Paragraph({ spacing: { after: 18, line: LINE - 6 },
      children: [ new TextRun({ text: s.label + ":  ", bold: true, size: BODY, font: FONT }), new TextRun({ text: s.items, size: BODY, font: FONT }) ] })));
  };
  sections.experience = () => {
    children.push(sectionHeader("Experience"));
    c.experience.forEach(role => { children.push(roleLine(role.head, role.dates)); role.bullets.forEach(b => children.push(bullet(b))); });
    if (c.extraPosition === "afterExperience") renderExtra();
  };
  sections.education = () => {
    children.push(sectionHeader("Education"));
    c.education.forEach(e => children.push(new Paragraph({ tabStops: [{ type: TabStopType.RIGHT, position: CONTENT_W }], spacing: { before: 40, after: 10 },
      children: [ new TextRun({ text: e.school, bold: true, size: BODY, font: FONT }), new TextRun({ text: "  —  " + e.degree, size: BODY, font: FONT }), new TextRun({ text: "\t" + e.date, size: 19, color: "555555", font: FONT }) ] })));
  };
  sections.publications = () => {
    if (!(c.publications && c.publications.length)) return;
    children.push(sectionHeader("Publications"));
    c.publications.forEach(p => children.push(new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { before: 24, after: 16, line: LINE - 6 },
      children: [new TextRun({ text: p, size: BODY - 1, font: FONT })] })));
  };

  const order = c.order || ["summary", "skills", "experience", "education", "publications"];
  order.forEach(name => { if (sections[name]) sections[name](); });
  if (c.extraPosition !== "afterExperience" && !order.includes("extra")) renderExtra();

  const doc = new Document({
    styles: { default: { document: { run: { font: FONT, size: BODY } } } },
    numbering: { config: [{ reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 288, hanging: 180 } } } }] }] },
    sections: [{ properties: { page: { size: { width: PAGE_W, height: PAGE_H }, margin: { top: M_TBv, right: M_SIDE, bottom: M_TBv, left: M_SIDE } } }, children }],
  });
  return Packer.toBuffer(doc).then(buf => { fs.writeFileSync(outPath, buf); console.log("wrote", outPath); });
}
module.exports = { buildResume };
