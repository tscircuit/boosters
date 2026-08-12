import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"]
} as const

export const A_1711725 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C89120"
  ]
}}
      manufacturerPartNumber="A_1711725"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-2.54mm" pcbY="0mm" outerDiameter="2.2999954mm" holeDiameter="1.3000228mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="2.54mm" pcbY="0mm" outerDiameter="2.2999954mm" holeDiameter="1.3000228mm" shape="circle" />
<silkscreenpath route={[{"x":1.0800080000000207,"y":-4.899990199999991},{"x":1.0800080000000207,"y":-2.099995799999988},{"x":3.9800022000000013,"y":-2.099995799999988},{"x":4.080027400000006,"y":-2.099995799999988},{"x":4.080027400000006,"y":-4.899990199999991}]} />
<silkscreenpath route={[{"x":-3.99999200000002,"y":-4.899990199999991},{"x":-3.99999200000002,"y":-2.099995799999988},{"x":-1.0999977999999828,"y":-2.099995799999988},{"x":-0.9999725999999782,"y":-2.099995799999988},{"x":-0.9999725999999782,"y":-4.899990199999991}]} />
<silkscreenpath route={[{"x":-5.099989800000003,"y":-5.299989399999987},{"x":-5.099989800000003,"y":5.899988199999996},{"x":5.099989800000003,"y":5.899988199999996},{"x":5.099989800000003,"y":-5.299989399999987},{"x":-5.099989800000003,"y":-5.299989399999987}]} />
<silkscreentext text="{NAME}" pcbX="0.000254mm" pcbY="6.887974mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-5.355145999999991,"y":6.137973999999986},{"x":5.3556540000000155,"y":6.137973999999986},{"x":5.3556540000000155,"y":-5.588826000000012},{"x":-5.355145999999991,"y":-5.588826000000012},{"x":-5.355145999999991,"y":6.137973999999986}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C89120.obj?uuid=c7d9347df588484d86965548541e826e",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C89120.step?uuid=c7d9347df588484d86965548541e826e",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.029946599999959744, y: -0.29999939999999015, z: -9.00001 },
      }}
      {...props}
    />
  )
}
