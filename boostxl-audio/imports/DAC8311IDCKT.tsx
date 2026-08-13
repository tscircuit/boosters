import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["SYNC"],
  pin2: ["SCLK"],
  pin3: ["DIN"],
  pin4: ["pin4"],
  pin5: ["GND"],
  pin6: ["VOUT"]
} as const

export const DAC8311IDCKT = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C48227"
  ]
}}
      manufacturerPartNumber="DAC8311IDCKT"
      footprint="sot363_pl0.78mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C48227.obj?uuid=e8c049de0bbc469ba32d5592f1765e02",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C48227.step?uuid=e8c049de0bbc469ba32d5592f1765e02",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: -0.000012700000070253736, y: 0, z: -0.1 },
      }}
      {...props}
    />
  )
}