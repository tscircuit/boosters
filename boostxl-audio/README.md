# BOOSTXL-AUDIO audio BoosterPack

Native tscircuit reconstruction of Texas Instruments' BOOSTXL-AUDIO BoosterPack. The electrical design follows TI's official schematic and BOM; the PCB uses TI's exact 58.42 × 76.20 mm outline, recovered Altium component centers, and exact TI 0603 copper geometry.

All 72 fitted and DNP references, values, manufacturer parts, and functional nets are represented. Six schematic sheets cover the LaunchPad interface and signal selection, 14-bit DAC/PWM source, headset detection, analog routing switch, electret microphone preamplifier, and loudspeaker amplifier/output.

This directory follows the source-only layout used by the other boards in this repository: the circuit entrypoint, TypeScript component imports, documentation, and canonical snapshots are tracked. Generated manufacturing files, reference archives, caches, dependencies, scripts, and downloaded models are not stored here.

## Checks

Run from the repository root:

```sh
bun install
bun run typecheck
bun run build
bunx tsci check shorts boostxl-audio/index.circuit.tsx --mode gerber --layer all
bunx tsci snapshot boostxl-audio/index.circuit.tsx --3d --disable-parts-engine
```

## Source authority and release status

- Connectivity, population, values, and part identities follow TI's official BOOSTXL-AUDIO schematic and BOM.
- Board outline, placement anchors, pad geometry, and mounting orientation were recovered from TI's official Altium hardware archive.
- The design is suitable only for a small, current-limited first-article prototype order until connector fit, polarity, microphone/headset behavior, audio performance, and thermal behavior are verified on hardware.
- Passing automated checks proves internal consistency and absence of detected copper shorts; it does not replace fabrication review, acoustic testing, or bench validation.

Official product page: <https://www.ti.com/tool/BOOSTXL-AUDIO>
