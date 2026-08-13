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

export const FTSH_105_01_F_DV_K = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C5382952"
  ]
}}
      manufacturerPartNumber="FTSH-105-01-F-DV-K"
      cadModel={{
        // C5155080 is the same keyed FTSH-105 SMT body with a different
        // contact plating option, so its model is geometrically compatible.
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C5155080.obj?uuid=18469703bb49491e8241d974911f36b7",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C5155080.step?uuid=18469703bb49491e8241d974911f36b7",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.4064 },
      }}
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-2.54mm" pcbY="-2.035048mm" width="0.740156mm" height="2.789936mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-2.54mm" pcbY="2.035048mm" width="0.740156mm" height="2.789936mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.27mm" pcbY="-2.035048mm" width="0.740156mm" height="2.789936mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-1.27mm" pcbY="2.035048mm" width="0.740156mm" height="2.789936mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="0mm" pcbY="-2.035048mm" width="0.740156mm" height="2.789936mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="0mm" pcbY="2.035048mm" width="0.740156mm" height="2.789936mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="1.27mm" pcbY="-2.035048mm" width="0.740156mm" height="2.789936mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="1.27mm" pcbY="2.035048mm" width="0.740156mm" height="2.789936mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="2.54mm" pcbY="-2.035048mm" width="0.740156mm" height="2.789936mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="2.54mm" pcbY="2.035048mm" width="0.740156mm" height="2.789936mm" shape="rect" />
<silkscreenpath route={[{"x":3.114217800000006,"y":-1.7149826000000985},{"x":3.2600900000001047,"y":-1.7149826000000985}]} />
<silkscreenpath route={[{"x":1.844217800000024,"y":-1.7149826000000985},{"x":1.9657822000000351,"y":-1.7149826000000985}]} />
<silkscreenpath route={[{"x":0.5742177999999285,"y":-1.7149826000000985},{"x":0.6957822000000533,"y":-1.7149826000000985}]} />
<silkscreenpath route={[{"x":-0.6957822000000533,"y":-1.7149826000000985},{"x":-0.5742177999999285,"y":-1.7149826000000985}]} />
<silkscreenpath route={[{"x":-1.9657821999999214,"y":-1.7149826000000985},{"x":-1.844217800000024,"y":-1.7149826000000985}]} />
<silkscreenpath route={[{"x":-3.260089999999991,"y":-1.7149826000000985},{"x":-3.114217800000006,"y":-1.7149826000000985}]} />
<silkscreenpath route={[{"x":3.114217800000006,"y":1.715007999999898},{"x":3.2600900000001047,"y":1.715007999999898}]} />
<silkscreenpath route={[{"x":1.844217800000024,"y":1.715007999999898},{"x":1.9657822000000351,"y":1.715007999999898}]} />
<silkscreenpath route={[{"x":0.5742177999999285,"y":1.715007999999898},{"x":0.6957822000000533,"y":1.715007999999898}]} />
<silkscreenpath route={[{"x":-0.6957822000000533,"y":1.715007999999898},{"x":-0.5742177999999285,"y":1.715007999999898}]} />
<silkscreenpath route={[{"x":-1.9657821999999214,"y":1.715007999999898},{"x":-1.844217800000024,"y":1.715007999999898}]} />
<silkscreenpath route={[{"x":-3.260089999999991,"y":1.715007999999898},{"x":-3.114217800000006,"y":1.715007999999898}]} />
<silkscreenpath route={[{"x":-3.260089999999991,"y":-1.7149826000000985},{"x":-3.260089999999991,"y":1.715007999999898}]} />
<silkscreenpath route={[{"x":3.2600900000001047,"y":1.715007999999898},{"x":3.2600900000001047,"y":-1.7149826000000985}]} />
<silkscreenpath route={[{"x":-3.4290000000000873,"y":-2.4130000000001246},{"x":-3.433327420061346,"y":-2.4458700187282147},{"x":-3.446014773719412,"y":-2.476500000000101},{"x":-3.4661974387892087,"y":-2.5028025612107285},{"x":-3.4925000000000637,"y":-2.5229852262807526},{"x":-3.52312998127195,"y":-2.5356725799388187},{"x":-3.55600000000004,"y":-2.5400000000000773},{"x":-3.588870018727903,"y":-2.5356725799388187},{"x":-3.6195000000000164,"y":-2.5229852262807526},{"x":-3.645802561210644,"y":-2.5028025612107285},{"x":-3.6659852262805543,"y":-2.476500000000101},{"x":-3.678672579938734,"y":-2.4458700187282147},{"x":-3.6829999999999927,"y":-2.4130000000001246},{"x":-3.678672579938734,"y":-2.380129981272148},{"x":-3.6659852262805543,"y":-2.3495000000001482},{"x":-3.645802561210644,"y":-2.323197438789407},{"x":-3.6195000000000164,"y":-2.3030147737196103},{"x":-3.588870018727903,"y":-2.2903274200614305},{"x":-3.55600000000004,"y":-2.286000000000172},{"x":-3.52312998127195,"y":-2.2903274200614305},{"x":-3.4925000000000637,"y":-2.3030147737196103},{"x":-3.4661974387892087,"y":-2.323197438789407},{"x":-3.446014773719412,"y":-2.3495000000001482},{"x":-3.433327420061346,"y":-2.380129981272148},{"x":-3.4290000000000873,"y":-2.4130000000001246}]} />
<silkscreentext text="{NAME}" pcbX="-0.2159mm" pcbY="4.432048mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-3.9329999999999927,"y":3.682047999999895},{"x":3.50120000000004,"y":3.682047999999895},{"x":3.50120000000004,"y":-3.675952000000052},{"x":-3.9329999999999927,"y":-3.675952000000052},{"x":-3.9329999999999927,"y":3.682047999999895}]} />
      </footprint>}
      
      {...props}
    />
  )
}
