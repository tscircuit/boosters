import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["A0"],
  pin2: ["A1"],
  pin3: ["RESET"],
  pin4: ["DGND"],
  pin5: ["AGND"],
  pin6: ["AIN3"],
  pin7: ["AIN2"],
  pin8: ["REFN"],
  pin9: ["REFP"],
  pin10: ["AIN1"],
  pin11: ["AIN0"],
  pin12: ["AVDD"],
  pin13: ["DVDD"],
  pin14: ["DRDY"],
  pin15: ["SDA"],
  pin16: ["SCL"]
} as const

export const ADS1119IPWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C701613"
  ]
}}
      manufacturerPartNumber="ADS1119IPWR"
      footprint="dfn16_pillpads_p0.65mm_w7.463mm_pw0.343mm_pl1.7315mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C701613.obj",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C701613.step",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: -0.00012700000002041634, y: 0, z: -0.019205 },
      }}
      {...props}
    />
  )
}
