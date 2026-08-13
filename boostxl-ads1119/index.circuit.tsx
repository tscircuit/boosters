import { ADS1119IPWR } from "./imports/ADS1119IPWR"
import { CAT24C32YI_GT3 } from "./imports/CAT24C32YI_GT3"
import { GPFA104_0302A003R1BA } from "./imports/GPFA104_0302A003R1BA"
import { KF2EDGR_3_5_7P } from "./imports/KF2EDGR_3_5_7P"
import { LQH32PN1R0NN0L } from "./imports/LQH32PN1R0NN0L"
import { LTST_C171GKT } from "./imports/LTST_C171GKT"
import { PZ254V_12_6P } from "./imports/PZ254V_12_6P"
import { SSQ_110_03_T_D } from "./imports/SSQ_110_03_T_D"
import { TPS61252DSGR } from "./imports/TPS61252DSGR"
import { TPS71750DSER } from "./imports/TPS71750DSER"

const ANALOG_SHEET = "ADS1119 Analog Input and ADC"
const INTERFACE_SHEET = "ADS1119 LaunchPad Interface"
const POWER_SHEET = "ADS1119 Power Supply Generation"
const EEPROM_SHEET = "ADS1119 EEPROM Memory"

const N = {
  GND: "net.GND",
  LP33: "net.LP3V3",
  LP5: "net.LP5V",
  AVDD: "net.AVDD",
  VBOOST: "net.VBOOST",
  V5: "net.V5",
  SCL: "net.SCL",
  SDA: "net.SDA",
  RESET: "net.RESET",
  DRDY: "net.DRDY",
  A0: "net.A0",
  A1: "net.A1",
  AIN0: "net.AIN0",
  AIN1: "net.AIN1",
  AIN2: "net.AIN2",
  AIN3: "net.AIN3",
  ADC_AIN0: "net.ADC_AIN0",
  ADC_AIN1: "net.ADC_AIN1",
  ADC_AIN2: "net.ADC_AIN2",
  ADC_AIN3: "net.ADC_AIN3",
  REFP: "net.REFP",
  REFN: "net.REFN",
  EN: "net.BOOST_EN",
  SW: "net.BOOST_SW",
  FB: "net.BOOST_FB",
  WP: "net.EEPROM_WP",
  LED5: "net.LED5_LIMITED",
  LED33: "net.LED33_LIMITED",
} as const

const HEADER_PIN_STYLE = {
  pin1: { marginTop: "0.03mm", marginBottom: "0.03mm" },
  pin2: { marginTop: "0.03mm", marginBottom: "0.03mm" },
  pin3: { marginTop: "0.03mm", marginBottom: "0.03mm" },
  pin4: { marginTop: "0.03mm", marginBottom: "0.03mm" },
  pin5: { marginTop: "0.03mm", marginBottom: "0.03mm" },
  pin6: { marginTop: "0.03mm", marginBottom: "0.03mm" },
  pin7: { marginTop: "0.03mm", marginBottom: "0.03mm" },
  pin8: { marginTop: "0.03mm", marginBottom: "0.03mm" },
  pin9: { marginTop: "0.03mm", marginBottom: "0.03mm" },
  pin10: { marginTop: "0.03mm", marginBottom: "0.03mm" },
  pin11: { marginTop: "0.03mm", marginBottom: "0.03mm" },
  pin12: { marginTop: "0.03mm", marginBottom: "0.03mm" },
  pin13: { marginTop: "0.03mm", marginBottom: "0.03mm" },
  pin14: { marginTop: "0.03mm", marginBottom: "0.03mm" },
  pin15: { marginTop: "0.03mm", marginBottom: "0.03mm" },
  pin16: { marginTop: "0.03mm", marginBottom: "0.03mm" },
  pin17: { marginTop: "0.03mm", marginBottom: "0.03mm" },
  pin18: { marginTop: "0.03mm", marginBottom: "0.03mm" },
  pin19: { marginTop: "0.03mm", marginBottom: "0.03mm" },
  pin20: { marginTop: "0.03mm", marginBottom: "0.03mm" },
}

