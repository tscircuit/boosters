import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["NC"],
  pin2: ["A"],
  pin3: ["GND"],
  pin4: ["Y"],
  pin5: ["VCC"],
} as const

export const SN74LVC1G07DBVR = (props: ChipProps<typeof pinLabels>) => (
  <chip
    pinLabels={pinLabels}
    supplierPartNumbers={{ jlcpcb: ["C7829"] }}
    manufacturerPartNumber="SN74LVC1G07DBVR"
    footprint="dfn6_missing(5)_p0.95mm_w3.7002mm_pl1.1mm_pin1location(rightside,bottom)"
    cadModel={{
      objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C7829.obj?uuid=460193f9bf2d42e58cf3c2f675b07dc6",
      stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C7829.step?uuid=460193f9bf2d42e58cf3c2f675b07dc6",
      pcbRotationOffset: 180,
      modelOriginPosition: { x: 0, y: -0.0000127, z: -0.049083 },
    }}
    {...props}
  />
)
