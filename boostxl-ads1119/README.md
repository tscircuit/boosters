# BOOSTXL-ADS1119 data-acquisition BoosterPack

Native tscircuit reconstruction of Texas Instruments' BOOSTXL-ADS1119 16-bit analog-to-digital converter BoosterPack. The circuit, fitted parts, four DNP references, values, and functional connections follow TI user guide SBAU322 and its Figure 27 schematic.

Four schematic sheets cover the analog input and ADS1119 ADC, LaunchPad interface, power-supply generation, and EEPROM memory. The PCB preserves the local board outline, placement, routing, mounting details, and design rules.

This directory follows the source-only layout used by the other boards in this repository: the circuit entrypoint, TypeScript component imports, documentation, and canonical snapshots are tracked. Generated manufacturing files, reference archives, caches, dependencies, scripts, and downloaded models are not stored here.

## Checks

Run from the repository root:

```sh
bun install
bun run typecheck
bun run build
bunx tsci check shorts boostxl-ads1119/index.circuit.tsx --mode gerber --layer all
bunx tsci snapshot boostxl-ads1119/index.circuit.tsx --3d --disable-parts-engine
```

## Source authority and release status

- Connectivity, population, values, and part identities follow TI's official BOOSTXL-ADS1119 schematic and BOM.
- The local reconstruction's board outline, placement, routing, mounting details, and DNP state are preserved.
- The design is suitable only for a small, current-limited first-article prototype order until connector fit, ADC performance, power behavior, and EEPROM/LaunchPad communication are verified on hardware.
- Passing automated checks proves internal consistency and absence of detected copper shorts; it does not replace fabrication review or bench validation.

Official product page: <https://www.ti.com/tool/BOOSTXL-ADS1119>

Official user guide: <https://www.ti.com/lit/ug/sbau322/sbau322.pdf>
