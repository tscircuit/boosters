import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["GND"],
  pin2: ["VOUT"],
  pin3: ["FB"],
  pin4: ["ILIM"],
  pin5: ["PG"],
  pin6: ["EN"],
  pin7: ["SW"],
  pin8: ["VIN"],
  pin9: ["EP"]
} as const

const footprinterPinLabels = {
  ...pinLabels,
  "pin9": [...pinLabels["pin9"], "thermalpad"],
} as const

export const TPS61252DSGR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={footprinterPinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C128617"
  ]
}}
      manufacturerPartNumber="TPS61252DSGR"
      footprint={
        <footprint>
          <smtpad portHints={["pin1"]} pcbX="-0.75015mm" pcbY="-0.9276mm" width="0.28mm" height="0.505mm" shape="rect" />
          <smtpad portHints={["pin2"]} pcbX="-0.25005mm" pcbY="-0.9276mm" width="0.28mm" height="0.505mm" shape="rect" />
          <smtpad portHints={["pin3"]} pcbX="0.25005mm" pcbY="-0.9276mm" width="0.28mm" height="0.505mm" shape="rect" />
          <smtpad portHints={["pin4"]} pcbX="0.75015mm" pcbY="-0.9276mm" width="0.28mm" height="0.505mm" shape="rect" />
          <smtpad portHints={["pin5"]} pcbX="0.75015mm" pcbY="0.9276mm" width="0.28mm" height="0.505mm" shape="rect" />
          <smtpad portHints={["pin6"]} pcbX="0.25005mm" pcbY="0.9276mm" width="0.28mm" height="0.505mm" shape="rect" />
          <smtpad portHints={["pin7"]} pcbX="-0.25005mm" pcbY="0.9276mm" width="0.28mm" height="0.505mm" shape="rect" />
          <smtpad portHints={["pin8"]} pcbX="-0.75015mm" pcbY="0.9276mm" width="0.28mm" height="0.505mm" shape="rect" />
          <smtpad portHints={["pin9", "thermalpad"]} pcbX="0mm" pcbY="0mm" width="1.6mm" height="0.9mm" shape="rect" />
          <silkscreenpath route={[{ x: -1.25, y: -1.35 }, { x: -1.25, y: 1.35 }, { x: 1.25, y: 1.35 }, { x: 1.25, y: -1.35 }]} />
        </footprint>
      }
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C128617.obj",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C128617.step",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: -0.000012700000070253736, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
