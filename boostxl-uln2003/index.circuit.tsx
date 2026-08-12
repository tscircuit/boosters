import { A_19_21_GHC_YR1S2_4T } from "./imports/A_19_21_GHC_YR1S2_4T"
import { A_2_54_1_10P_ } from "./imports/A_2_54_1_10P_"
import { A_2_54_1_6P_ } from "./imports/A_2_54_1_6P_"
import { CSD17571Q2 } from "./imports/CSD17571Q2"
import { HX_PH254_01_02_Z_L11_5_male_header_connector } from "./imports/HX_PH254_01_02_Z_L11_5_male_header_connector"
import { KH_SK22D07_G5 } from "./imports/KH_SK22D07_G5"
import { MMSZ5242B } from "./imports/MMSZ5242B"
import { MTP125_1105S1 } from "./imports/MTP125_1105S1"
import { SN74HC595DR } from "./imports/SN74HC595DR"
import { SS24FL } from "./imports/SS24FL"
import { SSQ_110_03_T_D } from "./imports/SSQ_110_03_T_D"
import { ULN2003ADR } from "./imports/ULN2003ADR"
import { ULN2803ADWR } from "./imports/ULN2803ADWR"

const INTERFACE_SHEET = "LaunchPad Interface and Mode Selection"
const CONTROL_SHEET = "Serial and Parallel Control"
const DRIVER_SHEET = "ULN2003 Motor Driver and Outputs"
const POWER_SHEET = "Motor Supply and Protection"

const N = {
  V3V3: "net.V3V3",
  V5: "net.V5",
  VIN: "net.VIN",
  VCC: "net.VCC",
  DGND: "net.DGND",
  AGND: "net.AGND",
  COM: "net.COM",
  GP2: "net.GP2",
  GP6: "net.GP6",
  GP8: "net.GP8",
  GP9: "net.GP9",
  GP10: "net.GP10",
  GP11: "net.GP11",
  GP12: "net.GP12",
  GP13: "net.GP13",
  SER: "net.SER",
  RCLK: "net.RCLK",
  SRCLK: "net.SRCLK",
  OE: "net.OE",
  IN1: "net.IN1",
  IN2: "net.IN2",
  IN3: "net.IN3",
  IN4: "net.IN4",
  IN5: "net.IN5",
  IN6: "net.IN6",
  IN7: "net.IN7",
  IN8: "net.IN8",
  M1_CH1: "net.M1_CH1",
  M1_CH2: "net.M1_CH2",
  M1_CH3: "net.M1_CH3",
  M1_CH4: "net.M1_CH4",
  M2_CH5: "net.M2_CH5",
  M2_CH6: "net.M2_CH6",
  M2_CH7: "net.M2_CH7",
  M2_CH8: "net.M2_CH8",
  LED1_R: "net.LED1_R",
  LED2_R: "net.LED2_R",
  LED3_R: "net.LED3_R",
  LED4_R: "net.LED4_R",
  LED_RETURN: "net.LED_RETURN",
} as const

