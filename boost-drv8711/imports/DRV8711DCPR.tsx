import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["CP1"],
  pin2: ["CP2"],
  pin3: ["VCP"],
  pin4: ["VM"],
  pin5: ["GND1"],
  pin6: ["V5"],
  pin7: ["VINT"],
  pin8: ["SLEEPN"],
  pin9: ["RESET"],
  pin10: ["pin10"],
  pin11: ["pin11"],
  pin12: ["BIN1"],
  pin13: ["BIN2"],
  pin14: ["SCLK"],
  pin15: ["SDATI"],
  pin16: ["SCS"],
  pin17: ["SDATO"],
  pin18: ["FAULTN"],
  pin19: ["pin19"],
  pin20: ["BEMF"],
  pin21: ["BOUT2"],
  pin22: ["B2HS"],
  pin23: ["B2LS"],
  pin24: ["BISENN"],
  pin25: ["BISENP"],
  pin26: ["B1LS"],
  pin27: ["B1HS"],
  pin28: ["BOUT1"],
  pin29: ["GND3"],
  pin30: ["AOUT2"],
  pin31: ["A2HS"],
  pin32: ["A2LS"],
  pin33: ["AISENN"],
  pin34: ["AISENP"],
  pin35: ["A1LS"],
  pin36: ["A1HS"],
  pin37: ["AOUT1"],
  pin38: ["GND2"],
  pin39: ["EP"]
} as const

export const DRV8711DCPR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C60013"
  ]
}}
      manufacturerPartNumber="DRV8711DCPR"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-4.499991mm" pcbY="-2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin2"]} pcbX="-4.000119mm" pcbY="-2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin3"]} pcbX="-3.499993mm" pcbY="-2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin4"]} pcbX="-3.000121mm" pcbY="-2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin5"]} pcbX="-2.499995mm" pcbY="-2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin6"]} pcbX="-2.000123mm" pcbY="-2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin7"]} pcbX="-1.499997mm" pcbY="-2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin8"]} pcbX="-1.000125mm" pcbY="-2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin9"]} pcbX="-0.499999mm" pcbY="-2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin10"]} pcbX="-0.000127mm" pcbY="-2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin11"]} pcbX="0.499999mm" pcbY="-2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin12"]} pcbX="0.999871mm" pcbY="-2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin13"]} pcbX="1.499997mm" pcbY="-2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin14"]} pcbX="1.999869mm" pcbY="-2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin15"]} pcbX="2.499995mm" pcbY="-2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin16"]} pcbX="2.999867mm" pcbY="-2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin17"]} pcbX="3.499993mm" pcbY="-2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin18"]} pcbX="3.999865mm" pcbY="-2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin19"]} pcbX="4.499991mm" pcbY="-2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin38"]} pcbX="-4.499991mm" pcbY="2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin37"]} pcbX="-4.000119mm" pcbY="2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin36"]} pcbX="-3.499993mm" pcbY="2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin35"]} pcbX="-3.000121mm" pcbY="2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin34"]} pcbX="-2.499995mm" pcbY="2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin33"]} pcbX="-2.000123mm" pcbY="2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin32"]} pcbX="-1.499997mm" pcbY="2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin31"]} pcbX="-1.000125mm" pcbY="2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin30"]} pcbX="-0.499999mm" pcbY="2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin29"]} pcbX="-0.000127mm" pcbY="2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin28"]} pcbX="0.499999mm" pcbY="2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin27"]} pcbX="0.999871mm" pcbY="2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin26"]} pcbX="1.499997mm" pcbY="2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin25"]} pcbX="1.999869mm" pcbY="2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin24"]} pcbX="2.499995mm" pcbY="2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin23"]} pcbX="2.999867mm" pcbY="2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin22"]} pcbX="3.499993mm" pcbY="2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin21"]} pcbX="3.999865mm" pcbY="2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin20"]} pcbX="4.499991mm" pcbY="2.8575mm" width="0.2800096mm" height="1.715008mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin39"]} pcbX="0mm" pcbY="0mm" width="4.7500032mm" height="2.7399996mm" shape="rect" />
