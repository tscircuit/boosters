import { test } from "bun:test"
import BoostxlEdumkii from "../boostxl-edumkii/index.circuit"
import { expectBoardExcludes } from "./expect-board-excludes"

test(
  "BOOSTXL-EDUMKII renders without excluded optional subsystems",
  async () => {
    await expectBoardExcludes({
      board: (
        <BoostxlEdumkii
          excludeTftDisplay
          excludeControls
          excludeSensorSuite
          excludeMicrophone
          excludeRgbLedAndBuzzer
          excludeServoAndClipExpansion
          excludePowerIndicators
        />
      ),
      excludedElementNames: [
        "DisplaySchematic",
        "ControlsSchematic",
        "SensorsSchematic",
        "AudioSchematic",
        "OutputsSchematic",
        "ExpansionSchematic",
        "PowerSchematic",
      ],
      excludedText: [
        "SPI TFT Display",
        "Joystick & Buttons",
        "Environmental & Motion Sensors",
        "Microphone Front End",
        "RGB LED & Buzzer Drivers",
        "Servo & Clip Expansion",
        "Power Indicators",
      ],
    })
  },
  120_000,
)
