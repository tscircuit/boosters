import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"]
} as const

export const GPFA104_0302A003R1BA = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C7434662"
  ]
}}
      manufacturerPartNumber="GPFA104_0302A003R1BA"
      footprint={<footprint>
        <platedhole  portHints={["pin3"]} pcbX="1.999996mm" pcbY="0mm" outerDiameter="1.499997mm" holeDiameter="0.9000236mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-0mm" pcbY="0mm" outerDiameter="1.499997mm" holeDiameter="0.9000236mm" shape="circle" />
<platedhole  portHints={["pin1"]} pcbX="-1.999996mm" pcbY="0mm" outerDiameter="1.499997mm" holeDiameter="0.9000236mm" shape="circle" />
<silkscreenpath route={[{"x":-2.8999941999999237,"y":0.9999979999998914},{"x":2.9999939999999015,"y":0.9999979999998914},{"x":2.9999939999999015,"y":-1.0999977999999828},{"x":-2.999994000000015,"y":-1.0999977999999828},{"x":-2.999994000000015,"y":0.9999979999998914},{"x":-2.699994600000082,"y":0.9999979999998914}]} />
<silkscreentext text="{NAME}" pcbX="-0.006096mm" pcbY="1.9906mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-3.265995999999973,"y":1.2406000000000859},{"x":3.2538039999999455,"y":1.2406000000000859},{"x":3.2538039999999455,"y":-1.3676000000000386},{"x":-3.265995999999973,"y":-1.3676000000000386},{"x":-3.265995999999973,"y":1.2406000000000859}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C7434662.obj",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C7434662.step",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.9949999999998864, y: 0, z: -0.0000055999999997169425 },
      }}
      {...props}
    />
  )
}
