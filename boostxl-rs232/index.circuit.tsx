import { D_DMR009PF_D002 } from "./imports/D_DMR009PF_D002";
import { HTSW_103_07_T_S } from "./imports/HTSW_103_07_T_S";
import { LP2985_18DBVR } from "./imports/LP2985_18DBVR";
import { TRS3122ERGER } from "./imports/TRS3122ERGER";

/**
 * Placement-faithful BOOSTXL-RS232 Rev 1.0 reconstruction.
 * Connectivity and designators follow TI SLLU250 Figure 12; component placement
 * follows Figures 13/14 and TI's orthographic top/bottom photographs.
 */
export const BOOSTXL_RS232 = () => (
  <board
    name="BOOSTXL_RS232"
    width="65.42mm"
    height="57.8mm"
    layers={2}
    solderMaskColor="#c51f2e"
    defaultTraceWidth="0.15mm"
    minViaHoleDiameter="0.3mm"
    minViaPadDiameter="0.45mm"
    autorouter={{
      preset: "auto_local",
      local: true,
      traceClearance: "0.15mm",
    }}
    autorouterEffortLevel="5x"
    placementDrcChecksDisabled
    schTraceAutoLabelEnabled
    schMaxTraceDistance="2mm"
  >
    <hole name="H1" diameter="3.2mm" pcbX={-28.45} pcbY={24.4} />
    <hole name="H2" diameter="3.2mm" pcbX={28.45} pcbY={24.4} />
    <hole name="H3" diameter="3.2mm" pcbX={-28.45} pcbY={-26.4} />
    <hole name="H4" diameter="3.2mm" pcbX={28.45} pcbY={-26.4} />

    <copperpour
      name="GND_BOTTOM"
      layer="bottom"
      connectsTo="net.GND"
      padMargin="0.2mm"
      traceMargin="0.15mm"
      boardEdgeMargin="0.3mm"
    />

    {/* Imported directly from the live JLCPCB catalog, with exact CAD. */}
    <D_DMR009PF_D002
      name="J10"
      pcbX={0}
      pcbY={22.1}
      pcbRotation={90}
      schX={12.5}
      schY={5.5}
      schWidth="4mm"
      schHeight="5mm"
      connections={{
        pin2: "net.RX1",
        pin3: "net.TX1",
        pin4: "net.DTR1",
        pin5: "net.GND",
        pin6: "net.DSR1",
        pin7: "net.RTS1",
        pin8: "net.CTS1",
      }}
      noConnect={["pin1", "pin9"]}
    />

    <TRS3122ERGER
      name="U1"
      pcbX={0}
      pcbY={10.2}
      schX={-1}
      schY={5}

      connections={{
        C3_POS: "net.C3_POS",
        C3_NEG: "net.C3_NEG",
        RIN1: "net.TX1",
        RIN2: "net.RTS1",
        DOUT1: "net.RX1",
        DOUT2: "net.CTS1",
        DIN2: "net.CTS2",
        DIN1: "net.RX2",
        ROUT2: "net.RTS2",
        ROUT1: "net.TX2",
        INVALID: "net.INV",
        FORCEOFF: "net.FORCEOFF",
        FORCEON: "net.FORCEON",
        C1_NEG: "net.C1_NEG",
        GND: "net.GND",
        VL: "net.VCC",
        VCC: "net.VCC",
        V_POS: "net.V_POS",
        C1_POS: "net.C1_POS",
        C2_POS: "net.C2_POS",
        C2_NEG: "net.C2_NEG",
        V_NEG: "net.V_NEG",
        EP: "net.GND",
      }}
      noConnect={["NC1", "NC2"]}
    />

    <LP2985_18DBVR
      name="U2"
      pcbX={-19.2}
      pcbY={8.9}
      pcbRotation={90}
      schX={-22}
      schY={5}
      schWidth="3mm"
      schHeight="2mm"
      
      connections={{
        VIN: "net.V3V3",
        GND: "net.GND",
        pin3: "net.V3V3",
        BYPASS: "net.LDO_BYPASS",
        VOUT: "net.V1V8",
      }}
    />

    <HTSW_103_07_T_S
      name="J12"
      footprint={
        <footprint>
          <platedhole portHints={["pin1"]} pcbX="-2.54mm" pcbY="0mm" holeDiameter="1.1mm" rectPadWidth="1.7mm" rectPadHeight="1.7mm" shape="circular_hole_with_rect_pad" />
          <platedhole portHints={["pin2"]} pcbX="0mm" pcbY="0mm" holeDiameter="1.1mm" outerDiameter="1.7mm" shape="circle" />
          <platedhole portHints={["pin3"]} pcbX="2.54mm" pcbY="0mm" holeDiameter="1.1mm" outerDiameter="1.7mm" shape="circle" />
          <silkscreenrect width="7.7mm" height="2.5mm" />
        </footprint>
      }
      pcbX={-14.4}
      pcbY={5.9}
      pcbRotation={90}
      manufacturerPartNumber="TSW-103-07-G-S"
      schX={-13}
      schY={16}
 
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin1", "pin2", "pin3"],
        },
      }}
      schPinStyle={{
        pin1: { marginTop: "0.8mm" },
        pin3: { marginBottom: "0.8mm" },
      }}
      connections={{
        pin1: "net.V3V3",
        pin2: "net.VCC",
        pin3: "net.V1V8",
      }}
    />

    {/* Charge-pump capacitors C1-C6 sit around U1 exactly as on the reference. */}
    <capacitor
      name="C1"
      capacitance="100nF"
      footprint="cap0603"
      supplierPartNumbers={{ jlcpcb: ["C14663"] }}
      pcbX={0}
      pcbY={6.4}
      schX={-6.2}
      schY={3.5}
      schRotation={90}
      connections={{ pin2: "net.C1_POS", pin1: "net.C1_NEG" }}
    />
    <capacitor
      name="C2"
      capacitance="100nF"
      footprint="cap0603"
      supplierPartNumbers={{ jlcpcb: ["C14663"] }}
      pcbX={3.5}
      pcbY={12.0}
      pcbRotation={90}
      schX={-6.2}
      schY={1}
      schRotation={90}
      connections={{ pin2: "net.C2_POS", pin1: "net.C2_NEG" }}
    />
    <capacitor
      name="C3"
      capacitance="100nF"
      footprint="cap0603"
      supplierPartNumbers={{ jlcpcb: ["C14663"] }}
      pcbX={0}
      pcbY={13.8}
      schX={5}
      schY={8.8}
      schRotation={90}
      connections={{ pin2: "net.C3_POS", pin1: "net.C3_NEG" }}
    />
    <capacitor
      name="C4"
      capacitance="100nF"
      footprint="cap0603"
      supplierPartNumbers={{ jlcpcb: ["C14663"] }}
      pcbX={4.6}
      pcbY={8.8}
      pcbRotation={90}
      schX={-6.2}
      schY={7.7}
      connections={{ pin1: "net.V_POS", pin2: "net.GND" }}
    />
    <capacitor
      name="C5"
      capacitance="100nF"
      footprint="cap0603"
      supplierPartNumbers={{ jlcpcb: ["C14663"] }}
      pcbX={5.5}
      pcbY={13.5}
      pcbRotation={90}
      schX={5.4}
      schY={-0.4}
      schRotation={270}
      connections={{ pin1: "net.V_NEG", pin2: "net.GND" }}
    />
    <capacitor
      name="C6"
      capacitance="100nF"
      footprint="cap0603"
      supplierPartNumbers={{ jlcpcb: ["C14663"] }}
      pcbX={4.6}
      pcbY={5.8}
      pcbRotation={90}
      schX={-5.2}
      schY={9}
      connections={{ pin1: "net.VCC", pin2: "net.GND" }}
    />

    {/* 1.8-V regulator support parts. */}
    <capacitor
      name="C7"
      capacitance="1uF"
      footprint="cap0603"
      supplierPartNumbers={{ jlcpcb: ["C111590"] }}
      pcbX={-22.5}
      pcbY={6.8}
      schX={-27}
      schY={5}
      schRotation={90}
      connections={{ pin2: "net.V3V3", pin1: "net.GND" }}
    />
    <capacitor
      name="C8"
      capacitance="2.2uF"
      footprint="cap0603"
      supplierPartNumbers={{ jlcpcb: ["C23630"] }}
      pcbX={-21.9}
      pcbY={12.1}
      schX={-18}
      schY={4}
      schRotation={270}
      connections={{ pin1: "net.V1V8", pin2: "net.GND" }}
    />
    <capacitor
      name="C9"
      capacitance="10nF"
      footprint="cap0603"
      supplierPartNumbers={{ jlcpcb: ["C57112"] }}
      pcbX={-18}
      pcbY={5.8}
      schX={-26}
      schY={3.5}
      schRotation={270}
      connections={{ pin1: "net.LDO_BYPASS", pin2: "net.GND" }}
    />

    {/* Pull-ups and DB-9 pin-6 link. */}
    <resistor
      name="R1"
      resistance="10k"
      footprint="res0603"
      supplierPartNumbers={{ jlcpcb: ["C25804"] }}
      pcbX={-4}
      pcbY={5.1}
      schX={-12}
      schY={10.5}
            schRotation={270}

      connections={{ pin1: "net.VCC", pin2: "net.RX2" }}
    />
    <resistor
      name="R2"
      resistance="10k"
      footprint="res0603"
      supplierPartNumbers={{ jlcpcb: ["C25804"] }}
      pcbX={-1.4}
      pcbY={3.7}
      pcbRotation={90}
      schX={-10.8}
      schY={10.5}
            schRotation={270}

      connections={{ pin1: "net.VCC", pin2: "net.CTS2" }}
    />
    <resistor
      name="R3"
      resistance="10k"
      footprint="res0603"
      supplierPartNumbers={{ jlcpcb: ["C25804"] }}
      pcbX={8}
      pcbY={7.5}
      pcbRotation={90}
      schX={-9.6}
      schY={10.5}
            schRotation={270}

      connections={{ pin1: "net.VCC", pin2: "net.FORCEON" }}
    />
    <resistor
      name="R4"
      resistance="10k"
      footprint="res0603"
      supplierPartNumbers={{ jlcpcb: ["C25804"] }}
      pcbX={6.2}
      pcbY={5.8}
      pcbRotation={90}
      schX={-8.4}
      schY={10.5}
            schRotation={270}

      connections={{ pin1: "net.VCC", pin2: "net.FORCEOFF" }}
    />
    <resistor
      name="R5"
      resistance="0ohm"
      footprint="res0603"
      supplierPartNumbers={{ jlcpcb: ["C21189"] }}
      pcbX={-7.2}
      pcbY={17.8}
      schX={10.5}
      schY={4.9}
      connections={{ pin1: "net.DTR1", pin2: "net.DSR1" }}
    />

    {/* Power LED and four antiparallel RS-232 status pairs. */}
    <resistor
      name="R6"
      resistance="1.96k"
      footprint="res0603"
      supplierPartNumbers={{ jlcpcb: ["C2998107"] }}
      pcbX={-25}
      pcbY={7}
      pcbRotation={90}
      schX={17}
      schY={13.5}
      schRotation={270}
      connections={{ pin1: "net.V3V3", pin2: "net.PWR_LED" }}
    />
    <led
      name="D1"
      color="green"
      footprint="led0603"
      supplierPartNumbers={{ jlcpcb: ["C125094"] }}
      pcbX={-26}
      pcbY={10}
      pcbRotation={90}
      schX={17}
      schY={10}
      schRotation={270}
      connections={{ pin1: "net.PWR_LED", pin2: "net.GND" }}
    />
    <resistor
      name="R7"
      resistance="5.23k"
      footprint="res0603"
      supplierPartNumbers={{ jlcpcb: ["C23068"] }}
      pcbX={-7.8}
      pcbY={10.5}
      schX={21}
      schY={13.5}
      schRotation={270}
      connections={{ pin1: "net.RX1", pin2: "net.RX1_LED" }}
    />
    <led
      name="D2"
      color="green"
      footprint="led0603"
      supplierPartNumbers={{ jlcpcb: ["C125094"] }}
      pcbX={-10.8}
      pcbY={11.6}
      schX={20.3}
      schY={10}
      schRotation={270}
      connections={{ pin1: "net.RX1_LED", pin2: "net.GND" }}
    />
    <led
      name="D3"
      color="red"
      footprint="led0603"
      supplierPartNumbers={{ jlcpcb: ["C2286"] }}
      pcbX={-10.8}
      pcbY={9.4}
      schX={21.7}
      schY={10}
      schRotation={90}
      connections={{ pin1: "net.GND", pin2: "net.RX1_LED" }}
    />
    <resistor
      name="R8"
      resistance="5.23k"
      footprint="res0603"
      supplierPartNumbers={{ jlcpcb: ["C23068"] }}
      pcbX={7.8}
      pcbY={10.5}
      schX={26}
      schY={13.5}
      schRotation={90}
      connections={{ pin1: "net.TX1", pin2: "net.TX1_LED" }}
    />
    <led
      name="D4"
      color="green"
      footprint="led0603"
      supplierPartNumbers={{ jlcpcb: ["C125094"] }}
      pcbX={10.8}
      pcbY={11.6}
      schX={25.3}
      schY={10}
      schRotation={270}
      connections={{ pin1: "net.TX1_LED", pin2: "net.GND" }}
    />
    <led
      name="D5"
      color="red"
      footprint="led0603"
      supplierPartNumbers={{ jlcpcb: ["C2286"] }}
      pcbX={10.8}
      pcbY={9.4}
      schX={26.7}
      schY={10}
      schRotation={90}
      connections={{ pin1: "net.GND", pin2: "net.TX1_LED" }}
    />
    <resistor
      name="R9"
      resistance="5.23k"
      footprint="res0603"
      supplierPartNumbers={{ jlcpcb: ["C23068"] }}
      pcbX={7.8}
      pcbY={15.5}
      schX={21}
      schY={4.5}
      schRotation={270}
      connections={{ pin1: "net.CTS1", pin2: "net.CTS1_LED" }}
    />
    <led
      name="D6"
      color="green"
      footprint="led0603"
      supplierPartNumbers={{ jlcpcb: ["C125094"] }}
      pcbX={10.8}
      pcbY={16.6}
      schX={20.3}
      schY={1}
      schRotation={270}
      connections={{ pin1: "net.CTS1_LED", pin2: "net.GND" }}
    />
    <led
      name="D7"
      color="red"
      footprint="led0603"
      supplierPartNumbers={{ jlcpcb: ["C2286"] }}
      pcbX={10.8}
      pcbY={14.4}
      schX={21.7}
      schY={1}
      schRotation={90}
      connections={{ pin1: "net.GND", pin2: "net.CTS1_LED" }}
    />
    <resistor
      name="R10"
      resistance="5.23k"
      footprint="res0603"
      supplierPartNumbers={{ jlcpcb: ["C23068"] }}
      pcbX={-7.8}
      pcbY={15.5}
      schX={26}
      schY={4.5}
      schRotation={270}
      connections={{ pin1: "net.RTS1", pin2: "net.RTS1_LED" }}
    />
    <led
      name="D8"
      color="green"
      footprint="led0603"
      supplierPartNumbers={{ jlcpcb: ["C125094"] }}
      pcbX={-10.8}
      pcbY={16.6}
      schX={25.3}
      schY={1}
      schRotation={270}
      connections={{ pin1: "net.RTS1_LED", pin2: "net.GND" }}
    />
    <led
      name="D9"
      color="red"
      footprint="led0603"
      supplierPartNumbers={{ jlcpcb: ["C2286"] }}
      pcbX={-10.8}
      pcbY={14.4}
      schX={26.7}
      schY={1}
      schRotation={90}
      connections={{ pin1: "net.GND", pin2: "net.RTS1_LED" }}
    />

    {/* Accessible RS-232 test header. */}
    <chip
      name="J11"
      supplierPartNumbers={{ jlcpcb: ["C2691448"] }}
      manufacturerPartNumber="PZ254V-11-04P"
      pcbX={0}
      pcbY={16.9}
      footprint={
        <footprint>
          <platedhole portHints={["pin1"]} pcbX="-3.81mm" pcbY="0mm" holeDiameter="1mm" outerDiameter="1.5mm" shape="circle" />
          <platedhole portHints={["pin2"]} pcbX="-1.27mm" pcbY="0mm" holeDiameter="1mm" outerDiameter="1.5mm" shape="circle" />
          <platedhole portHints={["pin3"]} pcbX="1.27mm" pcbY="0mm" holeDiameter="1mm" outerDiameter="1.5mm" shape="circle" />
          <platedhole portHints={["pin4"]} pcbX="3.81mm" pcbY="0mm" holeDiameter="1mm" rectPadWidth="1.5mm" rectPadHeight="1.5mm" shape="circular_hole_with_rect_pad" />
          <silkscreenrect width="10mm" height="2.5mm" />
        </footprint>
      }
      schX={9}
      schY={8.5}
      schWidth="1.6mm"
      schHeight="0.6mm"
      schPinArrangement={{
        bottomSide: {
          direction: "left-to-right",
          pins: ["RX1", "RTS1", "TX1", "CTS1"],
        },
      }}
      schPinStyle={{
        RX1: { marginLeft: "0.4mm" },
        CTS1: { marginRight: "0.4mm" },
      }}
      pinLabels={{
        pin1: "RX1",
        pin2: "RTS1",
        pin3: "TX1",
        pin4: "CTS1",
      }}
      connections={{ pin1: "net.RX1", pin2: "net.RTS1", pin3: "net.TX1", pin4: "net.CTS1" }}
    />

    {/* FORCEON/FORCEOFF/INVALID assignment header. */}
    <chip
      name="J9"
      supplierPartNumbers={{ jlcpcb: ["C2337"] }}
      manufacturerPartNumber="2.54-1x40P-BREAKAWAY"
      pcbX={18.3}
      pcbY={10.0}
      footprint={
        <footprint>
          <platedhole portHints={["pin1"]} pcbX="-1.27mm" pcbY="2.54mm" holeDiameter="1mm" rectPadWidth="1.5mm" rectPadHeight="1.5mm" shape="circular_hole_with_rect_pad" />
          <platedhole portHints={["pin2"]} pcbX="1.27mm" pcbY="2.54mm" holeDiameter="1mm" outerDiameter="1.5mm" shape="circle" />
          <platedhole portHints={["pin3"]} pcbX="-1.27mm" pcbY="0mm" holeDiameter="1mm" outerDiameter="1.5mm" shape="circle" />
          <platedhole portHints={["pin4"]} pcbX="1.27mm" pcbY="0mm" holeDiameter="1mm" outerDiameter="1.5mm" shape="circle" />
          <platedhole portHints={["pin5"]} pcbX="-1.27mm" pcbY="-2.54mm" holeDiameter="1mm" outerDiameter="1.5mm" shape="circle" />
          <platedhole portHints={["pin6"]} pcbX="1.27mm" pcbY="-2.54mm" holeDiameter="1mm" outerDiameter="1.5mm" shape="circle" />
          <silkscreenrect width="5mm" height="7mm" />
        </footprint>
      }
      schX={11.5}
      schY={-2}
      schWidth="2mm"
      schHeight="1.5mm"
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["FORCEON", "FORCEOFF", "INV"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["GP19", "GP18", "GP14"],
        },
      }}
      pinLabels={{
        pin1: "FORCEON",
        pin2: "GP19",
        pin3: "FORCEOFF",
        pin4: "GP18",
        pin5: "INV",
        pin6: "GP14",
      }}
      schPinStyle={{
        FORCEON: { marginTop: "0.6mm" },
        INV: { marginBottom: "0.6mm" },
        GP19: { marginTop: "0.6mm" },
        GP14: { marginBottom: "0.6mm" },
      }}
  
      connections={{
        pin1: "net.FORCEON",
        pin2: "net.GP19",
        pin3: "net.FORCEOFF",
        pin4: "net.GP18",
        pin5: "net.INV",
        pin6: "net.GP14",
      }}
    />

    {/* Left BoosterPack socket pair J1/J3. */}
    <chip
      name="J1"
      displayName="J1"
      footprint="pinrow10_p2.54mm_nopinlabels_female"
      supplierPartNumbers={{ jlcpcb: ["C2897373"] }}
      manufacturerPartNumber="PM254-1-10-Z-8.5"
      pcbX={-23.77}
      pcbY={-12.5}
      pcbRotation={270}
      schX={-15.5}
      schY={-7.5}
      schWidth="2mm"
                schHeight="2.5mm"

      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["PLUS_3V3", "Analog_In_2", "LP_UART_RX", "LP_UART_TX", "GPIO_5", "Analog_In_6", "SPI_CLK", "GPIO_8", "I2C_SCL", "I2C_SDA"],
        },
      }}
      schPinStyle={{
        PLUS_3V3: { marginTop: "1.65mm" },
        I2C_SDA: { marginBottom: "1.65mm" },
      }}
      pinLabels={{
        pin1: "PLUS_3V3",
        pin2: "Analog_In_2",
        pin3: "LP_UART_RX",
        pin4: "LP_UART_TX",
        pin5: "GPIO_5",
        pin6: "Analog_In_6",
        pin7: "SPI_CLK",
        pin8: "GPIO_8",
        pin9: "I2C_SCL",
        pin10: "I2C_SDA",
      }}
      connections={{
        pin1: "net.V3V3",
        pin3: "net.GP3",
        pin4: "net.GP4",
        pin5: "net.GP5",
        pin8: "net.GP8",
      }}
    />
    <chip
      name="J3"
      footprint="pinrow10_female_p2.54mm_nosquareplating_nopinlabels"
      supplierPartNumbers={{ jlcpcb: ["C2897373"] }}
      manufacturerPartNumber="PM254-1-10-Z-8.5"
      pcbX={-21.23}
      pcbY={-12.5}
      pcbRotation={270}
      schX={-10}
      schY={-7.5}
      schWidth="3mm"
      schHeight="2.5mm"
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["PLUS_5V", "GND", "Analog_In_23", "Analog_In_24", "Analog_In_25", "Analog_In_I2S_WS", "Analog_In_I2S_SCLK", "Analog_Out_I2S_SDout_28", "Analog_Out_I2S_SDout_29", "Analog_Out_I2S_SDin"],
        },
      }}
      schPinStyle={{
        PLUS_5V: { marginTop: "1.65mm" },
        Analog_Out_I2S_SDin: { marginBottom: "1.65mm" },
      }}
      pinLabels={{
        pin21: ["PLUS_5V", "pin1", "1"],
        pin22: ["GND", "pin2", "2"],
        pin23: ["Analog_In_23", "pin3", "3"],
        pin24: ["Analog_In_24", "pin4", "4"],
        pin25: ["Analog_In_25", "pin5", "5"],
        pin26: ["Analog_In_I2S_WS", "pin6", "6"],
        pin27: ["Analog_In_I2S_SCLK", "pin7", "7"],
        pin28: ["Analog_Out_I2S_SDout_28", "pin8", "8"],
        pin29: ["Analog_Out_I2S_SDout_29", "pin9", "9"],
        pin30: ["Analog_Out_I2S_SDin", "pin10", "10"],
      }}
      connections={{ PLUS_5V: "net.V5V", GND: "net.GND" }}
    />

    {/* Right BoosterPack socket pair J4/J2. */}
    <chip
      name="J4"
      displayName="J4"
      footprint="pinrow10_female_p2.54mm_nosquareplating_nopinlabels"
      supplierPartNumbers={{ jlcpcb: ["C2897373"] }}
      manufacturerPartNumber="PM254-1-10-Z-8.5"
      pcbX={21.23}
      pcbY={-12.5}
      pcbRotation={ 270}
      schX={13}
      schY={-7.5}
      schWidth="3mm"
                  schHeight="2.5mm"

      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["PWM_GPIO_40", "PWM_GPIO_39", "PWM_GPIO_38", "PWM_GPIO_37", "Timer_Cap_GPIO_36", "Timer_Cap_GPIO_35", "GPIO_34", "GPIO_33", "GPIO_32", "GPIO_31"],
        },
      }}
      schPinStyle={{
        PWM_GPIO_40: { marginTop: "1.65mm" },
        GPIO_31: { marginBottom: "1.65mm" },
      }}
      pinLabels={{
        pin40: ["PWM_GPIO_40", "pin1", "1"],
        pin39: ["PWM_GPIO_39", "pin2", "2"],
        pin38: ["PWM_GPIO_38", "pin3", "3"],
        pin37: ["PWM_GPIO_37", "pin4", "4"],
        pin36: ["Timer_Cap_GPIO_36", "pin5", "5"],
        pin35: ["Timer_Cap_GPIO_35", "pin6", "6"],
        pin34: ["GPIO_34", "pin7", "7"],
        pin33: ["GPIO_33", "pin8", "8"],
        pin32: ["GPIO_32", "pin9", "9"],
        pin31: ["GPIO_31", "pin10", "10"],
      }}
    />
    <chip
      name="J2"
      footprint="pinrow10_female_p2.54mm_nosquareplating_nopinlabels"
      supplierPartNumbers={{ jlcpcb: ["C2897373"] }}
      manufacturerPartNumber="PM254-1-10-Z-8.5"
      pcbX={23.77}
      pcbY={-12.5}
      pcbRotation={270}
      schX={17.5}
      schY={-7.5}
      schWidth="2mm"
            schHeight="2.5mm"

      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["GND", "PWM_GPIO_19", "GPIO_18", "GPIO_17", "RST", "SPI_MOSI", "SPI_MISO", "SPI_CS_GPIO_13", "SPI_CS_GPIO_12", "GPIO_11"],
        },
      }}
      schPinStyle={{
        GND: { marginTop: "1.65mm" },
        GPIO_11: { marginBottom: "1.65mm" },
      }}
      pinLabels={{
        pin20: ["GND", "pin1", "1"],
        pin19: ["PWM_GPIO_19", "pin2", "2"],
        pin18: ["GPIO_18", "pin3", "3"],
        pin17: ["GPIO_17", "pin4", "4"],
        pin16: ["RST", "pin5", "5"],
        pin15: ["SPI_MOSI", "pin6", "6"],
        pin14: ["SPI_MISO", "pin7", "7"],
        pin13: ["SPI_CS_GPIO_13", "pin8", "8"],
        pin12: ["SPI_CS_GPIO_12", "pin9", "9"],
        pin11: ["GPIO_11", "pin10", "10"],
      }}
      connections={{
        GND: "net.GND",
        PWM_GPIO_19: "net.GP19",
        GPIO_18: "net.GP18",
        SPI_MISO: "net.GP14",
        SPI_CS_GPIO_13: "net.GP13",
        SPI_CS_GPIO_12: "net.GP12",
        GPIO_11: "net.GP11",
      }}
    />

    {/* 30-pin GPIO-select banks: J5/J6 and J7/J8. */}
    <chip
      name="J5"
      footprint="pinrow20_rows10_cols2_p2.54mm_nopinlabels"
      supplierPartNumbers={{ jlcpcb: ["C2337"] }}
      manufacturerPartNumber="2.54-1x40P-BREAKAWAY"
      pcbX={-10.8}
      pcbY={-12.5}
      schX={-5}
      schY={-7.5}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin1", "pin3", "pin5", "pin7", "pin9", "pin11", "pin13", "pin15", "pin17", "pin19"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin2", "pin4", "pin6", "pin8", "pin10", "pin12", "pin14", "pin16", "pin18", "pin20"],
        },
      }}

      connections={{
        pin1: "net.CTS2",
        pin2: "net.GP3",
        pin3: "net.CTS2",
        pin4: "net.GP4",
        pin5: "net.CTS2",
        pin6: "net.GP5",
        pin7: "net.CTS2",
        pin8: "net.GP8",
        pin9: "net.CTS2",
        pin10: "net.GP19",
        pin11: "net.CTS2",
        pin12: "net.GP18",
        pin13: "net.CTS2",
        pin14: "net.GP14",
        pin15: "net.CTS2",
        pin16: "net.GP13",
        pin17: "net.CTS2",
        pin18: "net.GP12",
        pin19: "net.CTS2",
        pin20: "net.GP11",
      }}
    />
    <chip
      name="J6"
      footprint="pinrow10_p2.54mm_nopinlabels"
      supplierPartNumbers={{ jlcpcb: ["C492409"] }}
      manufacturerPartNumber="PZ254V-11-10P"
      pcbX={-7.0}
      pcbY={-12.5}
      pcbRotation={270}
      schX={0}
      schY={-7.5}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin1", "pin2", "pin3", "pin4", "pin5", "pin6", "pin7", "pin8", "pin9", "pin10"],
        },
      }}
  
      connections={{
        pin1: "net.RX2",
        pin2: "net.RX2",
        pin3: "net.RX2",
        pin4: "net.RX2",
        pin5: "net.RX2",
        pin6: "net.RX2",
        pin7: "net.RX2",
        pin8: "net.RX2",
        pin9: "net.RX2",
        pin10: "net.RX2",
      }}
    />
    <chip
      name="J7"
      footprint="pinrow20_rows10_cols2_p2.54mm_nopinlabels"
      supplierPartNumbers={{ jlcpcb: ["C2337"] }}
      manufacturerPartNumber="2.54-1x40P-BREAKAWAY"
      pcbX={7.0}
      pcbY={-12.5}
      schX={4}
      schY={-7.5}

      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin1", "pin3", "pin5", "pin7", "pin9", "pin11", "pin13", "pin15", "pin17", "pin19"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin2", "pin4", "pin6", "pin8", "pin10", "pin12", "pin14", "pin16", "pin18", "pin20"],
        },
      }}

      connections={{
        pin1: "net.RTS2",
        pin2: "net.GP3",
        pin3: "net.RTS2",
        pin4: "net.GP4",
        pin5: "net.RTS2",
        pin6: "net.GP5",
        pin7: "net.RTS2",
        pin8: "net.GP8",
        pin9: "net.RTS2",
        pin10: "net.GP19",
        pin11: "net.RTS2",
        pin12: "net.GP18",
        pin13: "net.RTS2",
        pin14: "net.GP14",
        pin15: "net.RTS2",
        pin16: "net.GP13",
        pin17: "net.RTS2",
        pin18: "net.GP12",
        pin19: "net.RTS2",
        pin20: "net.GP11",
      }}
    />
    <chip
      name="J8"
      footprint="pinrow10_p2.54mm_nopinlabels"
      supplierPartNumbers={{ jlcpcb: ["C492409"] }}
      manufacturerPartNumber="PZ254V-11-10P"
      pcbX={10.8}
      pcbY={-12.5}
      pcbRotation={270}
      schX={8.5}
      schY={-7.5}

      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin1", "pin2", "pin3", "pin4", "pin5", "pin6", "pin7", "pin8", "pin9", "pin10"],
        },
      }}

      connections={{
        pin1: "net.TX2",
        pin2: "net.TX2",
        pin3: "net.TX2",
        pin4: "net.TX2",
        pin5: "net.TX2",
        pin6: "net.TX2",
        pin7: "net.TX2",
        pin8: "net.TX2",
        pin9: "net.TX2",
        pin10: "net.TX2",
      }}
    />
  </board>
);

export default BOOSTXL_RS232;
