import type { LedProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["cathode","neg"],
  pin2: ["anode","pos"]
} as const

export const LTST_C171GKT = (props: LedProps) => {
  const { name = "LED1", ...restProps } = props

  return (
    <led
      name={name}
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C913075"
  ]
}}
      manufacturerPartNumber="LTST_C171GKT"
      footprint="res_p2.2001mm_pw1mm_ph1.25mm"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C913075.obj",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C913075.step",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.00005079999993995443, y: 0.00016430000006384393, z: 0 },
      }}
      {...restProps}
    />
  )
}
