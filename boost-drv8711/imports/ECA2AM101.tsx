import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"]
} as const

export const ECA2AM101 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      symbol={
        <symbol>
          <port name="pin1" pinNumber={1} aliases={["1"]} direction="down" schX={0} schY={5.08} schStemLength={4.318} />
          <port name="pin2" pinNumber={2} aliases={["2"]} direction="up" schX={0} schY={-5.08} schStemLength={4.826} />
          <schematicpath points={[{"x":-2.54,"y":0.762},{"x":2.54,"y":0.762}]} strokeWidth={0.254} strokeColor="#8D2323" />
          <schematicpath svgPath="M 0 -0.254 A 4.085234 4.085234 0 0 0 2.54 -1.016" strokeWidth={0.254} strokeColor="#8D2323" />
          <schematicpath svgPath="M -2.54 -1.016 A 4.138092 4.138092 0 0 0 0 -0.254" strokeWidth={0.254} strokeColor="#8D2323" />
          <schematicrect schX={-2.032} schY={1.5113} width={1.016} height={0.0254} strokeWidth={0.254} color="#8D2323" isFilled fillColor="#8D2323" />
          <schematicrect schX={-2.0193} schY={1.524} width={0.0254} height={1.016} strokeWidth={0.254} color="#8D2323" isFilled fillColor="#8D2323" />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C178407"
  ]
}}
      manufacturerPartNumber="ECA2AM101"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-2.54mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="2.54mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="0.999998mm" shape="circle" />
<silkscreenpath route={[{"x":-4.572000000000003,"y":0},{"x":-3.5559999999999974,"y":0}]} />
<silkscreenpath route={[{"x":-4.064000000000007,"y":0.7620000000000005},{"x":-4.064000000000007,"y":-0.7619999999999862}]} />
<silkscreenpath route={[{"x":4.999989999999997,"y":0},{"x":4.829619472187076,"y":-1.2940926373221515},{"x":4.330118358668159,"y":-2.499994999999984},{"x":3.535526834864939,"y":-3.5355268348649105},{"x":2.4999949999999984,"y":-4.330118358668145},{"x":1.2940926373221373,"y":-4.829619472187076},{"x":0,"y":-4.999989999999997},{"x":-1.2940926373221515,"y":-4.829619472187076},{"x":-2.499994999999984,"y":-4.330118358668145},{"x":-3.5355268348649247,"y":-3.5355268348649105},{"x":-4.330118358668159,"y":-2.499994999999984},{"x":-4.829619472187076,"y":-1.2940926373221515},{"x":-4.999989999999997,"y":0},{"x":-4.829619472187076,"y":1.2940926373221515},{"x":-4.330118358668159,"y":2.4999949999999984},{"x":-3.5355268348649247,"y":3.5355268348649247},{"x":-2.4999950000000126,"y":4.330118358668159},{"x":-1.2940926373221515,"y":4.82961947218709},{"x":0,"y":4.999990000000011},{"x":1.2940926373221373,"y":4.82961947218709},{"x":2.4999949999999984,"y":4.330118358668159},{"x":3.535526834864939,"y":3.5355268348649247},{"x":4.330118358668159,"y":2.4999950000000126},{"x":4.829619472187076,"y":1.2940926373221515},{"x":4.999989999999997,"y":0}]} />
<silkscreentext text="{NAME}" pcbX="0.0254mm" pcbY="6.0038mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-5.279200000000003,"y":5.253799999999998},{"x":5.329999999999998,"y":5.253799999999998},{"x":5.329999999999998,"y":-5.279200000000003},{"x":-5.279200000000003,"y":-5.279200000000003},{"x":-5.279200000000003,"y":5.253799999999998}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C178407.obj?uuid=f40519fab00548e1a81f96812540c2eb",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C178407.step?uuid=f40519fab00548e1a81f96812540c2eb",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.004999999999999893, y: 0.00041899999998573634, z: -12.510007000000002 },
      }}
      {...props}
    />
  )
}
