import { A_19_217_GHC_YR1S2_3T } from "./imports/A_19_217_GHC_YR1S2_3T"
import { DRV5055A4EDBZRQ1 } from "./imports/DRV5055A4EDBZRQ1"
import { HDC2010YPAR } from "./imports/HDC2010YPAR"
import { KT_0603R } from "./imports/KT_0603R"
import { OPT3001DNPR } from "./imports/OPT3001DNPR"
import { SI2323DS_T1_ES } from "./imports/SI2323DS_T1_ES"
import { SM05B_SRSS_TB_LF__SN_ } from "./imports/SM05B_SRSS_TB_LF__SN_"
import { SSQ_110_03_T_D } from "./imports/SSQ_110_03_T_D"
import { TMP116AIDRVR } from "./imports/TMP116AIDRVR"

const N = {
  V33: "net.V33",
  GND: "net.GND",
  I2C_SCL: "net.I2C_SCL",
  I2C_SDA: "net.I2C_SDA",
  DRV_OUT: "net.DRV_OUT",
  DRV_ENABLE_N: "net.DRV_ENABLE_N",
  DRV_POWER: "net.DRV_POWER",
  HDC_ENABLE_N: "net.HDC_ENABLE_N",
  HDC_POWER: "net.HDC_POWER",
  HDC_INT: "net.HDC_INT",
  OPT_POWER: "net.OPT_POWER",
  OPT_INT: "net.OPT_INT",
  TMP_CABLE_POWER: "net.TMP_CABLE_POWER",
  TMP_ALERT: "net.TMP_ALERT",
  TMP_MODULE_POWER: "net.TMP_MODULE_POWER",
  TMP_MODULE_GND: "net.TMP_MODULE_GND",
  TMP_MODULE_SCL: "net.TMP_MODULE_SCL",
  TMP_MODULE_SDA: "net.TMP_MODULE_SDA",
  TMP_MODULE_ALERT: "net.TMP_MODULE_ALERT",
  LED_GREEN: "net.LED_GREEN",
  LED_RED: "net.LED_RED",
} as const

const HEADER_SCH_PIN_STYLE = {
  pin1: { marginTop: "0.05mm", marginBottom: "0.05mm" },
  pin2: { marginTop: "0.05mm", marginBottom: "0.05mm" },
  pin3: { marginTop: "0.05mm", marginBottom: "0.05mm" },
  pin4: { marginTop: "0.05mm", marginBottom: "0.05mm" },
  pin5: { marginTop: "0.05mm", marginBottom: "0.05mm" },
  pin6: { marginTop: "0.05mm", marginBottom: "0.05mm" },
  pin7: { marginTop: "0.05mm", marginBottom: "0.05mm" },
  pin8: { marginTop: "0.05mm", marginBottom: "0.05mm" },
  pin9: { marginTop: "0.05mm", marginBottom: "0.05mm" },
  pin10: { marginTop: "0.05mm", marginBottom: "0.05mm" },
  pin11: { marginTop: "0.05mm", marginBottom: "0.05mm" },
  pin12: { marginTop: "0.05mm", marginBottom: "0.05mm" },
  pin13: { marginTop: "0.05mm", marginBottom: "0.05mm" },
  pin14: { marginTop: "0.05mm", marginBottom: "0.05mm" },
  pin15: { marginTop: "0.05mm", marginBottom: "0.05mm" },
  pin16: { marginTop: "0.05mm", marginBottom: "0.05mm" },
  pin17: { marginTop: "0.05mm", marginBottom: "0.05mm" },
  pin18: { marginTop: "0.05mm", marginBottom: "0.05mm" },
  pin19: { marginTop: "0.05mm", marginBottom: "0.05mm" },
  pin20: { marginTop: "0.05mm", marginBottom: "0.05mm" },
}

const SENSOR_SCH_PIN_STYLE = {
  pin1: { marginTop: "0.1mm", marginBottom: "0.1mm" },
  pin2: { marginTop: "0.1mm", marginBottom: "0.1mm" },
  pin3: { marginTop: "0.1mm", marginBottom: "0.1mm" },
  pin4: { marginTop: "0.1mm", marginBottom: "0.1mm" },
  pin5: { marginTop: "0.1mm", marginBottom: "0.1mm" },
  pin6: { marginTop: "0.1mm", marginBottom: "0.1mm" },
  pin7: { marginTop: "0.1mm", marginBottom: "0.1mm" },
}

