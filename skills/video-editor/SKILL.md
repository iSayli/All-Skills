# Video Editor Skill

Create documentary-style video montages, hero background videos, animated headline sequences, and stock footage compilations. Use this skill whenever the user asks to create, edit, compile, or review video content — whether for landing pages, presentations, social media, or documentary projects.

## When to Trigger

- User asks to create a video montage or hero background video
- User asks to compile stock footage clips
- User asks to create animated headline/text-to-video content
- User asks to edit, trim, or combine video clips
- User asks to find and download stock video clips
- User mentions documentary-style video, Ken Burns effect, or cinematic editing
- User wants to create a video from news articles or headlines

## Mandatory Process

### Step 1: GATHER CONTEXT (Never skip this)

Before touching any video, ask the user:
1. What is this video for? (hero background, social media, presentation, documentary)
2. What message should it convey? (urgency, trust, global scale, specific story)
3. What's the brand/tone? (dark/cinematic, light/corporate, energetic, somber)
4. Target length? (hero: 15-28s, social: 30-60s, documentary: varies)
5. Where will it be displayed? (website background with text overlay, standalone, embedded)
6. Any specific people, events, or themes they want included?
7. What geographic diversity matters? (always default to global, not US-centric)

Do NOT proceed to scripting without answers to at least questions 1-3.

### Step 2: RESEARCH SOURCES

Search multiple platforms for clips. Never rely on just one source.

**Free Stock Video (no attribution required):**
| Platform | License | URL | Best For |
|----------|---------|-----|----------|
| Pexels | Pexels License | https://www.pexels.com/videos/ | People, protests, social media, professional |
| Pixabay | Pixabay License | https://pixabay.com/videos/ | Abstract tech, AI, news graphics, disasters |
| Coverr | Coverr License | https://coverr.co/ | Curated tech, social media, data |

**Government Archives (official sources):**
| Source | Country | License | URL |
|--------|---------|---------|-----|
| White House | USA | US Public Domain | https://www.whitehouse.gov/videos/ |
| C-SPAN floor feeds | USA | Public Domain | https://www.c-span.org/ |
| kremlin.ru | Russia | CC-BY 4.0 | https://en.kremlin.ru/multimedia/video |
| PBShabd | India | Copyright-free | https://pbshabd.in/ |
| PIB India | India | Copyright-free | https://www.pib.gov.in/ |
| EU Parliament MMC | EU | Free for media | https://multimedia.europarl.europa.eu/ |
| EC Audiovisual | EU | Free for EU info/education | https://audiovisual.ec.europa.eu/ |

**Archives (mixed licenses):**
| Source | License | URL |
|--------|---------|-----|
| Prelinger Archives | ~65% Public Domain | https://archive.org/details/prelinger |
| Al Jazeera CC | CC-BY 3.0 | https://archive.org/details/aljazeeramedia |
| Wikimedia Commons | CC-BY / CC-BY-SA | https://commons.wikimedia.org/wiki/Category:Videos |

**DO NOT USE without license:**
- BBC News, CCTV China, Xinhua, RT Russia, UK Parliament video (requires paid PRU licence), UN Web TV ($15/sec)

**CRITICAL:** Verify commercial use rights for EVERY clip before including it. Document the license type for each clip in a manifest.

### Step 3: DOWNLOAD

```bash
# Install dependencies
brew install ffmpeg yt-dlp
pip install curl_cffi  # For Pexels/Pixabay anti-bot bypass

# Download from Pexels/Pixabay (sequential, not parallel — avoid IP blocking)
yt-dlp --impersonate chrome -o "filename.mp4" "https://www.pexels.com/video/..."

# For government sources, use yt-dlp or direct download
yt-dlp --impersonate chrome -o "leader-speech.%(ext)s" --max-downloads 1 "ytsearch1:Modi parliament speech"
```

**Rules:**
- Download sequentially (max 3-4 concurrent) to avoid IP blocking
- Name files descriptively: `politician-at-podium.mp4` not `video1.mp4`
- Store in an `assets/` directory with `.gitignore` for large files
- Create a README.md manifest tracking every clip's source URL and license

### Step 4: KEYFRAME ANALYSIS (Never skip this)

Extract keyframes from EVERY clip before trimming:

```bash
ffmpeg -i clip.mp4 -vf "select='eq(pict_type,I)',scale=320:-1" -vsync vfr -frames:v 4 keyframe_%02d.jpg
```

Then VIEW each keyframe to understand:
- What does this clip actually show?
- Where is the "best moment" (the 2-3 seconds worth using)?
- Are there chyrons, watermarks, or text overlays that might bleed through?
- Is this the right person/event? (e.g., is it actually Macron or a commentator talking about Macron?)
- What's the aspect ratio? (vertical clips need letterboxing)

Document findings in a keyframe analysis file.

### Step 5: SCRIPT WRITING

Create a narrative arc with acts. A good montage tells a story:

**Standard 5-act structure for hero background (15-28s):**
1. **Establish** (3-6s): Set the global context — events, leaders, crises
2. **Connect** (3-4s): Show people consuming content — phone scrolling, reactions
3. **Reveal** (3-6s): Show the hidden layer — AI, algorithms, manipulation
4. **Overwhelm** (3-5s): Information overload — multiple screens, rapid headlines
5. **Land** (2-3s): Close on global scope — globe, data, or a stat that lingers

