# TI BoosterPack boards

A multi-board tscircuit repository for BoosterPack-compatible expansion boards for Texas Instruments LaunchPad development kits.

## Boards

| Board | Description |
|---|---|
| [BOOSTXL-EDUMKII educational BoosterPack](./boostxl-edumkii/) | Display, environmental and motion sensors, joystick, buttons, audio, RGB LED, buzzer, servo, and LaunchPad XL headers |
| [BOOST-DRV8848 dual brushed motor BoosterPack](./boost-drv8848/) | DRV8848 dual H-bridge motor stage, adjustable current regulation, parallel mode, external motor power, and LaunchPad headers |
| [BOOST-DRV8711 stepper motor BoosterPack](./boost-drv8711/) | DRV8711 pre-driver, four dual N-channel MOSFETs, 8-52 V motor supply, 1/256 microstepping, SPI control, and LaunchPad headers |
| [BOOSTXL-TLV8544PIR motion detector BoosterPack](./boostxl-tlv8544pir/) | Ultra-low-power PIR motion detector, quad nanopower amplifier signal chain, current monitoring, LEDs, and LaunchPad XL headers |
| [BOOSTXL-DRV8305EVM motor-drive BoosterPack](./boostxl-drv8305evm/) | Four-layer, six-MOSFET three-phase bridge with DRV8305 gate driver, current and voltage sensing, 3.3 V buck supply, and LaunchPad XL headers |
| [BOOSTXL-TMP107 temperature-sensor BoosterPack](./boostxl-tmp107/) | TMP107 daisy-chain temperature sensing, selectable UART transmit path, LaunchPad headers, and two breakaway sensor nodes |
| [BOOSTXL-BASSENSORS building-automation sensor BoosterPack](./boostxl-bassensors/) | TMP116 temperature, HDC2010 humidity, OPT3001 ambient-light, and DRV5055 Hall-effect sensing with a breakaway sensor coupon and LaunchPad XL headers |
| [BOOSTXL-CC2650MA wireless BoosterPack](./boostxl-cc2650ma/) | CC2650MODA Bluetooth Low Energy module, LaunchPad headers, JTAG, removable current-measurement link, status LEDs, and optional external flash |
| [BOOSTXL-AUDIO audio BoosterPack](./boostxl-audio/) | 14-bit DAC/PWM audio, headset detection and routing, electret microphone preamplifier, speaker amplifier, and LaunchPad XL headers |
| [BOOSTXL-ADS7841-Q1 data-acquisition BoosterPack](./boostxl-ads7841-q1/) | Four-channel ADS7841-Q1 conversion, precision input buffers and reference, SPI level translation, board-ID EEPROM, and LaunchPad XL headers |
| [BOOSTXL-ADS1119 data-acquisition BoosterPack](./boostxl-ads1119/) | 16-bit delta-sigma conversion, protected analog inputs, generated 5 V supply, board EEPROM, and LaunchPad XL headers |
| [BOOSTXL-ULN2003 dual stepper-motor BoosterPack](./boostxl-uln2003/) | ULN2003/ULN2803 motor outputs, serial and parallel control, mode switches, protection, LEDs, and LaunchPad XL headers |

Each BoosterPack lives in its own top-level directory with its circuit entrypoint, TypeScript component imports, and board-specific documentation. Shared deployment and TypeScript configuration remain at the repository root.

## Build

Prerequisites: Bun and a current Node.js runtime.

```sh
bun install
bun run typecheck
bun run build
```

The root build validates and routes all BoosterPack entrypoints. Run `bun run dev` to open the tscircuit development UI, then select the board you want to view or edit.