export default function Circuit() {
  return (
    <board
      name="BOOSTXL_ADS1119"
      width="58.42mm"
      height="58.42mm"
      solderMaskColor="red"
      silkscreenColor="white"
      defaultTraceWidth="0.2mm"
      minViaHoleDiameter="0.3mm"
      minViaPadDiameter="0.45mm"
    >
      <schematicsheet name={ANALOG_SHEET} displayName={ANALOG_SHEET} sheetIndex={1} />
      <schematicsheet name={INTERFACE_SHEET} displayName={INTERFACE_SHEET} sheetIndex={2} />
      <schematicsheet name={POWER_SHEET} displayName={POWER_SHEET} sheetIndex={3} />
      <schematicsheet name={EEPROM_SHEET} displayName={EEPROM_SHEET} sheetIndex={4} />

      <group
        name="ANALOG_INPUT_AND_ADC_BLOCK"
        schSheetName={ANALOG_SHEET}
        schX={8.4}
        schY={-4.0}
        pcbX={0}
        pcbY={0}
        schMaxTraceDistance="0.9mm"
        schTraceAutoLabelEnabled
      >
        <schematictext text="Analog Input and ADS1119 ADC" schX={-21.9} schY={10.0} fontSize={0.18} anchor="left" />

        <PZ254V_12_6P
          name="J5"
          schX={-18.9}
          schY={7.2}
          schWidth="2.8mm"
          schHeight="2.4mm"
          schPinArrangement={{ leftSide: [1, 3, 5], rightSide: [2, 4, 6] }}
          pcbX={-16}
          pcbY={-14.8}
          connections={{
            pin1: N.AIN0,
            pin2: N.AIN1,
            pin3: N.GND,
            pin4: N.GND,
            pin5: N.AIN2,
            pin6: N.AIN3,
          }}
        />

        <KF2EDGR_3_5_7P
          name="J6"
          schX={-19.4}
          schY={2.0}
          schWidth="3.2mm"
          schHeight="3.8mm"
          schPinArrangement={{ rightSide: [1, 2, 3, 4, 5, 6, 7] }}
          pcbX={0}
          pcbY={-25.2}
          connections={{
            pin1: N.GND,
            pin2: N.AIN3,
            pin3: N.AIN2,
            pin4: N.REFN,
            pin5: N.REFP,
            pin6: N.AIN1,
            pin7: N.AIN0,
          }}
        />

        <resistor
          name="R1"
          schX={-14.2}
          schY={1.0}
          manufacturerPartNumber="CRCW04021K00FKED"
          supplierPartNumbers={{ jlcpcb: ["C71623"] }}
          resistance="1kohm"
          footprint="0402"
          pcbX={-13.5}
          pcbY={-8.7}
          connections={{ pin1: N.AIN0, pin2: N.ADC_AIN0 }}
        />
        <capacitor
          name="C3"
          schX={-11.8}
          schY={0.3}
          manufacturerPartNumber="0402B103K500NT"
          supplierPartNumbers={{ jlcpcb: ["C1524"] }}
          capacitance="10nF"
          footprint="0402"
          pcbX={-10.8}
          pcbY={-8.7}
          connections={{ pin1: N.ADC_AIN0, pin2: N.GND }}
        />
        <resistor
          name="R2"
          schX={-14.2}
          schY={2.4}
          manufacturerPartNumber="CRCW04021K00FKED"
          supplierPartNumbers={{ jlcpcb: ["C71623"] }}
          resistance="1kohm"
          footprint="0402"
          pcbX={-13.5}
          pcbY={-6.5}
          connections={{ pin1: N.AIN1, pin2: N.ADC_AIN1 }}
        />
        <capacitor
          name="C4"
          schX={-11.8}
          schY={1.7}
          manufacturerPartNumber="0402B103K500NT"
          supplierPartNumbers={{ jlcpcb: ["C1524"] }}
          capacitance="10nF"
          footprint="0402"
          pcbX={-10.8}
          pcbY={-6.5}
          connections={{ pin1: N.ADC_AIN1, pin2: N.GND }}
        />
        <capacitor
          name="C8"
          schX={-9.9}
          schY={1.7}
          manufacturerPartNumber="CL05B104KO5NNNC"
          supplierPartNumbers={{ jlcpcb: ["C1525"] }}
          capacitance="0.1uF"
          footprint="0402"
          pcbX={-9.2}
          pcbY={-10.8}
          connections={{ pin1: N.ADC_AIN1, pin2: N.ADC_AIN0 }}
        />
        <resistor
          name="R3"
          schX={-14.2}
          schY={4.8}
          manufacturerPartNumber="CRCW04021K00FKED"
          supplierPartNumbers={{ jlcpcb: ["C71623"] }}
          resistance="1kohm"
          footprint="0402"
          pcbX={-13.5}
          pcbY={-4.3}
          connections={{ pin1: N.AIN2, pin2: N.ADC_AIN2 }}
        />
        <capacitor
          name="C5"
          schX={-11.8}
          schY={4.1}
          manufacturerPartNumber="0402B103K500NT"
          supplierPartNumbers={{ jlcpcb: ["C1524"] }}
          capacitance="10nF"
          footprint="0402"
          pcbX={-10.8}
          pcbY={-4.3}
          connections={{ pin1: N.ADC_AIN2, pin2: N.GND }}
        />
        <resistor
          name="R4"
          schX={-14.2}
          schY={6.2}
          manufacturerPartNumber="CRCW04021K00FKED"
          supplierPartNumbers={{ jlcpcb: ["C71623"] }}
          resistance="1kohm"
          footprint="0402"
          pcbX={-13.5}
          pcbY={-2.1}
          connections={{ pin1: N.AIN3, pin2: N.ADC_AIN3 }}
        />
        <capacitor
          name="C6"
          schX={-11.8}
          schY={5.5}
          manufacturerPartNumber="0402B103K500NT"
          supplierPartNumbers={{ jlcpcb: ["C1524"] }}
          capacitance="10nF"
          footprint="0402"
          pcbX={-10.8}
          pcbY={-2.1}
          connections={{ pin1: N.ADC_AIN3, pin2: N.GND }}
        />
        <capacitor
          name="C10"
          schX={-9.9}
          schY={5.5}
          manufacturerPartNumber="CL05B104KO5NNNC"
          supplierPartNumbers={{ jlcpcb: ["C1525"] }}
          capacitance="0.1uF"
          footprint="0402"
          pcbX={-8.5}
          pcbY={-3.2}
          pcbRotation={270}
          connections={{ pin1: N.ADC_AIN3, pin2: N.ADC_AIN2 }}
        />
        <capacitor
          name="C9"
          displayName="C9 DNP"
          doNotPlace
          schX={-9.9}
          schY={3.6}
          manufacturerPartNumber="GRM155R71A104KA01D (DNP)"
          supplierPartNumbers={{ jlcpcb: ["C1525"] }}
          capacitance="0.1uF"
          footprint="0402"
          connections={{ pin1: N.ADC_AIN2, pin2: N.ADC_AIN1 }}
        />

        <ADS1119IPWR
          name="U1"
          schX={-5.2}
          schY={4.0}
          schWidth="4.8mm"
          schHeight="5.8mm"
          schPinArrangement={{
            leftSide: [12, 9, 8, 6, 7, 10, 11, 5],
            rightSide: [13, 2, 1, 16, 15, 14, 3, 4],
          }}
          pcbX={-2.0}
          pcbY={-5.4}
          pcbRotation={270}
          connections={{
            REFP: N.REFP,
            REFN: N.REFN,
            AIN3: N.ADC_AIN3,
            AIN2: N.ADC_AIN2,
            AIN1: N.ADC_AIN1,
            AIN0: N.ADC_AIN0,
            AGND: N.GND,
            AVDD: N.AVDD,
            DVDD: N.LP33,
            A1: N.A1,
            A0: N.A0,
            SCL: N.SCL,
            SDA: N.SDA,
            DRDY: N.DRDY,
            RESET: N.RESET,
            DGND: N.GND,
          }}
        />
        <resistor
          name="R7"
          displayName="R7 DNP"
          doNotPlace
          schX={-10.0}
          schY={8.2}
          schRotation="90deg"
          manufacturerPartNumber="ERJ-2GE0R00X (DNP)"
          supplierPartNumbers={{ jlcpcb: ["C17168"] }}
          resistance="0ohm"
          footprint="0402"
          connections={{ pin1: N.AVDD, pin2: N.REFP }}
        />
        <resistor
          name="R8"
          schX={-10.0}
          schY={6.6}
          schRotation="90deg"
          manufacturerPartNumber="0402WGJ0000TCE"
          supplierPartNumbers={{ jlcpcb: ["C17168"] }}
          resistance="0ohm"
          footprint="0402"
          pcbX={-5.8}
          pcbY={1.8}
          connections={{ pin1: N.REFN, pin2: N.GND }}
        />
        <capacitor
          name="C11"
          schX={-8.5}
          schY={7.0}
          manufacturerPartNumber="CL05B104KO5NNNC"
          supplierPartNumbers={{ jlcpcb: ["C1525"] }}
          capacitance="0.1uF"
          footprint="0402"
          pcbX={-3.1}
          pcbY={1.8}
          connections={{ pin1: N.REFP, pin2: N.REFN }}
        />
        <capacitor
          name="C2"
          schX={-7.2}
          schY={9.0}
          manufacturerPartNumber="CL05A105KO5NNNC"
          supplierPartNumbers={{ jlcpcb: ["C29266"] }}
          capacitance="1uF"
          footprint="0402"
          pcbX={-5.5}
          pcbY={-10.0}
          connections={{ pin1: N.AVDD, pin2: N.GND }}
        />
        <capacitor
          name="C12"
          schX={-5.7}
          schY={9.0}
          manufacturerPartNumber="CL05B104KO5NNNC"
          supplierPartNumbers={{ jlcpcb: ["C1525"] }}
          capacitance="0.1uF"
          footprint="0402"
          pcbX={-2.8}
          pcbY={-10.0}
          connections={{ pin1: N.AVDD, pin2: N.GND }}
        />
        <testpoint
          name="TP1"
          schX={-9.6}
          schY={9.0}
          footprintVariant="pad"
          padShape="circle"
          padDiameter="1.8mm"
          pcbX={0.0}
          pcbY={-10.0}
          connections={{ pin1: N.AVDD }}
        />

        <capacitor
          name="C1"
          schX={-0.4}
          schY={8.7}
          manufacturerPartNumber="CL05A105KO5NNNC"
          supplierPartNumbers={{ jlcpcb: ["C29266"] }}
          capacitance="1uF"
          footprint="0402"
          pcbX={-0.2}
          pcbY={0.7}
          connections={{ pin1: N.LP33, pin2: N.GND }}
        />
        <capacitor
          name="C7"
          schX={1.1}
          schY={8.7}
          manufacturerPartNumber="CL05B104KO5NNNC"
          supplierPartNumbers={{ jlcpcb: ["C1525"] }}
          capacitance="0.1uF"
          footprint="0402"
          pcbX={2.5}
          pcbY={0.7}
          connections={{ pin1: N.LP33, pin2: N.GND }}
        />

        <resistor
          name="R11"
          schX={-1.5}
          schY={5.6}
          schRotation="90deg"
          manufacturerPartNumber="0402WGF1002TCE"
          supplierPartNumbers={{ jlcpcb: ["C25744"] }}
          resistance="10kohm"
          footprint="0402"
          pcbX={6.7}
          pcbY={-7.8}
          connections={{ pin1: N.LP33, pin2: N.DRDY }}
        />
        <resistor
          name="R12"
          schX={-0.2}
          schY={5.6}
          schRotation="90deg"
          manufacturerPartNumber="0402WGF1002TCE"
          supplierPartNumbers={{ jlcpcb: ["C25744"] }}
          resistance="10kohm"
          footprint="0402"
          pcbX={6.7}
          pcbY={-6.0}
          connections={{ pin1: N.LP33, pin2: N.RESET }}
        />
        <resistor
          name="R13"
          schX={1.1}
          schY={5.6}
          schRotation="90deg"
          manufacturerPartNumber="CRCW04021K00FKED"
          supplierPartNumbers={{ jlcpcb: ["C71623"] }}
          resistance="1kohm"
          footprint="0402"
          pcbX={6.7}
          pcbY={-4.2}
          connections={{ pin1: N.LP33, pin2: N.SCL }}
        />
        <resistor
          name="R14"
          schX={2.4}
          schY={5.6}
          schRotation="90deg"
          manufacturerPartNumber="CRCW04021K00FKED"
          supplierPartNumbers={{ jlcpcb: ["C71623"] }}
          resistance="1kohm"
          footprint="0402"
          pcbX={6.7}
          pcbY={-2.4}
          connections={{ pin1: N.LP33, pin2: N.SDA }}
        />
        <resistor
          name="R15"
          displayName="R15 DNP"
          doNotPlace
          schX={3.7}
          schY={5.6}
          schRotation="90deg"
          manufacturerPartNumber="ERJ-2GEJ103X (DNP)"
          supplierPartNumbers={{ jlcpcb: ["C25744"] }}
          resistance="10kohm"
          footprint="0402"
          pcbX={6.7}
          pcbY={3.0}
          connections={{ pin1: N.LP33, pin2: N.A1 }}
        />
        <resistor
          name="R16"
          schX={3.7}
          schY={3.2}
          schRotation="90deg"
          manufacturerPartNumber="0402WGF1002TCE"
          supplierPartNumbers={{ jlcpcb: ["C25744"] }}
          resistance="10kohm"
          footprint="0402"
          pcbX={6.7}
          pcbY={-0.6}
          connections={{ pin1: N.A1, pin2: N.GND }}
        />
        <resistor
          name="R17"
          displayName="R17 DNP"
          doNotPlace
          schX={5.3}
          schY={5.6}
          schRotation="90deg"
          manufacturerPartNumber="ERJ-2GEJ103X (DNP)"
          supplierPartNumbers={{ jlcpcb: ["C25744"] }}
          resistance="10kohm"
          footprint="0402"
          pcbX={6.7}
          pcbY={4.8}
          connections={{ pin1: N.LP33, pin2: N.A0 }}
        />
        <resistor
          name="R18"
          schX={5.3}
          schY={3.2}
          schRotation="90deg"
          manufacturerPartNumber="0402WGF1002TCE"
          supplierPartNumbers={{ jlcpcb: ["C25744"] }}
          resistance="10kohm"
          footprint="0402"
          pcbX={6.7}
          pcbY={1.2}
          connections={{ pin1: N.A0, pin2: N.GND }}
        />
      </group>

      <group
        name="LAUNCHPAD_INTERFACE_BLOCK"
        schSheetName={INTERFACE_SHEET}
        schX={-13.1}
        schY={-4.0}
        pcbX={0}
        pcbY={0}
        schMaxTraceDistance="0.9mm"
        schTraceAutoLabelEnabled
      >
        <schematictext text="LaunchPad Connectors" schX={7.6} schY={10.0} fontSize={0.18} anchor="left" />

        <SSQ_110_03_T_D
          name="J1J3"
          displayName="J1/J3"
          layer="bottom"
          schX={12.9}
          schY={7.0}
          schWidth="4.8mm"
          schHeight="3.4mm"
          schPinStyle={HEADER_PIN_STYLE}
          schPinArrangement={{
            leftSide: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
            rightSide: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
          }}
          pcbX={-22.86}
          pcbY={10.16}
          pcbRotation={90}
          noConnect={["pin1", "pin3", "pin5", "pin6", "pin7", "pin8", "pin9", "pin10", "pin11", "pin12", "pin13", "pin14", "pin15", "pin16", "pin18"]}
          connections={{
            pin20: N.LP33,
            pin19: N.LP5,
            pin17: N.GND,
            pin4: N.SCL,
            pin2: N.SDA,
          }}
        />
        <SSQ_110_03_T_D
          name="J2J4"
          displayName="J2/J4"
          layer="bottom"
          schX={12.9}
          schY={2.1}
          schWidth="4.8mm"
          schHeight="3.4mm"
          schPinStyle={HEADER_PIN_STYLE}
          schPinArrangement={{
            leftSide: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
            rightSide: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
          }}
          pcbX={22.86}
          pcbY={10.16}
          pcbRotation={90}
          noConnect={["pin1", "pin3", "pin4", "pin5", "pin7", "pin8", "pin9", "pin10", "pin11", "pin12", "pin13", "pin14", "pin15", "pin16", "pin17", "pin18", "pin20"]}
          connections={{ pin19: N.GND, pin6: N.RESET, pin2: N.DRDY }}
        />
        <capacitor
          name="C17"
          schX={9.0}
          schY={8.8}
          manufacturerPartNumber="CL31A106KOHNNNE"
          supplierPartNumbers={{ jlcpcb: ["C1849"] }}
          capacitance="10uF"
          footprint="1206"
          pcbX={-18.0}
          pcbY={21.8}
          connections={{ pin1: N.LP33, pin2: N.GND }}
        />
        <capacitor
          name="C18"
          schX={17.1}
          schY={8.8}
          manufacturerPartNumber="CL31A106KOHNNNE"
          supplierPartNumbers={{ jlcpcb: ["C1849"] }}
          capacitance="10uF"
          footprint="1206"
          pcbX={18.0}
          pcbY={21.8}
          connections={{ pin1: N.LP5, pin2: N.GND }}
        />
      </group>

      <group
        name="POWER_SUPPLY_GENERATION_BLOCK"
        schSheetName={POWER_SHEET}
        schX={5.0}
        schY={6.0}
        pcbX={0}
        pcbY={0}
        schMaxTraceDistance="0.9mm"
        schTraceAutoLabelEnabled
      >
        <schematictext text="Power Supply Generation Circuit" schX={-16.7} schY={-2.35} fontSize={0.18} anchor="left" />

        <TPS61252DSGR
          name="U2"
          schX={-10.7}
          schY={-5.9}
          schWidth="4.4mm"
          schHeight="3.6mm"
          schPinArrangement={{ leftSide: [8, 6, 4], rightSide: [7, 2, 3, 5, 1, 9] }}
          pcbX={-11.5}
          pcbY={13.5}
          connections={{
            VIN: N.LP5,
            EN: N.EN,
            ILIM: "net.ILIM",
            SW: N.SW,
            VOUT: N.VBOOST,
            FB: N.FB,
            PG: N.GND,
            GND: N.GND,
            EP: N.GND,
          }}
        />
        <LQH32PN1R0NN0L
          name="L1"
          schX={-12.0}
          schY={-2.7}
          pcbX={-11.5}
          pcbY={19.0}
          connections={{ pin1: N.LP5, pin2: N.SW }}
        />
        <capacitor
          name="C13"
          schX={-18.5}
          schY={-6.3}
          manufacturerPartNumber="CL05B104KO5NNNC"
          supplierPartNumbers={{ jlcpcb: ["C1525"] }}
          capacitance="0.1uF"
          footprint="0402"
          pcbX={-16.2}
          pcbY={14.6}
          connections={{ pin1: N.LP5, pin2: N.GND }}
        />
        <resistor
          name="R5"
          schX={-17.0}
          schY={-5.6}
          schRotation="90deg"
          manufacturerPartNumber="0603WAF1003T5E"
          supplierPartNumbers={{ jlcpcb: ["C25803"] }}
          resistance="100kohm"
          footprint="0603"
          pcbX={-15.8}
          pcbY={12.5}
          connections={{ pin1: N.LP5, pin2: N.EN }}
        />
        <pinheader
          name="JP1"
          pinCount={2}
          pitch="2.54mm"
          gender="male"
          manufacturerPartNumber="PEC02SAAN"
          supplierPartNumbers={{ jlcpcb: ["C7261569"] }}
          footprint="pinrow2"
          schX={-16.0}
          schY={-7.4}
          schWidth="2.0mm"
          schHeight="1.6mm"
          pcbX={-16.4}
          pcbY={9.4}
          connections={{ pin1: N.EN, pin2: N.GND }}
        />
        <resistor
          name="R6"
          schX={-7.2}
          schY={-7.6}
          schRotation="90deg"
          manufacturerPartNumber="RC0603FR-0720KL"
          supplierPartNumbers={{ jlcpcb: ["C105575"] }}
          resistance="20kohm"
          footprint="0603"
          pcbX={-10.0}
          pcbY={8.8}
          connections={{ pin1: "net.ILIM", pin2: N.GND }}
        />
        <resistor
          name="R9"
          schX={-4.7}
          schY={-5.2}
          schRotation="90deg"
          manufacturerPartNumber="CR0603FA7683G"
          supplierPartNumbers={{ jlcpcb: ["C101191"] }}
          resistance="768kohm"
          footprint="0603"
          pcbX={-6.4}
          pcbY={14.8}
          connections={{ pin1: N.VBOOST, pin2: N.FB }}
        />
        <resistor
          name="R10"
          schX={-4.7}
          schY={-7.4}
          schRotation="90deg"
          manufacturerPartNumber="RC0603FR-07215KL"
          supplierPartNumbers={{ jlcpcb: ["C185350"] }}
          resistance="215kohm"
          footprint="0603"
          pcbX={-6.0}
          pcbY={10.2}
          connections={{ pin1: N.FB, pin2: N.GND }}
        />
        <capacitor
          name="C14"
          schX={-2.9}
          schY={-5.2}
          manufacturerPartNumber="GRM1885C1H101JA01D"
          supplierPartNumbers={{ jlcpcb: ["C71664"] }}
          capacitance="100pF"
          footprint="0603"
          pcbX={-3.2}
          pcbY={16.4}
          connections={{ pin1: N.VBOOST, pin2: N.FB }}
        />
        <capacitor
          name="C15"
          schX={-1.2}
          schY={-6.3}
          manufacturerPartNumber="C1210C226K3RAC7800"
          supplierPartNumbers={{ jlcpcb: ["C696378"] }}
          capacitance="22uF"
          footprint="1210"
          pcbX={0.0}
          pcbY={11.2}
          connections={{ pin1: N.VBOOST, pin2: N.GND }}
        />
        <TPS71750DSER
          name="U3"
          schX={1.2}
          schY={-6.0}
          schWidth="3.8mm"
          schHeight="3.2mm"
          schPinArrangement={{ leftSide: [6, 4, 2], rightSide: [1, 3, 5] }}
          pcbX={4.8}
          pcbY={15.2}
          pcbRotation={90}
          noConnect={["pin3", "pin5"]}
          connections={{ IN: N.VBOOST, EN: N.VBOOST, OUT: N.V5, GND: N.GND }}
        />
        <capacitor
          name="C16"
          schX={3.6}
          schY={-6.3}
          manufacturerPartNumber="CL05A105KO5NNNC"
          supplierPartNumbers={{ jlcpcb: ["C29266"] }}
          capacitance="1uF"
          footprint="0402"
          pcbX={8.5}
          pcbY={13.0}
          pcbRotation={90}
          connections={{ pin1: N.V5, pin2: N.GND }}
        />
        <GPFA104_0302A003R1BA
          name="JP2"
          schX={6.0}
          schY={-9.4}
          schWidth="2.4mm"
          schHeight="1.6mm"
          pcbX={5.2}
          pcbY={9.0}
          pcbRotation={90}
          connections={{ pin1: N.V5, pin2: N.AVDD, pin3: N.LP33 }}
        />
        <resistor
          name="R19"
          schX={3.5}
          schY={-5.2}
          manufacturerPartNumber="0402WGF1600TCE"
          supplierPartNumbers={{ jlcpcb: ["C270641"] }}
          resistance="160ohm"
          footprint="0402"
          pcbX={13.0}
          pcbY={16.7}
          connections={{ pin1: N.V5, pin2: N.LED5 }}
        />
        <LTST_C171GKT
          name="D1"
          color="green"
          schX={5.1}
          schY={-5.2}
          pcbX={16.0}
          pcbY={16.7}
          pcbRotation={180}
          connections={{ anode: N.LED5, cathode: N.GND }}
        />
        <resistor
          name="R20"
          schX={3.5}
          schY={-7.5}
          manufacturerPartNumber="CRCW0402100RFKED"
          supplierPartNumbers={{ jlcpcb: ["C82865"] }}
          resistance="100ohm"
          footprint="0402"
          pcbX={13.0}
          pcbY={13.6}
          connections={{ pin1: N.LP33, pin2: N.LED33 }}
        />
        <LTST_C171GKT
          name="D2"
          color="green"
          schX={5.1}
          schY={-7.5}
          pcbX={16.0}
          pcbY={13.6}
          pcbRotation={180}
          connections={{ anode: N.LED33, cathode: N.GND }}
        />
      </group>

      <group
        name="EEPROM_MEMORY_BLOCK"
        schSheetName={EEPROM_SHEET}
        schX={-12.4}
        schY={6.0}
        pcbX={0}
        pcbY={0}
        schMaxTraceDistance="0.9mm"
        schTraceAutoLabelEnabled
      >
        <schematictext text="EEPROM Memory" schX={7.35} schY={-3.25} fontSize={0.18} anchor="left" />

        <CAT24C32YI_GT3
          name="U4"
          schX={11.0}
          schY={-6.1}
          schWidth="3.6mm"
          schHeight="3.2mm"
          schPinArrangement={{ leftSide: [1, 2, 3, 4], rightSide: [8, 7, 6, 5] }}
          pcbX={12.5}
          pcbY={3.0}
          connections={{
            A0: "net.EEPROM_A0",
            A1: N.GND,
            A2: N.GND,
            VSS: N.GND,
            VCC: N.LP33,
            WP: N.WP,
            SCL: N.SCL,
            SDA: N.SDA,
          }}
        />
        <resistor
          name="R21"
          schX={8.6}
          schY={-4.2}
          manufacturerPartNumber="0402WGF1002TCE"
          supplierPartNumbers={{ jlcpcb: ["C25744"] }}
          resistance="10kohm"
          footprint="0402"
          pcbX={8.5}
          pcbY={6.3}
          connections={{ pin1: "net.EEPROM_A0", pin2: N.LP33 }}
        />
        <resistor
          name="R22"
          schX={15.6}
          schY={-5.0}
          schRotation="90deg"
          manufacturerPartNumber="0402WGF1002TCE"
          supplierPartNumbers={{ jlcpcb: ["C25744"] }}
          resistance="10kohm"
          footprint="0402"
          pcbX={17.0}
          pcbY={6.3}
          connections={{ pin1: N.LP33, pin2: N.WP }}
        />
        <capacitor
          name="C19"
          schX={14.5}
          schY={-4.2}
          manufacturerPartNumber="CL05B104KO5NNNC"
          supplierPartNumbers={{ jlcpcb: ["C1525"] }}
          capacitance="0.1uF"
          footprint="0402"
          pcbX={15.0}
          pcbY={9.0}
          connections={{ pin1: N.LP33, pin2: N.GND }}
        />
        <pinheader
          name="JP3"
          pinCount={2}
          pitch="2.54mm"
          gender="male"
          manufacturerPartNumber="PEC02SAAN"
          supplierPartNumbers={{ jlcpcb: ["C7261569"] }}
          footprint="pinrow2"
          schX={15.9}
          schY={-7.0}
          schWidth="1.8mm"
          schHeight="1.4mm"
          pcbX={18.0}
          pcbY={2.3}
          connections={{ pin1: N.WP, pin2: N.GND }}
        />
      </group>

      <hole name="H1" diameter="3.2mm" pcbX={-25.4} pcbY={25.4} />
      <hole name="H2" diameter="3.2mm" pcbX={25.4} pcbY={25.4} />
      <hole name="H3" diameter="3.2mm" pcbX={-25.4} pcbY={-25.4} />
      <hole name="H4" diameter="3.2mm" pcbX={25.4} pcbY={-25.4} />

      <silkscreentext text="BOOSTXL-ADS1119" pcbX={0} pcbY={26.2} fontSize="1.4mm" anchorAlignment="center" />
      <silkscreentext text="ADS1119 16-BIT ADC" pcbX={0} pcbY={22.8} fontSize="1.0mm" anchorAlignment="center" />
      <silkscreentext text="J6: GND A3 A2 REFN REFP A1 A0" pcbX={0} pcbY={-21.4} fontSize="0.8mm" anchorAlignment="center" />
      <silkscreentext text="AVDD" pcbX={11.0} pcbY={7.4} fontSize="0.8mm" anchorAlignment="center" />
      <silkscreentext text="TP1" pcbX={0} pcbY={-11.7} fontSize="0.7mm" anchorAlignment="center" />

      <copperpour
        name="GND_BOTTOM_POUR"
        layer="bottom"
        connectsTo={N.GND}
        padMargin="0.2mm"
        traceMargin="0.2mm"
        boardEdgeMargin="0.3mm"
      />
    </board>
  )
}
