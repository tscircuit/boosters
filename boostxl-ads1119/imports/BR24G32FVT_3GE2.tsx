import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["A0"],
  pin2: ["A1"],
  pin3: ["A2"],
  pin4: ["GND"],
  pin5: ["SDA"],
  pin6: ["SCL"],
  pin7: ["WP"],
  pin8: ["VCC"]
} as const

export const BR24G32FVT_3GE2 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2061284"
  ]
}}
      manufacturerPartNumber="BR24G32FVT_3GE2"
      footprint="dfn8_pillpads_p0.65mm_w7.3082mm_pw0.353mm_pl1.454mm_pin1location(leftside,bottom)"
      {...props}
    />
  )
}