export default function Circuit() {
  return (
    <board
      name="BOOSTXL_ULN2003"
      width="56mm"
      height="60mm"
      layers={4}
      solderMaskColor="red"
      silkscreenColor="white"
      defaultTraceWidth="0.35mm"
      minViaHoleDiameter="0.3mm"
      minViaPadDiameter="0.45mm"
      autorouter={{ preset: "auto_local", local: true, traceClearance: "0.25mm" }}
      autorouterEffortLevel="5x"
    >
      <schematicsheet name={INTERFACE_SHEET} displayName={INTERFACE_SHEET} sheetIndex={1} />
      <schematicsheet name={CONTROL_SHEET} displayName={CONTROL_SHEET} sheetIndex={2} />
      <schematicsheet name={DRIVER_SHEET} displayName={DRIVER_SHEET} sheetIndex={3} />
      <schematicsheet name={POWER_SHEET} displayName={POWER_SHEET} sheetIndex={4} />

      <silkscreentext text="BOOSTXL-ULN2003" pcbX={0} pcbY={-27.5} fontSize="1.4mm" anchorAlignment="center" />
      <silkscreentext text="DUAL STEPPER MOTOR DRIVER" pcbX={0} pcbY={-25.4} fontSize="0.8mm" anchorAlignment="center" />
      <silkscreentext text="MOTOR 1" pcbX={-11} pcbY={27.3} fontSize="1mm" anchorAlignment="center" />
      <silkscreentext text="MOTOR 2" pcbX={11} pcbY={27.3} fontSize="1mm" anchorAlignment="center" />
      <silkscreentext text="3-PIN" pcbX={7.5} pcbY={-20.5} fontSize="0.8mm" anchorAlignment="center" />
      <silkscreentext text="8-PIN" pcbX={-7.5} pcbY={-20.5} fontSize="0.8mm" anchorAlignment="center" />

      <group name="LAUNCHPAD_LEFT_INTERFACE" schSheetName={INTERFACE_SHEET} schX={-10.5} schY={0} pcbX={0} pcbY={0} schMaxTraceDistance="0mm" schTraceAutoLabelEnabled>
        <schematicsection name="LEFT_LAUNCHPAD_HEADERS" displayName="Left LaunchPad and Optional Development Headers" />

        <SSQ_110_03_T_D
          name="J1J3"
          displayName="J1/J3"
          schX={0}
          schY={0}
          schWidth="6mm"
          schHeight="8.2mm"
          schPinArrangement={{
            leftSide: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
            rightSide: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
          }}
          pcbX={-24}
          pcbY={-8}
          pcbRotation={90}
          layer="bottom"
          connections={{ pin1: N.V3V3, pin2: N.V5, pin3: N.GP2, pin4: N.DGND, pin11: N.GP6, pin13: N.GP8, pin15: N.GP9, pin19: N.GP10 }}
          noConnect={["pin5", "pin6", "pin7", "pin8", "pin9", "pin10", "pin12", "pin14", "pin16", "pin17", "pin18", "pin20"]}
        />
      </group>

      <group name="LEFT_OPTIONAL_HEADERS" schSheetName={INTERFACE_SHEET} schX={-10.5} schY={-6.6} pcbX={0} pcbY={0} schMaxTraceDistance="0mm" schTraceAutoLabelEnabled>
        <schematicsection name="LEFT_DEVELOPMENT_HEADERS" displayName="Optional Left Development Headers (DNP)" />
        <A_2_54_1_10P_
          name="J5"
          displayName="J5 DNP"
          doNotPlace
          schX={-2.1}
          schY={0}
          schWidth="3.5mm"
          schHeight="3.1mm"
          pcbX={-26.5}
          pcbY={13}
          pcbRotation={90}
          footprint={<footprint />}
          connections={{ pin6: N.DGND, pin9: N.GP2 }}
          noConnect={["pin1", "pin2", "pin3", "pin4", "pin5", "pin7", "pin8", "pin10"]}
        />
        <pinheader
          name="J0"
          displayName="J0 DNP"
          doNotPlace
          pinCount={8}
          gender="unpopulated"
          manufacturerPartNumber="DNP-1X8-2.54MM"
          supplierPartNumbers={{ jlcpcb: ["C57369"] }}
          schX={2.1}
          schY={0}
          schWidth="3.5mm"
          schHeight="3.1mm"
          pcbX={-20.5}
          pcbY={-8}
          pcbRotation={90}
          footprint={<footprint />}
          connections={{ pin1: N.GP6, pin3: N.GP8, pin5: N.GP9, pin8: N.GP10 }}
        />
      </group>

      <group name="LAUNCHPAD_RIGHT_INTERFACE" schSheetName={INTERFACE_SHEET} schX={10.5} schY={0} pcbX={0} pcbY={0} schMaxTraceDistance="0mm" schTraceAutoLabelEnabled>
        <schematicsection name="RIGHT_LAUNCHPAD_HEADERS" displayName="Right LaunchPad and Optional Development Header" />
        <SSQ_110_03_T_D
          name="J2J4"
          displayName="J2/J4"
          schX={0}
          schY={0}
          schWidth="6mm"
          schHeight="8.2mm"
          schPinArrangement={{
            leftSide: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
            rightSide: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
          }}
          pcbX={24}
          pcbY={-8}
          pcbRotation={90}
          layer="bottom"
          connections={{ pin1: N.DGND, pin13: N.GP13, pin15: N.GP12, pin17: N.GP11 }}
          noConnect={["pin2", "pin3", "pin4", "pin5", "pin6", "pin7", "pin8", "pin9", "pin10", "pin11", "pin12", "pin14", "pin16", "pin18", "pin19", "pin20"]}
        />
      </group>

      <group name="RIGHT_OPTIONAL_HEADER" schSheetName={INTERFACE_SHEET} schX={10.5} schY={-6.6} pcbX={0} pcbY={0} schMaxTraceDistance="0mm" schTraceAutoLabelEnabled>
        <schematicsection name="RIGHT_DEVELOPMENT_HEADER" displayName="Optional Right Development Header (DNP)" />
        <MTP125_1105S1
          name="J6"
          displayName="J6 DNP"
          doNotPlace
          schX={0}
          schY={0}
          schWidth="3.2mm"
          schHeight="3.1mm"
          pcbX={26.5}
          pcbY={17}
          pcbRotation={90}
          footprint={<footprint />}
          connections={{ pin1: N.V3V3 }}
          noConnect={["pin2", "pin3", "pin4", "pin5"]}
        />
      </group>

      <group name="MODE_SELECTION" schSheetName={INTERFACE_SHEET} schX={0} schY={5.3} pcbX={0} pcbY={0} schMaxTraceDistance="0mm" schTraceAutoLabelEnabled>
        <schematicsection name="MODE_SWITCHES" displayName="3-Pin Serial or 8-Pin Parallel Mode Selection" />

        <KH_SK22D07_G5
          name="S1"
          schX={-1.8}
          schY={0}
          pcbX={-7}
          pcbY={-18}
          pcbRotation={180}
          connections={{ pin1: N.GP11, pin2: N.SER, pin4: N.GP12, pin5: N.RCLK }}
        />
        <KH_SK22D07_G5
          name="S2"
          schX={1.8}
          schY={0}
          pcbX={5}
          pcbY={-18}
          pcbRotation={180}
          connections={{ pin1: N.GP13, pin2: N.SRCLK, pin4: N.V3V3, pin5: N.OE, pin6: N.DGND }}
        />
        <resistor name="R11" resistance="560ohm" footprint="0603" manufacturerPartNumber="0603WAF5600T5E" supplierPartNumbers={{ jlcpcb: ["C23204"] }} schX={-2.7} schY={2} schRotation={90} pcbX={-14} pcbY={-11} connections={{ pin1: N.IN1, pin2: N.GP11 }} />
        <resistor name="R12" resistance="560ohm" footprint="0603" manufacturerPartNumber="0603WAF5600T5E" supplierPartNumbers={{ jlcpcb: ["C23204"] }} schX={-0.9} schY={2} schRotation={90} pcbX={-7} pcbY={-11} connections={{ pin1: N.IN2, pin2: N.GP12 }} />
        <resistor name="R13" resistance="560ohm" footprint="0603" manufacturerPartNumber="0603WAF5600T5E" supplierPartNumbers={{ jlcpcb: ["C23204"] }} schX={1.2} schY={2} schRotation={90} pcbX={-3.5} pcbY={-11} connections={{ pin1: N.IN3, pin2: N.GP13 }} />
      </group>

      <group name="PARALLEL_INPUT_LINKS" schSheetName={CONTROL_SHEET} schX={-5.5} schY={1.2} pcbX={0} pcbY={0} schMaxTraceDistance="0.75mm" schTraceAutoLabelEnabled>
        <schematicsection name="PARALLEL_INPUT_RESISTORS" displayName="Parallel Input Link Resistors" />
        <resistor name="R8" resistance="560ohm" footprint="0603" manufacturerPartNumber="0603WAF5600T5E" supplierPartNumbers={{ jlcpcb: ["C23204"] }} schX={0} schY={3} pcbX={-18} pcbY={-5} connections={{ pin1: N.GP8, pin2: N.IN4 }} />
        <resistor name="R6" displayName="R6 DNP" doNotPlace resistance="560ohm" footprint="0603" manufacturerPartNumber="0603WAF5600T5E" supplierPartNumbers={{ jlcpcb: ["C23204"] }} schX={0} schY={1.5} pcbX={-18} pcbY={-9} connections={{ pin1: N.GP6, pin2: N.IN5 }} />
        <resistor name="R2" displayName="R2 DNP" doNotPlace resistance="560ohm" footprint="0603" manufacturerPartNumber="0603WAF5600T5E" supplierPartNumbers={{ jlcpcb: ["C23204"] }} schX={0} schY={0} pcbX={-18} pcbY={2} connections={{ pin1: N.GP2, pin2: N.IN6 }} />
        <resistor name="R9" displayName="R9 DNP" doNotPlace resistance="560ohm" footprint="0603" manufacturerPartNumber="0603WAF5600T5E" supplierPartNumbers={{ jlcpcb: ["C23204"] }} schX={0} schY={-1.5} pcbX={-18} pcbY={5.5} connections={{ pin1: N.GP9, pin2: N.IN7 }} />
        <resistor name="R10" displayName="R10 DNP" doNotPlace resistance="560ohm" footprint="0603" manufacturerPartNumber="0603WAF5600T5E" supplierPartNumbers={{ jlcpcb: ["C23204"] }} schX={0} schY={-3} pcbX={-18} pcbY={9} connections={{ pin1: N.GP10, pin2: N.IN8 }} />
      </group>

      <group name="SERIAL_CONTROL" schSheetName={CONTROL_SHEET} schX={0} schY={4} pcbX={0} pcbY={0} schMaxTraceDistance="0.9mm" schTraceAutoLabelEnabled>
        <schematicsection name="SHIFT_REGISTER" displayName="SN74HC595 Serial-to-Parallel Control" />
        <SN74HC595DR
          name="U1"
          schX={0}
          schY={0.4}
          schWidth="5.5mm"
          schHeight="8.5mm"
          pcbX={3}
          pcbY={-5.5}
          pcbRotation={90}
          connections={{ GND: N.DGND, SRCLR: N.V3V3, SRCLK: N.SRCLK, RCLK: N.RCLK, OE: N.OE, SER: N.SER, QA: N.IN1, QB: N.IN2, QC: N.IN3, QD: N.IN4, QE: N.IN5, QF: N.IN6, QG: N.IN7, QH1: N.IN8, VCC: N.V3V3 }}
          noConnect={["QH2"]}
        />
        <capacitor name="C2" capacitance="0.1uF" footprint="0603" manufacturerPartNumber="CC0603KRX7R7BB104" supplierPartNumbers={{ jlcpcb: ["C14663"] }} schX={0} schY={-4.55} pcbX={9.5} pcbY={-5.5} pcbRotation={90} connections={{ pin1: N.V3V3, pin2: N.DGND }} />
      </group>

      <group name="DRIVER_OUTPUTS" schSheetName={DRIVER_SHEET} schX={-4.5} schY={1.5} pcbX={0} pcbY={0} schMaxTraceDistance="0.9mm" schTraceAutoLabelEnabled>
        <schematicsection name="DARLINGTON_AND_MOSFET_OUTPUTS" displayName="ULN2003A and Eighth MOSFET Output" />
        <ULN2003ADR
          name="U2"
          schX={0.2}
          schY={0.1}
          schWidth="5.2mm"
          schHeight="8.5mm"
          pcbX={7.5}
          pcbY={8}
          pcbRotation={90}
          connections={{ COM: N.COM, E: N.AGND, "1B": N.IN2, "2B": N.IN3, "3B": N.IN4, "4B": N.IN5, "5B": N.IN6, "6B": N.IN7, "7B": N.IN8 }}
        />
        <ULN2803ADWR
          name="U3"
          displayName="U3 ULN2803ADW DNP"
          doNotPlace
          schX={0.3}
          schY={-5.8}
          schWidth="5.2mm"
          schHeight="2.1mm"
          pcbX={7.5}
          pcbY={8}
          pcbRotation={90}
          footprint={<footprint />}
          connections={{ COM: N.COM, GND: N.AGND, "1B": N.IN1, "2B": N.IN2, "3B": N.IN3, "4B": N.IN4, "5B": N.IN5, "6B": N.IN6, "7B": N.IN7, "8B": N.IN8, "1C": N.M1_CH1, "2C": N.M1_CH2, "3C": N.M1_CH3, "4C": N.M1_CH4, "5C": N.M2_CH5, "6C": N.M2_CH6, "7C": N.M2_CH7, "8C": N.M2_CH8 }}
        />
        <CSD17571Q2
          name="Q1"
          schX={-4.3}
          schY={-5.8}
          pcbX={-2}
          pcbY={7}
          connections={{ gate: N.IN1, source: N.AGND }}
        />
        <testpoint name="TP1" footprintVariant="pad" padShape="circle" padDiameter="1.4mm" schX={-3.6} schY={3.9} pcbX={-7} pcbY={4} connections={{ pin1: N.IN1 }} />
        <testpoint name="TP2" footprintVariant="pad" padShape="circle" padDiameter="1.4mm" schX={-3.6} schY={2.2} pcbX={-7} pcbY={1} connections={{ pin1: N.IN2 }} />
        <testpoint name="TP3" footprintVariant="pad" padShape="circle" padDiameter="1.4mm" schX={-3.6} schY={0.5} pcbX={-11.75} pcbY={-0.8} connections={{ pin1: N.IN3 }} />
        <testpoint name="TP4" footprintVariant="pad" padShape="circle" padDiameter="1.4mm" schX={-3.6} schY={-1.2} pcbX={-7} pcbY={-5} connections={{ pin1: N.IN4 }} />
      </group>

      <group name="MOTOR_POWER_INPUT" schSheetName={POWER_SHEET} schX={1.8} schY={0} pcbX={0} pcbY={0} schMaxTraceDistance="1.2mm" schTraceAutoLabelEnabled>
        <schematicsection name="MOTOR_POWER_ORING" displayName="Motor Power Input and Supply OR-ing" />
        <HX_PH254_01_02_Z_L11_5_male_header_connector name="J9" schX={-5.1} schY={1.4} schWidth="2.7mm" schHeight="2.0mm" pcbX={23.5} pcbY={24} pcbRotation={90} connections={{ pin1: N.VIN, pin2: N.AGND }} />
        <SS24FL name="D7" displayName="D7 DB2W40200L" schX={-2.8} schY={1.4} pcbX={18.5} pcbY={20.5} connections={{ anode: N.VIN, cathode: N.VCC }} />
        <SS24FL name="D8" displayName="D8 DB2W40200L" schX={-1.4} schY={1.4} pcbX={24} pcbY={16} pcbRotation={180} connections={{ anode: N.V5, cathode: N.VCC }} />
        <capacitor name="C1" capacitance="1uF" footprint="0603" manufacturerPartNumber="CL10A105KB8NNNC" supplierPartNumbers={{ jlcpcb: ["C15849"] }} schX={0} schY={1.4} schRotation={90} pcbX={20} pcbY={16.5} pcbRotation={90} connections={{ pin1: N.VCC, pin2: N.AGND }} />
        <resistor name="R15" resistance="0ohm" footprint="0603" manufacturerPartNumber="0603WAF0000T5E" supplierPartNumbers={{ jlcpcb: ["C21189"] }} schX={1.4} schY={1.4} pcbX={20} pcbY={13.5} connections={{ pin1: N.AGND, pin2: N.DGND }} />
      </group>

      <group name="FLYBACK_AND_MOTOR_CONNECTORS" schSheetName={DRIVER_SHEET} schX={5} schY={2.8} pcbX={0} pcbY={0} schMaxTraceDistance="1.2mm" schTraceAutoLabelEnabled>
        <schematicsection name="FLYBACK_AND_MOTOR_OUTPUTS" displayName="Flyback Clamp and Motor Connectors" />
        <MMSZ5242B name="D5" displayName="D5 12V" schX={-4} schY={-1.2} pcbX={17} pcbY={11} pcbRotation={90} connections={{ anode: N.COM, cathode: N.VCC }} />
        <resistor name="R14" resistance="0ohm" footprint="0603" manufacturerPartNumber="0603WAF0000T5E" supplierPartNumbers={{ jlcpcb: ["C21189"] }} schX={-2} schY={-1.2} pcbX={20} pcbY={10} pcbRotation={90} connections={{ pin1: N.VCC, pin2: N.COM }} />
        <SS24FL name="D6" displayName="D6 DB2W40200L" schX={0} schY={-1.2} pcbX={-2} pcbY={11} pcbRotation={90} connections={{ cathode: N.COM }} />
        <capacitor name="C3" capacitance="0.1uF" footprint="0603" manufacturerPartNumber="CC0603KRX7R7BB104" supplierPartNumbers={{ jlcpcb: ["C14663"] }} schX={2} schY={-1.2} schRotation={90} pcbX={12.5} pcbY={13.5} pcbRotation={90} connections={{ pin1: N.COM, pin2: N.AGND }} />

        <A_2_54_1_6P_ name="J7" schX={3.2} schY={0.7} schWidth="3.2mm" schHeight="3.2mm" pcbX={-10} pcbY={24.5} connections={{ pin5: N.VCC, pin6: N.VCC }} />
        <A_2_54_1_6P_ name="J8" schX={6.4} schY={0.7} schWidth="3.2mm" schHeight="3.2mm" pcbX={10} pcbY={24.5} connections={{ pin5: N.VCC, pin6: N.VCC }} />
      </group>

      <group name="MOTOR_OUTPUT_NETS" schSheetName={DRIVER_SHEET} schX={0} schY={0} pcbX={0} pcbY={0}>
        <trace name="M1_CH1" path={[".Q1 > .drain", N.M1_CH1, ".D6 > .anode", ".J7 > .pin1"]} width="0.5mm" />
        <trace name="M1_CH2" path={[".U2 > .1C", N.M1_CH2, ".J7 > .pin2"]} width="0.5mm" />
        <trace name="M1_CH3" path={[".U2 > .2C", N.M1_CH3, ".J7 > .pin3"]} width="0.5mm" />
        <trace name="M1_CH4" path={[".U2 > .3C", N.M1_CH4, ".J7 > .pin4"]} width="0.5mm" />
        <trace name="M2_CH5" path={[".U2 > .4C", N.M2_CH5, ".J8 > .pin1"]} width="0.5mm" />
        <trace name="M2_CH6" path={[".U2 > .5C", N.M2_CH6, ".J8 > .pin2"]} width="0.5mm" />
        <trace name="M2_CH7" path={[".U2 > .6C", N.M2_CH7, ".J8 > .pin3"]} width="0.5mm" />
        <trace name="M2_CH8" path={[".U2 > .7C", N.M2_CH8, ".J8 > .pin4"]} width="0.5mm" />
      </group>

      <group name="LED_INDICATORS" schSheetName={CONTROL_SHEET} schX={0} schY={-4.2} pcbX={0} pcbY={0} schMaxTraceDistance="0.75mm" schTraceAutoLabelEnabled>
        <schematicsection name="INPUT_LED_INDICATORS" displayName="IN1–IN4 Green LED Indicators" />
        <A_19_21_GHC_YR1S2_4T name="D1" displayName="D1 Green" schX={-5.2} schY={0.35} pcbX={-14} pcbY={7} connections={{ pin1: N.IN1, pin2: N.LED1_R }} />
        <resistor name="R1" resistance="1kohm" footprint="0603" manufacturerPartNumber="0603WAF1001T5E" supplierPartNumbers={{ jlcpcb: ["C21190"] }} schX={-5.2} schY={-1.25} pcbX={-14} pcbY={4.5} pcbRotation={90} connections={{ pin1: N.LED1_R, pin2: N.LED_RETURN }} />
        <A_19_21_GHC_YR1S2_4T name="D2" displayName="D2 Green" schX={-1.9} schY={0.35} pcbX={-9.5} pcbY={7} connections={{ pin1: N.IN2, pin2: N.LED2_R }} />
        <resistor name="R7" resistance="1kohm" footprint="0603" manufacturerPartNumber="0603WAF1001T5E" supplierPartNumbers={{ jlcpcb: ["C21190"] }} schX={-1.9} schY={-1.25} pcbX={-9.5} pcbY={4.5} pcbRotation={90} connections={{ pin1: N.LED2_R, pin2: N.LED_RETURN }} />
        <A_19_21_GHC_YR1S2_4T name="D3" displayName="D3 Green" schX={1.4} schY={0.35} pcbX={-14} pcbY={0} connections={{ pin1: N.IN3, pin2: N.LED3_R }} />
        <resistor name="R3" resistance="1kohm" footprint="0603" manufacturerPartNumber="0603WAF1001T5E" supplierPartNumbers={{ jlcpcb: ["C21190"] }} schX={1.4} schY={-1.25} pcbX={-14} pcbY={-2.5} pcbRotation={90} connections={{ pin1: N.LED3_R, pin2: N.LED_RETURN }} />
        <A_19_21_GHC_YR1S2_4T name="D4" displayName="D4 Green" schX={4.7} schY={0.35} pcbX={-9.5} pcbY={0} connections={{ pin1: N.IN4, pin2: N.LED4_R }} />
        <resistor name="R4" resistance="1kohm" footprint="0603" manufacturerPartNumber="0603WAF1001T5E" supplierPartNumbers={{ jlcpcb: ["C21190"] }} schX={4.7} schY={-1.25} pcbX={-9.5} pcbY={-2.5} pcbRotation={90} connections={{ pin1: N.LED4_R, pin2: N.LED_RETURN }} />
        <resistor name="R5" resistance="0ohm" footprint="0603" manufacturerPartNumber="0603WAF0000T5E" supplierPartNumbers={{ jlcpcb: ["C21189"] }} schX={6.2} schY={-0.45} pcbX={-19} pcbY={12} pcbRotation={90} connections={{ pin1: N.LED_RETURN, pin2: N.DGND }} />
      </group>

      <keepout shape="rect" pcbX={-11.100068} pcbY={-18} width="2.2mm" height="3.4mm" layers={["top", "inner1", "inner2", "bottom"]} />
      <keepout shape="rect" pcbX={-2.899932} pcbY={-18} width="2.2mm" height="3.4mm" layers={["top", "inner1", "inner2", "bottom"]} />
      <keepout shape="rect" pcbX={0.899932} pcbY={-18} width="2.2mm" height="3.4mm" layers={["top", "inner1", "inner2", "bottom"]} />
      <keepout shape="rect" pcbX={9.100068} pcbY={-18} width="2.2mm" height="3.4mm" layers={["top", "inner1", "inner2", "bottom"]} />

      <copperpour name="AGND_BOTTOM_POUR" layer="bottom" connectsTo={N.AGND} clearance="0.25mm" />
    </board>
  )
}
