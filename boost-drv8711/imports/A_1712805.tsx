import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"]
} as const

export const A_1712805 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C90087"
  ]
}}
      manufacturerPartNumber="A_1712805"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-7.62mm" pcbY="0mm" outerDiameter="2.1999956mm" holeDiameter="1.400048mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-2.54mm" pcbY="0mm" outerDiameter="2.1999956mm" holeDiameter="1.400048mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="2.54mm" pcbY="0mm" outerDiameter="2.1999956mm" holeDiameter="1.400048mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="7.62mm" pcbY="0mm" outerDiameter="2.1999956mm" holeDiameter="1.400048mm" shape="circle" />
<silkscreenpath route={[{"x":-10.16998220000005,"y":6.006033200000047},{"x":-10.160000000000082,"y":-5.33400000000006}]} />
<silkscreenpath route={[{"x":-10.160000000000082,"y":-5.33400000000006},{"x":10.159999999999854,"y":-5.33400000000006}]} />
<silkscreenpath route={[{"x":10.159999999999854,"y":-5.33400000000006},{"x":10.159999999999854,"y":6.00600780000002}]} />
<silkscreenpath route={[{"x":-10.160000000000082,"y":4.572000000000003},{"x":10.159999999999854,"y":4.572000000000003}]} />
<silkscreenpath route={[{"x":-10.160000000000082,"y":-2.286000000000058},{"x":10.159999999999854,"y":-2.286000000000058}]} />
<silkscreenpath route={[{"x":10.159999999999854,"y":6.006033200000047},{"x":-10.16998220000005,"y":6.006033200000047}]} />
<silkscreentext text="{NAME}" pcbX="0mm" pcbY="7.1214mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-10.537000000000035,"y":6.371399999999994},{"x":10.537000000000035,"y":6.371399999999994},{"x":10.537000000000035,"y":-5.711000000000013},{"x":-10.537000000000035,"y":-5.711000000000013},{"x":-10.537000000000035,"y":6.371399999999994}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C90087.obj?uuid=095dd5e82c7a47d4afa28a234526f073",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C90087.step?uuid=095dd5e82c7a47d4afa28a234526f073",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012700000070253736, y: -0.3359912000000804, z: -9.00001 },
      }}
      {...props}
    />
  )
}
