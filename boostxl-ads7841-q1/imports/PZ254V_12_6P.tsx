import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"]
} as const

export const PZ254V_12_6P = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C492420"
  ]
}}
      manufacturerPartNumber="TSW-103-07-G-D"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-2.54mm" pcbY="-1.27mm" outerDiameter="1.6999966mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-2.54mm" pcbY="1.27mm" outerDiameter="1.6999966mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="0mm" pcbY="-1.27mm" outerDiameter="1.6999966mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="0mm" pcbY="1.27mm" outerDiameter="1.6999966mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="2.54mm" pcbY="-1.27mm" outerDiameter="1.6999966mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin6"]} pcbX="2.54mm" pcbY="1.27mm" outerDiameter="1.6999966mm" holeDiameter="1.1000232mm" shape="circle" />
<silkscreenpath route={[{"x":4.039996999999971,"y":2.5399999999999636},{"x":4.039996999999971,"y":-2.5399999999999636}]} />
<silkscreenpath route={[{"x":-4.0399969999998575,"y":-2.5399999999999636},{"x":4.039996999999971,"y":-2.5399999999999636}]} />
<silkscreenpath route={[{"x":-4.0399969999998575,"y":2.5399999999999636},{"x":4.039996999999971,"y":2.5399999999999636}]} />
<silkscreenpath route={[{"x":-4.0399969999998575,"y":0.007061199999952805},{"x":-1.2699999999999818,"y":0.007061199999952805},{"x":-1.2699999999999818,"y":-2.5399999999999636}]} />
<silkscreenpath route={[{"x":-4.0399969999998575,"y":2.5399999999999636},{"x":-4.0399969999998575,"y":-2.5399999999999636}]} />
<silkscreentext text="{NAME}" pcbX="0mm" pcbY="3.54mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-4.288599999999974,"y":2.7899999999999636},{"x":4.288600000000088,"y":2.7899999999999636},{"x":4.288600000000088,"y":-2.7899999999999636},{"x":-4.288599999999974,"y":-2.7899999999999636},{"x":-4.288599999999974,"y":2.7899999999999636}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C492420.obj",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C492420.step",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 2.545, y: -1.2700127000000703, z: -0.000005999999999950489 },
      }}
      {...props}
    />
  )
}
