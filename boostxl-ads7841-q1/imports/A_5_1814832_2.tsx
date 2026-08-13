import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["GND1"],
  pin2: ["GND2"],
  pin3: ["GND3"],
  pin4: ["GND4"],
  pin5: ["SIGNAL"]
} as const

export const A_5_1814832_2 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C482015"
  ]
}}
      manufacturerPartNumber="5-1814832-1"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-2.54mm" pcbY="-2.54mm" outerDiameter="2.7999944mm" holeDiameter="1.7999964mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-2.54mm" pcbY="2.54mm" outerDiameter="2.7999944mm" holeDiameter="1.7999964mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="2.54mm" pcbY="2.54mm" outerDiameter="2.7999944mm" holeDiameter="1.7999964mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="2.54mm" pcbY="-2.54mm" outerDiameter="2.7999944mm" holeDiameter="1.7999964mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="-0.000254mm" pcbY="0.000254mm" outerDiameter="2.499995mm" holeDiameter="1.700022mm" shape="circle" />
<silkscreenpath route={[{"x":1.2020295999999462,"y":3.1751270000000886},{"x":-1.2022836000001007,"y":3.1751270000000886}]} />
<silkscreenpath route={[{"x":3.174872999999934,"y":-1.2020295999998325},{"x":3.174872999999934,"y":1.2022836000001007}]} />
<silkscreenpath route={[{"x":-1.2022836000001007,"y":-3.174872999999934},{"x":1.2020295999999462,"y":-3.174872999999934}]} />
<silkscreenpath route={[{"x":-3.1751270000002023,"y":1.2022836000001007},{"x":-3.1751270000002023,"y":-1.2020295999998325}]} />
<silkscreentext text="{NAME}" pcbX="0mm" pcbY="5.0386mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-4.288600000000088,"y":4.288600000000088},{"x":4.28859999999986,"y":4.288600000000088},{"x":4.28859999999986,"y":-4.288599999999974},{"x":-4.288600000000088,"y":-4.288599999999974},{"x":-4.288600000000088,"y":4.288600000000088}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C482015.obj",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C482015.step",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.000008000000000230045 },
      }}
      {...props}
    />
  )
}
