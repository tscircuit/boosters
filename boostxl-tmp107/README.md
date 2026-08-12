# BOOSTXL-TMP107 tscircuit reconstruction

This project reconstructs the Texas Instruments BOOSTXL-TMP107 BoosterPack in tscircuit. The electrical design follows TI's MHR035 Rev A schematic in the official BOOSTXL-TMP107 user guide. The board includes the LaunchPad headers, selectable UART transmit path, main TMP107, and two breakaway TMP107 sensor nodes.

The complete board is authored directly in `index.circuit.tsx`. Non-passive populated parts are local JLCPCB imports; resistors and capacitors use native tscircuit components with explicit manufacturer and JLCPCB part numbers.

This BoosterPack directory follows the source-only layout used by the other boards in this repository: the circuit entrypoint, TypeScript component imports, and canonical snapshots are tracked, while generated build/manufacturing outputs and downloaded model files are not.

## Checks

```sh
bun install
bun run typecheck
bun run build
bunx tsci check shorts boostxl-tmp107/index.circuit.tsx --mode gerber --layer all
bunx tsci snapshot boostxl-tmp107/index.circuit.tsx --3d --disable-parts-engine
```

## Source authority and current limits

- Electrical values, part numbers, pin connections, and UART mode selection come from TI's official schematic.
- The board dimensions, header placement, and breakaway layout are reconstructed from TI's board photography and the standard 2.54 mm BoosterPack grid.
- TI currently exposes the user guide and firmware on the product page, but not the original editable CAD/Gerber package. Therefore this project is a faithful reconstruction, not a byte-for-byte copy of TI's PCB files.
- Passing the automated checks proves internal consistency and absence of detected copper shorts. It does not replace a prototype assembly and bench test before production quantity.
- Original engineering source: <https://github.com/Abse2001/boostxl-tmp107>
