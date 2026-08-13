# BOOSTXL-ADS7841-Q1 data-acquisition BoosterPack

Native tscircuit reconstruction of Texas Instruments' four-channel BOOSTXL-ADS7841-Q1 data-acquisition BoosterPack. The circuit, fitted and DNP parts, values, and functional connections follow TI user guide SNAU229 Figure 19 and its bill of materials.

Five schematic sheets cover the regulated power supplies, LaunchPad interface and board-ID EEPROM, SPI level translation, analog input buffers, and ADS7841-Q1 ADC with its precision voltage reference. The four-layer PCB includes the local placement, routing, mounting holes, and bottom ground pour.

This directory follows the source-only layout used by the other boards in this repository: the circuit entrypoint, TypeScript component imports, documentation, and canonical snapshots are tracked. Generated manufacturing files, reference archives, caches, dependencies, scripts, and downloaded models are not stored here.

## Checks

Run from the repository root:

```sh
bun install
bun run typecheck
bun run build
bunx tsci check shorts boostxl-ads7841-q1/index.circuit.tsx --mode pcb --layer top --pixels-per-mm 20
bunx tsci check shorts boostxl-ads7841-q1/index.circuit.tsx --mode pcb --layer bottom --pixels-per-mm 10
bunx tsci snapshot boostxl-ads7841-q1/index.circuit.tsx --3d --disable-parts-engine
```

## Source authority and release status

- Connectivity, population, values, and part identities follow TI's official BOOSTXL-ADS7841-Q1 schematic and BOM.
- The local reconstruction's board outline, placement, routing, and mounting details are preserved.
- REG71055DDCR and TPS79901DRVR are documented non-Q1-compatible substitutions for a first article.
- The design is suitable only for a small, current-limited first-article prototype order until connector fit, ADC accuracy, analog performance, and thermal behavior are verified on hardware.
- Passing automated checks proves internal consistency and absence of detected copper shorts; it does not replace fabrication review or bench validation.

Official product page: <https://www.ti.com/tool/BOOSTXL-ADS7841-Q1>

Official user guide: <https://www.ti.com/lit/ug/snau229/snau229.pdf>
