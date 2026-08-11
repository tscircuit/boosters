import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"]
} as const

export const GMI9745P_2C44DB = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      symbol={
        <symbol>
          <schematicpath points={[{"x":2.54,"y":-1.016},{"x":2.54,"y":0.508}]} strokeWidth={0.254} strokeColor="#880000" />
          <schematicpath points={[{"x":-3.302,"y":-0.254},{"x":-1.778,"y":-0.254}]} strokeWidth={0.254} strokeColor="#880000" />
          <schematicpath points={[{"x":-2.54,"y":-1.016},{"x":-2.54,"y":0.508}]} strokeWidth={0.254} strokeColor="#880000" />
          <schematicpath points={[{"x":5.08,"y":2.54},{"x":-5.08,"y":2.54}]} strokeWidth={0.254} strokeColor="#880000" />
          <schematicpath svgPath="M -5.08 2.54 A 5.08 5.08 0 0 1 5.08 2.54" strokeWidth={0.254} strokeColor="#880000" />
          <schematicpath points={[{"x":-2.54,"y":-1.778},{"x":-2.54,"y":-2.54}]} strokeWidth={0.254} strokeColor="#880000" />
          <schematicpath points={[{"x":2.54,"y":-1.778},{"x":2.54,"y":-2.54}]} strokeWidth={0.254} strokeColor="#880000" />
          <port name="pin2" pinNumber={2} aliases={["2"]} direction="down" schX={2.54} schY={-5.08} schStemLength={2.54} />
          <port name="pin1" pinNumber={1} aliases={["1"]} direction="down" schX={-2.54} schY={-5.08} schStemLength={2.54} />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C530035"
  ]
}}
      manufacturerPartNumber="GMI9745P_2C44DB"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-1.27mm" pcbY="0mm" outerDiameter="1.6764mm" holeDiameter="0.7999984mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="1.27mm" pcbY="0mm" outerDiameter="1.6764mm" holeDiameter="0.7999984mm" shape="circle" />
<silkscreenpath route={[{"x":4.851399999999998,"y":2.0065999999999917},{"x":4.686092553658796,"y":0.7509652845896397},{"x":4.201435643919822,"y":-0.41910000000000025},{"x":3.4304578382484294,"y":-1.4238578382484093},{"x":2.425699999999992,"y":-2.1948356439198307},{"x":1.2556347154103662,"y":-2.679492553658804},{"x":0,"y":-2.8448000000000064},{"x":-1.2556347154103662,"y":-2.679492553658804},{"x":-2.425700000000006,"y":-2.1948356439198307},{"x":-3.430457838248401,"y":-1.4238578382484093},{"x":-4.201435643919822,"y":-0.41910000000000025},{"x":-4.686092553658796,"y":0.7509652845896397},{"x":-4.851400000000012,"y":2.0065999999999917},{"x":-4.686092553658796,"y":3.262234715410358},{"x":-4.201435643919822,"y":4.432299999999998},{"x":-3.430457838248401,"y":5.437057838248407},{"x":-2.425700000000006,"y":6.208035643919828},{"x":-1.2556347154103662,"y":6.692692553658787},{"x":0,"y":6.858000000000004},{"x":1.2556347154103662,"y":6.692692553658787},{"x":2.425699999999992,"y":6.208035643919828},{"x":3.4304578382484294,"y":5.437057838248407},{"x":4.201435643919822,"y":4.432299999999998},{"x":4.686092553658796,"y":3.262234715410372},{"x":4.851399999999998,"y":2.0065999999999917}]} />
<silkscreentext text="-" pcbX="2.921mm" pcbY="0.6096mm" anchorAlignment="bottom_left" fontSize="1.524mm" />
<silkscreentext text="{NAME}" pcbX="-0.0127mm" pcbY="7.858mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-5.126800000000003,"y":7.108000000000004},{"x":5.101399999999998,"y":7.108000000000004},{"x":5.101399999999998,"y":-3.120200000000011},{"x":-5.126800000000003,"y":-3.120200000000011},{"x":-5.126800000000003,"y":7.108000000000004}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C530035.obj?uuid=d58f406863284e7ab4a14d28d76d2085",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C530035.step?uuid=d58f406863284e7ab4a14d28d76d2085",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012699999999199463, y: -2.0070064000000087, z: -0.000005999999999950489 },
      }}
      {...props}
    />
  )
}