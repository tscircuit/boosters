import { ADS7841ESQDBQRQ1 } from "./imports/ADS7841ESQDBQRQ1"
import { A_5_1814832_2 } from "./imports/A_5_1814832_2"
import { A_5001 } from "./imports/A_5001"
import { BR24G32FVT_3GE2 } from "./imports/BR24G32FVT_3GE2"
import { OPA2320AQDGKRQ1 } from "./imports/OPA2320AQDGKRQ1"
import { PEC02SAAN } from "./imports/PEC02SAAN"
import { PZ254V_12_4P } from "./imports/PZ254V_12_4P"
import { PZ254V_12_6P } from "./imports/PZ254V_12_6P"
import { REF5045AQDRQ1 } from "./imports/REF5045AQDRQ1"
import { REG71055DDCR } from "./imports/REG71055DDCR"
import { SN74LVC2T45QDCURQ1 } from "./imports/SN74LVC2T45QDCURQ1"
import { SSQ_110_03_T_D } from "./imports/SSQ_110_03_T_D"
import { TPS79901DRVR } from "./imports/TPS79901DRVR"

const POWER_SHEET = "ADS7841 Power Supply"
const DIGITAL_SHEET = "ADS7841 LaunchPad and EEPROM"
const LEVEL_SHEET = "ADS7841 SPI Level Translation"
const ANALOG_SHEET = "ADS7841 Analog Input Buffers"
const ADC_SHEET = "ADS7841 ADC and Voltage Reference"

const N = {
  GND: "net.GND",
  V5: "net.V5",
  V55_RAW: "net.V5V5_RAW",
  V55: "net.V5V5",
  VDD: "net.VDD",
  V33: "net.V3V3",
  LDO_FB: "net.LDO_FB",
  LDO_NR: "net.LDO_NR",
  CPUMP_P: "net.CPUMP_POS",
  CPUMP_N: "net.CPUMP_NEG",
  EEPROM_A0: "net.EEPROM_A0",
  ID_SCL: "net.ID_SCL",
  ID_SDA: "net.ID_SDA",
  SCLK_TIVA: "net.SCLK_TIVA",
  CS_TIVA: "net.CS_TIVA",
  SDI_TIVA: "net.SDI_TIVA",
  SDO_TIVA: "net.SDO_TIVA",
  BUSY_TIVA: "net.BUSY_TIVA",
  SHDN_TIVA: "net.SHDN_TIVA",
  LP_SCLK: "net.LP_SCLK",
  LP_SCL: "net.LP_SCL",
  LP_SDA: "net.LP_SDA",
  LP_CS: "net.LP_CS",
  LP_SDI: "net.LP_SDI",
  LP_SDO: "net.LP_SDO",
  LP_BUSY: "net.LP_BUSY",
  LP_SHDN: "net.LP_SHDN",
  SCLK: "net.SCLK",
  CS: "net.CS",
  SDI: "net.SDI",
  SDO: "net.SDO",
  BUSY: "net.BUSY",
  SHDN: "net.SHDN",
  ADC_DCLK: "net.ADC_DCLK",
  ADC_CS: "net.ADC_CS",
  ADC_DIN: "net.ADC_DIN",
  ADC_DOUT: "net.ADC_DOUT",
  WP: "net.EEPROM_WP",
  AIN0: "net.AIN0",
  AIN1: "net.AIN1",
  AIN2: "net.AIN2",
  AIN3: "net.AIN3",
  AMP0_IN: "net.AMP0_IN",
  AMP0_PLUS: "net.AMP0_PLUS",
  AMP0_MINUS: "net.AMP0_MINUS",
  AMP0_OUT: "net.AMP0_OUT",
  AMP2_IN: "net.AMP2_IN",
  AMP2_PLUS: "net.AMP2_PLUS",
  AMP2_MINUS: "net.AMP2_MINUS",
  AMP2_OUT: "net.AMP2_OUT",
  VREF: "net.VREF",
  VREF45_FILTERED: "net.VREF_4V5_FILTERED",
  VREF45_RAW: "net.VREF_4V5_RAW",
  DIVIDER: "net.AIN3_DIVIDER",
  DIVIDER_BOTTOM: "net.AIN3_DIVIDER_BOTTOM",
  IDD: "net.ADC_IDD",
} as const