export default function Circuit() {
  return (
    <board
      name="BOOSTXL_BASSENSORS"
      pcbX="5.08mm"
      width="63.5mm"
      height="35.56mm"
      outline={[
        { x: -26.67, y: -17.78 },
        { x: 36.83, y: -17.78 },
        { x: 36.83, y: 17.78 },
        { x: -26.67, y: 17.78 },
      ]}
      solderMaskColor="red"
      topSolderMaskColor="red"
      bottomSolderMaskColor="red"
      silkscreenColor="white"
      pcbStyle={{ silkscreenFontSize: "0.55mm" }}
      defaultTraceWidth="0.2mm"
      minViaHoleDiameter="0.3mm"
      minViaPadDiameter="0.45mm"
      autorouter={{
        preset: "auto_local",
        local: true,
        traceClearance: "0.15mm",
      }}
      autorouterEffortLevel="5x"
    >
      <schematicsheet name="01 - BoosterPack Interface" displayName="01 - BoosterPack Interface" sheetIndex={1} />
      <schematicsheet name="02 - TMP116 Temperature" displayName="02 - TMP116 Temperature" sheetIndex={2} />
      <schematicsheet name="03 - DRV5055 Hall Sensor" displayName="03 - DRV5055 Hall Sensor" sheetIndex={3} />
      <schematicsheet name="04 - HDC2010 Humidity" displayName="04 - HDC2010 Humidity" sheetIndex={4} />
      <schematicsheet name="05 - OPT3001 Ambient Light" displayName="05 - OPT3001 Ambient Light" sheetIndex={5} />

      <group
        name="BOOSTERPACK_INTERFACE_BLOCK"
        schSheetName="01 - BoosterPack Interface"
        schX={0}
        schY={0}
        pcbX={-5.08}
        pcbY={0}
        pcbStyle={{ silkscreenTextVisibility: "hidden" }}
        schMaxTraceDistance="0.8mm"
        schTraceAutoLabelEnabled
      >
        <schematicsection
          name="TI_REFERENCE_SCHEMATIC"
          displayName=""
          sectionTitleFontSize="0.18mm"
        />
        <schematictext text="BoosterPack headers, indicators, and pull-ups" schX={-10.5} schY={7.2} fontSize={0.16} anchor="left" />

        <SSQ_110_03_T_D
          name="J1"
          layer="bottom"
          schSectionName="TI_REFERENCE_SCHEMATIC"
          schX={-6}
          schY={1.5}
          schWidth="5.2mm"
          schHeight="8mm"
          schPinStyle={HEADER_SCH_PIN_STYLE}
          schPinArrangement={{
            leftSide: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
            rightSide: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
          }}
          pcbX={-20.32}
          pcbY={0}
          pcbRotation={90}
          noConnect={[
            "pin2",
            "pin5",
            "pin7",
            "pin9",
            "pin13",
            "pin15",
            "pin18",
            "pin20",
          ]}
          connections={{
            pin1: N.V33,
            pin3: N.DRV_OUT,
            pin4: N.GND,
            pin6: N.HDC_INT,
            pin8: N.DRV_ENABLE_N,
            pin10: N.OPT_INT,
            pin11: N.HDC_ENABLE_N,
            pin12: N.TMP_ALERT,
            pin14: N.OPT_POWER,
            pin16: N.TMP_CABLE_POWER,
            pin17: N.I2C_SCL,
            pin19: N.I2C_SDA,
          }}
        />

        <SSQ_110_03_T_D
          name="J2"
          layer="bottom"
          schSectionName="TI_REFERENCE_SCHEMATIC"
          schX={6}
          schY={1.5}
          schWidth="5.2mm"
          schHeight="8mm"
          schPinStyle={HEADER_SCH_PIN_STYLE}
          schPinArrangement={{
            leftSide: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
            rightSide: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
          }}
          pcbX={20.32}
          pcbY={0}
          pcbRotation={90}
          noConnect={[
            "pin4",
            "pin5",
            "pin6",
            "pin7",
            "pin8",
            "pin9",
            "pin10",
            "pin11",
            "pin12",
            "pin13",
            "pin14",
            "pin15",
            "pin16",
            "pin17",
            "pin18",
            "pin19",
            "pin20",
          ]}
          connections={{
            pin1: N.LED_GREEN,
            pin2: N.GND,
            pin3: N.LED_RED,
          }}
        />

        <capacitor
          name="C5"
          schSectionName="TI_REFERENCE_SCHEMATIC"
          schX={-11.5}
          schY={4.6}
          schRotation="270deg"
          manufacturerPartNumber="C1608X7R1C105KT000N"
          supplierPartNumbers={{ jlcpcb: ["C76617"] }}
          capacitance="1uF"
          footprint="0603"
          pcbX={-19.4}
          pcbY={15.0}
          connections={{ pin1: N.V33, pin2: N.GND }}
        />

        <resistor
          name="R2"
          schSectionName="TI_REFERENCE_SCHEMATIC"
          schX={-7.2}
          schY={-4.7}
          schRotation="270deg"
          manufacturerPartNumber="CQ03WAF1002T5E"
          supplierPartNumbers={{ jlcpcb: ["C516551"] }}
          resistance="10kohm"
          footprint="0603"
          pcbX={-15.4}
          pcbY={-15.1}
          pcbRotation={0}
          connections={{ pin1: N.V33, pin2: N.I2C_SCL }}
        />
        <resistor
          name="R3"
          schSectionName="TI_REFERENCE_SCHEMATIC"
          schX={-4.8}
          schY={-4.7}
          schRotation="270deg"
          manufacturerPartNumber="CQ03WAF1002T5E"
          supplierPartNumbers={{ jlcpcb: ["C516551"] }}
          resistance="10kohm"
          footprint="0603"
          pcbX={-15.4}
          pcbY={-12.9}
          pcbRotation={0}
          connections={{ pin1: N.V33, pin2: N.I2C_SDA }}
        />

        <A_19_217_GHC_YR1S2_3T
          name="D1"
          color="green"
          schSectionName="TI_REFERENCE_SCHEMATIC"
          schX={3.2}
          schY={-4}
          schRotation="0deg"
          pcbX={15.8}
          pcbY={15.0}
          connections={{ pin1: "net.LED_GREEN_LIMITED", pin2: N.GND }}
        />
        <resistor
          name="R4"
          schSectionName="TI_REFERENCE_SCHEMATIC"
          schX={5.6}
          schY={-4}
          manufacturerPartNumber="0603WAF4700T5E"
          supplierPartNumbers={{ jlcpcb: ["C23179"] }}
          resistance="470ohm"
          footprint="0603"
          pcbX={19.5}
          pcbY={15.4}
          connections={{ pin1: "net.LED_GREEN_LIMITED", pin2: N.LED_GREEN }}
        />
        <KT_0603R
          name="D2"
          color="red"
          schSectionName="TI_REFERENCE_SCHEMATIC"
          schX={3.2}
          schY={-5.5}
          schRotation="0deg"
          pcbX={12.7}
          pcbY={15.0}
          pcbRotation={90}
          connections={{ pin1: "net.LED_RED_LIMITED", pin2: N.GND }}
        />
        <resistor
          name="R7"
          schSectionName="TI_REFERENCE_SCHEMATIC"
          schX={5.6}
          schY={-5.5}
          manufacturerPartNumber="0603WAF1001T5E"
          supplierPartNumbers={{ jlcpcb: ["C21190"] }}
          resistance="1kohm"
          footprint="0603"
          pcbX={12.7}
          pcbY={10.5}
          pcbRotation={90}
          connections={{ pin1: "net.LED_RED_LIMITED", pin2: N.LED_RED }}
        />
      </group>

      <group
        name="TMP116_CONNECTOR_BLOCK"
        schSheetName="02 - TMP116 Temperature"
        schX={0}
        schY={0}
        pcbX={-5.08}
        pcbY={0}
        pcbStyle={{ silkscreenTextVisibility: "hidden" }}
        schMaxTraceDistance="0.8mm"
        schTraceAutoLabelEnabled
      >
        <schematicsection name="TI_REFERENCE_SCHEMATIC" displayName="" sectionTitleFontSize="0.18mm" />
        <schematictext text="TMP116 sensor connector" schX={-10.5} schY={5.8} fontSize={0.16} anchor="left" />
        <resistor
          name="R1"
          schSectionName="TI_REFERENCE_SCHEMATIC"
          schX={-9.2}
          schY={3.5}
          manufacturerPartNumber="0603WAF0000T5E"
          supplierPartNumbers={{ jlcpcb: ["C21189"] }}
          resistance="0ohm"
          footprint="0603"
          pcbX={6.1}
          pcbY={-10.2}
          connections={{ pin1: N.TMP_CABLE_POWER, pin2: "net.J5_TMP_POWER" }}
        />
        <SM05B_SRSS_TB_LF__SN_
          name="J5"
          schSectionName="TI_REFERENCE_SCHEMATIC"
          schX={-6}
          schY={2}
          schWidth="3mm"
          schHeight="4.5mm"
          schPinStyle={SENSOR_SCH_PIN_STYLE}
          schPinArrangement={{ leftSide: [1, 2, 3, 4, 5], bottomSide: [6, 7] }}
          pcbX={10.0}
          pcbY={-15.0}
          pcbRotation={0}
          noConnect={["pin6", "pin7"]}
          connections={{
            pin1: "net.J5_TMP_POWER",
            pin2: N.GND,
            pin3: N.I2C_SDA,
            pin5: N.TMP_ALERT,
          }}
        />
        <trace
          name="J5_I2C_SCL"
          from=".J5 > .pin4"
          to={N.I2C_SCL}
          schDisplayLabel="I2C_SCL"
        />
      </group>

      <group
        name="TMP116_SENSOR_COUPON_BLOCK"
        schSheetName="02 - TMP116 Temperature"
        schX={0}
        schY={0}
        pcbX={-5.08}
        pcbY={0}
        pcbStyle={{ silkscreenTextVisibility: "hidden" }}
        schMaxTraceDistance="0.8mm"
        schTraceAutoLabelEnabled
      >
        <schematicsection name="TI_REFERENCE_SCHEMATIC" displayName="" sectionTitleFontSize="0.18mm" />
        <schematictext text="TMP116 temperature sensor / breakaway PCB" schX={0} schY={5.8} fontSize={0.16} anchor="left" />
        <SM05B_SRSS_TB_LF__SN_
          name="J6"
          schSectionName="TI_REFERENCE_SCHEMATIC"
          schX={1.5}
          schY={2}
          schWidth="3mm"
          schHeight="4.5mm"
          schPinStyle={SENSOR_SCH_PIN_STYLE}
          schPinArrangement={{ leftSide: [1, 2, 3, 4, 5], bottomSide: [6, 7] }}
          pcbX={32.1}
          pcbY={-15.0}
          pcbRotation={0}
          noConnect={["pin6", "pin7"]}
          connections={{
            pin1: N.TMP_MODULE_ALERT,
            pin2: N.TMP_MODULE_SCL,
            pin3: N.TMP_MODULE_SDA,
            pin4: N.TMP_MODULE_GND,
            pin5: N.TMP_MODULE_POWER,
          }}
        />
        <TMP116AIDRVR
          name="U1"
          schSectionName="TI_REFERENCE_SCHEMATIC"
          schX={8.5}
          schY={2}
          schWidth="3.5mm"
          schHeight="3.6mm"
          schPinStyle={SENSOR_SCH_PIN_STYLE}
          schPinArrangement={{
            leftSide: [5, 6, 1, 3],
            rightSide: [4, 2, 7],
          }}
          pcbX={32.1}
          pcbY={-8.2}
          pcbRotation={0}
          connections={{
            V_POS: N.TMP_MODULE_POWER,
            SDA: N.TMP_MODULE_SDA,
            SCL: N.TMP_MODULE_SCL,
            ALERT: N.TMP_MODULE_ALERT,
            ADD0: N.TMP_MODULE_GND,
            GND: N.TMP_MODULE_GND,
            PAD: N.TMP_MODULE_GND,
          }}
        />
        <capacitor
          name="C1"
          schSectionName="TI_REFERENCE_SCHEMATIC"
          schX={8.5}
          schY={-2}
          schRotation="270deg"
          manufacturerPartNumber="GRM188R71E104KA01D"
          supplierPartNumbers={{ jlcpcb: ["C77050"] }}
          capacitance="0.1uF"
          footprint="0603"
          pcbX={35.0}
          pcbY={-8.2}
          pcbRotation={90}
          connections={{ pin1: N.TMP_MODULE_POWER, pin2: N.TMP_MODULE_GND }}
        />
      </group>

      <group
        name="DRV5055_BLOCK"
        schSheetName="03 - DRV5055 Hall Sensor"
        schX={0}
        schY={0}
        pcbX={-5.08}
        pcbY={0}
        pcbStyle={{ silkscreenTextVisibility: "hidden" }}
        schMaxTraceDistance="0.8mm"
        schTraceAutoLabelEnabled
      >
        <schematicsection name="TI_REFERENCE_SCHEMATIC" displayName="" sectionTitleFontSize="0.18mm" />
        <schematictext text="DRV5055 analog Hall-effect sensor" schX={-7} schY={5.5} fontSize={0.16} anchor="left" />
        <resistor
          name="R8"
          schSectionName="TI_REFERENCE_SCHEMATIC"
          schX={-6}
          schY={1.2}
          manufacturerPartNumber="0603WAF0000T5E"
          supplierPartNumbers={{ jlcpcb: ["C21189"] }}
          resistance="0ohm"
          footprint="0603"
          pcbX={-9.7}
          pcbY={4.6}
          connections={{ pin1: N.DRV_ENABLE_N, pin2: "net.Q1_GATE" }}
        />
        <SI2323DS_T1_ES
          name="Q1"
          schSectionName="TI_REFERENCE_SCHEMATIC"
          schX={-3}
          schY={1.2}
          schRotation="0deg"
          pcbX={-6.2}
          pcbY={2.8}
          pcbRotation={90}
          connections={{
            gate: "net.Q1_GATE",
            source: N.V33,
            drain: N.DRV_POWER,
          }}
        />
        <DRV5055A4EDBZRQ1
          name="U4"
          schSectionName="TI_REFERENCE_SCHEMATIC"
          schX={4}
          schY={1.2}
          schWidth="3.1mm"
          schHeight="2.2mm"
          schPinArrangement={{ leftSide: [1], rightSide: [2], bottomSide: [3] }}
          pcbX={0.7}
          pcbY={-13.0}
          pcbRotation={90}
          connections={{ VCC: N.DRV_POWER, OUT: N.DRV_OUT, GND: N.GND }}
        />
        <capacitor
          name="C4"
          schSectionName="TI_REFERENCE_SCHEMATIC"
          schX={1.5}
          schY={4.5}
          schRotation="0deg"
          manufacturerPartNumber="GRM188R71H103KA01D"
          supplierPartNumbers={{ jlcpcb: ["C77053"] }}
          capacitance="0.01uF"
          footprint="0603"
          pcbX={-2.3}
          pcbY={-13.0}
          pcbRotation={90}
          connections={{ pin1: N.DRV_POWER, pin2: N.GND }}
        />
      </group>

      <group
        name="HDC2010_BLOCK"
        schSheetName="04 - HDC2010 Humidity"
        schX={0}
        schY={0}
        pcbX={-5.08}
        pcbY={0}
        pcbStyle={{ silkscreenTextVisibility: "hidden" }}
        schMaxTraceDistance="0.8mm"
        schTraceAutoLabelEnabled
      >
        <schematicsection name="TI_REFERENCE_SCHEMATIC" displayName="" sectionTitleFontSize="0.18mm" />
        <schematictext text="HDC2010 temperature and humidity sensor" schX={-7} schY={5.5} fontSize={0.16} anchor="left" />
        <resistor
          name="R6"
          schSectionName="TI_REFERENCE_SCHEMATIC"
          schX={-6}
          schY={1.2}
          manufacturerPartNumber="0603WAF0000T5E"
          supplierPartNumbers={{ jlcpcb: ["C21189"] }}
          resistance="0ohm"
          footprint="0603"
          pcbX={-12.7}
          pcbY={-5.2}
          connections={{ pin1: N.HDC_ENABLE_N, pin2: "net.Q2_GATE" }}
        />
        <SI2323DS_T1_ES
          name="Q2"
          schSectionName="TI_REFERENCE_SCHEMATIC"
          schX={-3}
          schY={1.2}
          schRotation="0deg"
          pcbX={-8.8}
          pcbY={-6.3}
          pcbRotation={90}
          connections={{
            gate: "net.Q2_GATE",
            source: N.V33,
            drain: N.HDC_POWER,
          }}
        />
        <HDC2010YPAR
          name="U3"
          schSectionName="TI_REFERENCE_SCHEMATIC"
          schX={4}
          schY={1.2}
          schWidth="3.4mm"
          schHeight="2.4mm"
          schPinStyle={SENSOR_SCH_PIN_STYLE}
          schPinArrangement={{ leftSide: [2, 3], rightSide: [6, 1, 5], bottomSide: [4] }}
          pcbX={-7.2}
          pcbY={-13.0}
          connections={{
            A1: N.HDC_POWER,
            B1: N.GND,
            B2: N.I2C_SCL,
            A2: N.I2C_SDA,
            C2: N.HDC_INT,
            C1: N.GND,
          }}
        />
        <capacitor
          name="C3"
          schSectionName="TI_REFERENCE_SCHEMATIC"
          schX={1.5}
          schY={4.5}
          schRotation="0deg"
          manufacturerPartNumber="GRM188R71E104KA01D"
          supplierPartNumbers={{ jlcpcb: ["C77050"] }}
          capacitance="0.1uF"
          footprint="0603"
          pcbX={-10.1}
          pcbY={-13.0}
          connections={{ pin1: N.HDC_POWER, pin2: N.GND }}
        />
      </group>

      <group
        name="OPT3001_BLOCK"
        schSheetName="05 - OPT3001 Ambient Light"
        schX={0}
        schY={0}
        pcbX={-5.08}
        pcbY={0}
        pcbStyle={{ silkscreenTextVisibility: "hidden" }}
        schMaxTraceDistance="0.8mm"
        schTraceAutoLabelEnabled
      >
        <schematicsection name="TI_REFERENCE_SCHEMATIC" displayName="" sectionTitleFontSize="0.18mm" />
        <schematictext text="OPT3001 ambient light sensor" schX={-7} schY={5.5} fontSize={0.16} anchor="left" />
        <resistor
          name="R5"
          schSectionName="TI_REFERENCE_SCHEMATIC"
          schX={-5}
          schY={1.2}
          manufacturerPartNumber="0603WAF0000T5E"
          supplierPartNumbers={{ jlcpcb: ["C21189"] }}
          resistance="0ohm"
          footprint="0603"
          pcbX={-8.1}
          pcbY={-3.0}
          connections={{ pin1: N.OPT_POWER, pin2: "net.OPT_VDD" }}
        />
        <OPT3001DNPR
          name="U2"
          schSectionName="TI_REFERENCE_SCHEMATIC"
          schX={2.5}
          schY={1.2}
          schWidth="3.2mm"
          schHeight="2.5mm"
          schPinStyle={SENSOR_SCH_PIN_STYLE}
          schPinArrangement={{ leftSide: [1], rightSide: [4, 6, 5], bottomSide: [2, 3, 7] }}
          pcbX={0.5}
          pcbY={-3.0}
          pcbRotation={90}
          connections={{
            VDD: "net.OPT_VDD",
            SDA: N.I2C_SDA,
            INT: N.OPT_INT,
            ADDR: N.GND,
            GND: N.GND,
            EP: N.GND,
          }}
        />
        <trace
          name="U2_I2C_SCL"
          from=".U2 > .SCL"
          to={N.I2C_SCL}
          schDisplayLabel="I2C_SCL"
        />
        <capacitor
          name="C2"
          schSectionName="TI_REFERENCE_SCHEMATIC"
          schX={-0.5}
          schY={4.5}
          schRotation="270deg"
          manufacturerPartNumber="GRM188R71E104KA01D"
          supplierPartNumbers={{ jlcpcb: ["C77050"] }}
          capacitance="0.1uF"
          footprint="0603"
          pcbX={-2.4}
          pcbY={-3.0}
          pcbRotation={90}
          connections={{ pin1: "net.OPT_VDD", pin2: N.GND }}
        />
      </group>

      <testpoint
        name="GND1"
        schSheetName="01 - BoosterPack Interface"
        schX={0}
        schY={-5.2}
        footprintVariant="pad"
        padShape="rect"
        width="2.2mm"
        height="1.2mm"
        pcbX={4.72}
        pcbY={2.2}
        pcbStyle={{ silkscreenTextVisibility: "hidden" }}
        connections={{ pin1: N.GND }}
      />

      <hole name="H1" diameter="3.2mm" pcbX={-29.21} pcbY={15.24} />
      <hole name="H2" diameter="3.2mm" pcbX={20.32} pcbY={15.24} />
      <hole name="H3" diameter="3.2mm" pcbX={-29.21} pcbY={-15.24} />
      <hole name="H4" diameter="3.2mm" pcbX={20.32} pcbY={-15.24} />

      {/* TI's TMP116 coupon is separated from the main PCB by routed perforation slots. */}
      <cutout name="BREAK_SLOT_2" shape="rect" width="0.75mm" height="4.2mm" pcbX={22.02} pcbY={9.0} />
      <cutout name="BREAK_SLOT_3" shape="rect" width="0.75mm" height="4.2mm" pcbX={22.02} pcbY={3.1} />
      <cutout name="BREAK_SLOT_4" shape="rect" width="0.75mm" height="4.2mm" pcbX={22.02} pcbY={-2.8} />
      <cutout name="BREAK_SLOT_5" shape="rect" width="0.75mm" height="4.2mm" pcbX={22.02} pcbY={-8.7} />

      <copperpour
        name="GND_BOTTOM"
        layer="bottom"
        connectsTo={N.GND}
        padMargin="0.25mm"
        traceMargin="0.2mm"
        boardEdgeMargin="0.3mm"
      />

      {/* Top silkscreen follows the functional zones and labels visible on TI's reference PCB. */}
      <silkscreentext text="Texas Instruments" pcbX={-7.1} pcbY={15.0} fontSize="1.0mm" />
      <silkscreentext text="BOOSTXL-BASSENSORS" pcbX={-7.1} pcbY={12.8} fontSize="1.05mm" />
      <silkscreentext text="SENS026A" pcbX={-7.1} pcbY={11.3} fontSize="0.65mm" />

      <silkscreenrect pcbX={-4.6} pcbY={-1.4} width="8.8mm" height="8.2mm" filled={false} stroke="solid" strokeWidth="0.18mm" />
      <silkscreentext text="OPT3001" pcbX={-4.6} pcbY={1.1} fontSize="0.72mm" />
      <silkscreentext text="Ambient Light" pcbX={-4.6} pcbY={0.0} fontSize="0.58mm" />

      <silkscreenrect pcbX={-12.3} pcbY={-11.0} width="9.3mm" height="9.5mm" filled={false} stroke="solid" strokeWidth="0.18mm" />
      <silkscreentext text="HDC2010" pcbX={-12.3} pcbY={-7.6} fontSize="0.7mm" />
      <silkscreentext text="Temp. and Humidity" pcbX={-12.3} pcbY={-8.7} fontSize="0.5mm" />

      <silkscreenrect pcbX={-4.4} pcbY={-11.0} width="8.0mm" height="9.5mm" filled={false} stroke="solid" strokeWidth="0.18mm" />
      <silkscreentext text="DRV5055A4" pcbX={-4.4} pcbY={-7.6} fontSize="0.68mm" />
      <silkscreentext text="Hall Effect" pcbX={-4.4} pcbY={-8.7} fontSize="0.55mm" />

      <silkscreenrect pcbX={4.9} pcbY={-10.8} width="11.0mm" height="13.3mm" filled={false} stroke="solid" strokeWidth="0.18mm" />
      <silkscreentext text="TMP116" pcbX={4.9} pcbY={-5.8} fontSize="0.72mm" />
      <silkscreentext text="Temperature Connector" pcbX={4.9} pcbY={-7.0} fontSize="0.52mm" />

      <silkscreenrect pcbX={27.02} pcbY={-11.1} width="9.1mm" height="12.6mm" filled={false} stroke="solid" strokeWidth="0.18mm" />
      <silkscreentext text="TMP116" pcbX={27.02} pcbY={-5.6} fontSize="0.68mm" />
      <silkscreentext text="Temperature" pcbX={27.02} pcbY={-6.7} fontSize="0.55mm" />
      <silkscreentext text="BREAKAWAY" pcbX={22.02} pcbY={0} pcbRotation={90} fontSize="0.48mm" />

      <silkscreentext text="GND" pcbX={4.72} pcbY={0.4} fontSize="0.62mm" />
      <silkscreentext text="C5" pcbX={-24.5} pcbY={16.4} fontSize="0.48mm" />
      <silkscreentext text="R8" pcbX={-14.8} pcbY={6.2} fontSize="0.48mm" />
      <silkscreentext text="Q1" pcbX={-10.9} pcbY={1.0} fontSize="0.48mm" />
      <silkscreentext text="R5" pcbX={-13.2} pcbY={-1.5} fontSize="0.48mm" />
      <silkscreentext text="Q2" pcbX={-13.9} pcbY={-8.4} fontSize="0.48mm" />
      <silkscreentext text="R6" pcbX={-17.8} pcbY={-3.6} fontSize="0.48mm" />
      <silkscreentext text="C2" pcbX={-7.5} pcbY={-5.2} fontSize="0.48mm" />
      <silkscreentext text="U2" pcbX={-4.6} pcbY={-5.2} fontSize="0.48mm" />
      <silkscreentext text="C3" pcbX={-15.2} pcbY={-15.5} fontSize="0.48mm" />
      <silkscreentext text="U3" pcbX={-12.3} pcbY={-15.5} fontSize="0.48mm" />
      <silkscreentext text="C4" pcbX={-7.4} pcbY={-15.5} fontSize="0.48mm" />
      <silkscreentext text="U4" pcbX={-4.4} pcbY={-15.5} fontSize="0.48mm" />
      <silkscreentext text="R1" pcbX={1.0} pcbY={-8.8} fontSize="0.48mm" />
      <silkscreentext text="J5" pcbX={5.0} pcbY={-11.2} fontSize="0.5mm" />
      <silkscreentext text="D2" pcbX={7.6} pcbY={16.4} fontSize="0.48mm" />
      <silkscreentext text="D1" pcbX={10.7} pcbY={16.4} fontSize="0.48mm" />
      <silkscreentext text="R4" pcbX={14.4} pcbY={16.4} fontSize="0.48mm" />
      <silkscreentext text="R7" pcbX={7.6} pcbY={8.5} fontSize="0.48mm" />
      <silkscreentext text="J6" pcbX={27.0} pcbY={-11.3} fontSize="0.5mm" />
      <silkscreentext text="U1" pcbX={27.0} pcbY={-9.8} fontSize="0.48mm" />
      <silkscreentext text="C1" pcbX={30.0} pcbY={-8.2} fontSize="0.48mm" />
      <silkscreentext text="3V3" pcbX={-30.0} pcbY={12.8} fontSize="0.62mm" />
      <silkscreentext text="D_OUT" pcbX={-30.0} pcbY={10.2} fontSize="0.55mm" />
      <silkscreentext text="H_INT" pcbX={-30.0} pcbY={7.7} fontSize="0.55mm" />
      <silkscreentext text="D_V+" pcbX={-30.0} pcbY={5.2} fontSize="0.55mm" />
      <silkscreentext text="O_INT" pcbX={-30.0} pcbY={2.7} fontSize="0.55mm" />
      <silkscreentext text="H_V+" pcbX={-30.0} pcbY={0.2} fontSize="0.55mm" />
      <silkscreentext text="T_A" pcbX={-30.0} pcbY={-2.4} fontSize="0.55mm" />
      <silkscreentext text="O_V+" pcbX={-30.0} pcbY={-4.9} fontSize="0.55mm" />
      <silkscreentext text="SCL" pcbX={-30.0} pcbY={-10.2} fontSize="0.62mm" />
      <silkscreentext text="SDA" pcbX={-30.0} pcbY={-12.8} fontSize="0.62mm" />
      <silkscreentext text="LED_G" pcbX={11.4} pcbY={10.2} fontSize="0.58mm" />
      <silkscreentext text="LED_R" pcbX={11.4} pcbY={8.6} fontSize="0.58mm" />
      <silkscreentext text="GND" pcbX={20.4} pcbY={12.8} fontSize="0.62mm" />

      {/* Bottom-side identification and LaunchPad compatibility markings. */}
      <silkscreentext layer="bottom" text="For evaluation only; not FCC approved for resale." pcbX={-5.08} pcbY={15.0} pcbRotation={180} fontSize="0.55mm" />
      <silkscreentext layer="bottom" text="Works with TI LaunchPad" pcbX={-5.08} pcbY={1.5} pcbRotation={180} fontSize="0.82mm" />
      <silkscreentext layer="bottom" text="Building Automation Systems" pcbX={-5.08} pcbY={-6.5} pcbRotation={180} fontSize="0.72mm" />
      <silkscreentext layer="bottom" text="Sensor BoosterPack" pcbX={-5.08} pcbY={-8.2} pcbRotation={180} fontSize="0.72mm" />
      <silkscreentext layer="bottom" text="BOOSTXL-BASSENSORS" pcbX={-5.08} pcbY={-10.2} pcbRotation={180} fontSize="0.82mm" />
    </board>
  )
}
