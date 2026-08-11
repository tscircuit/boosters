import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["nSLEEP", "NSLEEP"],
  pin2: ["AOUT1"],
  pin3: ["AISEN"],
  pin4: ["AOUT2"],
  pin5: ["BOUT2"],
  pin6: ["BISEN"],
  pin7: ["BOUT1"],
  pin8: ["nFAULT", "NFAULT"],
  pin9: ["BIN1"],
  pin10: ["BIN2"],
  pin11: ["VREF"],
  pin12: ["VM"],
  pin13: ["GND"],
  pin14: ["VINT"],
  pin15: ["AIN2"],
  pin16: ["AIN1"],
  pin17: ["PPAD", "PAD"]
} as const

const footprinterPinLabels = {
  ...pinLabels,
  "pin17": [...pinLabels["pin17"], "thermalpad"],
} as const

export const DRV8848PWPR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={footprinterPinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C131079"
  ]
}}
      manufacturerPartNumber="DRV8848PWPR"
      footprint="dfn16_thermalpad2.46mmx3.55mm_pillpads_p0.65mm_w7.493mm_pw0.343mm_pl1.7465mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C131079.obj?uuid=89f85af05c9045c798a6d7a53851085c",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C131079.step?uuid=89f85af05c9045c798a6d7a53851085c",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
