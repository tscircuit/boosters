import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"]
} as const

export const A_2_54_1_6P_ = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C40877"
  ]
}}
      manufacturerPartNumber="A_2_54_1_6P_"
      footprint={<footprint>
        <platedhole  portHints={["pin6"]} pcbX="6.3999999mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="1.0200132mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="3.8599999mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="1.0200132mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="1.3199999mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="1.0200132mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="-1.2200001mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="1.0200132mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-3.7600001mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="1.0200132mm" shape="circle" />
<platedhole  portHints={["pin1"]} pcbX="-6.3000001mm" pcbY="0mm" outerDiameter="1.7999964mm" holeDiameter="1.0200132mm" shape="circle" />
<silkscreenpath route={[{"x":-5.030000099999938,"y":1.2499848},{"x":-5.030000099999938,"y":-1.2499848}]} />
<silkscreenpath route={[{"x":-7.8199869000000035,"y":-1.2499848},{"x":7.919986700000038,"y":-1.2499848}]} />
<silkscreenpath route={[{"x":-7.8199869000000035,"y":1.2499848},{"x":-7.8199869000000035,"y":-1.2499848}]} />
<silkscreenpath route={[{"x":7.919986700000038,"y":1.2499848},{"x":-7.8199869000000035,"y":1.2499848}]} />
<silkscreenpath route={[{"x":7.919986700000038,"y":-1.2499848},{"x":7.919986700000038,"y":1.2499848}]} />
<silkscreentext text="{NAME}" pcbX="0.0372999mm" pcbY="2.2446mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-8.099400099999968,"y":1.4945999999999984},{"x":8.173999900000013,"y":1.4945999999999984},{"x":8.173999900000013,"y":-1.5454000000000008},{"x":-8.099400099999968,"y":-1.5454000000000008},{"x":-8.099400099999968,"y":1.4945999999999984}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C40877.obj?uuid=c162e59987044c559654f3f6cf872bf9",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C40877.step?uuid=c162e59987044c559654f3f6cf872bf9",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.04998720000003232, y: 0, z: -0.0000064000000006281255 },
      }}
      {...props}
    />
  )
}
