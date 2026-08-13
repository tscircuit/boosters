import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VCC2"],
  pin2: ["CH0"],
  pin3: ["CH1"],
  pin4: ["CH2"],
  pin5: ["CH3"],
  pin6: ["COM"],
  pin7: ["SHDN"],
  pin8: ["VREF"],
  pin9: ["VCC1"],
  pin10: ["GND"],
  pin11: ["MODE"],
  pin12: ["DOUT"],
  pin13: ["BUSY"],
  pin14: ["DIN"],
  pin15: ["CS"],
  pin16: ["DCLK"]
} as const

export const ADS7841ESQDBQRQ1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C701652"
  ]
}}
      manufacturerPartNumber="ADS7841ESQDBQRQ1"
      footprint="dfn16_pillpads_p0.635mm_w7.1244mm_pw0.3556mm_pl1.8148mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C701652.obj",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C701652.step",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: -0.000012700000070253736, y: -0.000012700000070253736, z: 0.075575 },
      }}
      {...props}
    />
  )
}
