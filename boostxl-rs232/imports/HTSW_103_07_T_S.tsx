import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"]
} as const

export const HTSW_103_07_T_S = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C5762622"
  ]
}}
      manufacturerPartNumber="HTSW-103-07-T-S"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-2.54mm" pcbY="0mm" outerDiameter="1.6999966mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="0mm" pcbY="0mm" outerDiameter="1.6999966mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="2.54mm" pcbY="0mm" outerDiameter="1.6999966mm" holeDiameter="1.1000232mm" shape="circle" />
<silkscreenpath route={[{"x":-1.2700000000000955,"y":1.2499848000001066},{"x":-1.2700000000000955,"y":-1.2500102000000197}]} />
<silkscreenpath route={[{"x":3.808984000000123,"y":1.2499848000001066},{"x":3.808984000000123,"y":-1.2500102000000197}]} />
<silkscreenpath route={[{"x":-3.8099999999999454,"y":1.2499848000001066},{"x":3.808984000000123,"y":1.2499848000001066}]} />
<silkscreenpath route={[{"x":-3.8099999999999454,"y":-1.2500102000000197},{"x":-3.8099999999999454,"y":1.2499848000001066}]} />
<silkscreenpath route={[{"x":3.810000000000059,"y":-1.2500102000000197},{"x":-3.8099999999999454,"y":-1.2500102000000197}]} />
<silkscreentext text="{NAME}" pcbX="-0.0127mm" pcbY="2.27mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-4.085399999999936,"y":1.5200000000000955},{"x":4.060000000000059,"y":1.5200000000000955},{"x":4.060000000000059,"y":-1.5199999999999818},{"x":-4.085399999999936,"y":-1.5199999999999818},{"x":-4.085399999999936,"y":1.5200000000000955}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C5762622.obj",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C5762622.step",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.0004999999999999449, y: -0.000012700000070253736, z: -0.000005999999999950489 },
      }}
      {...props}
    />
  )
}
