#!/bin/bash
# Download alle MuscleWiki video's voor Tim's app
# Run vanuit de FItnessAppTim map: bash download-videos.sh

mkdir -p videos
cd videos

echo "Downloaden Tim's video's..."

# Nieuwe oefeningen
curl -L -o superman.mp4 "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-superman-front.mp4"
curl -L -o back-extension.mp4 "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-back-extension-side.mp4"

# Stretches
curl -L -o hip-flexor.mp4 "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-hip-flexor-stretch-kneeling-lunge-3-front.mp4"
curl -L -o rug-stretch.mp4 "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-child-pose-arms-extended-front.mp4"
curl -L -o glutes.mp4 "https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-supine-figure-4-stretch-front.mp4"
curl -L -o hamstrings.mp4 "https://media.musclewiki.com/media/uploads/videos/branded/male-hamstrings-stretch-variation-1-side.mp4"
curl -L -o quads.mp4 "https://media.musclewiki.com/media/uploads/videos/branded/male-quads-stretch-variation-1-side.mp4"
curl -L -o chest-doorway.mp4 "https://media.musclewiki.com/media/uploads/videos/branded/male-chest-stretch-variation-1-side.mp4"

echo ""
echo "Klaar! Gedownloade bestanden:"
ls -lh *.mp4
