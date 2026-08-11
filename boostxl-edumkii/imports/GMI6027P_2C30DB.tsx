import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"]
} as const

export const GMI6027P_2C30DB = (props: ChipProps<typeof pinLabels>) => {
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
    "C233898"
  ]
}}
      manufacturerPartNumber="GMI6027P_2C30DB"
      footprint={<footprint>
        <platedhole  portHints={["pin2"]} pcbX="0.94996mm" pcbY="0mm" outerDiameter="1.2999974mm" holeDiameter="0.700024mm" shape="circle" />
<platedhole  portHints={["pin1"]} pcbX="-0.94996mm" pcbY="0mm" outerDiameter="1.2999974mm" holeDiameter="0.700024mm" shape="circle" />
<silkscreenpath route={[{"x":-1.3969999999999345,"y":-1.132103400000119},{"x":-0.3809999999999718,"y":-1.132103400000119}]} />
<silkscreenpath route={[{"x":-0.8889999999998963,"y":-1.6401034000000436},{"x":-0.8889999999998963,"y":-0.6241034000000809}]} />
<silkscreenpath route={[{"x":1.5240000000001146,"y":-1.132103400000119},{"x":0.5080000000000382,"y":-1.132103400000119}]} />
<silkscreenpath route={[{"x":3.1000700000000734,"y":0.8999219999999468},{"x":2.9944376763041873,"y":0.09756484284912403},{"x":2.6847393735100695,"y":-0.650113000000033},{"x":2.192080519153137,"y":-1.2921585191530767},{"x":1.5500350000000935,"y":-1.784817373510009},{"x":0.8023571571510502,"y":-2.094515676304013},{"x":1.1368683772161603e-13,"y":-2.200148000000013},{"x":-0.8023571571508228,"y":-2.094515676304013},{"x":-1.5500349999998662,"y":-1.784817373510009},{"x":-2.192080519152796,"y":-1.2921585191530767},{"x":-2.684739373509956,"y":-0.650113000000033},{"x":-2.9944376763038463,"y":0.09756484284912403},{"x":-3.100069999999846,"y":0.8999219999999468},{"x":-2.9944376763038463,"y":1.7022791571508833},{"x":-2.684739373509956,"y":2.4499569999999267},{"x":-2.192080519152796,"y":3.0920025191528566},{"x":-1.5500349999998662,"y":3.5846613735100163},{"x":-0.8023571571508228,"y":3.894359676303907},{"x":1.1368683772161603e-13,"y":3.99999200000002},{"x":0.8023571571510502,"y":3.894359676303907},{"x":1.5500350000000935,"y":3.5846613735100163},{"x":2.192080519153137,"y":3.0920025191528566},{"x":2.6847393735100695,"y":2.4499569999999267},{"x":2.9944376763041873,"y":1.7022791571508833},{"x":3.1000700000000734,"y":0.8999219999999468}]} />
<silkscreentext text="{NAME}" pcbX="0.01016mm" pcbY="4.998468mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-3.338639999999941,"y":4.248467999999889},{"x":3.3589600000001383,"y":4.248467999999889},{"x":3.3589600000001383,"y":-2.4491320000001906},{"x":-3.338639999999941,"y":-2.4491320000001906},{"x":-3.338639999999941,"y":4.248467999999889}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C233898.obj?uuid=83bfd6f4a6e64ee0b9371451d168a854",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C233898.step?uuid=83bfd6f4a6e64ee0b9371451d168a854",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.8999219999999468, z: 0.19999400000000023 },
      }}
      {...props}
    />
  )
}