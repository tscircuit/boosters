# DRV8305 Three-Phase Motor-Drive BoosterPack

This project is a tscircuit reference implementation inspired by Texas Instruments' [BOOSTXL-DRV8305EVM](https://www.ti.com/tool/BOOSTXL-DRV8305EVM). It recreates the board's main electrical architecture and LaunchPad XL interface from TI's [BOOSTXL-DRV8305EVM User's Guide](https://www.ti.com/lit/pdf/SLVUAI8).

Public package: [imrishabh18/motor-drive-boosterpack](https://tscircuit.com/imrishabh18/motor-drive-boosterpack). The registry release uses the downloaded JLCSearch OBJ assets for its interactive 3D view.

## What is included

- 90 mm × 75 mm, four-layer BoosterPack-style PCB
- DRV8305N three-phase gate driver
- Six CSD18540Q5B N-channel MOSFETs arranged as three half-bridges
- Three 7 mΩ low-side current shunts with filtered current-sense outputs
- Phase A/B/C and PVDD resistor-divider voltage sensing
- LMR16006-based 3.3 V buck supply
- 4.4–45 V input and three-phase motor terminal blocks
- Dual 2×10 LaunchPad XL headers
- Fault and power LEDs, bulk input capacitance, charge-pump capacitors, ground pours, two lower mounting holes, and silkscreen labels
- Package-specific component courtyards with placement DRC enabled and a courtyard-clean PCB layout
- 0.45 mm minimum via-pad diameter and 0.30 mm minimum via-hole diameter
- Phased autorouting for power, SPI, control, voltage-sense, current-sense, and logic nets
- Explicit short GND escapes into an `inner1` ground plane, plus top and bottom ground pours
- Bulk capacitors at the outer side edges and J3/J4 terminal openings facing the outer top edge

The visible power and interconnect parts below were imported with `tsci import --jlcpcb --download`. The JLCSearch OBJ assets used by the circuit are stored under `imports/` and attached directly to the proven logical footprints, so the 3D view does not depend on missing model-cache entries. Redundant STEP assets are intentionally omitted from this repository.

| Reference | Part | JLCPCB/LCSC |
| --- | --- | --- |
| U1 | DRV8305NPHPR | C75602 |
| Q1–Q6 | CSD18540Q5B | C86513 |
| U2 | LMR16006XDDCR | C87080 |
| R4–R6 | HoLLR2512-3W-7mR-1% shunt | C2985710 |
| L1 | SMNR8040-150MT, 15 µH | C467156 |
| J1–J2 | PM254-2-10-Z-8.5 socket | C2897411 |
| J3 | WJ500V-5.08-2P terminal | C8465 |
| J4 | WJ500V-5.08-03P terminal | C72334 |

## LaunchPad XL mapping

The header mapping follows the TI reference schematic.

| J1 pin | Signal | J2 pin | Signal |
| ---: | --- | ---: | --- |
| 2 | 3.3 V | 2 | INH_A |
| 5 | VSEN_A | 3 | SCS |
| 6 | nFAULT | 4 | INL_A |
| 7 | VSEN_B | 6 | INH_B |
| 9 | VSEN_C | 7 | GND |
| 11 | VSEN_PVDD | 8 | INL_B |
| 13 | GND | 9 | PWRGD |
| 14 | SCLK | 10 | INH_C |
| 15 | ISEN_A | 11 | SDI |
| 17 | ISEN_B | 12 | INL_C |
| 19 | ISEN_C | 13 | SDO |
|  |  | 15 | EN_GATE |
|  |  | 17 | WAKE |

Unlisted pins are intentionally left unconnected.

## Build and inspect

From the repository root:

```sh
bun install
bun run typecheck
bun run build
bun run dev
```

Select `motor-drive-boosterpack/index.circuit.tsx` in the development UI. Generated circuit JSON and preview assets are written under `dist/motor-drive-boosterpack/index/`.

Routing is enabled. The validated layout routes 155 traces without autorouting errors. Ground pads use explicit short escapes into an `inner1` plane to avoid an unnecessarily congested driver fanout boundary.

## Engineering status and safety

This is a functional reference translation, not a production-ready fabrication release. The design was reconstructed from the published TI schematic and user guide; TI's original CAD archive was not imported. Before fabrication or operation, a qualified power-electronics engineer should review at least:

- MOSFET/shunt thermal performance, copper weight, via arrays, and heatsinking
- high-current copper geometry and connector current ratings
- Kelvin routing for all current-shunt sense pairs
- gate-loop length, switching-node copper, dead time, and EMI behavior
- creepage, clearance, transient protection, reverse-polarity protection, and fusing
- component voltage/current derating and the exact BOM/footprints
- LaunchPad mechanical fit and header orientation
- connectivity, Gerbers, drill files, BOM, and pick-and-place outputs

Do not connect a motor or high-current supply until the board has passed independent design review, current-limited bench bring-up, and appropriate safety testing. The nominal 15 A continuous / 20 A peak figures describe the TI reference platform, not a verified rating for this reconstruction.