<platedhole portHints={["pin39"]} pcbX="-1.000125mm" pcbY="0.499872mm" outerDiameter="0.6096mm" holeDiameter="0.3048mm" shape="circle" />
<platedhole portHints={["pin39"]} pcbX="-0.000127mm" pcbY="0.499872mm" outerDiameter="0.6096mm" holeDiameter="0.3048mm" shape="circle" />
<platedhole portHints={["pin39"]} pcbX="0.999871mm" pcbY="0.499872mm" outerDiameter="0.6096mm" holeDiameter="0.3048mm" shape="circle" />
<platedhole portHints={["pin39"]} pcbX="0.999871mm" pcbY="-0.500126mm" outerDiameter="0.6096mm" holeDiameter="0.3048mm" shape="circle" />
<platedhole portHints={["pin39"]} pcbX="-0.000127mm" pcbY="-0.500126mm" outerDiameter="0.6096mm" holeDiameter="0.3048mm" shape="circle" />
<platedhole portHints={["pin39"]} pcbX="-1.000125mm" pcbY="-0.500126mm" outerDiameter="0.6096mm" holeDiameter="0.3048mm" shape="circle" />
<silkscreenpath route={[{"x":-4.926330000000007,"y":-1.7713960000000952},{"x":-4.926330000000007,"y":1.7713959999999815},{"x":4.926075999999966,"y":1.7713959999999815},{"x":4.926075999999966,"y":-1.7713960000000952},{"x":-4.926330000000007,"y":-1.7713960000000952}]} />
<silkscreenpath route={[{"x":-4.349876999999992,"y":-1.019047999999998},{"x":-4.354992010512547,"y":-1.057900362136479},{"x":-4.369988462536412,"y":-1.094105000000127},{"x":-4.393844372649028,"y":-1.1251946273511066},{"x":-4.4249340000000075,"y":-1.1490505374637223},{"x":-4.461138637863428,"y":-1.1640469894875878},{"x":-4.499991000000136,"y":-1.1691619999999148},{"x":-4.538843362136504,"y":-1.1640469894875878},{"x":-4.575048000000038,"y":-1.1490505374637223},{"x":-4.606137627351131,"y":-1.1251946273511066},{"x":-4.629993537463747,"y":-1.094105000000127},{"x":-4.644989989487499,"y":-1.057900362136479},{"x":-4.6501049999999395,"y":-1.019047999999998},{"x":-4.644989989487499,"y":-0.9801956378634031},{"x":-4.629993537463747,"y":-0.943990999999869},{"x":-4.606137627351131,"y":-0.912901372649003},{"x":-4.575048000000038,"y":-0.8890454625363873},{"x":-4.538843362136504,"y":-0.8740490105124081},{"x":-4.499991000000136,"y":-0.8689340000000811},{"x":-4.461138637863428,"y":-0.8740490105124081},{"x":-4.4249340000000075,"y":-0.8890454625363873},{"x":-4.393844372649028,"y":-0.912901372649003},{"x":-4.369988462536412,"y":-0.943990999999869},{"x":-4.354992010512547,"y":-0.9801956378634031},{"x":-4.349876999999992,"y":-1.019047999999998}]} />
<silkscreenpath route={[{"x":-4.942459000000099,"y":-2.857499999999959},{"x":-4.94757401051254,"y":-2.896352362136554},{"x":-4.962570462536405,"y":-2.932557000000088},{"x":-4.986426372649021,"y":-2.9636466273510678},{"x":-5.0175160000000005,"y":-2.9875025374636834},{"x":-5.053720637863535,"y":-3.002498989487549},{"x":-5.0925730000001295,"y":-3.007613999999876},{"x":-5.131425362136611,"y":-3.002498989487549},{"x":-5.167630000000031,"y":-2.9875025374636834},{"x":-5.198719627351238,"y":-2.9636466273510678},{"x":-5.222575537463854,"y":-2.932557000000088},{"x":-5.237571989487492,"y":-2.896352362136554},{"x":-5.242687000000046,"y":-2.857499999999959},{"x":-5.237571989487492,"y":-2.818647637863478},{"x":-5.222575537463854,"y":-2.78244299999983},{"x":-5.198719627351238,"y":-2.7513533726488504},{"x":-5.167630000000031,"y":-2.7274974625362347},{"x":-5.131425362136611,"y":-2.7125010105123692},{"x":-5.0925730000001295,"y":-2.7073860000000423},{"x":-5.053720637863535,"y":-2.7125010105123692},{"x":-5.0175160000000005,"y":-2.7274974625362347},{"x":-4.986426372649021,"y":-2.7513533726488504},{"x":-4.962570462536405,"y":-2.78244299999983},{"x":-4.94757401051254,"y":-2.818647637863478},{"x":-4.942459000000099,"y":-2.857499999999959}]} />
<silkscreentext text="{NAME}" pcbX="-0.152527mm" pcbY="4.5814mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-5.482527000000118,"y":3.8314000000000306},{"x":5.177472999999964,"y":3.8314000000000306},{"x":5.177472999999964,"y":-3.983799999999974},{"x":-5.482527000000118,"y":-3.983799999999974},{"x":-5.482527000000118,"y":3.8314000000000306}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C60013.obj?uuid=875845d354ce4a0bb58d3796a65ef076",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C60013.step?uuid=875845d354ce4a0bb58d3796a65ef076",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: -0.00011430000017753628, z: -0.099083 },
      }}
      {...props}
    />
  )
}
