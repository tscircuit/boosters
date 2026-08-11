# BOOST-DRV8848 Dual Brushed Motor BoosterPack

A two-layer tscircuit implementation of Texas Instruments' BOOST-DRV8848 revision-A BoosterPack. The board follows TI's published hardware design and uses the DRV8848 dual H-bridge driver to control one or two brushed DC motors from a compatible LaunchPad.

## Board overview

- 50.8 mm x 44.45 mm PCB, 1.6 mm thick, with red solder mask and white silkscreen
- DRV8848PWPR dual H-bridge motor driver (`U1`)
- 4 V to 18 V external motor supply through `J5`
- Two brushed motor outputs through four-position terminal block `J6`
- 1 A RMS / 2 A peak output per H-bridge, subject to TI's thermal and operating limits
- `J3` jumper for parallel operation of both bridges with one motor
- 100 kOhm potentiometer `R1` for setting the current-limit reference voltage
- 0.25 Ohm current-sense resistors `R3` and `R4`
- `nFAULT` and motor-supply status LEDs
- Two bottom-mounted 2x10 LaunchPad headers, compatible with the outer-row MSP-EXP430G2 connection and 40-pin LaunchPad arrangement described by TI

The BoosterPack is not a standalone motor controller. It requires a compatible LaunchPad for control signals and a separate motor power supply connected to `J5`.

## LaunchPad signal assignment

| Header pin | Signal | Function |
|---|---|---|
| J1.1 | 3.3V | Logic supply for the fault indicator |
| J1.9 | VREF / POT | Current-limit reference routed through `R5` |
| J1.17 | BIN1 | Motor B control input 1 |
| J1.19 | BIN2 | Motor B control input 2 |
| J2.2 | GND | Ground |
| J2.4 | nSLEEP | Driver enable / sleep control |
| J2.6 | nFAULT | Active-low fault feedback |
| J2.16 | AIN1 | Motor A control input 1 |
| J2.18 | AIN2 | Motor A control input 2 |

## Layout and routing

Component placement, connector locations, silkscreen labels, and copper regions follow the TI revision-A hardware source. The motor supply and four H-bridge output traces use 0.762 mm (30 mil) widths. Signal traces use 0.254 mm (10 mil) widths. Dedicated bottom-layer `AISEN` and `BISEN` copper regions and top/bottom ground pours reproduce the corresponding TI copper areas.

Routing remains enabled in the normal build. The board does not use a routing-disable flag or committed OBJ/STEP assets. The DRV8848, potentiometer, and terminal blocks are imported JLCPCB components whose CAD models load from their component records; passives and LaunchPad headers use tscircuit's built-in elements and footprints.

The schematic is split into two sheets:

1. Driver and motor power
2. LaunchPad interface

## Build

Run these commands from the repository root:

```sh
bun install
bun run typecheck
bun run build:boost-drv8848
```

For an interactive editor session:

```sh
bun run dev:boost-drv8848
```

The build writes the routed Circuit JSON, PCB SVG, and schematic SVG under `dist/boost-drv8848/index/`.

## Operating notes

- Keep the motor supply between 4 V and 18 V and size it for the connected motor load.
- Connect motor power only to `J5`; the LaunchPad supplies control signals, not motor power.
- In parallel mode, install the jumper on `J3`, control both outputs through the B inputs, and parallel the corresponding outputs at `J6` as shown in the TI user guide.
- The driver and current-sense resistors can become hot at high current. Observe the DRV8848 thermal limits and TI's layout and operating guidance.
- Verify connector orientation, motor wiring, supply polarity, footprints, and the current-limit setting before fabrication or power-up.

## References

- [TI BOOST-DRV8848 product page](https://www.ti.com/tool/BOOST-DRV8848)
- [BOOST-DRV8848 user's guide (SLVUAE1)](https://www.ti.com/lit/pdf/slvuae1)
- [BOOST-DRV8848 hardware and software files (SLVC606)](https://www.ti.com/tool/download/SLVC606)
- [DRV8848 datasheet](https://www.ti.com/lit/ds/symlink/drv8848.pdf)

TI's published board dimensions, component placement, connector mapping, schematic, and copper layout were used as the implementation reference. TI trademarks remain the property of Texas Instruments.
