import { test } from "bun:test"
import BoostxlBassensors from "../boostxl-bassensors/index.circuit"
import { expectBoardExcludes } from "./expect-board-excludes"

test(
  "BOOSTXL-BASSENSORS renders full and minimal configurations",
  async () => {
    await expectBoardExcludes({
      board: <BoostxlBassensors />,
      excludedElementNames: [],
    })
    await expectBoardExcludes({
      board: (
        <BoostxlBassensors
          excludeTemperatureSensor
          excludeHallSensor
          excludeHumiditySensor
          excludeAmbientLightSensor
        />
      ),
      excludedElementNames: [
        "TMP116_CONNECTOR_BLOCK",
        "TMP116_SENSOR_COUPON_BLOCK",
        "DRV5055_BLOCK",
        "HDC2010_BLOCK",
        "OPT3001_BLOCK",
      ],
    })
  },
  120_000,
)
