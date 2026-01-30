# Framer Integration Guide

## Overview
This system is designed to be dropped into Framer as a Code Component. It uses a self-contained architecture.

## How to Install in Framer

1.  Open your Framer project.
2.  Create a new Code Component (Assets -> New -> Code).
3.  Name it `ImageGenerator`.
4.  Open the file `d:/Image Generator/src/FramerWrapper.tsx` from this project.
5.  **COPY** the entire content of `FramerWrapper.tsx`.
6.  **PASTE** it into your new Framer component, replacing everything.
    *   *Note: You might need to copy `logic` and `assets` folders if you want to keep the file split, BUT `FramerWrapper.tsx` imports from them. simpler approach:*
    *   **Recommendation:** For a truly single-file drop-in (if Framer requires it), you would bundle these. However, standard Code Components support imports if files are in the same project. 
    *   **Best Path:** Copy the `src` folder content to your Framer project's code directory.
    
    *   OR: Use the `FramerWrapper.tsx` logic as the template and paste the `engine.ts` logic into it if you need a single file.

## Strict Rules Enforced
- **Max 3 Colors:** The component will NEVER generate more than 3 colors.
- **Determinism:** Same property settings = Same exact SVG output.
- **Flat Design:** No shadows, no gradients.

## Troubleshooting
- If you see a "Red X" image, it means the selected combination is Invalid (blocked by rule engine). Change the inputs (e.g. some Frames might not go with some Bases if rules were tighter).
