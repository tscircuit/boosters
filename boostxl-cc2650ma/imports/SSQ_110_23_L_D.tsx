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
  pin10: ["pin10"],
  pin11: ["pin11"],
  pin12: ["pin12"],
  pin13: ["pin13"],
  pin14: ["pin14"],
  pin15: ["pin15"],
  pin16: ["pin16"],
  pin17: ["pin17"],
  pin18: ["pin18"],
  pin19: ["pin19"],
  pin20: ["pin20"],
} as const

/** TI BOM part 06-04997. The pad and drill dimensions come from SWRC324. */
export const SSQ_110_23_L_D = (props: ChipProps<typeof pinLabels>) => (
  <chip
    pinLabels={pinLabels}
    manufacturerPartNumber="SSQ-110-23-L-D"
    footprint={
      <footprint>
        <platedhole portHints={["pin20"]} pcbX="-11.43mm" pcbY="1.27mm" outerDiameter="1.8mm" holeDiameter="1.05mm" shape="circle" />
        <platedhole portHints={["pin19"]} pcbX="-11.43mm" pcbY="-1.27mm" outerDiameter="1.8mm" holeDiameter="1.05mm" shape="circle" />
        <platedhole portHints={["pin18"]} pcbX="-8.89mm" pcbY="1.27mm" outerDiameter="1.8mm" holeDiameter="1.05mm" shape="circle" />
        <platedhole portHints={["pin17"]} pcbX="-8.89mm" pcbY="-1.27mm" outerDiameter="1.8mm" holeDiameter="1.05mm" shape="circle" />
        <platedhole portHints={["pin16"]} pcbX="-6.35mm" pcbY="1.27mm" outerDiameter="1.8mm" holeDiameter="1.05mm" shape="circle" />
        <platedhole portHints={["pin15"]} pcbX="-6.35mm" pcbY="-1.27mm" outerDiameter="1.8mm" holeDiameter="1.05mm" shape="circle" />
        <platedhole portHints={["pin14"]} pcbX="-3.81mm" pcbY="1.27mm" outerDiameter="1.8mm" holeDiameter="1.05mm" shape="circle" />
        <platedhole portHints={["pin13"]} pcbX="-3.81mm" pcbY="-1.27mm" outerDiameter="1.8mm" holeDiameter="1.05mm" shape="circle" />
        <platedhole portHints={["pin12"]} pcbX="-1.27mm" pcbY="1.27mm" outerDiameter="1.8mm" holeDiameter="1.05mm" shape="circle" />
        <platedhole portHints={["pin11"]} pcbX="-1.27mm" pcbY="-1.27mm" outerDiameter="1.8mm" holeDiameter="1.05mm" shape="circle" />
        <platedhole portHints={["pin10"]} pcbX="1.27mm" pcbY="1.27mm" outerDiameter="1.8mm" holeDiameter="1.05mm" shape="circle" />
        <platedhole portHints={["pin9"]} pcbX="1.27mm" pcbY="-1.27mm" outerDiameter="1.8mm" holeDiameter="1.05mm" shape="circle" />
        <platedhole portHints={["pin8"]} pcbX="3.81mm" pcbY="1.27mm" outerDiameter="1.8mm" holeDiameter="1.05mm" shape="circle" />
        <platedhole portHints={["pin7"]} pcbX="3.81mm" pcbY="-1.27mm" outerDiameter="1.8mm" holeDiameter="1.05mm" shape="circle" />
        <platedhole portHints={["pin6"]} pcbX="6.35mm" pcbY="1.27mm" outerDiameter="1.8mm" holeDiameter="1.05mm" shape="circle" />
        <platedhole portHints={["pin5"]} pcbX="6.35mm" pcbY="-1.27mm" outerDiameter="1.8mm" holeDiameter="1.05mm" shape="circle" />
        <platedhole portHints={["pin4"]} pcbX="8.89mm" pcbY="1.27mm" outerDiameter="1.8mm" holeDiameter="1.05mm" shape="circle" />
        <platedhole portHints={["pin3"]} pcbX="8.89mm" pcbY="-1.27mm" outerDiameter="1.8mm" holeDiameter="1.05mm" shape="circle" />
        <platedhole portHints={["pin2"]} pcbX="11.43mm" pcbY="1.27mm" outerDiameter="1.8mm" holeDiameter="1.05mm" shape="circle" />
        <platedhole portHints={["pin1"]} pcbX="11.43mm" pcbY="-1.27mm" outerDiameter="1.8mm" holeDiameter="1.05mm" shape="circle" />
        <silkscreenpath route={[{ x: -12.83, y: -2.45 }, { x: 12.83, y: -2.45 }, { x: 12.83, y: 2.45 }, { x: -12.83, y: 2.45 }, { x: -12.83, y: -2.45 }]} />
        <silkscreentext text="{NAME}" pcbX="0mm" pcbY="3.5mm" anchorAlignment="center" fontSize="1mm" />
        <courtyardoutline outline={[{ x: -13.2, y: -2.75 }, { x: 13.2, y: -2.75 }, { x: 13.2, y: 2.75 }, { x: -13.2, y: 2.75 }, { x: -13.2, y: -2.75 }]} />
      </footprint>
    }
    cadModel={{
      objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C3323139.obj?uuid=b43d0c057b6b4175ab19ee916be5b1eb",
      stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C3323139.step?uuid=b43d0c057b6b4175ab19ee916be5b1eb",
      pcbRotationOffset: 0,
      modelOriginPosition: { x: 0.0004863, y: 0, z: -4.2500064 },
    }}
    {...props}
  />
)
