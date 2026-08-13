import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"]
} as const

export const PZ254V_12_4P = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C492419"
  ]
}}
      manufacturerPartNumber="PEC02DAAN"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-1.27mm" pcbY="-1.27mm" outerDiameter="1.6999966mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-1.27mm" pcbY="1.27mm" outerDiameter="1.6999966mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="1.27mm" pcbY="-1.27mm" outerDiameter="1.6999966mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="1.27mm" pcbY="1.27mm" outerDiameter="1.6999966mm" holeDiameter="1.1000232mm" shape="circle" />
<silkscreenpath route={[{"x":2.769997000000103,"y":2.5399999999999636},{"x":2.769997000000103,"y":-2.5399999999999636}]} />
<silkscreenpath route={[{"x":-2.7699969999998757,"y":2.5399999999999636},{"x":2.769997000000103,"y":2.5399999999999636}]} />
<silkscreenpath route={[{"x":-2.7699969999998757,"y":-2.5399999999999636},{"x":2.769997000000103,"y":-2.5399999999999636}]} />
<silkscreenpath route={[{"x":-2.7699969999998757,"y":0.007061199999952805},{"x":0,"y":0.007061199999952805},{"x":0,"y":-2.5399999999999636}]} />
<silkscreenpath route={[{"x":-2.7699969999998757,"y":2.5399999999999636},{"x":-2.7699969999998757,"y":-2.5399999999999636}]} />
<silkscreentext text="{NAME}" pcbX="0mm" pcbY="3.54mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-3.018599999999992,"y":2.7899999999999636},{"x":3.018599999999992,"y":2.7899999999999636},{"x":3.018599999999992,"y":-2.7899999999999636},{"x":-3.018599999999992,"y":-2.7899999999999636},{"x":-3.018599999999992,"y":2.7899999999999636}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C492419.obj",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C492419.step",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.0004872999999296912, y: 0, z: -0.000005999999999950489 },
      }}
      {...props}
    />
  )
}
