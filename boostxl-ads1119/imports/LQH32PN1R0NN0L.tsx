import type { InductorProps } from "@tscircuit/props"

type ImportedInductorProps = Omit<InductorProps, "inductance"> & {
  inductance?: InductorProps["inductance"]
}

export const LQH32PN1R0NN0L = ({
  inductance = "1uH",
  ...props
}: ImportedInductorProps) => {
  return (
    <inductor
      inductance={inductance}
      supplierPartNumbers={{
  "jlcpcb": [
    "C113079"
  ]
}}
      manufacturerPartNumber="LQH32PN1R0NN0L"
      footprint="res_p3.2mm_pw1.2mm_ph2mm"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C113079.obj",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C113079.step",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.000012700000070253736, z: -0.05 },
      }}
      {...props}
    />
  )
}
