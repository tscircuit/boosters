import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["SCL"],
  pin2: ["GND"],
  pin3: ["ALERT"],
  pin4: ["ADD0"],
  pin5: ["V_POS"],
  pin6: ["SDA"],
  pin7: ["PAD"]
} as const

export const TMP116AIDRVR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2691433"
  ]
}}
      manufacturerPartNumber="TMP116AIDRVR"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-1.028446mm" pcbY="0.649986mm" width="0.6070092mm" height="0.3640074mm" cornerRadius="0.1820037mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-1.028446mm" pcbY="0mm" width="0.6070092mm" height="0.3640074mm" cornerRadius="0.1820037mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.028446mm" pcbY="-0.649986mm" width="0.6070092mm" height="0.3640074mm" cornerRadius="0.1820037mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="1.028446mm" pcbY="-0.649986mm" width="0.6070092mm" height="0.3640074mm" cornerRadius="0.1820037mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="1.028446mm" pcbY="0mm" width="0.6070092mm" height="0.3640074mm" cornerRadius="0.1820037mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="1.028446mm" pcbY="0.649986mm" width="0.6070092mm" height="0.3640074mm" cornerRadius="0.1820037mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="0mm" pcbY="0mm" width="0.999998mm" height="1.5999968mm" shape="rect" />
<silkscreenpath route={[{"x":-1.0761979999999767,"y":1.0761980000000904},{"x":1.0761979999999767,"y":1.0761980000000904}]} />
<silkscreenpath route={[{"x":-1.0761979999999767,"y":-1.0761979999999767},{"x":1.0761979999999767,"y":-1.0761979999999767}]} />
<silkscreenpath route={[{"x":-1.5570200000000796,"y":0.6499860000001263},{"x":-1.5595731778362278,"y":0.6305926889506281},{"x":-1.5670587164945573,"y":0.6125210000000152},{"x":-1.5789664888858397,"y":0.5970024888858916},{"x":-1.594485000000077,"y":0.5850947164944955},{"x":-1.6125566889505762,"y":0.577609177836166},{"x":-1.6319500000000744,"y":0.5750560000001315},{"x":-1.6513433110495725,"y":0.577609177836166},{"x":-1.6694150000000718,"y":0.5850947164944955},{"x":-1.6849335111143091,"y":0.5970024888858916},{"x":-1.6968412835055915,"y":0.6125210000000152},{"x":-1.704326822163921,"y":0.6305926889506281},{"x":-1.7068800000000692,"y":0.6499860000001263},{"x":-1.704326822163921,"y":0.6693793110496244},{"x":-1.6968412835055915,"y":0.6874510000001237},{"x":-1.6849335111143091,"y":0.7029695111142473},{"x":-1.6694150000000718,"y":0.7148772835055297},{"x":-1.6513433110495725,"y":0.7223628221638592},{"x":-1.6319500000000744,"y":0.7249160000000074},{"x":-1.6125566889505762,"y":0.7223628221638592},{"x":-1.594485000000077,"y":0.7148772835055297},{"x":-1.5789664888858397,"y":0.7029695111142473},{"x":-1.5670587164945573,"y":0.6874510000001237},{"x":-1.5595731778362278,"y":0.6693793110496244},{"x":-1.5570200000000796,"y":0.6499860000001263}]} />
<silkscreentext text="{NAME}" pcbX="-0.2794mm" pcbY="2.0668mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-1.9517999999999347,"y":1.3167999999999438},{"x":1.3929999999999154,"y":1.3167999999999438},{"x":1.3929999999999154,"y":-1.3421999999999343},{"x":-1.9517999999999347,"y":-1.3421999999999343},{"x":-1.9517999999999347,"y":1.3167999999999438}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2691433.obj",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2691433.step",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
