import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"]
} as const

export const PEC03SAAN = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C5708637"
  ]
}}
      manufacturerPartNumber="PEC03SAAN"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="2.54mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="1.0200132mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-0mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="1.0200132mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="-2.54mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="1.0200132mm" shape="circle" />
<silkscreenpath route={[{"x":3.810050799999999,"y":1.2700000000000955},{"x":-3.810000000000173,"y":1.2700000000000955}]} />
<silkscreenpath route={[{"x":-3.810000000000173,"y":1.2700000000000955},{"x":-3.810000000000173,"y":-1.2699999999999818}]} />
<silkscreenpath route={[{"x":-3.810000000000173,"y":-1.2699999999999818},{"x":3.810050799999999,"y":-1.2699999999999818}]} />
<silkscreenpath route={[{"x":3.810050799999999,"y":-1.2699999999999818},{"x":3.810050799999999,"y":1.2700000000000955}]} />
<silkscreentext text="{NAME}" pcbX="0.0127mm" pcbY="2.27mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-4.060000000000173,"y":1.5200000000000955},{"x":4.085399999999936,"y":1.5200000000000955},{"x":4.085399999999936,"y":-1.5199999999999818},{"x":-4.060000000000173,"y":-1.5199999999999818},{"x":-4.060000000000173,"y":1.5200000000000955}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C5708637.obj",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C5708637.step",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -1.2649872999999299, y: -0.000012700000070253736, z: -0.000005999999999950489 },
      }}
      {...props}
    />
  )
}
