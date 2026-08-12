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
  pin9: ["pin9"],
  pin10: ["pin10"]
} as const

export const PM254_1_10_Z_8_5 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2897373"
  ]
}}
      manufacturerPartNumber="PM254_1_10_Z_8_5"
      footprint={<footprint>
        <platedhole  portHints={["pin10"]} pcbX="11.43mm" pcbY="0mm" outerDiameter="1.6999966mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin9"]} pcbX="8.89mm" pcbY="0mm" outerDiameter="1.6999966mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin8"]} pcbX="6.35mm" pcbY="0mm" outerDiameter="1.6999966mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin7"]} pcbX="3.81mm" pcbY="0mm" outerDiameter="1.6999966mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin6"]} pcbX="1.27mm" pcbY="0mm" outerDiameter="1.6999966mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="-1.27mm" pcbY="0mm" outerDiameter="1.6999966mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="-3.81mm" pcbY="0mm" outerDiameter="1.6999966mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="-6.35mm" pcbY="0mm" outerDiameter="1.6999966mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-8.89mm" pcbY="0mm" outerDiameter="1.6999966mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin1"]} pcbX="-11.43mm" pcbY="0mm" outerDiameter="1.6999966mm" holeDiameter="1.1000232mm" shape="circle" />
<silkscreenpath route={[{"x":-10.159999999999997,"y":1.2499848000000071},{"x":-10.159999999999997,"y":-1.2500101999999913}]} />
<silkscreenpath route={[{"x":-12.949961400000007,"y":-1.2500101999999913},{"x":12.949986799999976,"y":-1.2500101999999913}]} />
<silkscreenpath route={[{"x":-12.949961400000007,"y":1.2499848000000071},{"x":-12.949961400000007,"y":-1.2500101999999913}]} />
<silkscreenpath route={[{"x":12.949986799999976,"y":1.2499848000000071},{"x":-12.949961400000007,"y":1.2499848000000071}]} />
<silkscreenpath route={[{"x":12.949986799999976,"y":-1.2500101999999913},{"x":12.949986799999976,"y":1.2499848000000071}]} />
<silkscreentext text="{NAME}" pcbX="-0.0127mm" pcbY="2.27mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-13.229400000000027,"y":1.5200000000000102},{"x":13.20399999999998,"y":1.5200000000000102},{"x":13.20399999999998,"y":-1.5200000000000102},{"x":-13.229400000000027,"y":-1.5200000000000102},{"x":-13.229400000000027,"y":1.5200000000000102}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2897373.obj?uuid=7f52dc44ad4a48719f0311acf9f06112",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2897373.step?uuid=7f52dc44ad4a48719f0311acf9f06112",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.0005000000000006111, y: 1.27, z: -4.2500064 },
      }}
      {...props}
    />
  )
}