**3-phase pacing for headline sequences (10-15s):**
1. **Slow burn** (4-8s): 3-4 headlines, 2s each, Ken Burns zoom
2. **Acceleration** (3-5s): 5-6 headlines rapid fire, 0.7s each
3. **Punctuation** (2-3s): One stat card holds, dramatic pause

Assign each clip to an act with SPECIFIC trim points based on keyframe analysis.

### Step 6: CONTENT-AWARE TRIMMING

```bash
# Normalize all clips to same resolution and fps
SCALE="scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2,fps=30"

# Trim at meaningful moments (NOT fixed offsets)
ffmpeg -y -ss START -i clip.mp4 -t DURATION -vf "$SCALE" -an -c:v libx264 -preset fast trimmed/clip.mp4

# Crop chyrons if needed (remove bottom 20%)
ffmpeg -y -ss 0 -i clip.mp4 -t 2 -vf "crop=iw:ih*0.80:0:0,$SCALE" -an -c:v libx264 trimmed/clip.mp4
```

### Step 7: ASSEMBLY

```bash
# Create concat list
printf "file 'trimmed/01.mp4'\nfile 'trimmed/02.mp4'\n..." > concat.txt

# Concatenate with dark overlay (for hero backgrounds with text)
ffmpeg -y -f concat -safe 0 -i concat.txt \
  -vf "eq=brightness=-0.25:saturation=0.70" \
  -c:v libx264 -preset slow -crf 26 -movflags +faststart -an output.mp4

# Brightness/saturation guide:
# Light text overlay: brightness=-0.25 to -0.35, saturation=0.65-0.75
# No text overlay: brightness=-0.10, saturation=0.85
# Dark/moody: brightness=-0.40, saturation=0.50
```

### Step 8: SELF-REVIEW (Like a filmmaker)

Extract frames and review every transition:

```bash
ffmpeg -y -i output.mp4 -vf "fps=0.5,scale=480:-1" review/frame_%03d.jpg
```

Check for:
- Chyrons/watermarks bleeding through dark overlay
- Wrong faces (commentator instead of leader)
- Tone clashes (garish colors against dark theme)
- Pacing issues (too many similar shots in a row)
- Visual continuity (jarring transitions)
- Frame rate issues (stuttering from mixed fps)

### Step 9: ITERATE

Fix issues. Create new version. NEVER delete old versions — keep v1, v2, v3, etc.

### Step 10: DEPLOY

```bash
# Copy to public directory
cp output/montage-v5.mp4 landing_page/public/videos/

# Ensure .vercelignore allows video files in public/
# Commit (force-add if gitignored)
git add -f public/videos/montage-v5.mp4
git commit -m "Deploy montage v5"
git push

# Deploy to Vercel
npx vercel --prod
```

## Ken Burns Zoom Effect (for headline cards)

```bash
# Render each headline as a PNG via Playwright (see HTML template approach)
# Then apply zoompan for Ken Burns effect:

# Slow zoom (2s, 100%→110%)
ffmpeg -y -loop 1 -i card.png -t 2 \
  -vf "zoompan=z='1+0.0017*in':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=60:s=1920x1080:fps=30,format=yuv420p" \
  -c:v libx264 -preset fast -an output.mp4

# Fast zoom (0.7s, 100%→105%)
ffmpeg -y -loop 1 -i card.png -t 0.7 \
  -vf "zoompan=z='1+0.0024*in':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=21:s=1920x1080:fps=30,format=yuv420p" \
  -c:v libx264 -preset fast -an output.mp4

# Stat card hold (3s, 100%→108%)
ffmpeg -y -loop 1 -i card.png -t 3 \
  -vf "zoompan=z='1+0.0009*in':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=90:s=1920x1080:fps=30,format=yuv420p" \
  -c:v libx264 -preset fast -an output.mp4
```

## HTML-to-Video Pipeline (Animated Headlines)

1. Create styled HTML page with headline cards (see `assets/headline-cards.html` for template)
2. Use Playwright to render each card as a PNG or capture frame-by-frame
3. Apply Ken Burns zoom via ffmpeg zoompan filter
4. Concatenate cards with ffmpeg

```javascript
// Playwright render script pattern
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto('file://' + path.resolve('headline-cards.html'));
  for (let i = 0; i < totalCards; i++) {
    await page.evaluate((idx) => window.renderCard(idx), i);
    await page.screenshot({ path: `card_${i}.png` });
  }
  await browser.close();
})();
```

## File Organization

```
project/
├── assets/
│   ├── README.md           # Manifest: every clip's source URL + license
│   ├── .gitignore          # Exclude large video files
│   ├── *.mp4               # Source clips (on Google Drive, not git)
│   ├── trimmed/            # Trimmed clips
│   ├── keyframes/          # Extracted keyframes for review
│   ├── headline-pngs/      # Rendered headline card PNGs
│   ├── headline-clips/     # Ken Burns zoomed headline clips
│   ├── output/             # Final montage outputs (small ones in git)
│   ├── download-clips.sh   # Reproducible download script
│   └── concat_v*.txt       # ffmpeg concat lists per version
├── scratchpad/
│   ├── keyframe-analysis-v1.md
│   ├── video-montage-script-v*.md
│   └── research-hero-videos-v*.md
└── public/videos/          # Deployed videos (copied from output/)
```

## Version Management

- Keep ALL versions: v1, v2, v2b, v3, v4, v5
- Name convention: `hero-montage-v{N}.mp4`
- Document each version's changes in commit messages
- Zip large source clips for Google Drive backup: `zip -r assets-backup-$(date +%Y%m%d).zip assets/`
- Small outputs (<10MB) can be committed to git for reference
