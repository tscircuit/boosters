import type { ConnectorProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"]
} as const

export const TSW_102_07_G_S = (props: ConnectorProps) => {
  return (
    <connector
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C7402729"
  ]
}}
      manufacturerPartNumber="TSW-102-07-G-S"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-1.27mm" pcbY="0mm" outerDiameter="1.999996mm" holeDiameter="1.1999976mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="1.27mm" pcbY="0mm" outerDiameter="1.999996mm" holeDiameter="1.1999976mm" shape="circle" />
<silkscreenpath route={[{"x":2.5400000000000205,"y":1.2700000000000102},{"x":2.5400000000000205,"y":-1.2699999999999818},{"x":-2.5399999999999636,"y":-1.2699999999999818},{"x":-2.5399999999999636,"y":1.2700000000000102},{"x":-0.6349999999999909,"y":1.2700000000000102}]} />
<silkscreenpath route={[{"x":2.5400000000000205,"y":1.2700000000000102},{"x":-0.6349999999999909,"y":1.2700000000000102}]} />
<silkscreentext text="{NAME}" pcbX="-0.0127mm" pcbY="2.27mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-2.815399999999954,"y":1.5200000000000102},{"x":2.7900000000000205,"y":1.5200000000000102},{"x":2.7900000000000205,"y":-1.5199999999999818},{"x":-2.815399999999954,"y":-1.5199999999999818},{"x":-2.815399999999954,"y":1.5200000000000102}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C7402729.obj?uuid=efa113086ba8489bb4758f5d6de637cd",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C7402729.step?uuid=efa113086ba8489bb4758f5d6de637cd",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -1.27, y: 0, z: -0.000005999999999950489 },
      }}
      {...props}
    />
  )
}
