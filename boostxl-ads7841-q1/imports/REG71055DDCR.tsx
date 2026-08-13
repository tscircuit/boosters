import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VOUT"],
  pin2: ["GND"],
  pin3: ["Enable"],
  pin4: ["CPUMP_NEG"],
  pin5: ["VIN"],
  pin6: ["CPUMP_POS"]
} as const

export const REG71055DDCR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2071120"
  ]
}}
      manufacturerPartNumber="REG71055IDDCRQ1"
      footprint="dfn6_p0.95mm_w3.2mm_pw0.532mm_pl0.8mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2071120.obj",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2071120.step",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: -0.0001269999999067295, y: -0.000012699999956566899, z: 0.050795 },
      }}
      {...props}
    />
  )
}
