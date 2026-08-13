import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"]
} as const

export const A_67996_406HLF = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C178290"
  ]
}}
      manufacturerPartNumber="A_67996_406HLF"
      footprint={<footprint>
        <platedhole  portHints={["pin6"]} pcbX="2.54mm" pcbY="1.27mm" outerDiameter="1.7999964mm" holeDiameter="1.0499852mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="2.54mm" pcbY="-1.27mm" outerDiameter="1.7999964mm" holeDiameter="1.0499852mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="0mm" pcbY="1.27mm" outerDiameter="1.7999964mm" holeDiameter="1.0499852mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="0mm" pcbY="-1.27mm" outerDiameter="1.7999964mm" holeDiameter="1.0499852mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-2.54mm" pcbY="1.27mm" outerDiameter="1.7999964mm" holeDiameter="1.0499852mm" shape="circle" />
<platedhole  portHints={["pin1"]} pcbX="-2.54mm" pcbY="-1.27mm" outerDiameter="1.7999964mm" holeDiameter="1.0499852mm" shape="circle" />
<silkscreenpath route={[{"x":3.8100000000000023,"y":-2.5400000000000063},{"x":3.8100000000000023,"y":2.539999999999992},{"x":-3.8100000000000023,"y":2.539999999999992},{"x":-3.8100000000000023,"y":-2.5400000000000063},{"x":3.8100000000000023,"y":-2.5400000000000063},{"x":-1.0584179999999606,"y":-2.5400000000000063}]} />
<silkscreenpath route={[{"x":-3.8100000000000023,"y":0.0024129999999900065},{"x":-1.2699999999999818,"y":0.0024129999999900065},{"x":-1.2699999999999818,"y":-2.5400000000000063}]} />
<silkscreentext text="{NAME}" pcbX="-0.0127mm" pcbY="3.54mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-4.085399999999993,"y":2.789999999999992},{"x":4.060000000000002,"y":2.789999999999992},{"x":4.060000000000002,"y":-2.7900000000000063},{"x":-4.085399999999993,"y":-2.7900000000000063},{"x":-4.085399999999993,"y":2.789999999999992}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C178290.obj?uuid=725aeadbcd6544388de05c17d5f9aad1",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C178290.step?uuid=725aeadbcd6544388de05c17d5f9aad1",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 2.54, y: -1.27, z: -0.000005999999999950489 },
      }}
      {...props}
    />
  )
}
