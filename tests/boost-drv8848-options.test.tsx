import { test } from "bun:test"
import BoostDrv8848 from "../boost-drv8848/index.circuit"
import { expectBoardExcludes } from "./expect-board-excludes"

test(
  "BOOST-DRV8848 renders without either optional indicator",
  async () => {
    await expectBoardExcludes({
      board: <BoostDrv8848 excludeFaultIndicator excludeMotorPowerIndicator />,
      excludedElementNames: ["D1", "R2", "D2", "R6"],
    })
  },
  120_000,
)
