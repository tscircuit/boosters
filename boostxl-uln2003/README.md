# BOOSTXL-ULN2003 dual stepper-motor BoosterPack

Native tscircuit reconstruction of Texas Instruments' BOOSTXL-ULN2003 BoosterPack. The electrical design follows the official SLCU002 schematic and includes the fitted ULN2003 driver path, eighth CSD17571Q2 output, serial/parallel control, mode switches, status LEDs, motor connectors, supply protection, and DNP alternatives.

The design is organized into four schematic sheets: LaunchPad and mode selection, serial and parallel control, motor drivers and outputs, and motor supply and protection. The PCB uses four copper layers, explicit 0.50 mm motor-output routes, 0.30/0.45 mm via limits, and a bottom AGND copper pour.

This directory follows the source-only layout used by the other boards in this repository: the circuit entrypoint, TypeScript component imports, documentation, and canonical snapshots are tracked. Generated manufacturing files, caches, dependencies, and downloaded model assets are not stored here.

## Checks

Run from the repository root:

```sh
bun install
bun run typecheck
bun run build
bunx tsci check shorts boostxl-uln2003/index.circuit.tsx --mode pcb --layer top --pixels-per-mm 20
bunx tsci check shorts boostxl-uln2003/index.circuit.tsx --mode pcb --layer bottom --pixels-per-mm 10
bunx tsci snapshot boostxl-uln2003/index.circuit.tsx --3d --disable-parts-engine
```

## Source authority and release status

- Electrical connectivity, values, DNP choices, and switch mapping follow TI's BOOSTXL-ULN2003 user guide, SLCU002, especially Figure 26.
- Board placement and routing are reconstructed from the published board reference; TI's editable production archive is not available in this project.
- The design is suitable only for a small, current-limited first-article prototype order until physical fit, polarity, thermal behavior, flyback transients, and motor-load operation have been verified on the bench.
- Passing automated checks proves internal consistency and absence of detected copper shorts; it does not replace fabrication review or hardware validation.

Official reference: <https://www.ti.com/lit/ug/slcu002/slcu002.pdf>
