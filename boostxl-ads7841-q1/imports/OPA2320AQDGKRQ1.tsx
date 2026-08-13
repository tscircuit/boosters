import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["OUTA"],
  pin2: ["INA_NEG"],
  pin3: ["INA_POS"],
  pin4: ["V_NEG"],
  pin5: ["INB_POS"],
  pin6: ["INB_NEG"],
  pin7: ["OUTB"],
  pin8: ["V_POS"]
} as const

export const OPA2320AQDGKRQ1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C189188"
  ]
}}
      manufacturerPartNumber="OPA2320AQDGKRQ1"
      footprint="dfn8_pillpads_p0.65mm_w5.9241mm_pw0.364mm_pl1.662mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C189188.obj",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C189188.step",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: -0.000012700000070253736, y: 0, z: -0.149083 },
      }}
      {...props}
    />
  )
}
