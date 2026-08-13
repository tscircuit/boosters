import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["DNC2"],
  pin2: ["VIN"],
  pin3: ["TEMP"],
  pin4: ["GND"],
  pin5: ["pin5"],
  pin6: ["VOUT"],
  pin7: ["NC"],
  pin8: ["DNC1"]
} as const

export const REF5045AQDRQ1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2872966"
  ]
}}
      manufacturerPartNumber="REF5045AQDRQ1"
      footprint="soic8_pillpads_w7.3604mm_pw0.5684mm_pl1.9502mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2872966.obj",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2872966.step",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000038099999983387534, y: -0.0001015999999935957, z: -0.86 },
      }}
      {...props}
    />
  )
}
