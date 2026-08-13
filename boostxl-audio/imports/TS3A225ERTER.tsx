import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["SCL"],
  pin2: ["SDA"],
  pin3: ["GND2"],
  pin4: ["ADDR_SEL"],
  pin5: ["DET_TRIGGER"],
  pin6: ["SLEEVE"],
  pin7: ["RING2"],
  pin8: ["MIC_PRESENT"],
  pin9: ["TIP_SENSE"],
  pin10: ["GND1"],
  pin11: ["MICP"],
  pin12: ["MICN"],
  pin13: ["VDD2"],
  pin14: ["RING2_SENSE"],
  pin15: ["SLEEVE_SENSE"],
  pin16: ["VDD1"],
  pin17: ["EP"]
} as const

const footprinterPinLabels = {
  ...pinLabels,
  "pin17": [...pinLabels["pin17"], "thermalpad"],
} as const

export const TS3A225ERTER = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={footprinterPinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C544327"
  ]
}}
      manufacturerPartNumber="TS3A225ERTER"
      footprint="qfn16_thermalpad1.7mmx1.7mm_p0.4999mm_pw0.28mm_pl0.8mm"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C544327.obj?uuid=8f6bcfe84b5f47c1b11eda1233a27108",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C544327.step?uuid=8f6bcfe84b5f47c1b11eda1233a27108",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000025399999998398926, y: 0.000025399999998398926, z: -0.8 },
      }}
      {...props}
    />
  )
}