import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["OUT"],
  pin2: ["FB"],
  pin3: ["GND"],
  pin4: ["EN"],
  pin5: ["NR"],
  pin6: ["IN"],
  pin7: ["EP", "GND"]
} as const

const footprinterPinLabels = {
  ...pinLabels,
  "pin7": [...pinLabels["pin7"], "thermalpad"],
} as const

export const TPS79901DRVR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={footprinterPinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C398922"
  ]
}}
      manufacturerPartNumber="TPS79901QDRVRQ1"
      footprint="dfn6_thermalpad1mmx1.6mm_p0.65mm_w2.4002mm_pw0.4mm_pl0.45mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C398922.obj",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C398922.step",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: -0.000012700000013410317, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
