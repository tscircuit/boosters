# BOOSTXL-CC2650MA tscircuit reconstruction

This directory reconstructs Texas Instruments' BOOSTXL-CC2650MA CC2650 module BoosterPack in tscircuit. The electrical design follows the Rev 1.0.1 schematic and expanded Allegro netlist in TI's official SWRC324 design package.

The board includes the CC2650MODA Bluetooth Low Energy module, dual 20-pin LaunchPad BoosterPack headers, 10-pin JTAG header, removable current-measurement link, DIO2/DIO4 status LEDs, optional signal-routing resistors, and the unpopulated external-flash option.

## Reference-design fidelity

- Exact 75.3 mm x 28 mm, 1.6 mm, two-layer board geometry from TI's mechanical drawing.
- Original component centroids and rotations from `place_txt.txt`, translated to a board-centered coordinate system.
- 0.15 mm minimum trace/space, 0.2 mm via drills, 1.05 mm connector drills, red solder mask, and top/bottom ground pours.
- Antenna copper keepout at the CC2650MODA module's left edge.
- Exact imported CC2650MODAMOH, FTSH-105-01-F-DV-K, and MX25R8035FZUIL0 footprints. The SSQ-110-23-L-D LaunchPad socket footprint uses TI's drill and pad dimensions.
- All TI DNM options are present as `doNotPlace`: R7, R8, R10-R12, R16, R18, R19, R21-R27, and U3. The M1 shunt is supplied loose and installs across P2.
- TP1-TP3 correspond to TI's MH1-MH3 plated test points.

The TI placements are intentionally tighter than generic library courtyard estimates, so placement DRC is disabled at board scope while electrical routing DRC and short detection remain enabled.

## Checks

```sh
bun install
bun run typecheck
bunx tsci build boostxl-cc2650ma/index.circuit.tsx --autorouter-timeout 600s --disable-parts-engine
bunx tsci check shorts boostxl-cc2650ma/index.circuit.tsx --mode gerber --layer all
```

Passing these automated checks establishes internal consistency and absence of detected copper shorts. It does not replace RF review, prototype assembly, regulatory review, or bench testing before production.

## Sources

- TI product page: <https://www.ti.com/tool/BOOSTXL-CC2650MA>
- TI design package: <https://www.ti.com/lit/zip/swrc324>
- TI getting started guide: <https://www.ti.com/lit/ug/swru486a/swru486a.pdf>
