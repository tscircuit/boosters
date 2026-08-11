# TI BoosterPack boards

A multi-board tscircuit repository for BoosterPack-compatible expansion boards for Texas Instruments LaunchPad development kits.

## Boards

| Board | Description |
|---|---|
| [BOOSTXL-EDUMKII educational BoosterPack](./boostxl-edumkii/) | Display, environmental and motion sensors, joystick, buttons, audio, RGB LED, buzzer, servo, and LaunchPad XL headers |

Each BoosterPack lives in its own top-level directory with its circuit entrypoint, imported parts, mechanical model definitions/assets, and board-specific documentation. Shared deployment and TypeScript configuration remain at the repository root.

## Build

Prerequisites: Bun and a current Node.js runtime.

```sh
bun install
bun run typecheck
bun run build
```

The root build currently targets `boostxl-edumkii/index.circuit.tsx`. Additional BoosterPack directories can be added without mixing their circuit assets.
