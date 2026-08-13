import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VCCA"],
  pin2: ["A1"],
  pin3: ["A2"],
  pin4: ["GND"],
  pin5: ["DIR"],
  pin6: ["B2"],
  pin7: ["B1"],
  pin8: ["VCCB"]
} as const

export const SN74LVC2T45QDCURQ1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2652936"
  ]
}}
      manufacturerPartNumber="SN74LVC2T45QDCURQ1"
      footprint="dfn8_pillpads_p0.5001mm_w3.7102mm_pw0.28mm_pl0.905mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2652936.obj",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2652936.step",
        pcbRotationOffset: 270,
        modelOriginPosition: { x: -0.000038099999983387534, y: 0, z: -0.535 },
      }}
      {...props}
    />
  )
}
