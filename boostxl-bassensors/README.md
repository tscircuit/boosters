# BOOSTXL-BASSENSORS building-automation sensor BoosterPack

Native tscircuit reconstruction of Texas Instruments' BOOSTXL-BASSENSORS Building Automation Sensors BoosterPack.

Five schematic sheets cover the LaunchPad interface, TMP116 temperature sensor and breakaway coupon, DRV5055 Hall-effect sensor, HDC2010 humidity sensor, and OPT3001 ambient-light sensor. The PCB preserves the local outline, placement, routing, mounting holes, perforation slots, silkscreen, and bottom ground pour.

This directory follows the source-only layout used by the other boards in this repository: the circuit entrypoint, TypeScript component imports, documentation, and canonical snapshots are tracked. Gerbers, downloaded reference files, caches, dependencies, scripts, build output, and local STEP/OBJ models are intentionally excluded.

## Checks

Run from the repository root:

```sh
bun run typecheck
bunx tsci check shorts boostxl-bassensors/index.circuit.tsx --mode pcb --layer top
bunx tsci check shorts boostxl-bassensors/index.circuit.tsx --mode pcb --layer bottom
bunx tsci snapshot boostxl-bassensors/index.circuit.tsx --3d --disable-parts-engine
```

## Source authority and release status

- Electrical connectivity and values follow TI user guide SLAU762B, Figure 5-1.
- The local reconstruction's board outline, placement, routing, mounting details, six breakaway slots, and CAD transforms are preserved.
- The breakaway mechanics remain provisional pending final comparison with TI design archive SLAC777.
- Passing automated checks proves internal consistency and absence of detected copper shorts; it does not replace fabrication review, connector-fit checks, or bench validation.

Official product page: <https://www.ti.com/tool/BOOSTXL-BASSENSORS>

Official user guide: <https://www.ti.com/lit/ug/slau762b/slau762b.pdf>

Official design archive: <https://www.ti.com/lit/zip/slac777>
