import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["pin7"]
} as const

export const KF2EDGR_3_5_7P = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C441176"
  ]
}}
      manufacturerPartNumber="KF2EDGR_3_5_7P"
      footprint="pinrow7_p3.4999mm_od2.4mm_id1.6mm"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C441176.obj",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C441176.step",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012699999956566899, y: 3.2990027999999256, z: 0.09999239999999965 },
      }}
      {...props}
    />
  )
}