export default function Circuit() {
  return (
    <board
      name="BOOSTXL_ADS7841_Q1"
      width="63.5mm"
      height="44.45mm"
      layers={4}
      solderMaskColor="red"
      silkscreenColor="white"
      defaultTraceWidth="0.2mm"
      minViaHoleDiameter="0.3mm"
      minViaPadDiameter="0.45mm"
      autorouter={{ preset: "auto_local", local: true, traceClearance: "0.2mm" }}
      autorouterEffortLevel="1x"
    >
      <schematicsheet name={POWER_SHEET} displayName={POWER_SHEET} sheetIndex={1} />
      <schematicsheet name={DIGITAL_SHEET} displayName={DIGITAL_SHEET} sheetIndex={2} />
      <schematicsheet name={LEVEL_SHEET} displayName={LEVEL_SHEET} sheetIndex={3} />
      <schematicsheet name={ANALOG_SHEET} displayName={ANALOG_SHEET} sheetIndex={4} />
      <schematicsheet name={ADC_SHEET} displayName={ADC_SHEET} sheetIndex={5} />

      <hole name="H1" diameter="3.2mm" pcbX={-26.1} pcbY={19.5} />
      <hole name="H2" diameter="3.2mm" pcbX={28.9} pcbY={19.5} />
      <hole name="H3" diameter="3.2mm" pcbX={-26.1} pcbY={-19.5} />
      <silkscreentext text="BOOSTXL-ADS7841-Q1" pcbX={14.8} pcbY={20.7} fontSize="0.9mm" anchorAlignment="center" />

      <group name="POWER_SUPPLY" schSheetName={POWER_SHEET} schX={0} schY={0} pcbX={0} pcbY={0} schMaxTraceDistance="1.2mm" schTraceAutoLabelEnabled>
        <schematicsection name="POWER_GENERATION" displayName="5 V to 5.5 V Charge Pump and 5 V LDO" />
        <schematictext text="5 V input -> REG71055-Q1 -> TPS79901-Q1 -> VDD" schX={-13.8} schY={5.4} fontSize={0.2} anchor="left" />

        <REG71055DDCR
          name="U1"
          schX={-9.5}
          schY={1.5}
          schWidth="4.5mm"
          schHeight="4.2mm"
          pcbX={-7.7}
          pcbY={19.2}
          connections={{ VIN: N.V5, Enable: N.V5, GND: N.GND, VOUT: N.V55_RAW, CPUMP_POS: N.CPUMP_P, CPUMP_NEG: N.CPUMP_N }}
        />
        <capacitor name="C1" capacitance="0.22uF" footprint="0603" manufacturerPartNumber="C0603C224J3RAC7867" supplierPartNumbers={{ jlcpcb: ["C106833"] }} schX={-9.5} schY={-1.7} pcbX={-9.5} pcbY={16.4} connections={{ pin1: N.CPUMP_P, pin2: N.CPUMP_N }} />
        <capacitor name="C2" capacitance="2.2uF" footprint="0805" manufacturerPartNumber="C0805C225K4RACTU" supplierPartNumbers={{ jlcpcb: ["C100210"] }} schX={-13.0} schY={1.5} pcbX={-11.8} pcbY={19.3} connections={{ pin1: N.V5, pin2: N.GND }} />
        <capacitor name="C5" capacitance="2.2uF" footprint="0805" manufacturerPartNumber="C0805C225K4RACTU" supplierPartNumbers={{ jlcpcb: ["C100210"] }} schX={-6.4} schY={1.5} pcbX={-3.2} pcbY={16.8} connections={{ pin1: N.V55_RAW, pin2: N.GND }} />
        <resistor name="R2" resistance="10ohm" footprint="0603" manufacturerPartNumber="CRCW060310R0FKEA" supplierPartNumbers={{ jlcpcb: ["C844919"] }} schX={-4.0} schY={2.7} pcbX={-3.2} pcbY={19.4} connections={{ pin1: N.V55_RAW, pin2: N.V55 }} />
        <capacitor name="C6" capacitance="10uF" footprint="0805" manufacturerPartNumber="0805YD106MAT2A" supplierPartNumbers={{ jlcpcb: ["C13585"] }} schX={-3.8} schY={0.7} pcbX={-4.3} pcbY={14.6} connections={{ pin1: N.V55, pin2: N.GND }} />
        <capacitor name="C7" capacitance="1uF" footprint="0603" manufacturerPartNumber="C0603C105K3RACTU" supplierPartNumbers={{ jlcpcb: ["C1591"] }} schX={-1.9} schY={0.7} pcbX={0.5} pcbY={14.6} connections={{ pin1: N.V55, pin2: N.GND }} />

        <TPS79901DRVR
          name="U2"
          schX={1.2}
          schY={1.5}
          schWidth="4.8mm"
          schHeight="4.2mm"
          pcbX={3.1}
          pcbY={17.8}
          connections={{ pin1: N.VDD, pin2: N.LDO_FB, pin3: N.GND, pin4: N.V55, pin5: N.LDO_NR, pin6: N.V55, pin7: N.GND }}
        />
        <capacitor name="C8" displayName="C8 DNP" doNotPlace capacitance="0.01uF" footprint="0603" manufacturerPartNumber="GRM188R71C103KA01D (DNP)" supplierPartNumbers={{ jlcpcb: ["C57112"] }} schX={1.2} schY={-1.7} pcbX={5.4} pcbY={19.3} pcbRotation={90} connections={{ pin1: N.LDO_NR, pin2: N.GND }} />
        <resistor name="R4" resistance="100kohm" footprint="0402" manufacturerPartNumber="RG1005P-104-B-T5" supplierPartNumbers={{ jlcpcb: ["C2073385"] }} schX={5.1} schY={2.6} pcbX={8.4} pcbY={18.2} pcbRotation={90} connections={{ pin1: N.VDD, pin2: N.LDO_FB }} />
        <resistor name="R11" resistance="31.6kohm" footprint="0402" manufacturerPartNumber="CRCW040231K6FKED" supplierPartNumbers={{ jlcpcb: ["C316008"] }} schX={5.1} schY={0.5} pcbX={9.8} pcbY={18.2} pcbRotation={90} connections={{ pin1: N.LDO_FB, pin2: N.GND }} />
        <capacitor name="C3" capacitance="180pF" footprint="0402" manufacturerPartNumber="04025A181FAT2A" supplierPartNumbers={{ jlcpcb: ["C272803"] }} schX={7.3} schY={2.6} pcbX={7.0} pcbY={18.2} pcbRotation={90} connections={{ pin1: N.VDD, pin2: N.LDO_FB }} />
        <capacitor name="C4" capacitance="2.2uF" footprint="0805" manufacturerPartNumber="C0805C225K4RACTU" supplierPartNumbers={{ jlcpcb: ["C100210"] }} schX={9.6} schY={1.2} pcbX={9.5} pcbY={14.0} connections={{ pin1: N.VDD, pin2: N.GND }} />
        <testpoint name="TP1" footprintVariant="pad" padShape="circle" padDiameter="1.2mm" schX={-13.0} schY={-3.3} pcbX={-13.8} pcbY={17.5} connections={{ pin1: N.V5 }} />
        <testpoint name="TP2" footprintVariant="pad" padShape="circle" padDiameter="1.2mm" schX={10.8} schY={-3.3} pcbX={0} pcbY={19.7} connections={{ pin1: N.V55 }} />
        <testpoint name="TP3" footprintVariant="pad" padShape="circle" padDiameter="1.2mm" schX={13.0} schY={-3.3} pcbX={7.0} pcbY={15.3} connections={{ pin1: N.VDD }} />
        <A_5001 name="TP4" schX={-11.5} schY={-3.3} pcbX={-25.0} pcbY={16.0} connections={{ pin1: N.GND }} />
        <A_5001 name="TP5" schX={-8.5} schY={-3.3} pcbX={25.8} pcbY={16.0} connections={{ pin1: N.GND }} />
        <A_5001 name="TP6" schX={-5.5} schY={-3.3} pcbX={-25.0} pcbY={-14.7} connections={{ pin1: N.GND }} />
        <A_5001 name="TP7" schX={-2.5} schY={-3.3} pcbX={27.5} pcbY={-14.7} connections={{ pin1: N.GND }} />
      </group>

      <group name="LAUNCHPAD_AND_EEPROM" schSheetName={DIGITAL_SHEET} schX={0} schY={0} pcbX={0} pcbY={0} schMaxTraceDistance="0.7mm" schTraceAutoLabelEnabled>
        <schematicsection name="LAUNCHPAD_HEADERS" displayName="LaunchPad Headers and Board-ID EEPROM" />
        <schematictext text="BoosterPack headers, board-ID EEPROM, and 0-ohm interface links" schX={-13.5} schY={6.2} fontSize={0.2} anchor="left" />
        <SSQ_110_03_T_D name="J1J3" schX={-12} schY={0} schWidth="4.8mm" schHeight="9.6mm" pcbX={-21.6} pcbY={0} layer="bottom" pcbRotation={90} connections={{ pin1: N.V33, pin2: N.V5, pin4: N.GND, pin13: N.LP_SCLK, pin17: N.LP_SCL, pin19: N.LP_SDA }} />
        <SSQ_110_03_T_D name="J2J4" schX={9.0} schY={0} schWidth="4.8mm" schHeight="9.6mm" pcbX={21.6} pcbY={0} layer="bottom" pcbRotation={90} connections={{ pin1: N.GND, pin3: N.LP_CS, pin9: N.LP_SDI, pin13: N.LP_SDO, pin17: N.LP_BUSY, pin20: N.LP_SHDN }} />

        <BR24G32FVT_3GE2 name="U4" schX={-4.0} schY={1.5} schWidth="4.2mm" schHeight="4.5mm" pcbX={-29.4} pcbY={-2.2} connections={{ A0: N.EEPROM_A0, A1: N.GND, A2: N.GND, GND: N.GND, VCC: N.V33, WP: N.WP, SCL: N.ID_SCL, SDA: N.ID_SDA }} />
        <resistor name="R12" resistance="10kohm" footprint="0402" manufacturerPartNumber="CRCW040210K0FKED" supplierPartNumbers={{ jlcpcb: ["C71617"] }} schX={-7.0} schY={4.8} pcbX={-27.8} pcbY={-9.6} pcbRotation={90} connections={{ pin1: N.EEPROM_A0, pin2: N.V33 }} />
        <resistor name="R13" resistance="1kohm" footprint="0402" manufacturerPartNumber="MCR01MZPF1001" supplierPartNumbers={{ jlcpcb: ["C253352"] }} schX={-3.8} schY={4.8} pcbX={-26.7} pcbY={5.2} pcbRotation={90} connections={{ pin1: N.ID_SCL, pin2: N.V33 }} />
        <resistor name="R14" resistance="1kohm" footprint="0402" manufacturerPartNumber="MCR01MZPF1001" supplierPartNumbers={{ jlcpcb: ["C253352"] }} schX={-1.8} schY={4.8} pcbX={-28.1} pcbY={5.2} pcbRotation={90} connections={{ pin1: N.ID_SDA, pin2: N.V33 }} />
        <resistor name="R15" resistance="10kohm" footprint="0402" manufacturerPartNumber="CRCW040210K0FKED" supplierPartNumbers={{ jlcpcb: ["C71617"] }} schX={0.2} schY={4.8} pcbX={-25.3} pcbY={5.2} pcbRotation={90} connections={{ pin1: N.WP, pin2: N.V33 }} />
        <capacitor name="C11" capacitance="0.1uF" footprint="0603" manufacturerPartNumber="GRM188R71C104KA01D" supplierPartNumbers={{ jlcpcb: ["C77050"] }} schX={1.8} schY={2.2} pcbX={-29.8} pcbY={5.6} pcbRotation={90} connections={{ pin1: N.V33, pin2: N.GND }} />
        <PEC02SAAN name="J5" schX={1.8} schY={-0.2} pcbX={-17.7} pcbY={16.7} pcbRotation={90} connections={{ pin1: N.WP, pin2: N.GND }} />
      </group>

      <group name="SPI_LEVEL_TRANSLATION" schSheetName={LEVEL_SHEET} schX={0} schY={0} pcbX={0} pcbY={0} schMaxTraceDistance="0.7mm" schTraceAutoLabelEnabled>
        <schematicsection name="LEVEL_TRANSLATORS" displayName="3.3 V LaunchPad to VDD SPI Level Translation" />
        <schematictext text="Signal flow: LaunchPad 3.3 V domain <-> ADS7841 VDD domain" schX={-13.5} schY={5.5} fontSize={0.2} anchor="left" />
        <SN74LVC2T45QDCURQ1 name="U3" schX={-8.2} schY={1.4} schWidth="4.2mm" schHeight="4.7mm" pcbX={15} pcbY={8.3} connections={{ VCCA: N.VDD, VCCB: N.V33, A1: N.CS, A2: N.SCLK, B1: N.CS_TIVA, B2: N.SCLK_TIVA, DIR: N.GND, GND: N.GND }} />
        <capacitor name="C9" capacitance="0.01uF" footprint="0603" manufacturerPartNumber="GRM188R71C103KA01D" supplierPartNumbers={{ jlcpcb: ["C57112"] }} schX={-9.3} schY={-2.4} pcbX={12.8} pcbY={11.8} pcbRotation={90} connections={{ pin1: N.VDD, pin2: N.GND }} />
        <capacitor name="C10" capacitance="0.01uF" footprint="0603" manufacturerPartNumber="GRM188R71C103KA01D" supplierPartNumbers={{ jlcpcb: ["C57112"] }} schX={-7.0} schY={-2.4} pcbX={16.0} pcbY={12.0} pcbRotation={90} connections={{ pin1: N.V33, pin2: N.GND }} />

        <SN74LVC2T45QDCURQ1 name="U5" schX={0} schY={1.4} schWidth="4.2mm" schHeight="4.7mm" pcbX={15} pcbY={0} pcbRotation={180} connections={{ VCCA: N.VDD, VCCB: N.V33, A1: N.SDI, A2: N.SHDN, B1: N.SDI_TIVA, B2: N.SHDN_TIVA, DIR: N.GND, GND: N.GND }} />
        <capacitor name="C13" capacitance="0.01uF" footprint="0603" manufacturerPartNumber="GRM188R71C103KA01D" supplierPartNumbers={{ jlcpcb: ["C57112"] }} schX={-1.1} schY={-2.4} pcbX={13.5} pcbY={4.2} pcbRotation={90} connections={{ pin1: N.VDD, pin2: N.GND }} />
        <capacitor name="C14" capacitance="0.01uF" footprint="0603" manufacturerPartNumber="GRM188R71C103KA01D" supplierPartNumbers={{ jlcpcb: ["C57112"] }} schX={1.1} schY={-2.4} pcbX={16.6} pcbY={4.2} pcbRotation={90} connections={{ pin1: N.V33, pin2: N.GND }} />

        <SN74LVC2T45QDCURQ1 name="U7" schX={8.2} schY={1.4} schWidth="4.2mm" schHeight="4.7mm" pcbX={15} pcbY={-9.4} connections={{ VCCA: N.V33, VCCB: N.VDD, A1: N.SDO_TIVA, A2: N.BUSY_TIVA, B1: N.SDO, B2: N.BUSY, DIR: N.GND, GND: N.GND }} />
        <capacitor name="C21" capacitance="0.01uF" footprint="0603" manufacturerPartNumber="GRM188R71C103KA01D" supplierPartNumbers={{ jlcpcb: ["C57112"] }} schX={7.0} schY={-2.4} pcbX={13.5} pcbY={-5.6} pcbRotation={90} connections={{ pin1: N.V33, pin2: N.GND }} />
        <capacitor name="C20" capacitance="0.01uF" footprint="0603" manufacturerPartNumber="GRM188R71C103KA01D" supplierPartNumbers={{ jlcpcb: ["C57112"] }} schX={9.3} schY={-2.4} pcbX={16.6} pcbY={-5.6} pcbRotation={90} connections={{ pin1: N.VDD, pin2: N.GND }} />
      </group>

      <group name="LAUNCHPAD_LINKS" schSheetName={DIGITAL_SHEET} schX={0} schY={0} pcbX={0} pcbY={0} schMaxTraceDistance="0.7mm" schTraceAutoLabelEnabled>
        <resistor name="R5" resistance="0ohm" footprint="0603" manufacturerPartNumber="CRCW06030000Z0EA" supplierPartNumbers={{ jlcpcb: ["C844915"] }} schX={-7.2} schY={-3.5} pcbX={-24.9} pcbY={-1.4} pcbRotation={90} connections={{ pin1: N.SCLK_TIVA, pin2: N.LP_SCLK }} />
        <resistor name="R8" resistance="0ohm" footprint="0603" manufacturerPartNumber="CRCW06030000Z0EA" supplierPartNumbers={{ jlcpcb: ["C844915"] }} schX={-7.2} schY={-5.0} pcbX={-26.6} pcbY={-1.4} pcbRotation={90} connections={{ pin1: N.ID_SCL, pin2: N.LP_SCL }} />
        <resistor name="R10" resistance="0ohm" footprint="0603" manufacturerPartNumber="CRCW06030000Z0EA" supplierPartNumbers={{ jlcpcb: ["C844915"] }} schX={-4.8} schY={-5.0} pcbX={-25.1} pcbY={-8.8} pcbRotation={90} connections={{ pin1: N.ID_SDA, pin2: N.LP_SDA }} />
        <resistor name="R1" resistance="0ohm" footprint="0603" manufacturerPartNumber="CRCW06030000Z0EA" supplierPartNumbers={{ jlcpcb: ["C844915"] }} schX={4.8} schY={-3.5} pcbX={18.5} pcbY={8.9} pcbRotation={90} connections={{ pin1: N.CS_TIVA, pin2: N.LP_CS }} />
        <resistor name="R3" resistance="0ohm" footprint="0603" manufacturerPartNumber="CRCW06030000Z0EA" supplierPartNumbers={{ jlcpcb: ["C844915"] }} schX={4.8} schY={-5.0} pcbX={18.5} pcbY={1.3} pcbRotation={90} connections={{ pin1: N.SDI_TIVA, pin2: N.LP_SDI }} />
        <resistor name="R6" resistance="0ohm" footprint="0603" manufacturerPartNumber="CRCW06030000Z0EA" supplierPartNumbers={{ jlcpcb: ["C844915"] }} schX={7.2} schY={-3.5} pcbX={18.5} pcbY={-3.8} pcbRotation={90} connections={{ pin1: N.SDO_TIVA, pin2: N.LP_SDO }} />
        <resistor name="R7" resistance="0ohm" footprint="0603" manufacturerPartNumber="CRCW06030000Z0EA" supplierPartNumbers={{ jlcpcb: ["C844915"] }} schX={7.2} schY={-5.0} pcbX={18.5} pcbY={-8.9} pcbRotation={90} connections={{ pin1: N.BUSY_TIVA, pin2: N.LP_BUSY }} />
        <resistor name="R9" resistance="0ohm" footprint="0603" manufacturerPartNumber="CRCW06030000Z0EA" supplierPartNumbers={{ jlcpcb: ["C844915"] }} schX={9.6} schY={-5.0} pcbX={18.8} pcbY={-12.1} pcbRotation={90} connections={{ pin1: N.SHDN_TIVA, pin2: N.LP_SHDN }} />
      </group>

      <group name="ANALOG_BUFFERS" schSheetName={ANALOG_SHEET} schX={0} schY={0} pcbX={0} pcbY={0} schMaxTraceDistance="1mm" schTraceAutoLabelEnabled>
        <schematicsection name="OPTIONAL_INPUT_BUFFERS" displayName="Optional OPA2320 Buffers for AIN0 and AIN2" />
        <schematictext text="AIN0 and AIN2: optional SMA/header inputs, OPA2320-Q1 buffers, and RC filters" schX={-13.5} schY={6.2} fontSize={0.2} anchor="left" />
        <OPA2320AQDGKRQ1 name="U6" schX={0} schY={0} schWidth="5.0mm" schHeight="5.0mm" schPinArrangement={{ leftSide: [2, 3, 5, 6], rightSide: [1, 7], topSide: [8], bottomSide: [4] }} pcbX={-11.7} pcbY={-3.6} connections={{ pin1: N.AMP0_OUT, pin2: N.AMP0_MINUS, pin3: N.AMP0_PLUS, pin4: N.GND, pin5: N.AMP2_PLUS, pin6: N.AMP2_MINUS, pin7: N.AMP2_OUT, pin8: N.VDD }} />

        <A_5_1814832_2 name="J7" displayName="J7 DNP" doNotPlace schX={-12.5} schY={3.8} schWidth="3.6mm" schHeight="3.8mm" pcbX={-18.5} pcbY={-17.2} connections={{ SIGNAL: N.AMP0_IN, GND1: N.GND, GND2: N.GND, GND3: N.GND, GND4: N.GND }} />
        <PEC02SAAN name="J9" displayName="J9 DNP" doNotPlace schX={-10.5} schY={3.8} pcbX={-18.0} pcbY={-9.8} pcbRotation={90} connections={{ pin1: N.AMP0_IN, pin2: N.GND }} />
        <resistor name="R20" resistance="0ohm" footprint="0603" manufacturerPartNumber="CRCW06030000Z0EA" supplierPartNumbers={{ jlcpcb: ["C844915"] }} schX={-8.5} schY={3.8} pcbX={-12.5} pcbY={-13.0} connections={{ pin1: N.AMP0_IN, pin2: N.AMP0_PLUS }} />
        <capacitor name="C18" displayName="C18 DNP" doNotPlace capacitance="0.01uF" footprint="0603" manufacturerPartNumber="GRM188R71C103KA01D (DNP)" supplierPartNumbers={{ jlcpcb: ["C57112"] }} schX={-6.8} schY={2.1} pcbX={-10.3} pcbY={-8.0} connections={{ pin1: N.AMP0_PLUS, pin2: N.GND }} />
        <resistor name="R22" resistance="1Mohm" footprint="0402" manufacturerPartNumber="CRCW04021M00JNED" supplierPartNumbers={{ jlcpcb: ["C26083"] }} schX={-5.3} schY={2.1} pcbX={-8.2} pcbY={-10.2} pcbRotation={90} connections={{ pin1: N.AMP0_PLUS, pin2: N.GND }} />
        <resistor name="R17" resistance="0ohm" footprint="0603" manufacturerPartNumber="CRCW06030000Z0EA" supplierPartNumbers={{ jlcpcb: ["C844915"] }} schX={-4.8} schY={4.8} pcbX={-13.8} pcbY={-11.2} connections={{ pin1: N.AMP0_OUT, pin2: N.AMP0_MINUS }} />
        <capacitor name="C12" displayName="C12 DNP" doNotPlace capacitance="0.01uF" footprint="0603" manufacturerPartNumber="GRM188R71C103KA01D (DNP)" supplierPartNumbers={{ jlcpcb: ["C57112"] }} schX={-2.4} schY={4.8} pcbX={-10.5} pcbY={-11.2} connections={{ pin1: N.AMP0_OUT, pin2: N.AMP0_MINUS }} />
        <resistor name="R18" displayName="R18 DNP" doNotPlace resistance="1kohm" footprint="0402" manufacturerPartNumber="CRCW04021K00JNED (DNP)" supplierPartNumbers={{ jlcpcb: ["C71623"] }} schX={-7.4} schY={0.1} pcbX={-14.5} pcbY={-7.0} connections={{ pin1: N.AMP0_IN, pin2: N.AMP0_MINUS }} />
        <resistor name="R27" displayName="R27 DNP" doNotPlace resistance="330kohm" footprint="0402" manufacturerPartNumber="CRCW0402330KJNED (DNP)" supplierPartNumbers={{ jlcpcb: ["C25780"] }} schX={-10.0} schY={1.2} pcbX={-14.0} pcbY={-2.8} pcbRotation={90} connections={{ pin1: N.AMP0_IN, pin2: N.VDD }} />
        <resistor name="R19" resistance="100ohm" footprint="0402" manufacturerPartNumber="CRCW0402100RFKED" supplierPartNumbers={{ jlcpcb: ["C82865"] }} schX={5.0} schY={3.8} pcbX={-8.8} pcbY={-1.0} pcbRotation={90} connections={{ pin1: N.AMP0_OUT, pin2: N.AIN0 }} />
        <capacitor name="C19" capacitance="560pF" footprint="0603" manufacturerPartNumber="C0603C561J5GACTU" supplierPartNumbers={{ jlcpcb: ["C107117"] }} schX={7.5} schY={2.1} pcbX={-16.2} pcbY={-4.8} pcbRotation={90} connections={{ pin1: N.AIN0, pin2: N.GND }} />
        <PEC02SAAN name="J8" schX={10.0} schY={3.8} pcbX={-6.7} pcbY={-4.6} pcbRotation={90} connections={{ pin1: N.AIN0, pin2: N.GND }} />

        <A_5_1814832_2 name="J11" displayName="J11 DNP" doNotPlace schX={-12.5} schY={-3.8} schWidth="3.6mm" schHeight="3.8mm" pcbX={-10.7} pcbY={11.2} connections={{ SIGNAL: N.AMP2_IN, GND1: N.GND, GND2: N.GND, GND3: N.GND, GND4: N.GND }} />
        <PEC02SAAN name="J14" displayName="J14 DNP" doNotPlace schX={-10.5} schY={-3.8} pcbX={-15.8} pcbY={3.6} pcbRotation={90} connections={{ pin1: N.AMP2_IN, pin2: N.GND }} />
        <resistor name="R32" resistance="0ohm" footprint="0603" manufacturerPartNumber="CRCW06030000Z0EA" supplierPartNumbers={{ jlcpcb: ["C844915"] }} schX={-8.5} schY={-3.8} pcbX={-11.0} pcbY={5.4} connections={{ pin1: N.AMP2_IN, pin2: N.AMP2_PLUS }} />
        <capacitor name="C28" displayName="C28 DNP" doNotPlace capacitance="0.01uF" footprint="0603" manufacturerPartNumber="GRM188R71C103KA01D (DNP)" supplierPartNumbers={{ jlcpcb: ["C57112"] }} schX={-6.8} schY={-5.3} pcbX={-10.7} pcbY={2.5} connections={{ pin1: N.AMP2_PLUS, pin2: N.GND }} />
        <resistor name="R33" resistance="1Mohm" footprint="0402" manufacturerPartNumber="CRCW04021M00JNED" supplierPartNumbers={{ jlcpcb: ["C26083"] }} schX={-5.3} schY={-5.3} pcbX={-7.7} pcbY={0.8} pcbRotation={90} connections={{ pin1: N.AMP2_PLUS, pin2: N.GND }} />
        <resistor name="R28" resistance="0ohm" footprint="0603" manufacturerPartNumber="CRCW06030000Z0EA" supplierPartNumbers={{ jlcpcb: ["C844915"] }} schX={-4.8} schY={-2.8} pcbX={-7.8} pcbY={4.3} connections={{ pin1: N.AMP2_OUT, pin2: N.AMP2_MINUS }} />
        <capacitor name="C22" displayName="C22 DNP" doNotPlace capacitance="0.01uF" footprint="0603" manufacturerPartNumber="GRM188R71C103KA01D (DNP)" supplierPartNumbers={{ jlcpcb: ["C57112"] }} schX={-2.4} schY={-2.8} pcbX={-7.8} pcbY={6.0} connections={{ pin1: N.AMP2_OUT, pin2: N.AMP2_MINUS }} />
        <resistor name="R29" displayName="R29 DNP" doNotPlace resistance="1kohm" footprint="0402" manufacturerPartNumber="CRCW04021K00JNED (DNP)" supplierPartNumbers={{ jlcpcb: ["C71623"] }} schX={-7.4} schY={-1.0} pcbX={-13.0} pcbY={0.5} connections={{ pin1: N.AMP2_IN, pin2: N.AMP2_MINUS }} />
        <resistor name="R34" displayName="R34 DNP" doNotPlace resistance="330kohm" footprint="0402" manufacturerPartNumber="CRCW0402330KJNED (DNP)" supplierPartNumbers={{ jlcpcb: ["C25780"] }} schX={-10.0} schY={-1.2} pcbX={-3.0} pcbY={-6.0} pcbRotation={90} connections={{ pin1: N.AMP2_IN, pin2: N.VDD }} />
        <resistor name="R30" resistance="100ohm" footprint="0402" manufacturerPartNumber="CRCW0402100RFKED" supplierPartNumbers={{ jlcpcb: ["C82865"] }} schX={5.0} schY={-3.8} pcbX={-5.0} pcbY={6.0} connections={{ pin1: N.AMP2_OUT, pin2: N.AIN2 }} />
        <capacitor name="C29" capacitance="560pF" footprint="0603" manufacturerPartNumber="C0603C561J5GACTU" supplierPartNumbers={{ jlcpcb: ["C107117"] }} schX={7.5} schY={-5.3} pcbX={-7.7} pcbY={2.5} connections={{ pin1: N.AIN2, pin2: N.GND }} />
        <PEC02SAAN name="J12" schX={10.0} schY={-3.8} pcbX={-4.5} pcbY={-10.7} connections={{ pin1: N.AIN2, pin2: N.GND }} />
        <capacitor name="C15" capacitance="0.1uF" footprint="0603" manufacturerPartNumber="GRM188R71C104KA01D" supplierPartNumbers={{ jlcpcb: ["C77050"] }} schX={10.0} schY={2.6} pcbX={-16.0} pcbY={-1.0} pcbRotation={90} connections={{ pin1: N.VDD, pin2: N.GND }} />
      </group>

      <group name="ADC_AND_REFERENCE" schSheetName={ADC_SHEET} schX={0} schY={0} pcbX={0} pcbY={0} schMaxTraceDistance="1mm" schTraceAutoLabelEnabled>
        <schematicsection name="ADC_REFERENCE_AND_INPUT" displayName="ADS7841 ADC, Input Header, and REF5045" />
        <schematictext text="ADS7841-Q1 data conversion, reference selection, input header, and AIN3 divider" schX={-13.5} schY={7.0} fontSize={0.2} anchor="left" />
        <ADS7841ESQDBQRQ1 name="U8" schX={0} schY={1.5} schWidth="5.6mm" schHeight="7.8mm" pcbX={-1.1} pcbY={0.4} connections={{ VCC1: N.VDD, VCC2: N.VDD, CH0: N.AIN0, CH1: N.AIN1, CH2: N.AIN2, CH3: N.AIN3, COM: N.GND, SHDN: N.SHDN, VREF: N.VREF, GND: N.GND, MODE: N.GND, DOUT: N.ADC_DOUT, BUSY: N.BUSY, DIN: N.ADC_DIN, CS: N.ADC_CS, DCLK: N.ADC_DCLK }} />
        <PZ254V_12_6P name="J10" schX={-11.5} schY={1.5} schWidth="4mm" schHeight="4.8mm" pcbX={-8.0} pcbY={-17.0} pcbRotation={180} connections={{ pin1: N.AIN0, pin2: N.AIN1, pin3: N.AIN2, pin4: N.AIN3, pin5: N.GND, pin6: N.GND }} />
        <resistor name="R23" resistance="49.9ohm" footprint="0402" manufacturerPartNumber="CRCW040249R9FKED" supplierPartNumbers={{ jlcpcb: ["C25175"] }} schX={5.2} schY={5.0} pcbX={8.0} pcbY={10.5} connections={{ pin1: N.SCLK, pin2: N.ADC_DCLK }} />
        <resistor name="R24" resistance="49.9ohm" footprint="0402" manufacturerPartNumber="CRCW040249R9FKED" supplierPartNumbers={{ jlcpcb: ["C25175"] }} schX={8.0} schY={5.0} pcbX={8.0} pcbY={8.5} connections={{ pin1: N.CS, pin2: N.ADC_CS }} />
        <resistor name="R25" resistance="49.9ohm" footprint="0402" manufacturerPartNumber="CRCW040249R9FKED" supplierPartNumbers={{ jlcpcb: ["C25175"] }} schX={5.2} schY={3.0} pcbX={6.2} pcbY={2.0} connections={{ pin1: N.SDI, pin2: N.ADC_DIN }} />
        <resistor name="R26" resistance="49.9ohm" footprint="0402" manufacturerPartNumber="CRCW040249R9FKED" supplierPartNumbers={{ jlcpcb: ["C25175"] }} schX={8.0} schY={3.0} pcbX={3.8} pcbY={7.0} pcbRotation={90} connections={{ pin1: N.SDO, pin2: N.ADC_DOUT }} />
        <resistor name="R21" resistance="10kohm" footprint="0402" manufacturerPartNumber="CRCW040210K0FKED" supplierPartNumbers={{ jlcpcb: ["C71617"] }} schX={10.8} schY={1.3} pcbX={11.7} pcbY={0.5} connections={{ pin1: N.SHDN, pin2: N.VDD }} />
        <resistor name="R16" resistance="0ohm" footprint="0603" manufacturerPartNumber="CRCW06030000Z0EA" supplierPartNumbers={{ jlcpcb: ["C844915"] }} schX={-7.0} schY={5.3} pcbX={8.0} pcbY={7.2} connections={{ pin1: N.VDD, pin2: N.IDD }} />
        <PEC02SAAN name="J6" displayName="J6 DNP" doNotPlace schX={-10.0} schY={5.3} pcbX={4.4} pcbY={12.4} pcbRotation={90} connections={{ pin1: N.IDD, pin2: N.VDD }} />
        <capacitor name="C16" capacitance="4.7uF" footprint="1206" manufacturerPartNumber="F931A475KAA" supplierPartNumbers={{ jlcpcb: ["C114778"] }} schX={-7.0} schY={2.8} pcbX={9.0} pcbY={3.5} pcbRotation={90} connections={{ pin1: N.VDD, pin2: N.GND }} />
        <capacitor name="C17" capacitance="0.1uF" footprint="0603" manufacturerPartNumber="06033D104KAT2A" supplierPartNumbers={{ jlcpcb: ["C115867"] }} schX={-4.5} schY={2.8} pcbX={6.0} pcbY={5.0} connections={{ pin1: N.VDD, pin2: N.GND }} />
        <capacitor name="C23" capacitance="0.1uF" footprint="0603" manufacturerPartNumber="06033D104KAT2A" supplierPartNumbers={{ jlcpcb: ["C115867"] }} schX={-4.5} schY={-2.8} pcbX={-0.5} pcbY={-5.5} connections={{ pin1: N.VREF, pin2: N.GND }} />
        <capacitor name="C24" capacitance="1uF" footprint="0603" manufacturerPartNumber="C1608X5R1H105K080AB" supplierPartNumbers={{ jlcpcb: ["C2858495"] }} schX={-2.0} schY={-2.8} pcbX={-0.5} pcbY={-7.2} connections={{ pin1: N.VREF, pin2: N.GND }} />

        <testpoint name="TP8" footprintVariant="pad" padShape="circle" padDiameter="1.2mm" schX={4.5} schY={6.0} pcbX={11.0} pcbY={9.4} connections={{ pin1: N.SCLK }} />
        <testpoint name="TP9" footprintVariant="pad" padShape="circle" padDiameter="1.2mm" schX={6.0} schY={6.0} pcbX={11.1} pcbY={6.6} connections={{ pin1: N.CS }} />
        <testpoint name="TP10" footprintVariant="pad" padShape="circle" padDiameter="1.2mm" schX={7.5} schY={6.0} pcbX={11.5} pcbY={4.6} connections={{ pin1: N.SDI }} />
        <testpoint name="TP11" footprintVariant="pad" padShape="circle" padDiameter="1.2mm" schX={9.0} schY={6.0} pcbX={14.0} pcbY={-3.4} connections={{ pin1: N.SDO }} />
        <testpoint name="TP12" footprintVariant="pad" padShape="circle" padDiameter="1.2mm" schX={10.5} schY={6.0} pcbX={16.3} pcbY={-3.4} connections={{ pin1: N.BUSY }} />
        <testpoint name="TP13" footprintVariant="pad" padShape="circle" padDiameter="1.2mm" schX={12.0} schY={6.0} pcbX={7.9} pcbY={0.7} connections={{ pin1: N.VDD }} />

        <REF5045AQDRQ1 name="U9" schX={-1.0} schY={-6.8} schWidth="4.5mm" schHeight="4.3mm" pcbX={4.8} pcbY={-9.8} noConnect={["DNC1", "DNC2", "NC", "TEMP", "pin5"]} connections={{ VIN: N.VDD, GND: N.GND, VOUT: N.VREF45_RAW }} />
        <capacitor name="C25" capacitance="10uF" footprint="0805" manufacturerPartNumber="C2012X5R1E106K125AB" supplierPartNumbers={{ jlcpcb: ["C15850"] }} schX={-6.0} schY={-6.8} pcbX={9.5} pcbY={-16.5} connections={{ pin1: N.VDD, pin2: N.GND }} />
        <capacitor name="C26" capacitance="1uF" footprint="0603" manufacturerPartNumber="C1608X5R1H105K080AB" supplierPartNumbers={{ jlcpcb: ["C2858495"] }} schX={3.0} schY={-7.8} pcbX={3.5} pcbY={-4.4} connections={{ pin1: N.VREF45_RAW, pin2: N.GND }} />
        <capacitor name="C27" capacitance="1uF" footprint="0603" manufacturerPartNumber="C1608X5R1H105K080AB" supplierPartNumbers={{ jlcpcb: ["C2858495"] }} schX={5.3} schY={-7.8} pcbX={8.8} pcbY={-13.9} pcbRotation={90} connections={{ pin1: N.VREF45_RAW, pin2: N.GND }} />
        <resistor name="R31" resistance="0ohm" footprint="0603" manufacturerPartNumber="CRCW06030000Z0EA" supplierPartNumbers={{ jlcpcb: ["C844915"] }} schX={4.0} schY={-5.4} pcbX={8.0} pcbY={-4.4} connections={{ pin1: N.VREF45_RAW, pin2: N.VREF45_FILTERED }} />
        <pinheader
          name="J13"
          layer="bottom"
          pinCount={3}
          pitch="2.54mm"
          gender="unpopulated"
          manufacturerPartNumber="PEC03SAAN"
          supplierPartNumbers={{ jlcpcb: ["C5708637"] }}
          footprint="pinrow3"
          schX={8.5}
          schY={-6.0}
          pcbX={7.6}
          pcbY={-1.8}
          pcbRotation={180}
          connections={{ pin1: N.VDD, pin2: N.VREF, pin3: N.VREF45_RAW }}
        />
        <capacitor name="C30" capacitance="10uF" footprint="1206" manufacturerPartNumber="TAJA106M010RNJ" supplierPartNumbers={{ jlcpcb: ["C129240"] }} schX={6.5} schY={-5.4} pcbX={11.5} pcbY={-6.7} pcbRotation={90} connections={{ pin1: N.VREF45_FILTERED, pin2: N.GND }} />
        <PZ254V_12_4P name="J15" schX={8.0} schY={-1.5} schWidth="3.8mm" schHeight="3.5mm" pcbX={0} pcbY={-17.1} connections={{ pin1: N.AIN3, pin2: N.DIVIDER, pin3: N.GND, pin4: N.DIVIDER_BOTTOM }} />
        <resistor name="R35" resistance="68.1kohm" footprint="0402" manufacturerPartNumber="CRCW040268K1FKED" supplierPartNumbers={{ jlcpcb: ["C25819"] }} schX={8.0} schY={2.0} pcbX={4.2} pcbY={-17.2} pcbRotation={90} connections={{ pin1: N.VDD, pin2: N.DIVIDER }} />
        <resistor name="R36" resistance="100kohm" footprint="0402" manufacturerPartNumber="CRCW0402100KFKED" supplierPartNumbers={{ jlcpcb: ["C25741"] }} schX={10.0} schY={2.0} pcbX={6.0} pcbY={-17.2} pcbRotation={90} connections={{ pin1: N.DIVIDER, pin2: N.DIVIDER_BOTTOM }} />
      </group>

      <copperpour
        name="GND_BOTTOM"
        layer="bottom"
        connectsTo={N.GND}
        padMargin="0.25mm"
        traceMargin="0.2mm"
        boardEdgeMargin="0.3mm"
      />
    </board>
  )
}
