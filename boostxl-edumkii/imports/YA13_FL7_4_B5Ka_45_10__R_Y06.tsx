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
  pin9: ["pin8_alt1"],
  pin10: ["pin7_alt1"]
} as const

export const YA13_FL7_4_B5Ka_45_10__R_Y06 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      symbol={
        <symbol>
          <schematicpath points={[{"x":-2.54,"y":0},{"x":-2.032,"y":1.016}]} strokeWidth={0.254} strokeColor="#8D2323" />
          <schematicpath points={[{"x":-2.032,"y":1.016},{"x":-1.524,"y":-1.016}]} strokeWidth={0.254} strokeColor="#8D2323" />
          <schematicpath points={[{"x":-1.524,"y":-1.016},{"x":-0.762,"y":1.016}]} strokeWidth={0.254} strokeColor="#8D2323" />
          <schematicpath points={[{"x":-0.762,"y":1.016},{"x":-0.254,"y":-1.016}]} strokeWidth={0.254} strokeColor="#8D2323" />
          <schematicpath points={[{"x":-0.254,"y":-1.016},{"x":0.254,"y":1.016}]} strokeWidth={0.254} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.254,"y":1.016},{"x":1.016,"y":-1.016}]} strokeWidth={0.254} strokeColor="#8D2323" />
          <schematicpath points={[{"x":1.016,"y":-1.016},{"x":1.524,"y":1.016}]} strokeWidth={0.254} strokeColor="#8D2323" />
          <schematicpath points={[{"x":1.524,"y":1.016},{"x":2.286,"y":-1.016}]} strokeWidth={0.254} strokeColor="#8D2323" />
          <schematicpath points={[{"x":2.286,"y":-1.016},{"x":2.54,"y":0}]} strokeWidth={0.254} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0,"y":5.08},{"x":0,"y":1.524}]} strokeWidth={0.254} strokeColor="#880000" />
          <port name="pin3" pinNumber={3} aliases={["3"]} direction="left" schX={-6.35} schY={0} schStemLength={2.54} />
          <port name="pin1" pinNumber={1} aliases={["1"]} direction="right" schX={6.35} schY={0} schStemLength={2.54} />
          <schematicpath points={[{"x":-0.508,"y":2.54},{"x":0,"y":1.524},{"x":0.508,"y":2.54},{"x":-0.508,"y":2.54}]} strokeWidth={0.254} strokeColor="#880000" isFilled fillColor="#880000" />
          <port name="pin2" pinNumber={2} aliases={["2"]} direction="up" schX={0} schY={7.62} schStemLength={2.54} />
          <port name="pin5" pinNumber={5} aliases={["5"]} direction="down" schX={0} schY={-8.89} schStemLength={2.54} />
          <schematicpath points={[{"x":0.508,"y":-5.08},{"x":0,"y":-4.064},{"x":-0.508,"y":-5.08},{"x":0.508,"y":-5.08}]} strokeWidth={0.254} strokeColor="#880000" isFilled fillColor="#880000" />
          <port name="pin6" pinNumber={6} aliases={["6"]} direction="left" schX={-6.35} schY={-2.54} schStemLength={2.54} />
          <port name="pin4" pinNumber={4} aliases={["4"]} direction="right" schX={6.35} schY={-2.54} schStemLength={2.54} />
          <schematicpath points={[{"x":0,"y":-6.35},{"x":0,"y":-4.064}]} strokeWidth={0.254} strokeColor="#880000" />
          <schematicpath points={[{"x":-2.286,"y":-1.524},{"x":-2.54,"y":-2.54}]} strokeWidth={0.254} strokeColor="#8D2323" />
          <schematicpath points={[{"x":-1.524,"y":-3.556},{"x":-2.286,"y":-1.524}]} strokeWidth={0.254} strokeColor="#8D2323" />
          <schematicpath points={[{"x":-1.016,"y":-1.524},{"x":-1.524,"y":-3.556}]} strokeWidth={0.254} strokeColor="#8D2323" />
          <schematicpath points={[{"x":-0.254,"y":-3.556},{"x":-1.016,"y":-1.524}]} strokeWidth={0.254} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.254,"y":-1.524},{"x":-0.254,"y":-3.556}]} strokeWidth={0.254} strokeColor="#8D2323" />
          <schematicpath points={[{"x":0.762,"y":-3.556},{"x":0.254,"y":-1.524}]} strokeWidth={0.254} strokeColor="#8D2323" />
          <schematicpath points={[{"x":1.524,"y":-1.524},{"x":0.762,"y":-3.556}]} strokeWidth={0.254} strokeColor="#8D2323" />
          <schematicpath points={[{"x":2.032,"y":-3.556},{"x":1.524,"y":-1.524}]} strokeWidth={0.254} strokeColor="#8D2323" />
          <schematicpath points={[{"x":2.54,"y":-2.54},{"x":2.032,"y":-3.556}]} strokeWidth={0.254} strokeColor="#8D2323" />
          <port name="pin7" pinNumber={7} aliases={["7"]} direction="right" schX={6.35} schY={3.81} schStemLength={2.54} />
          <port name="pin8" pinNumber={8} aliases={["8"]} direction="left" schX={-6.35} schY={3.81} schStemLength={2.54} />
          <schematicrect schX={0} schY={-0.635} width={7.62} height={11.43} strokeWidth={0.254} color="#880000" />
          <schematicpath points={[{"x":2.54,"y":0},{"x":3.81,"y":0}]} strokeWidth={0.254} strokeColor="#880000" />
          <schematicpath points={[{"x":2.54,"y":-2.54},{"x":3.81,"y":-2.54}]} strokeWidth={0.254} strokeColor="#880000" />
          <schematicpath points={[{"x":-3.81,"y":-2.54},{"x":-2.54,"y":-2.54}]} strokeWidth={0.254} strokeColor="#880000" />
          <schematicpath points={[{"x":-3.81,"y":0},{"x":-2.54,"y":0}]} strokeWidth={0.254} strokeColor="#880000" />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C37323742"
  ]
}}
      manufacturerPartNumber="YA13_FL7_4_B5Ka_45_10__R_Y06"
      footprint={<footprint>
        <platedhole  portHints={["pin7"]} pcbX="3.8749859mm" pcbY="7.1999221mm" outerDiameter="1.7999964mm" holeDiameter="1.5000224mm" shape="circle" />
<platedhole  portHints={["pin8"]} pcbX="-6.7249421mm" pcbY="7.1999221mm" outerDiameter="1.7999964mm" holeDiameter="1.5000224mm" shape="circle" />
<platedhole  portHints={["pin9"]} pcbX="-6.7249421mm" pcbY="-5.2999259mm" outerDiameter="1.7999964mm" holeDiameter="1.5000224mm" shape="circle" />
<platedhole  portHints={["pin10"]} pcbX="3.8749859mm" pcbY="-5.2999259mm" outerDiameter="1.7999964mm" holeDiameter="1.5000224mm" shape="circle" />
<platedhole  portHints={["pin6"]} pcbX="-3.9251001mm" pcbY="-7.2999219mm" outerDiameter="1.5999968mm" holeDiameter="1.1999976mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="-1.4249781mm" pcbY="-7.2999219mm" outerDiameter="1.5999968mm" holeDiameter="1.1999976mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="1.0748899mm" pcbY="-7.2999219mm" outerDiameter="1.5999968mm" holeDiameter="1.1999976mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="6.8249419mm" pcbY="-1.5498699mm" outerDiameter="1.5999968mm" holeDiameter="1.1999976mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="6.8249419mm" pcbY="0.9499981mm" outerDiameter="1.5999968mm" holeDiameter="1.1999976mm" shape="circle" />
<platedhole  portHints={["pin1"]} pcbX="6.8249419mm" pcbY="3.4501201mm" outerDiameter="1.5999968mm" holeDiameter="1.1999976mm" shape="circle" />
<silkscreenpath route={[{"x":3.527996499999972,"y":-6.376454099999933},{"x":3.527996499999972,"y":-8.574976500000048},{"x":-6.378003499999977,"y":-8.574976500000048},{"x":-6.378003499999977,"y":-6.376454099999933}]} />
<silkscreenpath route={[{"x":7.851990899999919,"y":-4.086313899999936},{"x":8.099996500000088,"y":-4.086313899999936}]} />
<silkscreenpath route={[{"x":7.851990899999919,"y":5.932157300000085},{"x":8.099996500000088,"y":5.932157300000085},{"x":8.099996500000088,"y":-4.002976500000045}]} />
<silkscreenpath route={[{"x":5.051996500000087,"y":5.932157300000085},{"x":7.851990899999919,"y":5.932157300000085}]} />
<silkscreenpath route={[{"x":5.051996500000087,"y":-4.086313899999936},{"x":7.851990899999919,"y":-4.086313899999936}]} />
<silkscreenpath route={[{"x":-6.378003499999977,"y":-6.796976499999914},{"x":-6.378003499999977,"y":-7.685976499999924}]} />
<silkscreenpath route={[{"x":3.527996499999972,"y":-6.669976499999962},{"x":3.527996499999972,"y":-7.558976499999972}]} />
<silkscreenpath route={[{"x":-7.833067899999946,"y":7.427023500000018},{"x":-7.902003499999978,"y":7.427023500000018}]} />
<silkscreenpath route={[{"x":2.7669109000000844,"y":7.427023500000018},{"x":-5.6169179000000895,"y":7.427023500000018}]} />
<silkscreenpath route={[{"x":4.983060899999828,"y":-5.526976500000046},{"x":5.051996500000087,"y":-5.526976500000046},{"x":5.051996500000087,"y":7.427023500000018},{"x":4.983060899999828,"y":7.427023500000018}]} />
<silkscreenpath route={[{"x":-5.6169179000000895,"y":-5.526976500000046},{"x":2.7669109000000844,"y":-5.526976500000046}]} />
<silkscreenpath route={[{"x":-7.902003499999978,"y":7.427023500000018},{"x":-7.902003499999978,"y":-5.526976500000046},{"x":-7.833067899999946,"y":-5.526976500000046}]} />
<silkscreentext text="{NAME}" pcbX="0.1388999mm" pcbY="9.1542001mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-8.150200100000006,"y":8.40420010000014},{"x":8.427999900000032,"y":8.40420010000014},{"x":8.427999900000032,"y":-8.935999899999956},{"x":-8.150200100000006,"y":-8.935999899999956},{"x":-8.150200100000006,"y":8.40420010000014}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C37323742.obj?uuid=3d8711724bd94e00ae1621852217ca17",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C37323742.step?uuid=3d8711724bd94e00ae1621852217ca17",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 1.4249950000000027, y: -0.9500022999999729, z: -11.000007 },
      }}
      {...props}
    />
  )
}