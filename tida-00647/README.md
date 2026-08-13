# TIDA-00647 ADS1220 RTD BoosterPack

A two-layer tscircuit implementation of Texas Instruments' TIDA-00647 reference design. The board uses the ADS1220 24-bit delta-sigma ADC to connect two-, three-, or four-wire resistance temperature detectors to a compatible LaunchPad through SPI.

## Board overview

- 58.42 mm x 28.702 mm PCB, 1.6 mm thick, with green solder mask and white silkscreen
- ADS1220IRVAR 24-bit delta-sigma ADC (`U1`)
- Four-position 3.5 mm RTD terminal block (`J2`)
- Two-pin configuration headers `J3` and `J4` for two- and three-wire RTD connections
- Precision 4.22 kOhm and 3.24 kOhm reference network
- Differential input filtering and Schottky protection for the analog inputs
- 3.3 V operation with SPI clock, MOSI, MISO, chip-select, and data-ready connections
- Two physical 2x10 BoosterPack connectors matching TI's combined 40-pin `J1` footprint, with male pins above the PCB and female socket housings below it

The board requires a compatible LaunchPad or another SPI controller. It is an acquisition front end, not a standalone temperature display or controller.

## RTD connections

TI's configuration uses the four-position `J2` terminal and the two configuration headers as follows:

| RTD type | J2 connections | Header configuration |
|---|---|---|
| Two wire | Pins 2 and 3 | Close `J3` and `J4` |
| Three wire | Pins 1, 2, and 3 | Close `J4` |
| Four wire | Pins 1, 2, 3, and 4 | Leave `J3` and `J4` open |

Verify the sensor wiring against TI's design guide before applying power or collecting measurements.

## Layout and routing

The board outline, fitted parts, connectivity, component origins, rotations, routing rules, and copper construction were translated from TI's native `ADS1220_RTD_BP` Altium project. Specialized parts use imported component records with remote CAD models; no downloaded OBJ or STEP assets are stored in this repository.

Signal and analog connections use TI's 0.254 mm (10 mil) routing width. The principal 3.3 V distribution uses 0.508 mm (20 mil) routing. Autorouted vias use the source design's 0.8636 mm pad and 0.4064 mm drill dimensions. The design includes the source board's solid bottom-layer GND pour with 0.254 mm copper clearance and 0.635 mm board-edge margin.

Routing remains enabled in the normal build. Small placement corrections around the ADS1220, terminal block, configuration headers, and nearby passives provide clearance for the imported component courtyards while retaining the TI topology and board dimensions.

The schematic is split into two sheets:

1. ADC and LaunchPad interface
2. RTD analog front end

## Build

Run these commands from the repository root:

```sh
bun install
bun run typecheck
bun run build
```

For an interactive editor session:

```sh
bun run dev
```

Select `tida-00647/index.circuit.tsx` in the development UI. Generated circuit JSON and preview assets are written under `dist/tida-00647/index/`.

## Validation and operating notes

- The routed design builds with 52 PCB traces, no jumpers, and no reported circuit errors.
- Confirm connector orientation, terminal numbering, footprints, RTD wiring, and fabrication outputs before ordering boards.
- Use precision RTD wiring and observe the ADS1220 input, reference, and supply limits from the datasheet.
- Automated checks establish internal consistency; they do not replace fabrication review, analog performance analysis, or bench validation.

## References

- [TI TIDA-00647 product page](https://www.ti.com/tool/TIDA-00647)
- [TIDA-00647 design guide (TIDUAH3A)](https://www.ti.com/lit/pdf/tiduah3)
- [TIDA-00647 native CAD source (TIDRGY5)](https://www.ti.com/lit/df/tidrgy5/tidrgy5.zip)
- [ADS1220 datasheet](https://www.ti.com/lit/ds/symlink/ads1220.pdf)

TI's published electrical design, board dimensions, component placement, connector mapping, and copper rules were used as the implementation authority. TI trademarks remain the property of Texas Instruments.
