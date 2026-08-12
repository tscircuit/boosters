import type { SwitchProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"]
} as const

export const KH_SK22D07_G5 = (props: SwitchProps) => {
  const { name = "SW1", ...restProps } = props

  return (
    <switch
      name={name}
      type="dpdt"
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C5274511"
  ]
}}
      manufacturerPartNumber="KH_SK22D07_G5"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-1.999996mm" pcbY="1.249934mm" outerDiameter="1.2999974mm" holeDiameter="0.7999984mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="0mm" pcbY="1.249934mm" outerDiameter="1.2999974mm" holeDiameter="0.7999984mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="1.999996mm" pcbY="1.249934mm" outerDiameter="1.2999974mm" holeDiameter="0.7999984mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="-1.999996mm" pcbY="-1.249934mm" outerDiameter="1.2999974mm" holeDiameter="0.7999984mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="0mm" pcbY="-1.249934mm" outerDiameter="1.2999974mm" holeDiameter="0.7999984mm" shape="circle" />
<platedhole  portHints={["pin6"]} pcbX="1.999996mm" pcbY="-1.249934mm" outerDiameter="1.2999974mm" holeDiameter="0.7999984mm" shape="circle" />
<hole name="mount1" pcbX="-4.100068mm" pcbY="0mm" width="0.700024mm" height="1.6000222mm" shape="pill" />
<hole name="mount2" pcbX="4.100068mm" pcbY="0mm" width="0.700024mm" height="1.6000222mm" shape="pill" />
<silkscreenpath route={[{"x":-2.4813259999999673,"y":-3.399993199999926},{"x":-2.4813259999999673,"y":-5.2999893999999586},{"x":-0.8999981999999136,"y":-5.2999893999999586},{"x":-0.8999981999999136,"y":-3.399993199999926}]} />
<silkscreenpath route={[{"x":-4.2999913999999535,"y":1.278331200000025},{"x":-4.2999913999999535,"y":3.4999930000000177}]} />
<silkscreenpath route={[{"x":4.29999139999984,"y":-1.278356600000052},{"x":4.29999139999984,"y":-3.399993199999926},{"x":-4.2999913999999535,"y":-3.399993199999926},{"x":-4.2999913999999535,"y":-1.278356600000052}]} />
<silkscreenpath route={[{"x":-4.2999913999999535,"y":3.4999930000000177},{"x":4.29999139999984,"y":3.4999930000000177},{"x":4.29999139999984,"y":1.278331200000025}]} />
<silkscreentext text="{NAME}" pcbX="0mm" pcbY="4.5052mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-4.567999999999984,"y":3.7552000000001726},{"x":4.56799999999987,"y":3.7552000000001726},{"x":4.56799999999987,"y":-5.660199999999918},{"x":-4.567999999999984,"y":-5.660199999999918},{"x":-4.567999999999984,"y":3.7552000000001726}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C5274511.obj?uuid=220e12fe2bfc44bb8905d4a0e6d4c54c",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C5274511.step?uuid=220e12fe2bfc44bb8905d4a0e6d4c54c",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.004999999999999893, y: 2.9719947999999707, z: -4.7000056 },
      }}
      {...restProps}
    />
  )
}
