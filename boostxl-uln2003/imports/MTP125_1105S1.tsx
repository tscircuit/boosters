import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"]
} as const

export const MTP125_1105S1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C358687"
  ]
}}
      manufacturerPartNumber="MTP125_1105S1"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-5.08mm" pcbY="0mm" outerDiameter="1.6999966mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-2.54mm" pcbY="0mm" outerDiameter="1.6999966mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="-0mm" pcbY="0mm" outerDiameter="1.6999966mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="2.54mm" pcbY="0mm" outerDiameter="1.6999966mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="5.08mm" pcbY="0mm" outerDiameter="1.6999966mm" holeDiameter="1.1000232mm" shape="circle" />
<silkscreenpath route={[{"x":6.349999999999909,"y":1.2700000000000955},{"x":6.349999999999909,"y":-1.2699999999999818},{"x":-6.350000000000023,"y":-1.2699999999999818},{"x":-6.350000000000023,"y":1.2700000000000955},{"x":6.349999999999909,"y":1.2700000000000955}]} />
<silkscreenpath route={[{"x":-3.7864796000001206,"y":1.2700000000000955},{"x":-3.7864796000001206,"y":-1.2699999999999818}]} />
<silkscreentext text="{NAME}" pcbX="-0.0127mm" pcbY="2.27mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-6.625400000000013,"y":1.5200000000000955},{"x":6.599999999999909,"y":1.5200000000000955},{"x":6.599999999999909,"y":-1.5453999999999724},{"x":-6.625400000000013,"y":-1.5453999999999724},{"x":-6.625400000000013,"y":1.5200000000000955}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C358687.obj?uuid=6331f645d89e4b919bdba0cb4f3544ce",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C358687.step?uuid=6331f645d89e4b919bdba0cb4f3544ce",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012699999956566899, y: 0, z: -0.000005999999999950489 },
      }}
      {...props}
    />
  )
}
