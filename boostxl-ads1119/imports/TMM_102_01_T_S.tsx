import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"]
} as const

export const TMM_102_01_T_S = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C7069459"
  ]
}}
      manufacturerPartNumber="TMM_102_01_T_S"
      footprint="axial_p2mm_od1.5mm_id0.89mm"

      {...props}
    />
  )
}
