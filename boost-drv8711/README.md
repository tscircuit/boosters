# BOOST-DRV8711 Stepper Motor BoosterPack

A two-layer tscircuit implementation of Texas Instruments' BOOST-DRV8711 BoosterPack. The board follows TI's published hardware design and combines the DRV8711 stepper-motor pre-driver with four CSD88537ND dual N-channel MOSFETs.

## Board overview

- 50.8 mm x 44.45 mm PCB, 1.6 mm thick, with red solder mask and white silkscreen
- DRV8711DCPR bipolar stepper-motor gate driver (`U1`)
- Four CSD88537ND dual N-channel MOSFETs (`Q1`-`Q4`)
- 8 V to 52 V external motor supply through `J5`
- Up to 4.5 A continuous output from each H-bridge, subject to TI's thermal and operating limits
- Bipolar stepper-motor outputs through four-position terminal block `J6`
- Built-in 1/256-step microstepping indexer and SPI configuration interface
- 50 mOhm current-sense resistors `R1` and `R2`
- 100 kOhm potentiometer `R6` for the analog reference input
- `nSTALL` and `nFAULT` indicator LEDs
- Two bottom-mounted 1x10 LaunchPad headers

The BoosterPack is not a standalone controller. It requires a compatible LaunchPad or another controller for its logic signals and a separate motor supply connected to `J5`.

## LaunchPad signal assignment

| Header pin | Signal | Function |
|---|---|---|
| J1.1 | 3.3V | Logic and indicator supply |
| J1.2 | VREF | Potentiometer reference output |
| J1.6 | nSLEEP | Active-low sleep input |
| J1.7 | SCLK | SPI clock |
| J1.8 | RESET | Indexer reset input |
| J1.9 | STEP / AIN1 | Step input or bridge-A input 1 |
| J1.10 | DIR / AIN2 | Direction input or bridge-A input 2 |
| J2.1 | GND | Logic ground |
| J2.2 | nSTALL | Active-low stall indication |
| J2.3 | nFAULT | Active-low fault indication |
| J2.6 | SDATI | SPI data input |
| J2.7 | SDATO | SPI data output |
| J2.8 | BIN1 | Bridge-B input 1 |
| J2.9 | BIN2 | Bridge-B input 2 |
| J2.10 | SCS | SPI chip select |

Pins not listed in the table are intentionally left unconnected.

## Layout and routing

The board outline, component coordinates, connector orientation, netlist, and copper regions were translated from TI's supplied schematic, PCB, assembly, BOM, Altium, Gerber, and ODB++ design files. The DRV8711 exposed pad includes its documented thermal-via array.

Signal, gate-drive, current-sense, and output connecting traces use 0.254 mm (10 mil) widths. The main motor-supply, ground, and 3.3 V connections use 0.508 mm (20 mil) widths. Explicit top and bottom ground pours, motor-output regions, current-sense ground regions, and VM copper regions reproduce the functional copper distribution of the TI board.

Routing remains enabled in the normal build. The design does not use routing-disable flags or committed OBJ/STEP assets. Package-specific components are imported from JLCPCB, and their CAD models load through the component records.

The schematic is split into two sheets:

1. Power stage
2. Controller and interface

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

Select `boost-drv8711/index.circuit.tsx` in the development UI. Generated circuit JSON and preview assets are written under `dist/boost-drv8711/index/`.

## Operating notes

- Keep the motor supply between 8 V and 52 V and size it for the connected motor load.
- Connect motor power only to `J5`; the LaunchPad supplies control signals, not motor power.
- Verify the configured current regulation, decay mode, gate-drive settings, and microstepping mode before enabling the bridge.
- The MOSFETs, driver, current-sense resistors, and copper can become hot at high current. Observe TI's electrical and thermal limits.
- Verify connector orientation, motor wiring, supply polarity, footprints, and fabrication outputs before fabrication or power-up.

## References

- [TI BOOST-DRV8711 product page](https://www.ti.com/tool/BOOST-DRV8711)
- [BOOST-DRV8711 user's guide (SLVU967A)](https://www.ti.com/lit/pdf/slvu967)
- [BOOST-DRV8711 hardware and software files (SLVC575)](https://www.ti.com/tool/download/SLVC575)
- [DRV8711 datasheet](https://www.ti.com/lit/ds/symlink/drv8711.pdf)

TI's published electrical design, board dimensions, component placement, connector mapping, and copper layout were used as the implementation reference. TI trademarks remain the property of Texas Instruments.
