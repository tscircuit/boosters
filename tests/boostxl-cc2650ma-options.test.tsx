import { test } from "bun:test"
import BoostxlCc2650ma from "../boostxl-cc2650ma/index.circuit"
import { expectBoardExcludes } from "./expect-board-excludes"

test(
  "BOOSTXL-CC2650MA renders without excluded optional circuitry",
  async () => {
    await expectBoardExcludes({
      board: (
        <BoostxlCc2650ma
          excludeDebugHeader
          excludeExternalFlash
          excludeRoutingOptions
          excludeStatusLeds
          excludeTestPoints
        />
      ),
      excludedElementNames: [
        "P20",
        "DNM_FLASH_OPTIONS",
        "C1",
        "DNM_RADIO_OPTIONS",
        "DNM_CURRENT_LINK",
        "R5",
        "CR1",
        "R6",
        "CR2",
        "TP1",
        "TP2",
        "TP3",
      ],
      excludedText: [
        "1.27 mm JTAG Debug Header",
        "Optional MX25R8035F Flash (DNM)",
        "DIO2 Green and DIO4 Red Status LEDs",
        "Reference Test Points (TI MH1-MH3)",
      ],
    })
  },
  120_000,
)
