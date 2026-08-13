import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"]
} as const

export const PEC02SAAN = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C7261569"
  ]
}}
      manufacturerPartNumber="PEC02SAAN"
      footprint="radial_p2.54mm_od1.65mm_id1mm"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C7261569.obj",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C7261569.step",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -2.54, y: 0, z: -0.05000599999999977 },
      }}
      {...props}
    />
  )
}
