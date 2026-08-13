import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"]
} as const

export const A_3386P_1_104TLF = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      symbol={
        <symbol>
          <port name="pin2" pinNumber={2} aliases={["2"]} direction="up" schX={0} schY={3.81} schStemLength={1.27} />
          <schematiccircle center={{ x: 2.794, y: 0.762 }} radius={0.254} strokeWidth={0.254} color="#A00000" />
          <schematicpath points={[{"x":-0.508,"y":2.54},{"x":0,"y":1.524},{"x":0.508,"y":2.54},{"x":-0.508,"y":2.54}]} strokeWidth={0.254} strokeColor="#880000" />
          <port name="pin1" pinNumber={1} aliases={["1"]} direction="right" schX={5.08} schY={0} schStemLength={2.54} />
          <port name="pin3" pinNumber={3} aliases={["3"]} direction="left" schX={-5.08} schY={0} schStemLength={2.54} />
          <schematicpath points={[{"x":0,"y":2.54},{"x":0,"y":1.524}]} strokeWidth={0.254} strokeColor="#880000" />
          <schematicpath points={[{"x":2.286,"y":-1.016},{"x":2.54,"y":0}]} strokeWidth={0.254} strokeColor="#8D2323" />
          <schematicpath points={[{"x":1.524,"y":1.016},{"x":2.286,"y":-1.016}]} strokeWidth={0.254} strokeColor="#8D2323" />
          <schematicpath points={[{"x":1.016,"y":-1.016},{"x":1.524,"y":1.016}]} strokeWidth={0.254} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.254,"y":1.016},{"x":1.016,"y":-1.016}]} strokeWidth={0.254} strokeColor="#8D2323" />
          <schematicpath points={[{"x":-0.254,"y":-1.016},{"x":0.254,"y":1.016}]} strokeWidth={0.254} strokeColor="#8D2323" />
          <schematicpath points={[{"x":-0.762,"y":1.016},{"x":-0.254,"y":-1.016}]} strokeWidth={0.254} strokeColor="#8D2323" />
          <schematicpath points={[{"x":-1.524,"y":-1.016},{"x":-0.762,"y":1.016}]} strokeWidth={0.254} strokeColor="#8D2323" />
          <schematicpath points={[{"x":-2.032,"y":1.016},{"x":-1.524,"y":-1.016}]} strokeWidth={0.254} strokeColor="#8D2323" />
          <schematicpath points={[{"x":-2.54,"y":0},{"x":-2.032,"y":1.016}]} strokeWidth={0.254} strokeColor="#8D2323" />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C116303"
  ]
}}
      manufacturerPartNumber="A_3386P_1_104TLF"
      footprint={<footprint>
        <platedhole  portHints={["pin2"]} pcbX="-1.27mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin1"]} pcbX="1.27mm" pcbY="-2.54mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="1.27mm" pcbY="2.54mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<silkscreenpath route={[{"x":0.6350000000000051,"y":-0.6349999999999909},{"x":1.9050000000000011,"y":0.6350000000000051}]} />
<silkscreenpath route={[{"x":-3.3781999999999925,"y":-4.698999999999984},{"x":-3.3781999999999925,"y":-3.8100000000000023}]} />
<silkscreenpath route={[{"x":-3.3781999999999925,"y":-4.698999999999984},{"x":6.019800000000004,"y":-4.698999999999984}]} />
<silkscreenpath route={[{"x":6.019800000000004,"y":-4.698999999999984},{"x":6.019800000000004,"y":4.698999999999998}]} />
<silkscreenpath route={[{"x":6.019800000000004,"y":4.698999999999998},{"x":-3.3781999999999925,"y":4.698999999999998}]} />
<silkscreenpath route={[{"x":-3.3781999999999925,"y":4.698999999999998},{"x":-3.3781999999999925,"y":3.8100000000000023}]} />
<silkscreenpath route={[{"x":-3.3781999999999925,"y":3.8100000000000023},{"x":-2.8447999999999922,"y":3.8100000000000023}]} />
<silkscreenpath route={[{"x":-2.8447999999999922,"y":3.8100000000000023},{"x":-2.8447999999999922,"y":-3.8100000000000023}]} />
<silkscreenpath route={[{"x":-2.8447999999999922,"y":-3.8100000000000023},{"x":-3.3781999999999925,"y":-3.8100000000000023}]} />
<silkscreentext text="1" pcbX="1.778mm" pcbY="-2.54mm" anchorAlignment="bottom_left" fontSize="1.524mm" />
<silkscreentext text="2" pcbX="-1.905mm" pcbY="1.905mm" anchorAlignment="bottom_left" fontSize="1.524mm" />
<silkscreentext text="3" pcbX="1.778mm" pcbY="2.794mm" anchorAlignment="bottom_left" fontSize="1.524mm" />
<silkscreentext text="{NAME}" pcbX="1.3335mm" pcbY="5.826mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-3.755200000000002,"y":5.076000000000008},{"x":6.422200000000004,"y":5.076000000000008},{"x":6.422200000000004,"y":-5.101400000000012},{"x":-3.755200000000002,"y":-5.101400000000012},{"x":-3.755200000000002,"y":5.076000000000008}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C116303.obj?uuid=74816a92b1c94092a3fb7fe70756bf60",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C116303.step?uuid=74816a92b1c94092a3fb7fe70756bf60",
        pcbRotationOffset: 270,
        modelOriginPosition: { x: 0.000012700000013410317, y: -1.2999973999999952, z: -0.000010000000000509601 },
      }}
      {...props}
    />
  )
}
