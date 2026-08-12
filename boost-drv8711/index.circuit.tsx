import { A_1711725 } from "./imports/A_1711725";
import { A_1712805 } from "./imports/A_1712805";
import { A_3386P_1_104TLF } from "./imports/A_3386P_1_104TLF";
import { CSD88537ND } from "./imports/CSD88537ND";
import { DRV8711DCPR } from "./imports/DRV8711DCPR";
import { ECA2AM101 } from "./imports/ECA2AM101";
import { PM254_1_10_Z_8_5 } from "./imports/PM254_1_10_Z_8_5";

export default () => (
  <board
    title="TI BOOST-DRV8711 Stepper Motor BoosterPack"
    width="50.8mm"
    height="44.45mm"
    layers={2}
    thickness="1.6mm"
    solderMaskColor="red"
    silkscreenColor="white"
    minViaHoleDiameter="0.3mm"
    minViaPadDiameter="0.6mm"
  >
    <schematicsheet
      name="Power stage"
      displayName="Power stage"
      sheetIndex={1}
    />
    <schematicsheet
      name="Controller and interface"
      displayName="Controller and interface"
      sheetIndex={2}
    />

    {/* TI BOOST-DRV8711 BOM and coordinates from the supplied Altium/ODB++ files. */}
    <DRV8711DCPR
      name="U1"
      schPinArrangement={{
        leftSide: {
          pins: [
            "CP1",
            "CP2",
            "VCP",
            "VM",
            "V5",
            "VINT",
            "SLEEPN",
            "RESET",
            "pin10",
            "pin11",
            "BIN1",
            "BIN2",
            "SCLK",
            "SDATI",
            "SCS",
            "SDATO",
            "FAULTN",
            "pin19",
          ],
          direction: "top-to-bottom",
        },
        rightSide: {
          pins: [
            "AOUT1",
            "A1HS",
            "A1LS",
            "AISENP",
            "AISENN",
            "A2LS",
            "A2HS",
            "AOUT2",
            "BOUT1",
            "B1HS",
            "B1LS",
            "BISENP",
            "BISENN",
            "B2LS",
            "B2HS",
            "BOUT2",
            "BEMF",
            "GND1",
            "GND2",
            "GND3",
            "EP",
          ],
          direction: "top-to-bottom",
        },
      }}
      pcbX={0}
      pcbY={-7.493}
      pcbRotation={0}
      schX={0}
      schY={0}
      schWidth="5mm"
      schHeight="9mm"
      schSheetName="Controller and interface"
    />

    <CSD88537ND
      name="Q1"
      pcbX={-9.1382469}
      pcbY={7.5214124}
      pcbRotation={0}
      schX={-8.1}
      schY={3}
      schWidth="1.8mm"
      schHeight="1.8mm"
      schSheetName="Power stage"
    />
    <CSD88537ND
      name="Q2"
      pcbX={-3.0422469}
      pcbY={7.5214124}
      pcbRotation={0}
      schX={-2.7}
      schY={3}
      schWidth="1.8mm"
      schHeight="1.8mm"
      schSheetName="Power stage"
    />
    <CSD88537ND
      name="Q3"
      pcbX={3.0537531}
      pcbY={7.5214124}
      pcbRotation={0}
      schX={2.7}
      schY={3}
      schWidth="1.8mm"
      schHeight="1.8mm"
      schSheetName="Power stage"
    />
    <CSD88537ND
      name="Q4"
      pcbX={9.1497531}
      pcbY={7.5214124}
      pcbRotation={0}
      schX={8.1}
      schY={3}
      schWidth="1.8mm"
      schHeight="1.8mm"
      schSheetName="Power stage"
    />

    <PM254_1_10_Z_8_5
      name="J1"
      layer="bottom"
      pcbX={-22.86}
      pcbY={-8.255}
      pcbRotation={90}
      schPinArrangement={{
        rightSide: {
          pins: [
            "pin1",
            "pin2",
            "pin3",
            "pin4",
            "pin5",
            "pin6",
            "pin7",
            "pin8",
            "pin9",
            "pin10",
          ],
          direction: "top-to-bottom",
        },
      }}
      schX={-8}
      schY={0}
      schWidth="0.5mm"
      schHeight="3mm"
      schSheetName="Controller and interface"
    />
    <PM254_1_10_Z_8_5
      name="J2"
      layer="bottom"
      pcbX={22.86}
      pcbY={-8.255}
      pcbRotation={90}
      schPinArrangement={{
        leftSide: {
          pins: [
            "pin1",
            "pin2",
            "pin3",
            "pin4",
            "pin5",
            "pin6",
            "pin7",
            "pin8",
            "pin9",
            "pin10",
          ],
          direction: "top-to-bottom",
        },
      }}
      schX={8}
      schY={0}
      schWidth="0.5mm"
      schHeight="3mm"
      schSheetName="Controller and interface"
    />
    <A_1711725
      name="J5"
      pcbX={17.907}
      pcbY={18.161}
      pcbRotation={180}
      schX={-7}
      schY={-3}
      schSheetName="Power stage"
    />
    <A_1712805
      name="J6"
      pcbX={0}
      pcbY={18.161}
      pcbRotation={180}
      schX={0}
      schY={5.5}
      schWidth="3mm"
      schSheetName="Power stage"
    />

    <ECA2AM101
      name="C1"
      symbol="capacitor"
      pcbX={-17.78}
      pcbY={13.589}
      pcbRotation={90}
      schX={-4.5}
      schY={-3}
      schWidth="0.9mm"
      schHeight="0.6mm"
      schSheetName="Power stage"
    />
    <capacitor
      name="C2"
      capacitance="10nF"
      maxVoltageRating="100V"
      footprint="0603"
      manufacturerPartNumber="C1608X7R2A103K"
      pcbX={-13.462}
      pcbY={6.785}
      pcbRotation={270}
      schX={-1.5}
      schY={-3}
      schOrientation="vertical"
      schSheetName="Power stage"
    />
    <capacitor
      name="C3"
      capacitance="0.1uF"
      maxVoltageRating="100V"
      footprint="0603"
      manufacturerPartNumber="GRM188R72A104KA35D"
      pcbX={-7.004}
      pcbY={-11.684}
      pcbRotation={0}
      schX={-5.9}
      schY={6}
      schRotation={90}
      schSheetName="Controller and interface"
    />
    <capacitor
      name="C4"
      capacitance="1uF"
      footprint="0805"
      manufacturerPartNumber="CL21B105KBFNNNE"
      pcbX={-5.969}
      pcbY={-13.462}
      pcbRotation={0}
      schX={-5.1}
      schY={5}
      schRotation={90}
      schSheetName="Controller and interface"
    />
    <capacitor
      name="C5"
      capacitance="0.1uF"
      maxVoltageRating="25V"
      maxDecouplingTraceLength="12mm"
      footprint="0603"
      manufacturerPartNumber="C1608X7R1E104K"
      pcbX={-3.048}
      pcbY={-16.002}
      pcbRotation={270}
      schX={-5.9}
      schY={3}
      schOrientation="vertical"
      schSheetName="Controller and interface"
    />
    <capacitor
      name="C6"
      capacitance="1uF"
      maxVoltageRating="16V"
      maxDecouplingTraceLength="12mm"
      footprint="0603"
      manufacturerPartNumber="C1608X7R1C105K"
      pcbX={-1.524}
      pcbY={-16.002}
      pcbRotation={270}
      schX={-5.1}
      schY={1.5}
      schOrientation="vertical"
      schSheetName="Controller and interface"
    />
    <capacitor
      name="C7"
      capacitance="1000pF"
      footprint="0603"
      manufacturerPartNumber="C0603C102K4RACTU"
      pcbX={6.096}
      pcbY={-5.461}
      pcbRotation={270}
      schX={5.5}
      schY={5}
      schOrientation="vertical"
      schSheetName="Controller and interface"
    />
    <capacitor
      name="C8"
      capacitance="1uF"
      maxVoltageRating="100V"
      footprint="1206"
      manufacturerPartNumber="HMK316B7105KL-T"
      pcbX={-6.604}
      pcbY={-15.748}
      pcbRotation={180}
      schX={1.5}
      schY={-3}
      schOrientation="vertical"
      schSheetName="Power stage"
    />

    <resistor
      name="R1"
      resistance="0.05"
      tolerance="1%"
      footprint="2512"
      manufacturerPartNumber="CRA2512-FZ-R050ELF"
      pcbX={-11.049}
      pcbY={1.143}
      pcbRotation={0}
      schX={-2.5}
      schY={0}
      schRotation={90}
      schSheetName="Power stage"
    />
    <resistor
      name="R2"
      resistance="0.05"
      tolerance="1%"
      footprint="2512"
      manufacturerPartNumber="CRA2512-FZ-R050ELF"
      pcbX={11.049}
      pcbY={1.143}
      pcbRotation={180}
      schX={2.5}
      schY={0}
      schRotation={90}
      schSheetName="Power stage"
    />
    <resistor
      name="R3"
      resistance="3.3k"
      tolerance="5%"
      footprint="0603"
      manufacturerPartNumber="CRCW06033K30JNEA"
      pcbX={16.129}
      pcbY={-14.224}
      pcbRotation={270}
      schX={5.5}
      schY={-4}
      schRotation={90}
      schSheetName="Controller and interface"
    />
    <resistor
      name="R4"
      resistance="330"
      tolerance="5%"
      footprint="0603"
      manufacturerPartNumber="CRCW0603330RJNEA"
      pcbX={13.081}
      pcbY={-19.431}
      pcbRotation={270}
      schX={9}
      schY={-4.5}
      schRotation={90}
      schSheetName="Controller and interface"
    />
    <resistor
      name="R5"
      resistance="330"
      tolerance="5%"
      footprint="0603"
      manufacturerPartNumber="CRCW0603330RJNEA"
      pcbX={9.525}
      pcbY={-19.431}
      pcbRotation={90}
      schX={3.5}
      schY={-5.5}
      schRotation={90}
      schSheetName="Controller and interface"
    />
    <A_3386P_1_104TLF
      name="R6"
      symbol="potentiometer3"
      pcbX={-14.605}
      pcbY={-18.415}
      pcbRotation={90}
      schX={-8}
      schY={-6}
      schHeight="0.5mm"
      schSheetName="Controller and interface"
    />

    <led
      name="D1"
      color="red"
      footprint="0805"
      manufacturerPartNumber="LTST-C170KRKT"
      supplierPartNumbers={{ jlcpcb: ["C94868"] }}
      pcbX={9.525}
      pcbY={-14.351}
      pcbRotation={270}
      schX={3.5}
      schY={-4}
      schRotation={270}
      schSheetName="Controller and interface"
    />
    <led
      name="D2"
      color="red"
      footprint="0805"
      manufacturerPartNumber="LTST-C170KRKT"
      supplierPartNumbers={{ jlcpcb: ["C94868"] }}
      pcbX={13.081}
      pcbY={-14.351}
      pcbRotation={270}
      schX={7.5}
      schY={-4}
      schRotation={270}
      schSheetName="Controller and interface"
    />

    <jumper
      name="NT1"
      footprint="0201"
      layer="bottom"
      pcbX={-7.112}
      pcbY={-1.905}
      pcbRotation={0}
      schX={-5}
      schY={0}
      schSheetName="Power stage"
    />
    <jumper
      name="NT2"
      footprint="0201"
      layer="bottom"
      pcbX={7.239}
      pcbY={-1.143}
      pcbRotation={180}
      schX={5}
      schY={0}
      schSheetName="Power stage"
    />
    <jumper
      name="NT3"
      footprint="0201"
      layer="bottom"
      pcbX={-13.208}
      pcbY={-1.143}
      pcbRotation={0}
      schX={-7.5}
      schY={0}
      schSheetName="Power stage"
    />
    <jumper
      name="NT4"
      footprint="0201"
      layer="bottom"
      pcbX={13.335}
      pcbY={-1.143}
      pcbRotation={180}
      schX={7.5}
      schY={0}
      schSheetName="Power stage"
    />

    {/* Motor supply and power-stage nets. */}
    <trace
      from=".J5 > .pin2"
      to="net.VM"
      width="0.508mm"
      schDisplayLabel="VM"
    />
    <trace
      from=".C1 > .pin1"
      to="net.VM"
      width="0.508mm"
      schDisplayLabel="VM"
    />
    <trace
      from=".C2 > .pin1"
      to="net.VM"
      width="0.508mm"
      schDisplayLabel="VM"
    />
    <trace
      from=".C8 > .pin1"
      to="net.VM"
      width="0.508mm"
      schDisplayLabel="VM"
    />
    <trace from=".U1 > .VM" to="net.VM" width="0.508mm" schDisplayLabel="VM" />
    <trace from=".Q1 > .D11" to="net.VM" width="0.508mm" schDisplayLabel="VM" />
    <trace from=".Q1 > .D12" to="net.VM" width="0.508mm" schDisplayLabel="VM" />
    <trace from=".Q2 > .D21" to="net.VM" width="0.508mm" schDisplayLabel="VM" />
    <trace from=".Q2 > .D22" to="net.VM" width="0.508mm" schDisplayLabel="VM" />
    <trace from=".Q3 > .D11" to="net.VM" width="0.508mm" schDisplayLabel="VM" />
    <trace from=".Q3 > .D12" to="net.VM" width="0.508mm" schDisplayLabel="VM" />
    <trace from=".Q4 > .D21" to="net.VM" width="0.508mm" schDisplayLabel="VM" />
    <trace from=".Q4 > .D22" to="net.VM" width="0.508mm" schDisplayLabel="VM" />

    <trace
      from=".J5 > .pin1"
      to="net.GND"
      width="0.508mm"
      schDisplayLabel="GND"
    />
    <trace
      from=".C1 > .pin2"
      to="net.GND"
      width="0.508mm"
      schDisplayLabel="GND"
    />
    <trace
      from=".C2 > .pin2"
      to="net.GND"
      width="0.254mm"
      schDisplayLabel="GND"
    />
    <trace
      from=".C5 > .pin2"
      to="net.GND"
      width="0.254mm"
      schDisplayLabel="GND"
    />
    <trace
      from=".C6 > .pin2"
      to="net.GND"
      width="0.254mm"
      schDisplayLabel="GND"
    />
    <trace
      from=".C7 > .pin2"
      to="net.GND"
      width="0.254mm"
      schDisplayLabel="GND"
    />
    <trace
      from=".C8 > .pin2"
      to="net.GND"
      width="0.508mm"
      schDisplayLabel="GND"
    />
    <trace
      from=".R6 > .pin1"
      to="net.GND"
      width="0.254mm"
      schDisplayLabel="GND"
    />
    <trace
      from=".U1 > .GND1"
      to="net.GND"
      width="0.508mm"
      schDisplayLabel="GND"
    />
    <trace
      from=".U1 > .GND2"
      to="net.GND"
      width="0.508mm"
      schDisplayLabel="GND"
    />
    <trace
      from=".U1 > .GND3"
      to="net.GND"
      width="0.508mm"
      schDisplayLabel="GND"
    />
    <trace
      from=".U1 > .EP"
      to="net.GND"
      width="0.508mm"
      schDisplayLabel="GND"
    />
    <trace
      from=".J2 > .pin1"
      to="net.GND"
      width="0.508mm"
      schDisplayLabel="GND"
    />

    <trace
      from=".Q1 > .S1"
      to="net.AOUT1"
      width="0.254mm"
      schDisplayLabel="AOUT1"
    />
    <trace
      from=".Q1 > .D21"
      to="net.AOUT1"
      width="0.254mm"
      schDisplayLabel="AOUT1"
    />
    <trace
      from=".Q1 > .D22"
      to="net.AOUT1"
      width="0.254mm"
      schDisplayLabel="AOUT1"
    />
    <trace
      from=".U1 > .AOUT1"
      to="net.AOUT1"
      width="0.254mm"
      schDisplayLabel="AOUT1"
    />
    <trace
      from=".J6 > .pin4"
      to="net.AOUT1"
      width="0.254mm"
      schDisplayLabel="AOUT1"
    />
    <trace
      from=".Q2 > .S2"
      to="net.AOUT2"
      width="0.254mm"
      schDisplayLabel="AOUT2"
    />
    <trace
      from=".Q2 > .D11"
      to="net.AOUT2"
      width="0.254mm"
      schDisplayLabel="AOUT2"
    />
    <trace
      from=".Q2 > .D12"
      to="net.AOUT2"
      width="0.254mm"
      schDisplayLabel="AOUT2"
    />
    <trace
      from=".U1 > .AOUT2"
      to="net.AOUT2"
      width="0.254mm"
      schDisplayLabel="AOUT2"
    />
    <trace
      from=".J6 > .pin3"
      to="net.AOUT2"
      width="0.254mm"
      schDisplayLabel="AOUT2"
    />
    <trace
      from=".Q3 > .S1"
      to="net.BOUT1"
      width="0.254mm"
      schDisplayLabel="BOUT1"
    />
    <trace
      from=".Q3 > .D21"
      to="net.BOUT1"
      width="0.254mm"
      schDisplayLabel="BOUT1"
    />
    <trace
      from=".Q3 > .D22"
      to="net.BOUT1"
      width="0.254mm"
      schDisplayLabel="BOUT1"
    />
    <trace
      from=".U1 > .BOUT1"
      to="net.BOUT1"
      width="0.254mm"
      schDisplayLabel="BOUT1"
    />
    <trace
      from=".J6 > .pin2"
      to="net.BOUT1"
      width="0.254mm"
      schDisplayLabel="BOUT1"
    />
    <trace
      from=".Q4 > .S2"
      to="net.BOUT2"
      width="0.254mm"
      schDisplayLabel="BOUT2"
    />
    <trace
      from=".Q4 > .D11"
      to="net.BOUT2"
      width="0.254mm"
      schDisplayLabel="BOUT2"
    />
    <trace
      from=".Q4 > .D12"
      to="net.BOUT2"
      width="0.254mm"
      schDisplayLabel="BOUT2"
    />
    <trace
      from=".U1 > .BOUT2"
      to="net.BOUT2"
      width="0.254mm"
      schDisplayLabel="BOUT2"
    />
    <trace
      from=".J6 > .pin1"
      to="net.BOUT2"
      width="0.254mm"
      schDisplayLabel="BOUT2"
    />

    <trace
      from=".Q1 > .S2"
      to="net.GND_A"
      width="0.254mm"
      schDisplayLabel="GND_A"
    />
    <trace
      from=".R1 > .pin2"
      to="net.GND_A"
      width="0.254mm"
      schDisplayLabel="GND_A"
    />
    <trace
      from=".NT1 > .pin2"
      to="net.GND_A"
      width="0.254mm"
      schDisplayLabel="GND_A"
    />
    <trace
      from=".Q2 > .S1"
      to="net.GND_A"
      width="0.254mm"
      schDisplayLabel="GND_A"
    />
    <trace
      from=".R1 > .pin1"
      to="net.GND"
      width="0.508mm"
      schDisplayLabel="GND"
    />
    <trace
      from=".NT3 > .pin2"
      to="net.GND"
      width="0.254mm"
      schDisplayLabel="GND"
    />
    <trace
      from=".Q3 > .S2"
      to="net.GND_B"
      width="0.254mm"
      schDisplayLabel="GND_B"
    />
    <trace
      from=".R2 > .pin2"
      to="net.GND_B"
      width="0.254mm"
      schDisplayLabel="GND_B"
    />
    <trace
      from=".NT2 > .pin2"
      to="net.GND_B"
      width="0.254mm"
      schDisplayLabel="GND_B"
    />
    <trace
      from=".Q4 > .S1"
      to="net.GND_B"
      width="0.254mm"
      schDisplayLabel="GND_B"
    />
    <trace
      from=".R2 > .pin1"
      to="net.GND"
      width="0.508mm"
      schDisplayLabel="GND"
    />
    <trace
      from=".NT4 > .pin2"
      to="net.GND"
      width="0.254mm"
      schDisplayLabel="GND"
    />

    {/* Gate-drive and current-sense connections. */}
    <trace from=".U1 > .A1HS" to=".Q1 > .G1" width="0.254mm" />
    <trace from=".U1 > .A1LS" to=".Q1 > .G2" width="0.254mm" />
    <trace from=".U1 > .A2LS" to=".Q2 > .G1" width="0.254mm" />
    <trace from=".U1 > .A2HS" to=".Q2 > .G2" width="0.254mm" />
    <trace from=".U1 > .B1HS" to=".Q3 > .G1" width="0.254mm" />
    <trace from=".U1 > .B1LS" to=".Q3 > .G2" width="0.254mm" />
    <trace from=".U1 > .B2LS" to=".Q4 > .G1" width="0.254mm" />
    <trace from=".U1 > .B2HS" to=".Q4 > .G2" width="0.254mm" />
    <trace
      from=".U1 > .AISENP"
      to="net.AISENP"
      width="0.254mm"
      schDisplayLabel="AISENP"
    />
    <trace
      from=".NT1 > .pin1"
      to="net.AISENP"
      width="0.254mm"
      schDisplayLabel="AISENP"
    />
    <trace
      from=".U1 > .AISENN"
      to="net.AISENN"
      width="0.254mm"
      schDisplayLabel="AISENN"
    />
    <trace
      from=".NT3 > .pin1"
      to="net.AISENN"
      width="0.254mm"
      schDisplayLabel="AISENN"
    />
    <trace
      from=".U1 > .BISENP"
      to="net.BISENP"
      width="0.254mm"
      schDisplayLabel="BISENP"
    />
    <trace
      from=".NT2 > .pin1"
      to="net.BISENP"
      width="0.254mm"
      schDisplayLabel="BISENP"
    />
    <trace
      from=".U1 > .BISENN"
      to="net.BISENN"
      width="0.254mm"
      schDisplayLabel="BISENN"
    />
    <trace
      from=".NT4 > .pin1"
      to="net.BISENN"
      width="0.254mm"
      schDisplayLabel="BISENN"
    />

    {/* Charge pump, regulators, and BEMF filter. */}
    <trace from=".U1 > .CP1" to=".C3 > .pin1" width="0.254mm" />
    <trace from=".U1 > .CP2" to=".C3 > .pin2" width="0.254mm" />
    <trace from=".U1 > .VCP" to=".C4 > .pin1" width="0.254mm" />
    <trace
      from=".C4 > .pin2"
      to="net.VM"
      width="0.254mm"
      schDisplayLabel="VM"
    />
    <trace from=".U1 > .V5" to=".C5 > .pin1" width="0.254mm" />
    <trace from=".U1 > .VINT" to=".C6 > .pin1" width="0.254mm" />
    <trace from=".U1 > .BEMF" to=".C7 > .pin1" width="0.254mm" />

    {/* LaunchPad control interface and status indicators. */}
    <trace
      from=".J1 > .pin1"
      to="net.V3P3"
      width="0.508mm"
      schDisplayLabel="3.3V"
    />
    <trace
      from=".R6 > .pin3"
      to="net.V3P3"
      width="0.508mm"
      schDisplayLabel="3.3V"
    />
    <trace
      from=".R3 > .pin2"
      to="net.V3P3"
      width="0.508mm"
      schDisplayLabel="3.3V"
    />
    <trace
      from=".D1 > .pin1"
      to="net.V3P3"
      width="0.508mm"
      schDisplayLabel="3.3V"
    />
    <trace
      from=".D2 > .pin1"
      to="net.V3P3"
      width="0.508mm"
      schDisplayLabel="3.3V"
    />
    <trace
      from=".R6 > .pin2"
      to=".J1 > .pin2"
      width="0.254mm"
      schDisplayLabel="POT"
    />

    <trace
      from=".U1 > .SLEEPN"
      to="net.NSLEEP"
      width="0.254mm"
      schDisplayLabel="nSLEEP"
    />
    <trace
      from=".J1 > .pin6"
      to="net.NSLEEP"
      width="0.254mm"
      schDisplayLabel="nSLEEP"
    />
    <trace
      from=".U1 > .RESET"
      to="net.RESET"
      width="0.254mm"
      schDisplayLabel="RESET"
    />
    <trace
      from=".J1 > .pin8"
      to="net.RESET"
      width="0.254mm"
      schDisplayLabel="RESET"
    />
    <trace
      from=".U1 > .pin10"
      to="net.STEP_AIN1"
      width="0.254mm"
      schDisplayLabel="STEP/AIN1"
    />
    <trace
      from=".J1 > .pin9"
      to="net.STEP_AIN1"
      width="0.254mm"
      schDisplayLabel="STEP/AIN1"
    />
    <trace
      from=".U1 > .pin11"
      to="net.DIR_AIN2"
      width="0.254mm"
      schDisplayLabel="DIR/AIN2"
    />
    <trace
      from=".J1 > .pin10"
      to="net.DIR_AIN2"
      width="0.254mm"
      schDisplayLabel="DIR/AIN2"
    />
    <trace
      from=".U1 > .SCLK"
      to="net.SCLK"
      width="0.254mm"
      schDisplayLabel="SCLK"
    />
    <trace
      from=".J1 > .pin7"
      to="net.SCLK"
      width="0.254mm"
      schDisplayLabel="SCLK"
    />

    <trace
      from=".U1 > .BIN1"
      to="net.BIN1"
      width="0.254mm"
      schDisplayLabel="BIN1"
    />
    <trace
      from=".J2 > .pin8"
      to="net.BIN1"
      width="0.254mm"
      schDisplayLabel="BIN1"
    />
    <trace
      from=".U1 > .BIN2"
      to="net.BIN2"
      width="0.254mm"
      schDisplayLabel="BIN2"
    />
    <trace
      from=".J2 > .pin9"
      to="net.BIN2"
      width="0.254mm"
      schDisplayLabel="BIN2"
    />
    <trace
      from=".U1 > .SDATI"
      to="net.SDATI"
      width="0.254mm"
      schDisplayLabel="SDATI"
    />
    <trace
      from=".J2 > .pin6"
      to="net.SDATI"
      width="0.254mm"
      schDisplayLabel="SDATI"
    />
    <trace
      from=".U1 > .SCS"
      to="net.SCS"
      width="0.254mm"
      schDisplayLabel="SCS"
    />
    <trace
      from=".J2 > .pin10"
      to="net.SCS"
      width="0.254mm"
      schDisplayLabel="SCS"
    />
    <trace
      from=".U1 > .SDATO"
      to="net.SDATO"
      width="0.254mm"
      schDisplayLabel="SDATO"
    />
    <trace
      from=".J2 > .pin7"
      to="net.SDATO"
      width="0.254mm"
      schDisplayLabel="SDATO"
    />
    <trace
      from=".R3 > .pin1"
      to="net.SDATO"
      width="0.254mm"
      schDisplayLabel="SDATO"
    />

    <trace
      from=".U1 > .FAULTN"
      to="net.NFAULT"
      width="0.254mm"
      schDisplayLabel="nFAULT"
    />
    <trace
      from=".J2 > .pin3"
      to="net.NFAULT"
      width="0.254mm"
      schDisplayLabel="nFAULT"
    />
    <trace
      from=".R4 > .pin2"
      to="net.NFAULT"
      width="0.254mm"
      schDisplayLabel="nFAULT"
    />
    <trace from=".R4 > .pin1" to=".D2 > .pin2" width="0.254mm" />
    <trace
      from=".U1 > .pin19"
      to="net.NSTALL"
      width="0.254mm"
      schDisplayLabel="nSTALL"
    />
    <trace
      from=".J2 > .pin2"
      to="net.NSTALL"
      width="0.254mm"
      schDisplayLabel="nSTALL"
    />
    <trace
      from=".R5 > .pin1"
      to="net.NSTALL"
      width="0.254mm"
      schDisplayLabel="nSTALL"
    />
    <trace from=".R5 > .pin2" to=".D1 > .pin2" width="0.254mm" />

    {/* Copper regions digitized from the supplied BOOST-DRV8711 ODB++ artwork. */}
    <copperpour
      name="GND_TOP_POUR"
      connectsTo="net.GND"
      layer="top"
      clearance="0.381mm"
      padMargin="0.381mm"
      traceMargin="0.381mm"
      cutoutMargin="0.381mm"
      boardEdgeMargin="0mm"
      coveredWithSolderMask
      outline={[
        { x: 24.882048, y: -21.707048 },
        { x: -24.882048, y: -21.707048 },
        { x: -24.882048, y: 21.707048 },
        { x: 24.882048, y: 21.707048 },
        { x: 24.882048, y: -21.707048 },
      ]}
    />
    <copperpour
      name="GND_BOTTOM_POUR"
      connectsTo="net.GND"
      layer="bottom"
      clearance="0.381mm"
      padMargin="0.381mm"
      traceMargin="0.381mm"
      cutoutMargin="0.381mm"
      boardEdgeMargin="0mm"
      coveredWithSolderMask
      outline={[
        { x: 24.882048, y: -21.707048 },
        { x: -24.882048, y: -21.707048 },
        { x: -24.882048, y: 21.707048 },
        { x: 24.882048, y: 21.707048 },
        { x: 24.882048, y: -21.707048 },
      ]}
    />

    <copperpour
      name="AOUT1_TOP_POUR"
      connectsTo="net.AOUT1"
      layer="top"
      clearance="0.381mm"
      padMargin="0.381mm"
      traceMargin="0.381mm"
      cutoutMargin="0.381mm"
      boardEdgeMargin="0mm"
      coveredWithSolderMask
      outline={[
        { x: -5.334, y: 14.351 },
        { x: -6.35, y: 13.335 },
        { x: -6.35, y: 7.239 },
        { x: -6.858, y: 6.731 },
        { x: -10.16, y: 6.731 },
        { x: -10.668, y: 6.223 },
        { x: -10.668, y: 3.937 },
        { x: -11.938, y: 3.937 },
        { x: -11.938, y: 7.747 },
        { x: -11.43, y: 8.255 },
        { x: -9.398, y: 8.255 },
        { x: -8.89, y: 8.763 },
        { x: -8.89, y: 13.335 },
        { x: -9.906, y: 14.351 },
        { x: -9.906, y: 19.685 },
        { x: -5.334, y: 19.685 },
        { x: -5.334, y: 14.351 },
      ]}
    />
    <copperpour
      name="AOUT2_TOP_POUR"
      connectsTo="net.AOUT2"
      layer="top"
      clearance="0.381mm"
      padMargin="0.381mm"
      traceMargin="0.381mm"
      cutoutMargin="0.381mm"
      boardEdgeMargin="0mm"
      coveredWithSolderMask
      outline={[
        { x: -0.254, y: 13.335 },
        { x: -2.032, y: 11.557 },
        { x: -2.794, y: 11.557 },
        { x: -3.302, y: 11.049 },
        { x: -3.302, y: 8.763 },
        { x: -2.032, y: 7.493 },
        { x: -2.032, y: 3.937 },
        { x: -2.794, y: 3.937 },
        { x: -2.794, y: 6.186998 },
        { x: -3.048, y: 6.477 },
        { x: -3.302, y: 6.731 },
        { x: -5.334, y: 6.731 },
        { x: -5.842, y: 7.239 },
        { x: -5.842, y: 12.954 },
        { x: -4.826, y: 13.97 },
        { x: -4.826, y: 19.685 },
        { x: -0.254, y: 19.685 },
        { x: -0.254, y: 13.335 },
      ]}
    />
    <copperpour
      name="BOUT1_TOP_POUR"
      connectsTo="net.BOUT1"
      layer="top"
      clearance="0.381mm"
      padMargin="0.381mm"
      traceMargin="0.381mm"
      cutoutMargin="0.381mm"
      boardEdgeMargin="0mm"
      coveredWithSolderMask
      outline={[
        { x: 4.826, y: 13.97 },
        { x: 5.842, y: 12.954 },
        { x: 5.842, y: 7.239 },
        { x: 5.334, y: 6.731 },
        { x: 2.032, y: 6.731 },
        { x: 1.524, y: 6.223 },
        { x: 1.521998, y: 3.937 },
        { x: 0.762, y: 3.937 },
        { x: 0.762, y: 7.747 },
        { x: 1.27, y: 8.255 },
        { x: 2.794, y: 8.255 },
        { x: 3.302, y: 8.763 },
        { x: 3.302, y: 11.938 },
        { x: 0.254, y: 14.986 },
        { x: 0.254, y: 19.685 },
        { x: 4.826, y: 19.685 },
        { x: 4.826, y: 13.97 },
      ]}
    />
    <copperpour
      name="BOUT2_TOP_POUR"
      connectsTo="net.BOUT2"
      layer="top"
      clearance="0.381mm"
      padMargin="0.381mm"
      traceMargin="0.381mm"
      cutoutMargin="0.381mm"
      boardEdgeMargin="0mm"
      coveredWithSolderMask
      outline={[
        { x: 9.779, y: 13.97 },
        { x: 8.89, y: 13.081 },
        { x: 8.89, y: 8.763 },
        { x: 9.398, y: 8.255 },
        { x: 9.652, y: 8.255 },
        { x: 10.16, y: 7.747 },
        { x: 10.16, y: 3.937 },
        { x: 9.398, y: 3.937 },
        { x: 9.398, y: 6.223 },
        { x: 8.89, y: 6.731 },
        { x: 6.858, y: 6.731 },
        { x: 6.35, y: 7.239 },
        { x: 6.35, y: 13.081 },
        { x: 5.334, y: 14.097 },
        { x: 5.334, y: 19.685 },
        { x: 9.779, y: 19.685 },
        { x: 9.779, y: 13.97 },
      ]}
    />

    <copperpour
      name="VM_TOP_CENTER_POUR"
      connectsTo="net.VM"
      layer="top"
      clearance="0.381mm"
      padMargin="0.381mm"
      traceMargin="0.381mm"
      cutoutMargin="0.381mm"
      boardEdgeMargin="0mm"
      coveredWithSolderMask
      outline={[
        { x: 2.794, y: 11.811 },
        { x: 2.794, y: 8.89 },
        { x: 2.667, y: 8.763 },
        { x: 1.143, y: 8.763 },
        { x: 0.254, y: 7.874 },
        { x: 0.254, y: 7.62 },
        { x: -1.524, y: 7.62 },
        { x: -2.794, y: 8.89 },
        { x: -2.794, y: 10.922 },
        { x: -2.667, y: 11.049 },
        { x: -1.905, y: 11.049 },
        { x: -0.127, y: 12.827 },
        { x: 1.778, y: 12.827 },
        { x: 2.794, y: 11.811 },
      ]}
    />
    <copperpour
      name="VM_TOP_LEFT_POUR"
      connectsTo="net.VM"
      layer="top"
      clearance="0.381mm"
      padMargin="0.381mm"
      traceMargin="0.381mm"
      cutoutMargin="0.381mm"
      boardEdgeMargin="0mm"
      coveredWithSolderMask
      outline={[
        { x: -9.398, y: 12.827 },
        { x: -9.398, y: 9.017 },
        { x: -9.652, y: 8.763 },
        { x: -11.43, y: 8.763 },
        { x: -11.625275, y: 8.582746 },
        { x: -11.704686, y: 8.529686 },
        { x: -11.96783, y: 8.266542 },
        { x: -13.081, y: 7.239 },
        { x: -18.034, y: 7.239 },
        { x: -19.05, y: 8.255 },
        { x: -19.05, y: 12.954 },
        { x: -18.034, y: 13.97 },
        { x: -10.541, y: 13.97 },
        { x: -9.398, y: 12.827 },
      ]}
    />
    <copperpour
      name="VM_TOP_RIGHT_POUR"
      connectsTo="net.VM"
      layer="top"
      clearance="0.381mm"
      padMargin="0.381mm"
      traceMargin="0.381mm"
      cutoutMargin="0.381mm"
      boardEdgeMargin="0mm"
      coveredWithSolderMask
      outline={[
        { x: 17.653, y: 8.509 },
        { x: 16.637, y: 7.493 },
        { x: 11.480033, y: 7.493 },
        { x: 11.43, y: 7.502952 },
        { x: 10.668, y: 7.502952 },
        { x: 10.668, y: 7.874 },
        { x: 9.779, y: 8.763 },
        { x: 9.525, y: 8.763 },
        { x: 9.398, y: 8.89 },
        { x: 9.398, y: 12.827 },
        { x: 10.414, y: 13.843 },
        { x: 10.414, y: 15.24 },
        { x: 14.859, y: 19.685 },
        { x: 17.653, y: 19.685 },
        { x: 17.653, y: 8.509 },
      ]}
    />
    <copperpour
      name="VM_BOTTOM_POUR"
      connectsTo="net.VM"
      layer="bottom"
      clearance="0.381mm"
      padMargin="0.381mm"
      traceMargin="0.381mm"
      cutoutMargin="0.381mm"
      boardEdgeMargin="0mm"
      coveredWithSolderMask
      outline={[
        { x: 17.653, y: 8.509 },
        { x: 16.383, y: 7.239 },
        { x: -18.034, y: 7.239 },
        { x: -19.05, y: 8.255 },
        { x: -19.05, y: 12.954 },
        { x: -18.034, y: 13.97 },
        { x: 9.144, y: 13.97 },
        { x: 14.859, y: 19.685 },
        { x: 17.653, y: 19.685 },
        { x: 17.653, y: 8.509 },
      ]}
    />

    <copperpour
      name="GND_A_TOP_POUR"
      connectsTo="net.GND_A"
      layer="top"
      clearance="0.381mm"
      padMargin="0.381mm"
      traceMargin="0.381mm"
      cutoutMargin="0.381mm"
      boardEdgeMargin="0mm"
      coveredWithSolderMask
      outline={[
        { x: -4.445, y: 0.127 },
        { x: -5.207, y: -0.635 },
        { x: -6.946758, y: -0.635 },
        { x: -7.056656, y: -0.589478 },
        { x: -7.239, y: -0.565473 },
        { x: -7.421344, y: -0.589478 },
        { x: -7.531242, y: -0.635 },
        { x: -8.840445, y: -0.635 },
        { x: -9.019106, y: -0.454454 },
        { x: -9.017, y: -0.254 },
        { x: -9.017, y: 6.223 },
        { x: -8.049057, y: 6.223 },
        { x: -7.92465, y: 6.07141 },
        { x: -7.92465, y: 4.171412 },
        { x: -7.883439, y: 3.964226 },
        { x: -7.802126, y: 3.84253 },
        { x: -7.849138, y: 3.781262 },
        { x: -7.919522, y: 3.611344 },
        { x: -7.943527, y: 3.429 },
        { x: -7.919522, y: 3.246656 },
        { x: -7.849138, y: 3.076738 },
        { x: -7.737175, y: 2.930825 },
        { x: -7.591262, y: 2.818862 },
        { x: -7.421344, y: 2.748478 },
        { x: -7.239, y: 2.724473 },
        { x: -7.056656, y: 2.748478 },
        { x: -6.886738, y: 2.818862 },
        { x: -6.740825, y: 2.930825 },
        { x: -6.628862, y: 3.076738 },
        { x: -6.558478, y: 3.246656 },
        { x: -6.534473, y: 3.429 },
        { x: -6.558478, y: 3.611344 },
        { x: -6.628862, y: 3.781262 },
        { x: -6.669725, y: 3.834516 },
        { x: -6.583055, y: 3.964226 },
        { x: -6.541844, y: 4.171412 },
        { x: -6.541844, y: 6.07141 },
        { x: -6.417437, y: 6.223 },
        { x: -4.445, y: 6.223 },
        { x: -4.445, y: 0.127 },
      ]}
    />
    <copperpour
      name="GND_B_TOP_POUR"
      connectsTo="net.GND_B"
      layer="top"
      clearance="0.381mm"
      padMargin="0.381mm"
      traceMargin="0.381mm"
      cutoutMargin="0.381mm"
      boardEdgeMargin="0mm"
      coveredWithSolderMask
      outline={[
        { x: 7.82335, y: 6.07141 },
        { x: 7.82335, y: 4.171412 },
        { x: 7.864561, y: 3.964226 },
        { x: 7.981922, y: 3.78858 },
        { x: 8.002676, y: 3.774714 },
        { x: 8.036227, y: 3.606035 },
        { x: 8.148505, y: 3.437999 },
        { x: 8.89, y: 2.696505 },
        { x: 8.89, y: -0.635 },
        { x: 5.245242, y: -0.635 },
        { x: 5.135344, y: -0.589478 },
        { x: 4.953, y: -0.565473 },
        { x: 4.770656, y: -0.589478 },
        { x: 4.660758, y: -0.635 },
        { x: 3.683, y: -0.635 },
        { x: 3.175, y: -0.127 },
        { x: 3.175, y: 6.223 },
        { x: 4.142943, y: 6.223 },
        { x: 4.26735, y: 6.07141 },
        { x: 4.26735, y: 4.171412 },
        { x: 4.308561, y: 3.964226 },
        { x: 4.389874, y: 3.84253 },
        { x: 4.342862, y: 3.781262 },
        { x: 4.272478, y: 3.611344 },
        { x: 4.248473, y: 3.429 },
        { x: 4.272478, y: 3.246656 },
        { x: 4.342862, y: 3.076738 },
        { x: 4.454825, y: 2.930825 },
        { x: 4.600738, y: 2.818862 },
        { x: 4.770656, y: 2.748478 },
        { x: 4.953, y: 2.724473 },
        { x: 5.135344, y: 2.748478 },
        { x: 5.305262, y: 2.818862 },
        { x: 5.451175, y: 2.930825 },
        { x: 5.563138, y: 3.076738 },
        { x: 5.633522, y: 3.246656 },
        { x: 5.657527, y: 3.429 },
        { x: 5.633522, y: 3.611344 },
        { x: 5.563138, y: 3.781262 },
        { x: 5.522275, y: 3.834516 },
        { x: 5.608945, y: 3.964226 },
        { x: 5.650156, y: 4.171412 },
        { x: 5.650156, y: 6.07141 },
        { x: 5.774563, y: 6.223 },
        { x: 7.698943, y: 6.223 },
        { x: 7.82335, y: 6.07141 },
      ]}
    />

    <silkscreentext
      text="BOOST-DRV8711"
      pcbX={-13.5}
      pcbY={20.5}
      fontSize="1.1mm"
      anchorAlignment="center"
    />
    <silkscreentext
      text="Stepper Motor BoosterPack"
      pcbX={0}
      pcbY={-20.8}
      fontSize="0.9mm"
      anchorAlignment="center"
    />
    <silkscreentext text="A1" pcbX={-7.62} pcbY={20.5} fontSize="0.8mm" />
    <silkscreentext text="A2" pcbX={-2.54} pcbY={20.5} fontSize="0.8mm" />
    <silkscreentext text="B1" pcbX={2.54} pcbY={20.5} fontSize="0.8mm" />
    <silkscreentext text="B2" pcbX={7.62} pcbY={20.5} fontSize="0.8mm" />
    <silkscreentext text="VM" pcbX={15.367} pcbY={20.5} fontSize="0.8mm" />
    <silkscreentext text="GND" pcbX={20.447} pcbY={20.5} fontSize="0.8mm" />
  </board>
);
