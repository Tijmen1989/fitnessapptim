#!/bin/bash
# Download missende MuscleWiki video's voor Tim's app
# Run vanuit de FItnessAppTim map: bash download-videos.sh

mkdir -p videos
cd videos

# Functie: probeer meerdere URL-variaties, download de eerste die werkt
try_download() {
  local filename="$1"
  shift

  # Skip als bestand al goed is (> 1KB)
  if [ -f "$filename" ] && [ $(stat -f%z "$filename" 2>/dev/null || stat -c%s "$filename" 2>/dev/null) -gt 1000 ]; then
    echo "✓ $filename bestaat al ($(du -h "$filename" | cut -f1))"
    return 0
  fi

  echo "Downloaden $filename..."
  for url in "$@"; do
    # Probeer download, check of het een echte video is (> 1KB)
    curl -sL -o "$filename.tmp" "$url"
    local size=$(stat -f%z "$filename.tmp" 2>/dev/null || stat -c%s "$filename.tmp" 2>/dev/null)
    if [ "$size" -gt 1000 ]; then
      mv "$filename.tmp" "$filename"
      echo "  ✓ Gedownload! ($(du -h "$filename" | cut -f1))"
      return 0
    fi
  done
  rm -f "$filename.tmp"
  echo "  ✗ NIET GEVONDEN - download handmatig van musclewiki.com"
  return 1
}

echo "=== Tim's video's downloaden ==="
echo ""

# Superman - onderrug
try_download superman.mp4 \
  "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-superman-front.mp4" \
  "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-supermans-front.mp4" \
  "https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-superman-front.mp4" \
  "https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-supermans-front.mp4"

# Back extension
try_download back-extension.mp4 \
  "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-back-extension-side.mp4" \
  "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-back-extension-front.mp4" \
  "https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-back-extension-side.mp4" \
  "https://media.musclewiki.com/media/uploads/videos/branded/male-Machine-back-extension-side.mp4"

# Hip flexor stretch
try_download hip-flexor.mp4 \
  "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-hip-flexor-stretch-kneeling-lunge-3-front.mp4" \
  "https://media.musclewiki.com/media/uploads/videos/branded/male-hip-flexors-stretch-variation-1-side.mp4" \
  "https://media.musclewiki.com/media/uploads/videos/branded/male-quads-stretch-variation-2-side.mp4" \
  "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-hip-flexor-stretch-kneeling-lunge-front.mp4"

# Rug stretch (child pose)
try_download rug-stretch.mp4 \
  "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-child-pose-arms-extended-front.mp4" \
  "https://media.musclewiki.com/media/uploads/videos/branded/male-abdominals-stretch-variation-1-side.mp4" \
  "https://media.musclewiki.com/media/uploads/videos/branded/male-lower-back-stretch-variation-1-side.mp4" \
  "https://media.musclewiki.com/media/uploads/videos/branded/male-lowerback-stretch-variation-1-side.mp4"

# Glute stretch (figure 4)
try_download glutes.mp4 \
  "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-supine-figure-4-stretch-front.mp4" \
  "https://media.musclewiki.com/media/uploads/videos/branded/male-glutes-stretch-variation-1-side.mp4" \
  "https://media.musclewiki.com/media/uploads/videos/branded/male-glutes-stretch-variation-1-front.mp4"

# Cat-cow (heeft nog geen video)
try_download cat-cow.mp4 \
  "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-cat-cow-side.mp4" \
  "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-cat-cow-front.mp4" \
  "https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-cat-cow-side.mp4"

# Deze hoeven niet opnieuw (werken al):
# chest-press, incline-press, shoulder-press, dumbbell-row, dumbbell-pullover,
# bicep-curl, leg-ext, leg-curl, goblet-squat, glute-bridge, plank, dead-bug,
# bird-dog, hamstrings, quads, chest-doorway

echo ""
echo "=== Resultaat ==="
echo "Werkende video's (>1KB):"
find . -name "*.mp4" -size +1k -exec ls -lh {} \; 2>/dev/null | awk '{print "  ✓", $NF, $5}'
echo ""
echo "Kapotte/missende video's (<1KB):"
find . -name "*.mp4" ! -size +1k -exec ls -lh {} \; 2>/dev/null | awk '{print "  ✗", $NF, $5}'
echo ""
echo "Tip: voor missende video's, ga naar musclewiki.com, zoek de oefening,"
echo "rechtsklik op de video > 'Save video as' en sla op met de juiste naam."
