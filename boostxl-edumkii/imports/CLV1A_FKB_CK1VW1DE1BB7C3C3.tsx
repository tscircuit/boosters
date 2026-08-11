import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"]
} as const

export const CLV1A_FKB_CK1VW1DE1BB7C3C3 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      symbol={
        <symbol>
          <schematicpath points={[{"x":-7.366,"y":2.54},{"x":5.08,"y":2.54}]} strokeWidth={0.254} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.762,"y":-2.794},{"x":-0.762,"y":2.54}]} strokeWidth={0.254} strokeColor="#880000" />
          <schematicpath points={[{"x":-7.874,"y":-2.794},{"x":5.334,"y":-2.794}]} strokeWidth={0.254} strokeColor="#880000" />
          <schematicpath points={[{"x":3.556,"y":-1.524},{"x":3.556,"y":-4.064}]} strokeWidth={0.254} strokeColor="#880000" />
          <schematicpath points={[{"x":3.556,"y":-2.794},{"x":1.016,"y":-1.524},{"x":1.016,"y":-4.064},{"x":1.016,"y":-4.064},{"x":3.556,"y":-2.794}]} strokeWidth={0.254} strokeColor="#880000" />
          <schematicpath points={[{"x":-5.842,"y":1.27},{"x":-5.842,"y":3.81}]} strokeWidth={0.254} strokeColor="#880000" />
          <schematicpath points={[{"x":-5.842,"y":2.54},{"x":-3.302,"y":1.27},{"x":-3.302,"y":3.81},{"x":-3.302,"y":3.81},{"x":-5.842,"y":2.54}]} strokeWidth={0.254} strokeColor="#880000" />
          <schematicpath points={[{"x":3.556,"y":2.54},{"x":1.016,"y":3.81},{"x":1.016,"y":1.27},{"x":1.016,"y":1.27},{"x":3.556,"y":2.54}]} strokeWidth={0.254} strokeColor="#880000" />
          <schematicpath points={[{"x":3.556,"y":3.81},{"x":3.556,"y":1.27}]} strokeWidth={0.254} strokeColor="#880000" />
          <port name="pin4" pinNumber={4} aliases={["4"]} direction="right" schX={7.62} schY={2.54} schStemLength={2.54} />
          <port name="pin1" pinNumber={1} aliases={["1"]} direction="left" schX={-9.906} schY={2.54} schStemLength={2.54} />
          <port name="pin2" pinNumber={2} aliases={["2"]} direction="left" schX={-9.906} schY={-2.794} schStemLength={2.54} />
          <port name="pin3" pinNumber={3} aliases={["3"]} direction="right" schX={7.874} schY={-2.794} schStemLength={2.54} />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C5345899"
  ]
}}
      manufacturerPartNumber="CLV1A_FKB_CK1VW1DE1BB7C3C3"
      footprint={<footprint>
        <smtpad portHints={["pin4"]} pcbX="1.550289mm" pcbY="0.750062mm" width="1.0999978mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-1.550289mm" pcbY="0.750062mm" width="1.0999978mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-1.550289mm" pcbY="-0.750062mm" width="1.0999978mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="1.550035mm" pcbY="-0.750062mm" width="1.0999978mm" height="0.7999984mm" shape="rect" />
<silkscreenpath route={[{"x":-3.03783999999996,"y":-0.6404864000000998},{"x":-2.2758400000000165,"y":-0.6404864000000998}]} />
<silkscreenpath route={[{"x":-2.66700000000003,"y":-1.0160254000001032},{"x":-2.66700000000003,"y":-0.2540254000000459}]} />
<silkscreenpath route={[{"x":0.7512050000000272,"y":-1.400327400000151},{"x":0.12131039999997029,"y":-1.400327400000151},{"x":-0.25460960000009436,"y":-1.400327400000151}]} />
<silkscreenpath route={[{"x":-1.5999714000000722,"y":-1.3999972000000298},{"x":1.6000221999998985,"y":-1.3999972000000298},{"x":1.6000221999998985,"y":-1.330121800000029}]} />
<silkscreenpath route={[{"x":-1.5999714000000722,"y":-1.330121800000029},{"x":-1.5999714000000722,"y":-1.3999972000000298}]} />
<silkscreenpath route={[{"x":-1.5999714000000722,"y":0.16987519999997858},{"x":-1.5999714000000722,"y":-0.16987520000009226}]} />
<silkscreenpath route={[{"x":1.6000221999998985,"y":1.3301217999999153},{"x":1.6000221999998985,"y":1.3999971999999161},{"x":-1.5999714000000722,"y":1.3999971999999161},{"x":-1.5999714000000722,"y":1.3301217999999153}]} />
<silkscreenpath route={[{"x":1.6000221999998985,"y":-0.16987520000009226},{"x":1.6000221999998985,"y":0.16987519999997858}]} />
<silkscreenpath route={[{"x":2.2809200000000374,"y":0.7619999999999436},{"x":2.739745599999992,"y":0.7619999999999436}]} />
<silkscreentext text="{NAME}" pcbX="-0.165989mm" pcbY="2.816862mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-3.2988889999999174,"y":2.0668619999997873},{"x":2.966910999999982,"y":2.0668619999997873},{"x":2.966910999999982,"y":-1.6589380000000347},{"x":-3.2988889999999174,"y":-1.6589380000000347},{"x":-3.2988889999999174,"y":2.0668619999997873}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C5345899.obj?uuid=71a8e53030004306acdc24854d6aa343",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C5345899.step?uuid=71a8e53030004306acdc24854d6aa343",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.000012699999956566899, z: -1 },
      }}
      {...props}
    />
  )
}