import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["pin9"]
} as const

export const D_DMR009PF_D002 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      symbol={
        <symbol>
          <schematicpath
            svgPath="M -0.3 -0.8 Q -0.3 -0.88 -0.2 -0.9 L 0.18 -1 Q 0.3 -1 0.3 -0.88 L 0.3 0.88 Q 0.3 1 0.18 1 L -0.2 0.9 Q -0.3 0.88 -0.3 0.8 Z"
            strokeColor="#880000"
          />
          <port name="pin9" pinNumber={9} aliases={["9"]} direction="left" schX={-0.7} schY={0.6} schStemLength={0.4} />
          <port name="pin8" pinNumber={8} aliases={["8"]} direction="left" schX={-0.7} schY={0.2} schStemLength={0.4} />
          <port name="pin7" pinNumber={7} aliases={["7"]} direction="left" schX={-0.7} schY={-0.2} schStemLength={0.4} />
          <port name="pin6" pinNumber={6} aliases={["6"]} direction="left" schX={-0.7} schY={-0.6} schStemLength={0.4} />
          <port name="pin5" pinNumber={5} aliases={["5"]} direction="left" schX={-0.7} schY={0.8} schStemLength={0.4} />
          <port name="pin4" pinNumber={4} aliases={["4"]} direction="left" schX={-0.7} schY={0.4} schStemLength={0.4} />
          <port name="pin3" pinNumber={3} aliases={["3"]} direction="left" schX={-0.7} schY={0} schStemLength={0.4} />
          <port name="pin2" pinNumber={2} aliases={["2"]} direction="left" schX={-0.7} schY={-0.4} schStemLength={0.4} />
          <port name="pin1" pinNumber={1} aliases={["1"]} direction="left" schX={-0.7} schY={-0.8} schStemLength={0.4} />
          <schematiccircle center={{ x: 0.1, y: 0.8 }} radius={0.06} color="#880000" />
          <schematiccircle center={{ x: 0.1, y: 0.4 }} radius={0.06} color="#880000" />
          <schematiccircle center={{ x: 0.1, y: 0 }} radius={0.06} color="#880000" />
          <schematiccircle center={{ x: 0.1, y: -0.4 }} radius={0.06} color="#880000" />
          <schematiccircle center={{ x: 0.1, y: -0.8 }} radius={0.06} color="#880000" />
          <schematiccircle center={{ x: -0.1, y: 0.6 }} radius={0.06} color="#880000" />
          <schematiccircle center={{ x: -0.1, y: 0.2 }} radius={0.06} color="#880000" />
          <schematiccircle center={{ x: -0.1, y: -0.2 }} radius={0.06} color="#880000" />
          <schematiccircle center={{ x: -0.1, y: -0.6 }} radius={0.06} color="#880000" />
          <schematicpath points={[{"x":-0.3,"y":-0.6},{"x":-0.16,"y":-0.6}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.3,"y":-0.2},{"x":-0.16,"y":-0.2}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.3,"y":-0.8},{"x":0.04,"y":-0.8}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.3,"y":0.2},{"x":-0.16,"y":0.2}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.3,"y":-0.4},{"x":0.04,"y":-0.4}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.3,"y":0.6},{"x":-0.16,"y":0.6}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.3,"y":0},{"x":0.04,"y":0}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.3,"y":0.8},{"x":0.04,"y":0.8}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.3,"y":0.4},{"x":0.04,"y":0.4}]} strokeColor="#880000" />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C141882"
  ]
}}
      manufacturerPartNumber="D-DMR009PF-D002"
      footprint={<footprint>
        <platedhole  portHints={["pin3"]} pcbX="-1.41986mm" pcbY="-0.000127mm" outerDiameter="1.5748mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole pcbX="0mm" pcbY="-12.499975mm" outerDiameter="4.99999mm" holeDiameter="3.2500316mm" shape="circle" />
<platedhole  portHints={["pin1"]} pcbX="-1.41986mm" pcbY="5.519801mm" outerDiameter="1.5748mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-1.41986mm" pcbY="2.759837mm" outerDiameter="1.5748mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="-1.41986mm" pcbY="-2.760091mm" outerDiameter="1.5748mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="-1.41986mm" pcbY="-5.520055mm" outerDiameter="1.5748mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin6"]} pcbX="1.420114mm" pcbY="4.139819mm" outerDiameter="1.5748mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin7"]} pcbX="1.420114mm" pcbY="1.379855mm" outerDiameter="1.5748mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin8"]} pcbX="1.420114mm" pcbY="-1.380109mm" outerDiameter="1.5748mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin9"]} pcbX="1.420114mm" pcbY="-4.140073mm" outerDiameter="1.5748mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole pcbX="0mm" pcbY="12.499975mm" outerDiameter="4.99999mm" holeDiameter="3.2500316mm" shape="circle" />
<silkscreenpath route={[{"x":9.500107999999983,"y":-15.400070799999995},{"x":-2.9998924000000216,"y":-15.400070799999995},{"x":-2.9998924000000216,"y":15.39991839999999},{"x":9.500107999999983,"y":15.39991839999999},{"x":9.500107999999983,"y":-15.400070799999995}]} />
<silkscreenpath route={[{"x":14.78010759999998,"y":-0.005080000000006635},{"x":15.480106199999966,"y":-0.005080000000006635}]} />
<silkscreenpath route={[{"x":9.500107999999983,"y":8.369934999999998},{"x":15.500121399999955,"y":8.369934999999998},{"x":15.500121399999955,"y":-8.380069600000013},{"x":9.500107999999983,"y":-8.380069600000013}]} />
<silkscreenpath route={[{"x":9.500107999999983,"y":10.429925800000007},{"x":15.500121399999955,"y":10.429925800000007}]} />
<silkscreenpath route={[{"x":9.49985399999997,"y":14.569567000000006},{"x":15.499333999999976,"y":14.569567000000006},{"x":15.499333999999976,"y":10.459846999999996}]} />
<silkscreenpath route={[{"x":15.500121399999955,"y":-14.540077600000004},{"x":15.500121399999955,"y":-10.430078200000011},{"x":9.500107999999983,"y":-10.430078200000011}]} />
<silkscreenpath route={[{"x":9.500107999999983,"y":-14.570074999999989},{"x":15.500121399999955,"y":-14.570074999999989}]} />
<silkscreenpath route={[{"x":-0.5100319999999954,"y":6.710045000000008},{"x":-0.5185483626806331,"y":6.645356803143244},{"x":-0.5435170746797269,"y":6.585076999999984},{"x":-0.5832365595373403,"y":6.533313559537362},{"x":-0.6349999999999909,"y":6.4935940746797485},{"x":-0.6952798031432508,"y":6.468625362680598},{"x":-0.7599680000000149,"y":6.4601089999999886},{"x":-0.8246561968567789,"y":6.468625362680598},{"x":-0.884935999999982,"y":6.4935940746797485},{"x":-0.9366994404626325,"y":6.533313559537362},{"x":-0.9764189253202744,"y":6.585076999999984},{"x":-1.0013876373193682,"y":6.645356803143244},{"x":-1.0099040000000343,"y":6.710045000000008},{"x":-1.0013876373193682,"y":6.774733196856744},{"x":-0.9764189253202744,"y":6.835013000000004},{"x":-0.9366994404626325,"y":6.886776440462626},{"x":-0.884935999999982,"y":6.926495925320268},{"x":-0.8246561968567789,"y":6.95146463731939},{"x":-0.7599680000000149,"y":6.959980999999999},{"x":-0.6952798031432508,"y":6.95146463731939},{"x":-0.6349999999999909,"y":6.926495925320268},{"x":-0.5832365595373403,"y":6.886776440462626},{"x":-0.5435170746797269,"y":6.835013000000004},{"x":-0.5185483626806331,"y":6.774733196856744},{"x":-0.5100319999999954,"y":6.710045000000008}]} />
<silkscreentext text="1" pcbX="-1.97866mm" pcbY="7.348601mm" anchorAlignment="bottom_left" fontSize="1.27mm" />
<silkscreentext text="5" pcbX="-1.87706mm" pcbY="-6.799199mm" anchorAlignment="bottom_left" fontSize="1.27mm" />
<silkscreentext text="9" pcbX="1.300226mm" pcbY="-5.499989mm" anchorAlignment="bottom_left" fontSize="1.27mm" />
<silkscreentext text="6" pcbX="1.400048mm" pcbY="6.300089mm" anchorAlignment="bottom_left" fontSize="1.27mm" />
<silkscreentext text="{NAME}" pcbX="6.385814mm" pcbY="16.443327mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-3.2494859999999903,"y":15.69332700000001},{"x":16.021113999999955,"y":15.69332700000001},{"x":16.021113999999955,"y":-15.718472999999989},{"x":-3.2494859999999903,"y":-15.718472999999989},{"x":-3.2494859999999903,"y":15.69332700000001}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C141882.obj",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C141882.step",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: -0.003009899999995014, y: -1.4920390000000214, z: 0.3381490000000005 },
      }}
      {...props}
    />
  )
}
