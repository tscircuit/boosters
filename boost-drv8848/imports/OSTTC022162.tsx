import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VM", "pin1"],
  pin2: ["GND", "pin2"]
} as const

export const OSTTC022162 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C5840205"
  ]
}}
      manufacturerPartNumber="OSTTC022162"
      footprint="radial_p5.08mm_od2.1999mm_id1.5mm"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C5840205.obj?uuid=01f54a492b694ad093988e4ebc6a77c7",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C5840205.step?uuid=01f54a492b694ad093988e4ebc6a77c7",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.4349876999999651, z: -0.000006999999999646178 },
      }}
      {...props}
    />
  )
}
