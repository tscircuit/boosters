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

export const A_2_54_1_10P_ = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C57369"
  ]
}}
      manufacturerPartNumber="A_2_54_1_10P_"
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
<silkscreenpath route={[{"x":-10.159974600000027,"y":1.2499848000000071},{"x":-10.159974600000027,"y":-1.2500101999999913}]} />
<silkscreenpath route={[{"x":12.699974599999962,"y":-1.2500101999999913},{"x":-12.699974600000019,"y":-1.2500101999999913}]} />
<silkscreenpath route={[{"x":12.699974599999962,"y":-1.2500101999999913},{"x":12.699974599999962,"y":1.2499848000000071},{"x":-12.699974600000019,"y":1.2499848000000071},{"x":-12.699974600000019,"y":-1.2500101999999913}]} />
<silkscreentext text="{NAME}" pcbX="-0.0127mm" pcbY="2.27mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-12.975400000000008,"y":1.5200000000000102},{"x":12.949999999999989,"y":1.5200000000000102},{"x":12.949999999999989,"y":-1.5454000000000008},{"x":-12.975400000000008,"y":-1.5454000000000008},{"x":-12.975400000000008,"y":1.5200000000000102}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C57369.obj?uuid=a38f4b0967054638a152d3b817553ffb",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -11.429999499999973, y: 0, z: -0.000005999999999950489 },
      }}
      {...props}
    />
  )
}
