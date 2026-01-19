# Safari Optimization & Jitter Fix Report

## What was the issue?
While auditing the UI on Safari (macOS), I noticed a slight but distracting "jitter" on the Register button and mobile nav icons. During hover transitions, the icons were shifting about 1-2 pixels. While it looked perfect on Brave/Chrome, Safari’s WebKit engine was struggling to keep the alignment stable during the animation.

## Why was it happening?
* **Transition: all**: Using a broad `all` transition was forcing Safari to re-calculate font-rendering and layout on every single frame, leading to those micro-shifts.
* **CPU Rendering**: By default, Safari often handles small transforms on the CPU. Without explicit hardware acceleration, sub-pixel rendering can get messy, causing that "shaky" look.

## How I fixed it
I applied a few "pixel-perfect" industry standards to stabilize the UI:
1. **Specific Transitions**: Swapped `transition: all` for targeted properties like `transform` and `box-shadow`. This keeps the browser focused on only what’s changing.
2. **GPU Acceleration**: I used the `transform: translateZ(0)` trick to force Safari to use the GPU (Hardware Acceleration). This is the most reliable way to kill jitter in WebKit.
3. **Rendering Stability**: Added `-webkit-font-smoothing: antialiased` and `backface-visibility: hidden` to make sure the icons stay rock-solid during any interaction.

## The Result
* **Safari:** The interaction is now buttery smooth. No more shifts or shakes.
* **Brave/Chrome:** Still works perfectly with no regressions.

Everything feels much more premium and stable now.