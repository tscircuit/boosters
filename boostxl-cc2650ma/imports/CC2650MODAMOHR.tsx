import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["GND1"],
  pin2: ["NC1"],
  pin3: ["GND2"],
  pin4: ["DIO0"],
  pin5: ["DIO1"],
  pin6: ["DIO2"],
  pin7: ["DIO3"],
  pin8: ["DIO4"],
  pin9: ["JTAG_TMS"],
  pin10: ["JTAG_TCK"],
  pin11: ["DIO5"],
  pin12: ["DIO6"],
  pin13: ["nRESET"],
  pin14: ["DIO7"],
  pin15: ["DIO8"],
  pin16: ["DIO9"],
  pin17: ["DIO10"],
  pin18: ["DIO11"],
  pin19: ["DIO12"],
  pin20: ["DIO13"],
  pin21: ["DIO14"],
  pin22: ["VDD1"],
  pin23: ["VDD2"],
  pin24: ["NC2"],
  pin25: ["GND3"],
  pin26: ["GND4"],
  pin27: ["GND5"],
  pin28: ["GND6"],
  pin29: ["GND7"]
} as const

export const CC2650MODAMOHR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2152027"
  ]
}}
      manufacturerPartNumber="CC2650MODAMOH"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-5.050028mm" pcbY="5.06248035mm" width="0.5500116mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-5.050028mm" pcbY="3.91262235mm" width="0.5500116mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-5.050028mm" pcbY="2.76276435mm" width="0.5500116mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-5.050028mm" pcbY="1.61239835mm" width="0.5500116mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-5.050028mm" pcbY="0.46254035mm" width="0.5500116mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-5.050028mm" pcbY="-0.68757165mm" width="0.5500116mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-5.050028mm" pcbY="-1.83742965mm" width="0.5500116mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-5.050028mm" pcbY="-2.98754165mm" width="0.5500116mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="-5.050028mm" pcbY="-4.13714565mm" width="0.5500116mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="-3.449828mm" pcbY="-5.23747365mm" width="0.8999982mm" height="0.5500116mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="-2.29997mm" pcbY="-5.23747365mm" width="0.8999982mm" height="0.5500116mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="-1.149858mm" pcbY="-5.23747365mm" width="0.8999982mm" height="0.5500116mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="0mm" pcbY="-5.23747365mm" width="0.8999982mm" height="0.5500116mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="1.150112mm" pcbY="-5.23747365mm" width="0.8999982mm" height="0.5500116mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="2.29997mm" pcbY="-5.23747365mm" width="0.8999982mm" height="0.5500116mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="3.450082mm" pcbY="-5.23747365mm" width="0.8999982mm" height="0.5500116mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="5.050028mm" pcbY="-4.13714565mm" width="0.5500116mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="5.050028mm" pcbY="-2.98754165mm" width="0.5500116mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="5.050028mm" pcbY="-1.83742965mm" width="0.5500116mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="5.050028mm" pcbY="-0.68757165mm" width="0.5500116mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="5.050028mm" pcbY="0.46254035mm" width="0.5500116mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="5.050028mm" pcbY="1.61239835mm" width="0.5500116mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="5.050028mm" pcbY="2.76276435mm" width="0.5500116mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="5.050028mm" pcbY="3.91262235mm" width="0.5500116mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="5.050028mm" pcbY="5.06248035mm" width="0.5500116mm" height="0.8999982mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="-1.434846mm" pcbY="0.13767435mm" width="1.499997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="-1.434846mm" pcbY="-1.56234765mm" width="1.499997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="0.265176mm" pcbY="-1.56234765mm" width="1.499997mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="0.265176mm" pcbY="0.13767435mm" width="1.499997mm" height="1.499997mm" shape="rect" />
<silkscreenpath route={[{"x":-5.499811199999954,"y":11.212531550000108},{"x":-5.499811199999954,"y":5.7125425499999665}]} />
<silkscreenpath route={[{"x":5.4999890000001415,"y":11.212607749999961},{"x":-5.499989000000028,"y":11.212607749999961}]} />
<silkscreenpath route={[{"x":5.4999890000001415,"y":11.212607749999961},{"x":5.4999890000001415,"y":5.712644150000074}]} />
<silkscreenpath route={[{"x":-5.500065199999881,"y":-5.68730764999998},{"x":-4.0999155999999175,"y":-5.68730764999998}]} />
<silkscreenpath route={[{"x":5.4999890000001415,"y":-5.687358450000033},{"x":5.4999890000001415,"y":-4.787360250000006}]} />
<silkscreenpath route={[{"x":5.4999890000001415,"y":-5.687358450000033},{"x":4.099941000000172,"y":-5.687358450000033}]} />
<silkscreenpath route={[{"x":-5.499989000000028,"y":-5.687358450000033},{"x":-5.499989000000028,"y":-4.787360250000006}]} />
<silkscreentext text="{NAME}" pcbX="-0.02794mm" pcbY="12.24280835mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-5.789739999999711,"y":11.492808350000132},{"x":5.73386000000005,"y":11.492808350000132},{"x":5.73386000000005,"y":-5.948991649999925},{"x":-5.789739999999711,"y":-5.948991649999925},{"x":-5.789739999999711,"y":11.492808350000132}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2152027.obj?uuid=3f568160f6224f1fbedc98d620dfc0bf",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2152027.step?uuid=3f568160f6224f1fbedc98d620dfc0bf",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -2.7626246500000207, z: 0 },
      }}
      {...props}
    />
  )
}
