import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["C3P_NC", "C3_POS"],
  pin2: ["C3N_NC", "C3_NEG"],
  pin3: ["RIN1"],
  pin4: ["RIN2"],
  pin5: ["DOUT1"],
  pin6: ["DOUT2"],
  pin7: ["NC2"],
  pin8: ["NC1"],
  pin9: ["DIN2"],
  pin10: ["DIN1"],
  pin11: ["ROUT2"],
  pin12: ["ROUT1"],
  pin13: ["INVALID"],
  pin14: ["FORCEOFF"],
  pin15: ["FORCEON"],
  pin16: ["C1_NEG"],
  pin17: ["GND"],
  pin18: ["VL"],
  pin19: ["VCC"],
  pin20: ["V_POS"],
  pin21: ["C1_POS"],
  pin22: ["C2_POS"],
  pin23: ["C2_NEG"],
  pin24: ["V_NEG"],
  pin25: ["PAD", "EP"]
} as const

export const TRS3122ERGER = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C473384"
  ]
}}
      manufacturerPartNumber="TRS3122ERGER"
      footprint={<footprint>
        <smtpad portHints={["pin25"]} pcbX="-0.000762mm" pcbY="-0.000889mm" width="2.499995mm" height="2.499995mm" shape="rect" />
<platedhole portHints={["pin25"]} pcbX="-0.6mm" pcbY="-0.5mm" outerDiameter="0.4mm" holeDiameter="0.2mm" shape="circle" coveredWithSolderMask />
<platedhole portHints={["pin25"]} pcbX="0.6mm" pcbY="-0.5mm" outerDiameter="0.4mm" holeDiameter="0.2mm" shape="circle" coveredWithSolderMask />
<platedhole portHints={["pin25"]} pcbX="-0.6mm" pcbY="0.5mm" outerDiameter="0.4mm" holeDiameter="0.2mm" shape="circle" coveredWithSolderMask />
<platedhole portHints={["pin25"]} pcbX="0.6mm" pcbY="0.5mm" outerDiameter="0.4mm" holeDiameter="0.2mm" shape="circle" coveredWithSolderMask />
<smtpad portHints={["pin24"]} pcbX="-1.249934mm" pcbY="1.898269mm" width="0.299974mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="-0.750062mm" pcbY="1.898269mm" width="0.299974mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="-0.249936mm" pcbY="1.898269mm" width="0.299974mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="0.249936mm" pcbY="1.898269mm" width="0.299974mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="0.750062mm" pcbY="1.898269mm" width="0.299974mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="1.249934mm" pcbY="1.898269mm" width="0.299974mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="1.892046mm" pcbY="1.250061mm" width="0.5999988mm" height="0.299974mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="1.892046mm" pcbY="0.749935mm" width="0.5999988mm" height="0.299974mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="1.892046mm" pcbY="0.250063mm" width="0.5999988mm" height="0.299974mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="1.892046mm" pcbY="-0.250063mm" width="0.5999988mm" height="0.299974mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="1.892046mm" pcbY="-0.749935mm" width="0.5999988mm" height="0.299974mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="1.892046mm" pcbY="-1.250061mm" width="0.5999988mm" height="0.299974mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="1.249934mm" pcbY="-1.898269mm" width="0.299974mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="0.750062mm" pcbY="-1.898269mm" width="0.299974mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="0.249936mm" pcbY="-1.898269mm" width="0.299974mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="-0.249936mm" pcbY="-1.898269mm" width="0.299974mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-0.750062mm" pcbY="-1.898269mm" width="0.299974mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-1.249934mm" pcbY="-1.898269mm" width="0.299974mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-1.891538mm" pcbY="-1.250061mm" width="0.5999988mm" height="0.299974mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-1.891538mm" pcbY="-0.749935mm" width="0.5999988mm" height="0.299974mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-1.891538mm" pcbY="-0.250063mm" width="0.5999988mm" height="0.299974mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.891538mm" pcbY="0.250063mm" width="0.5999988mm" height="0.299974mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-1.891538mm" pcbY="0.749935mm" width="0.5999988mm" height="0.299974mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-1.892046mm" pcbY="1.250061mm" width="0.5999988mm" height="0.299974mm" shape="rect" />
<silkscreenpath route={[{"x":-2.104288399999973,"y":1.7000728000001573},{"x":-2.104288399999973,"y":2.100046600000155},{"x":-1.6999712000001637,"y":2.0999704000000747}]} />
<silkscreenpath route={[{"x":1.695678599999951,"y":2.100046600000155},{"x":2.095652399999949,"y":2.100046600000155},{"x":2.095652399999949,"y":1.7000728000001573}]} />
<silkscreenpath route={[{"x":2.099995799999988,"y":-1.6000221999998985},{"x":2.099995799999988,"y":-2.1000212000000147},{"x":1.7000219999998762,"y":-2.1000212000000147}]} />
<silkscreenpath route={[{"x":-2.0999958000001016,"y":-1.69997120000005},{"x":-2.0999958000001016,"y":-2.1000212000000147},{"x":-1.6999712000001637,"y":-2.1000212000000147}]} />
<silkscreenpath route={[{"x":-2.4200104000000238,"y":1.2699999999999818},{"x":-2.4240989464740323,"y":1.2389444063057908},{"x":-2.4360859582101284,"y":1.210005199999955},{"x":-2.4551545401682233,"y":1.1851545401680141},{"x":-2.4800052000001642,"y":1.1660859582099192},{"x":-2.5089444063057726,"y":1.1540989464739368},{"x":-2.540000000000191,"y":1.150010400000042},{"x":-2.5710555936942683,"y":1.1540989464739368},{"x":-2.5999947999999904,"y":1.1660859582099192},{"x":-2.6248454598319313,"y":1.1851545401680141},{"x":-2.643914041790026,"y":1.210005199999955},{"x":-2.655901053526236,"y":1.2389444063057908},{"x":-2.659989600000131,"y":1.2699999999999818},{"x":-2.655901053526236,"y":1.3010555936941728},{"x":-2.643914041790026,"y":1.3299948000000086},{"x":-2.6248454598319313,"y":1.3548454598319495},{"x":-2.5999947999999904,"y":1.3739140417900444},{"x":-2.5710555936942683,"y":1.3859010535260268},{"x":-2.540000000000191,"y":1.3899895999999217},{"x":-2.5089444063057726,"y":1.3859010535260268},{"x":-2.4800052000001642,"y":1.3739140417900444},{"x":-2.4551545401682233,"y":1.3548454598319495},{"x":-2.4360859582101284,"y":1.3299948000000086},{"x":-2.4240989464740323,"y":1.3010555936941728},{"x":-2.4200104000000238,"y":1.2699999999999818}]} />
<silkscreentext text="{NAME}" pcbX="-0.242062mm" pcbY="3.208911mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-2.9177620000001525,"y":2.4589110000000574},{"x":2.43363799999986,"y":2.4589110000000574},{"x":2.43363799999986,"y":-2.4352890000001253},{"x":-2.9177620000001525,"y":-2.4352890000001253},{"x":-2.9177620000001525,"y":2.4589110000000574}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C473384.obj",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C473384.step",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012699999842880061, y: 0.000012699999956566899, z: -0.02 },
      }}
            schWidth="5mm"
            schHeight="8mm"
            schPinArrangement={{
              leftSide: {
                direction: "top-to-bottom",
                pins: [
                  "VCC",
                  "V_POS",
                  "VL",
                  "DIN1",
                  "DIN2",
                  "FORCEON",
                  "FORCEOFF",
                  "ROUT1",
                  "ROUT2",
                  "C1_POS",
                  "C1_NEG",
                  "C2_POS",
                  "C2_NEG",
                ],
              },
              rightSide: {
                direction: "top-to-bottom",
                pins: [
                  "C3P_NC",
                  "C3N_NC",
                  "DOUT1",
                  "DOUT2",
                  "INVALID",
                  "RIN1",
                  "RIN2",
                  "NC2",
                  "NC1",
                  "V_NEG",
                  "GND",
                  "PAD",
                ],
              },
            }}
            schPinStyle={{
              pin22: { marginBottom: "0.7mm" },
              pin16: { marginBottom: "0.2mm" },
              pin21: { marginBottom: "0.7mm" },
              pin11: { marginBottom: "0.5mm" },
              pin14: { marginBottom: "0.5mm" },
              pin9: { marginBottom: "0.5mm" },
              pin18: { marginBottom: "0.5mm" },
              pin19: { marginBottom: "0.5mm" }, 
              pin20: { marginBottom: "0.5mm" },
              pin17: { marginBottom: "0.3mm" },
              pin24: { marginBottom: "0.3mm" },
              pin8: { marginBottom: "0.5mm" },
              pin4: { marginBottom: "0.5mm" },
              pin13: { marginBottom: "0.8mm" },
              pin6: { marginBottom: "0.5mm" },
              pin2: { marginBottom: "0.5mm" },
              pin1: { marginBottom: "0.7mm" },
            }}
      {...props}
    />
  )
}
