import type { DiodeProps } from "@tscircuit/props"

export const SS24FL = (props: DiodeProps) => {
  const { name = "D1", ...restProps } = props

  return (
    <diode
      name={name}
      schottky
      supplierPartNumbers={{
  "jlcpcb": [
    "C894433"
  ]
}}
      manufacturerPartNumber="SS24FL"
      footprint={<footprint>
        <smtpad portHints={["pin2", "cathode"]} pcbX="-1.550035mm" pcbY="0mm" width="1.1999976mm" height="1.3999972mm" shape="rect" />
<smtpad portHints={["pin1", "anode"]} pcbX="1.550035mm" pcbY="0mm" width="1.1999976mm" height="1.3999972mm" shape="rect" />
<silkscreenpath route={[{"x":-0.2538984000000255,"y":0},{"x":0.7459980000000996,"y":0}]} />
<silkscreenpath route={[{"x":0.00010160000010728254,"y":0},{"x":0.5081016000000318,"y":0.5080000000000382},{"x":0.5081016000000318,"y":-0.5080000000000382},{"x":0.00010160000010728254,"y":0}]} />
<silkscreenpath route={[{"x":-0.5057139999998981,"y":0.999998000000005},{"x":-0.5057139999998981,"y":-0.999998000000005}]} />
<silkscreenpath route={[{"x":-1.4998953999999003,"y":-0.999998000000005},{"x":1.5001240000001417,"y":-0.999998000000005}]} />
<silkscreenpath route={[{"x":-1.4998953999999003,"y":0.999998000000005},{"x":1.5001240000001417,"y":0.999998000000005}]} />
<silkscreenpath route={[{"x":0.00010160000010728254,"y":0.5080000000000382},{"x":0.00010160000010728254,"y":-0.5080000000000382}]} />
<silkscreentext text="{NAME}" pcbX="0.006731mm" pcbY="1.9906mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-2.3895689999999377,"y":1.2405999999999722},{"x":2.4030310000000554,"y":1.2405999999999722},{"x":2.4030310000000554,"y":-1.2659999999999627},{"x":-2.3895689999999377,"y":-1.2659999999999627},{"x":-2.3895689999999377,"y":1.2405999999999722}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C894433.obj?uuid=aab353d319254a87864d936184cd3265",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C894433.step?uuid=aab353d319254a87864d936184cd3265",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.00010160000010728254, y: 0, z: -0.16 },
      }}
      {...restProps}
    />
  )
}
