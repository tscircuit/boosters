import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["OUT"],
  pin2: ["GND"],
  pin3: ["pin3"],
  pin4: ["EN"],
  pin5: ["pin5"],
  pin6: ["IN"]
} as const

export const TPS71750DSER = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2865961"
  ]
}}
      manufacturerPartNumber="TPS71750DSER"
      footprint={
        <footprint>
          <smtpad portHints={["pin1"]} pcbX="-0.6mm" pcbY="0.5mm" width="0.7mm" height="0.25mm" shape="rect" />
          <smtpad portHints={["pin2"]} pcbX="-0.6mm" pcbY="0mm" width="0.7mm" height="0.25mm" shape="rect" />
          <smtpad portHints={["pin3"]} pcbX="-0.6mm" pcbY="-0.5mm" width="0.7mm" height="0.25mm" shape="rect" />
          <smtpad portHints={["pin4"]} pcbX="0.6mm" pcbY="-0.5mm" width="0.7mm" height="0.25mm" shape="rect" />
          <smtpad portHints={["pin5"]} pcbX="0.6mm" pcbY="0mm" width="0.7mm" height="0.25mm" shape="rect" />
          <smtpad portHints={["pin6"]} pcbX="0.6mm" pcbY="0.5mm" width="0.7mm" height="0.25mm" shape="rect" />
          <silkscreenpath route={[{ x: -0.95, y: -0.95 }, { x: 0.95, y: -0.95 }]} />
          <silkscreenpath route={[{ x: -0.95, y: 0.95 }, { x: 0.95, y: 0.95 }]} />
        </footprint>
      }
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2865961.obj",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2865961.step",
        pcbRotationOffset: 270,
        modelOriginPosition: { x: 0.000012699999956566899, y: 0.0003809999999475622, z: 0 },
      }}
      {...props}
    />
  )
}
