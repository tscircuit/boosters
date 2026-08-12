import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["V_POS", "VCC"],
  pin2: ["R1"],
  pin3: ["IO1"],
  pin4: ["ALERT1"],
  pin5: ["GND"],
  pin6: ["ALERT2"],
  pin7: ["IO2"],
  pin8: ["R2"],
} as const

/**
 * Exact JLCPCB part C2870479. EasyEDA does not expose a symbol/model record for
 * this SKU, so the package model comes from pin-compatible C2870960. The
 * importer measured its SOIC-8 copper geometry at 100.00% IoU.
 */
export const TMP107BIDR = (props: ChipProps<typeof pinLabels>) => (
  <chip
    pinLabels={pinLabels}
    supplierPartNumbers={{ jlcpcb: ["C2870479"] }}
    manufacturerPartNumber="TMP107BIDR"
    footprint="soic8_pillpads_w6.9999mm_pw0.588mm_pl1.8mm_pin1location(leftside,bottom)"
    cadModel={{
      objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2870960.obj?uuid=ec3b9f9b31a74655be3e55848dbee9c1",
      stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2870960.step?uuid=ec3b9f9b31a74655be3e55848dbee9c1",
      pcbRotationOffset: 0,
      modelOriginPosition: { x: -0.0000127, y: 0, z: 0 },
    }}
    {...props}
  />
)
