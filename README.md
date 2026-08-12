# TI BoosterPack boards

A multi-board tscircuit repository for BoosterPack-compatible expansion boards for Texas Instruments LaunchPad development kits.

## Boards

| Board | Description |
|---|---|
| [BOOSTXL-EDUMKII educational BoosterPack](./boostxl-edumkii/) | Display, environmental and motion sensors, joystick, buttons, audio, RGB LED, buzzer, servo, and LaunchPad XL headers |
| [BOOST-DRV8848 dual brushed motor BoosterPack](./boost-drv8848/) | DRV8848 dual H-bridge motor stage, adjustable current regulation, parallel mode, external motor power, and LaunchPad headers |
| [BOOSTXL-TLV8544PIR motion detector BoosterPack](./boostxl-tlv8544pir/) | Ultra-low-power PIR motion detector, quad nanopower amplifier signal chain, current monitoring, LEDs, and LaunchPad XL headers |
| [BOOSTXL-TMP107 temperature-sensor BoosterPack](./boostxl-tmp107/) | TMP107 daisy-chain temperature sensing, selectable UART transmit path, LaunchPad headers, and two breakaway sensor nodes |

Each BoosterPack lives in its own top-level directory with its circuit entrypoint, TypeScript component imports, and board-specific documentation. Shared deployment and TypeScript configuration remain at the repository root.

## Build

Prerequisites: Bun and a current Node.js runtime.

```sh
bun install
bun run typecheck
bun run build
```

The root build validates and routes all BoosterPack entrypoints. Run `bun run dev` to open the tscircuit development UI, then select the board you want to view or edit.
