import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["CS"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["GND"],
  pin5: ["pin5"],
  pin6: ["SCLK"],
  pin7: ["pin7"],
  pin8: ["VCC"],
  pin9: ["PAD"]
} as const

export const MX25R8035FZUIL0 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C152596"
  ]
}}
      manufacturerPartNumber="MX25R8035FZUIL0"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-0.750062mm" pcbY="-1.417574mm" width="0.2800096mm" height="0.5849874mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.249936mm" pcbY="-1.417574mm" width="0.2800096mm" height="0.5849874mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="0.249936mm" pcbY="-1.417574mm" width="0.2800096mm" height="0.5849874mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="0.750062mm" pcbY="-1.417574mm" width="0.2800096mm" height="0.5849874mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-0.750062mm" pcbY="1.417574mm" width="0.2800096mm" height="0.5849874mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-0.249936mm" pcbY="1.417574mm" width="0.2800096mm" height="0.5849874mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="0.249936mm" pcbY="1.417574mm" width="0.2800096mm" height="0.5849874mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="0.750062mm" pcbY="1.417574mm" width="0.2800096mm" height="0.5849874mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="0mm" pcbY="0mm" width="1.5999968mm" height="0.1999996mm" shape="rect" />
<silkscreenpath route={[{"x":-1.0761979999999767,"y":-1.5761969999999792},{"x":-1.0761979999999767,"y":1.5761970000000929}]} />
<silkscreenpath route={[{"x":1.0761979999999767,"y":1.5761970000000929},{"x":1.0761979999999767,"y":-1.5761969999999792}]} />
<silkscreenpath route={[{"x":-0.6499860000001263,"y":-2.009902000000011},{"x":-0.6533960070082685,"y":-2.035803574757665},{"x":-0.6633936416910728,"y":-2.059940000000097},{"x":-0.67929758176615,"y":-2.080666418233932},{"x":-0.7000239999999849,"y":-2.096570358309009},{"x":-0.7241604252423031,"y":-2.106567992991586},{"x":-0.7500620000000708,"y":-2.1099779999999555},{"x":-0.7759635747577249,"y":-2.106567992991586},{"x":-0.8001000000000431,"y":-2.096570358309009},{"x":-0.8208264182341054,"y":-2.080666418233932},{"x":-0.8367303583091825,"y":-2.059940000000097},{"x":-0.8467279929917595,"y":-2.035803574757665},{"x":-0.8501380000000154,"y":-2.009902000000011},{"x":-0.8467279929917595,"y":-1.9840004252423569},{"x":-0.8367303583091825,"y":-1.959863999999925},{"x":-0.8208264182341054,"y":-1.9391375817659764},{"x":-0.8001000000000431,"y":-1.9232336416908993},{"x":-0.7759635747577249,"y":-1.9132360070083223},{"x":-0.7500620000000708,"y":-1.9098260000000664},{"x":-0.7241604252423031,"y":-1.9132360070083223},{"x":-0.7000239999999849,"y":-1.9232336416908993},{"x":-0.67929758176615,"y":-1.9391375817659764},{"x":-0.6633936416910728,"y":-1.959863999999925},{"x":-0.6533960070082685,"y":-1.9840004252423569},{"x":-0.6499860000001263,"y":-2.009902000000011}]} />
<silkscreentext text="{NAME}" pcbX="0.0127mm" pcbY="2.7018mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-1.3168000000000575,"y":1.9518000000000484},{"x":1.342200000000048,"y":1.9518000000000484},{"x":1.342200000000048,"y":-2.3582000000000107},{"x":-1.3168000000000575,"y":-2.3582000000000107},{"x":-1.3168000000000575,"y":1.9518000000000484}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C152596.obj?uuid=8f43b71c541c4eb2a319dd3b001371d7",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C152596.step?uuid=8f43b71c541c4eb2a319dd3b001371d7",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}