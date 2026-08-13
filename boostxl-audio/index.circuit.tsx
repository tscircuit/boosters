import { A_67996_406HLF } from "./imports/A_67996_406HLF";
import { A_3352T_1_104LF } from "./imports/A_3352T_1_104LF";
import { DAC8311IDCKT } from "./imports/DAC8311IDCKT";
import { FS_3013 } from "./imports/FS_3013";
import { POM_2242P_C33_R } from "./imports/POM_2242P_C33_R";
import { SJ_43516_SMT_TR } from "./imports/SJ_43516_SMT_TR";
import { SSQ_110_03_T_D } from "./imports/SSQ_110_03_T_D";
import { TPA301DGNR } from "./imports/TPA301DGNR";
import { TS3A225ERTER } from "./imports/TS3A225ERTER";
import { TS3A44159PWR } from "./imports/TS3A44159PWR";
import { TLV2760IDBVTG4 } from "./imports/TLV2760IDBVTG4";

const LAUNCHPAD_SHEET = "LaunchPad Headers and Signal Selection";
const DAC_SHEET = "14-bit DAC and PWM Audio Source";
const HEADSET_SHEET = "Headset Jack and Detection";
const SWITCH_SHEET = "Analog Audio Routing Switch";
const MICROPHONE_SHEET = "Electret Microphone Preamplifier";
const LOUDSPEAKER_SHEET = "Loudspeaker Amplifier and Output";
const TI_0603_CAP = "cap_p1.6mm_pw0.95mm_ph1mm";
const TI_0603_RES = "res_p1.6mm_pw0.95mm_ph1mm";

const N = {
	V3V3: "net.V3V3",
	V5: "net.V5",
	GND: "net.GND",
	MIC_PWR_PRI: "net.MIC_PWR_P",
	MIC_PWR_ALT: "net.MIC_PWR_A",
	MIC_PWR: "net.MIC_PWR",
	MIC_OUT_PRI: "net.MIC_OUT_P",
	MIC_OUT_ALT: "net.MIC_OUT_A",
	MIC_OUT: "net.MIC_OUT",
	DAC_SCLK: "net.DAC_SCLK",
	DAC_SCLK_IC: "net.SCLK_IC",
	DAC_SYNC: "net.DAC_SYNC",
	DAC_SYNC_IC: "net.SYNC_IC",
	DAC_MOSI: "net.DAC_MOSI",
	DAC_MOSI_IC: "net.MOSI_IC",
	AMP_ON_PRI: "net.AMP_ON_PRI",
	AMP_ON_ALT: "net.AMP_ON_ALT",
	AUDIO_SHUTDOWN: "net.AMP_SD",
	PWM_PRI: "net.PWM_PRI",
	PWM_ALT: "net.PWM_ALT",
	PWM_AUDIO: "net.PWM_AUDIO",
	LP_DAC_OUT: "net.LP_DAC",
	ONBOARD_DAC_OUT: "net.DAC_ON",
	DAC_SELECTED: "net.DAC_SEL",
	PWM_FILTER: "net.PWM_FILTER",
	AUDIO_OUT: "net.AUDIO_OUT",
	JACK_SLEEVE: "net.JACK_SLEEVE",
	JACK_RING2: "net.JACK_RING2",
	JACK_TIP_SWITCH: "net.TIP_SW",
	HP_LEFT: "net.HP_LEFT",
	HP_RIGHT: "net.HP_RIGHT",
	HEADSET_MIC: "net.HEADSET_MIC",
	MIC_PRESENT_OUT: "net.MIC_PRES",
	MIC_DET: "net.MIC_DET",
	SPEAKER_DET: "net.SPK_DET",
	MICN_PULLDOWN: "net.MICN_PD",
	ONBOARD_MIC: "net.MIC_ON",
	MIC_RAW: "net.MIC_RAW",
	MIC_INPUT: "net.MIC_INPUT",
	MIC_BIAS_TOP: "net.MIC_BIAS",
	MIC_PRE_RAIL: "net.MIC_PRE",
	MIC_FB_RETURN: "net.FB_RET",
	MIC_FB: "net.MIC_FB",
	OP_OUT: "net.OP_OUT",
	TERM_NO3: "net.TERM_NO3",
	TERM_COM3: "net.TERM_COM3",
	TERM_NC3: "net.TERM_NC3",
	DUMMY_LOAD: "net.DMY_LOAD",
	DUMMY_RC: "net.DMY_RC",
	AMP_INPUT_PRE: "net.AMP_IN_PRE",
	AMP_INPUT: "net.AMP_INPUT",
	AMP_BIAS: "net.AMP_BIAS",
	AMP_AUDIO_OUT_P: "net.AMP_OUT_P",
	AMP_AUDIO_OUT_N: "net.AMP_OUT_N",
	POT_IN: "net.POT_IN",
	LOUDSPEAKER_OUT_P: "net.LS_OUT_P",
	LOUDSPEAKER_OUT_N: "net.LS_OUT_N",
	SPEAKER_PLUS: "net.SPK_P",
	HEADPHONE_OUT: "net.HP_OUT",
} as const;

export default function Circuit() {
	return (
		<board
			name="BOOSTXL_AUDIO"
			width="58.42mm"
			height="76.2mm"
			layers={2}
			solderMaskColor="red"
			silkscreenColor="white"
			defaultTraceWidth="0.25mm"
			minViaHoleDiameter="0.3mm"
			minViaPadDiameter="0.45mm"
		>
			<schematicsheet
				name={LAUNCHPAD_SHEET}
				displayName={LAUNCHPAD_SHEET}
				sheetIndex={1}
			/>
			<schematicsheet name={DAC_SHEET} displayName={DAC_SHEET} sheetIndex={2} />
			<schematicsheet
				name={HEADSET_SHEET}
				displayName={HEADSET_SHEET}
				sheetIndex={3}
			/>
			<schematicsheet
				name={SWITCH_SHEET}
				displayName={SWITCH_SHEET}
				sheetIndex={4}
			/>
			<schematicsheet
				name={MICROPHONE_SHEET}
				displayName={MICROPHONE_SHEET}
				sheetIndex={5}
			/>
			<schematicsheet
				name={LOUDSPEAKER_SHEET}
				displayName={LOUDSPEAKER_SHEET}
				sheetIndex={6}
			/>

			<silkscreentext
				text="BOOSTXL-AUDIO"
				pcbX={0}
				pcbY={35.7}
				fontSize="1.5mm"
				anchorAlignment="center"
			/>
			<silkscreentext
				text="TI BOOSTERPACK RECONSTRUCTION"
				pcbX={0}
				pcbY={33.5}
				fontSize="0.7mm"
				anchorAlignment="center"
			/>
			<silkscreentext
				text="MIC"
				pcbX={-3.9}
				pcbY={-34.8}
				fontSize="0.8mm"
				anchorAlignment="center"
			/>
			<silkscreentext
				text="VOLUME"
				pcbX={-22}
				pcbY={12.7}
				fontSize="0.8mm"
				anchorAlignment="center"
				pcbRotation={90}
			/>
			<silkscreentext
				text="HEADSET"
				pcbX={17.4}
				pcbY={19.6}
				fontSize="0.8mm"
				anchorAlignment="center"
			/>

			<group
				name="LAUNCHPAD_INTERFACE"
				schSheetName={LAUNCHPAD_SHEET}
				schX={0}
				schY={0}
				pcbX={0}
				pcbY={0}
				schTraceAutoLabelEnabled={false}
				schMaxTraceDistance="1.5mm"
			>
				<schematicsection
					name="LAUNCHPAD_HEADERS"
					displayName="LaunchPad Headers and Signal-Selection Links"
				/>
				<SSQ_110_03_T_D
					name="J1J3"
					displayName="J1 / J3 LaunchPad Left"
					schX={-8}
					schY={0}
					schWidth="3.6mm"
					schHeight="2.8mm"
					schPinArrangement={{
						leftSide: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
						rightSide: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
					}}
					pcbX={-21.59}
					pcbY={-22.86}
					pcbRotation={90}
					layer="bottom"
					connections={{
						pin2: N.V3V3,
						pin10: ".R1 > .pin1",
						pin12: ".R4 > .pin2",
						pin14: N.DAC_SCLK,
						pin1: N.V5,
						pin3: N.GND,
						pin11: ".R5 > .pin2",
						pin19: N.LP_DAC_OUT,
					}}
					noConnect={[
						"pin4",
						"pin5",
						"pin6",
						"pin7",
						"pin8",
						"pin9",
						"pin13",
						"pin15",
						"pin16",
						"pin17",
						"pin18",
						"pin20",
					]}
				/>
				<SSQ_110_03_T_D
					name="J2J4"
					displayName="J2 / J4 LaunchPad Right"
					schX={8}
					schY={0}
					schWidth="3.6mm"
					schHeight="2.8mm"
					schPinArrangement={{
						leftSide: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
						rightSide: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
					}}
					pcbX={21.59}
					pcbY={-22.86}
					pcbRotation={90}
					layer="bottom"
					connections={{
						pin1: N.GND,
						pin3: ".R9 > .pin1",
						pin11: N.DAC_MOSI,
						pin15: ".R6 > .pin1",
						pin17: N.DAC_SYNC,
						pin4: ".R10 > .pin1",
						pin6: ".R8 > .pin1",
						pin20: ".R3 > .pin1",
					}}
					noConnect={[
						"pin2",
						"pin5",
						"pin7",
						"pin8",
						"pin9",
						"pin10",
						"pin12",
						"pin13",
						"pin14",
						"pin16",
						"pin18",
						"pin19",
					]}
				/>
				<resistor
					name="R1"
					resistance="0ohm"
					footprint={TI_0603_RES}
					manufacturerPartNumber="CRCW06030000Z0EA"
					schX={-4}
					schY={0.7}
					pcbX={-15.494}
					pcbY={-19.177}
					pcbRotation={180}
					connections={{ pin2: N.MIC_PWR }}
				/>
				<resistor
					name="R3"
					displayName="R3 DNP"
					doNotPlace
					resistance="0ohm"
					footprint={TI_0603_RES}
					manufacturerPartNumber="CRCW06030000Z0EA"
					schX={11.7}
					schY={-0.9}
					pcbX={-15.494}
					pcbY={-20.955}
					pcbRotation={180}
					connections={{ pin2: N.MIC_PWR }}
				/>
				<resistor
					name="R4"
					resistance="0ohm"
					footprint={TI_0603_RES}
					manufacturerPartNumber="CRCW06030000Z0EA"
					schX={-4}
					schY={-0.7}
					pcbX={-15.621}
					pcbY={-24.384}
					pcbRotation={180}
					connections={{ pin1: N.MIC_OUT }}
				/>
				<resistor
					name="R5"
					displayName="R5 DNP"
					doNotPlace
					resistance="0ohm"
					footprint={TI_0603_RES}
					manufacturerPartNumber="CRCW06030000Z0EA"
					schX={-12}
					schY={-0.1}
					pcbX={-15.621}
					pcbY={-26.162}
					pcbRotation={180}
					connections={{ pin1: N.MIC_OUT }}
				/>
				<resistor
					name="R6"
					resistance="0ohm"
					footprint={TI_0603_RES}
					manufacturerPartNumber="CRCW06030000Z0EA"
					schX={4}
					schY={-0.5}
					pcbX={16.129}
					pcbY={-27.94}
					connections={{ pin2: N.AUDIO_SHUTDOWN }}
				/>
				<resistor
					name="R8"
					displayName="R8 DNP"
					doNotPlace
					resistance="0ohm"
					footprint={TI_0603_RES}
					manufacturerPartNumber="CRCW06030000Z0EA"
					schX={11.8}
					schY={-0.1}
					pcbX={16.129}
					pcbY={-26.162}
					connections={{ pin2: N.AUDIO_SHUTDOWN }}
				/>
				<resistor
					name="R9"
					resistance="0ohm"
					footprint={TI_0603_RES}
					manufacturerPartNumber="CRCW06030000Z0EA"
					schX={4}
					schY={0.7}
					pcbX={16.129}
					pcbY={-15.748}
					connections={{ pin2: N.PWM_AUDIO }}
				/>
				<resistor
					name="R10"
					displayName="R10 DNP"
					doNotPlace
					resistance="0ohm"
					footprint={TI_0603_RES}
					manufacturerPartNumber="CRCW06030000Z0EA"
					schX={11.8}
					schY={1.1}
					pcbX={16.129}
					pcbY={-13.97}
					connections={{ pin2: N.PWM_AUDIO }}
				/>
			</group>

			<group
				name="DAC_SIGNAL_SOURCE"
				schSheetName={DAC_SHEET}
				schX={0}
				schY={0}
				pcbX={0}
				pcbY={0}
				schTraceAutoLabelEnabled={false}
				schMaxTraceDistance="1.5mm"
			>
				<schematicsection
					name="DAC_AND_PWM_FILTER"
					displayName="14-bit DAC, PWM Filter, and Output Selection"
				/>
				<DAC8311IDCKT
					name="U2"
					schX={-3.8}
					schY={1.7}
					schWidth="3.8mm"
					schHeight="2.4mm"
					schPinArrangement={{
						leftSide: [1, 2, 3],
						rightSide: [6],
						topSide: [4],
						bottomSide: [5],
					}}
					pcbX={-7.366}
					pcbY={-25.654}
					connections={{
						pin1: ".R16 > .pin2",
						pin2: ".R13 > .pin2",
						pin3: ".R14 > .pin2",
						pin4: N.V3V3,
						pin5: N.GND,
						pin6: ".J5 > .pin1",
					}}
				/>
				<resistor
					name="R16"
					resistance="0ohm"
					footprint={TI_0603_RES}
					manufacturerPartNumber="CRCW06030000Z0EA"
					schX={-6.8}
					schY={3.4}
					pcbX={16.129}
					pcbY={-33.02}
					pcbRotation={180}
					connections={{ pin1: N.DAC_SYNC }}
				/>
				<resistor
					name="R13"
					resistance="0ohm"
					footprint={TI_0603_RES}
					manufacturerPartNumber="CRCW06030000Z0EA"
					schX={-6.8}
					schY={2.2}
					pcbX={-15.621}
					pcbY={-29.972}
					connections={{ pin1: N.DAC_SCLK }}
				/>
				<resistor
					name="R14"
					resistance="0ohm"
					footprint={TI_0603_RES}
					manufacturerPartNumber="CRCW06030000Z0EA"
					schX={-6.8}
					schY={1}
					pcbX={16.129}
					pcbY={-22.86}
					pcbRotation={180}
					connections={{ pin1: N.DAC_MOSI }}
				/>
				<capacitor
					name="C4"
					capacitance="10uF"
					footprint={TI_0603_CAP}
					manufacturerPartNumber="C1608X5R1A106M080AC"
					schX={-4.7}
					schY={-1.8}
					schRotation={90}
					pcbX={-8.2248}
					pcbY={-22.7813}
					pcbRotation={180}
					connections={{ pin1: N.V3V3, pin2: N.GND }}
				/>
				<capacitor
					name="C5"
					capacitance="0.1uF"
					footprint={TI_0603_CAP}
					manufacturerPartNumber="GRM188R70J104KA01D"
					schX={-2.9}
					schY={-1.8}
					schRotation={90}
					pcbX={-8.0248}
					pcbY={-21.2238}
					pcbRotation={180}
					connections={{ pin1: N.V3V3, pin2: N.GND }}
				/>
				<A_67996_406HLF
					name="J5"
					displayName="J5 DAC / PWM / LaunchPad Select"
					schX={3.2}
					schY={1.6}
					schWidth="3.2mm"
					schHeight="2.2mm"
					schPinArrangement={{ leftSide: [1, 3, 5], rightSide: [2, 4, 6] }}
					pcbX={2.159}
					pcbY={-22.606}
					pcbRotation={270}
					connections={{
						pin2: ".R12 > .pin1",
						pin3: N.LP_DAC_OUT,
						pin4: ".R12 > .pin1",
						pin5: ".R19 > .pin2",
						pin6: N.AUDIO_OUT,
					}}
				/>
				<resistor
					name="R19"
					resistance="130ohm"
					footprint={TI_0603_RES}
					manufacturerPartNumber="RC0603FR-07130RL"
					schX={-0.2}
					schY={1.4}
					pcbX={11.43}
					pcbY={-21.844}
					pcbRotation={270}
					connections={{ pin1: N.PWM_AUDIO }}
				/>
				<capacitor
					name="C6"
					capacitance="0.33uF"
					footprint={TI_0603_CAP}
					manufacturerPartNumber="C0603C334K8RACTU"
					schX={0.2}
					schY={0}
					schRotation={90}
					pcbX={8.382}
					pcbY={-24.638}
					pcbRotation={90}
					connections={{ pin1: ".R19 > .pin2", pin2: N.GND }}
				/>
				<resistor
					name="R12"
					resistance="100ohm"
					footprint={TI_0603_RES}
					manufacturerPartNumber="RC0603FR-07100RL"
					schX={6.4}
					schY={1.6}
					pcbX={6.858}
					pcbY={-19.939}
					connections={{ pin2: N.AUDIO_OUT }}
				/>
				<capacitor
					name="C3"
					capacitance="0.082uF"
					footprint={TI_0603_CAP}
					manufacturerPartNumber="GRM188R71C823KA01D"
					schX={7.8}
					schY={0.4}
					schRotation={90}
					pcbX={9.398}
					pcbY={-20.828}
					pcbRotation={90}
					connections={{ pin1: N.AUDIO_OUT, pin2: N.GND }}
				/>
			</group>

			<group
				name="AUDIO_JACK_DETECTION"
				schSheetName={HEADSET_SHEET}
				schX={0}
				schY={0}
				pcbX={0}
				pcbY={0}
				schTraceAutoLabelEnabled={false}
				schMaxTraceDistance="1.5mm"
			>
				<schematicsection
					name="HEADSET_JACK_AND_DETECTION"
					displayName="Headset Jack, Routing Detection, and Test Points"
				/>
				<TS3A225ERTER
					name="U1"
					noSchematicRepresentation
					pcbX={15.567}
					pcbY={5.588}
					pcbRotation={270}
					connections={{
						pin1: N.V3V3,
						pin2: N.V3V3,
						pin3: N.GND,
						pin4: N.GND,
						pin5: N.SPEAKER_DET,
						pin6: ".J6 > .pin1",
						pin7: ".J6 > .pin4",
						pin8: ".R18 > .pin2",
						pin9: N.HP_LEFT,
						pin10: N.GND,
						pin11: N.HEADSET_MIC,
						pin12: ".R11 > .pin1",
						pin13: N.V3V3,
						pin14: ".J6 > .pin4",
						pin15: ".J6 > .pin1",
						pin16: N.V3V3,
						pin17: N.GND,
					}}
				/>
				<schematicbox
					name="U1A"
					title="U1A Audio Paths"
					chipRef=".U1"
					schX={0.8}
					schY={0.5}
					width="4mm"
					height="2mm"
					pinLabels={{
						pin6: ["SLEEVE"],
						pin7: ["RING2"],
						pin9: ["TIP_SENSE"],
						pin11: ["MICp", "MICP"],
						pin12: ["MICn", "MICN"],
						pin14: ["RING2_S", "RING2_SENSE"],
						pin15: ["SLEEVE_S", "SLEEVE_SENSE"],
					}}
					schPinArrangement={{
						leftSide: [11, 12],
						rightSide: [15, 6, 14, 7, 9],
					}}
				/>
				<schematicbox
					name="U1B"
					title="U1B Detection and Control"
					chipRef=".U1"
					schX={-5}
					schY={0}
					width="3.6mm"
					height="1.8mm"
					pinLabels={{
						pin1: ["SCL"],
						pin2: ["SDA"],
						pin4: ["ADDR_SEL"],
						pin5: ["DET_TRIGGER"],
						pin8: ["MIC_PRESENT"],
					}}
					schPinArrangement={{
						leftSide: [1, 2, 4],
						rightSide: [8, 5],
					}}
				/>
				<schematicbox
					name="U1P"
					title="U1 Power"
					chipRef=".U1"
					schX={-2.5}
					schY={-2.5}
					width="2.8mm"
					height="1mm"
					pinLabels={{
						pin3: ["GND2"],
						pin10: ["GND1"],
						pin13: ["VDD2"],
						pin16: ["VDD1"],
						pin17: ["EP"],
					}}
					schPinArrangement={{
						topSide: [13, 16],
						bottomSide: [3, 10, 17],
					}}
				/>
				<SJ_43516_SMT_TR
					name="J6"
					schX={6}
					schY={0.5}
					schWidth="3.4mm"
					schHeight="2.4mm"
					schPinArrangement={{ leftSide: [1, 2, 3], rightSide: [4, 5, 6] }}
					pcbX={17.399}
					pcbY={28.006}
					pcbRotation={270}
					connections={{
						pin2: N.HP_LEFT,
						pin3: N.HP_RIGHT,
						pin5: ".R21 > .pin1",
					}}
					noConnect={["pin6"]}
				/>
				<resistor
					name="R11"
					resistance="0ohm"
					footprint={TI_0603_RES}
					manufacturerPartNumber="CRCW06030000Z0EA"
					schX={-6}
					schY={-2.6}
					pcbX={20.32}
					pcbY={4.064}
					pcbRotation={180}
					connections={{ pin2: N.GND }}
				/>
				<resistor
					name="R17"
					resistance="10kohm"
					footprint={TI_0603_RES}
					manufacturerPartNumber="RC0603FR-0710KL"
					schX={9.5}
					schY={-0.8}
					schRotation={90}
					pcbX={14.986}
					pcbY={1.778}
					connections={{ pin1: N.HP_LEFT, pin2: N.GND }}
				/>
				<resistor
					name="R15"
					resistance="47kohm"
					footprint={TI_0603_RES}
					manufacturerPartNumber="RC0603FR-0747KL"
					schX={-6.8}
					schY={2.7}
					pcbX={8.723}
					pcbY={4.191}
					pcbRotation={270}
					connections={{ pin1: N.V3V3, pin2: N.MIC_DET }}
				/>
				<resistor
					name="R18"
					resistance="20kohm"
					footprint={TI_0603_RES}
					manufacturerPartNumber="RC0603FR-0720KL"
					schX={-6.8}
					schY={1.2}
					pcbX={11.082}
					pcbY={4.191}
					pcbRotation={90}
					connections={{ pin1: N.MIC_DET }}
				/>
				<resistor
					name="R21"
					resistance="10kohm"
					footprint={TI_0603_RES}
					manufacturerPartNumber="RC0603FR-0710KL"
					schX={9.6}
					schY={0.5}
					pcbX={10.668}
					pcbY={11.684}
					connections={{ pin2: N.SPEAKER_DET }}
				/>
				<resistor
					name="R22"
					resistance="100kohm"
					footprint={TI_0603_RES}
					manufacturerPartNumber="CRCW0603100KFKEA"
					schX={6.4}
					schY={-2.4}
					pcbX={10.668}
					pcbY={9.779}
					connections={{ pin1: N.V3V3, pin2: N.SPEAKER_DET }}
				/>
				<resistor
					name="R23"
					resistance="220kohm"
					footprint={TI_0603_RES}
					manufacturerPartNumber="RC0603FR-07220KL"
					schX={8.2}
					schY={-2.4}
					schRotation={90}
					pcbX={14.478}
					pcbY={9.779}
					connections={{ pin1: N.SPEAKER_DET, pin2: N.GND }}
				/>
				<capacitor
					name="C7"
					capacitance="1uF"
					footprint={TI_0603_CAP}
					manufacturerPartNumber="GRM188R71C105KA12D"
					schX={10}
					schY={-2.4}
					schRotation={90}
					pcbX={14.478}
					pcbY={11.684}
					pcbRotation={180}
					connections={{ pin1: N.SPEAKER_DET, pin2: N.GND }}
				/>
				<testpoint
					name="TP1"
					schX={-6.2}
					schY={3.4}
					pcbX={1.905}
					pcbY={-9.525}
					connections={{ pin1: N.MIC_DET }}
					footprint={
						<footprint>
							<platedhole
								portHints={["pin1"]}
								pcbX="0mm"
								pcbY="0mm"
								outerDiameter="0.75mm"
								holeDiameter="0.45mm"
								shape="circle"
							/>
						</footprint>
					}
				/>
				<testpoint
					name="TP2"
					schX={11.6}
					schY={-2.4}
					pcbX={-1.684}
					pcbY={-4.7507}
					connections={{ pin1: N.SPEAKER_DET }}
					footprint={
						<footprint>
							<platedhole
								portHints={["pin1"]}
								pcbX="0mm"
								pcbY="0mm"
								outerDiameter="0.75mm"
								holeDiameter="0.45mm"
								shape="circle"
							/>
						</footprint>
					}
				/>
			</group>

			<group
				name="MICROPHONE_AMPLIFIER"
				schSheetName={MICROPHONE_SHEET}
				schX={0}
				schY={0}
				pcbX={0}
				pcbY={0}
				schTraceAutoLabelEnabled={false}
				schMaxTraceDistance="1.5mm"
			>
				<schematicsection
					name="MICROPHONE_PREAMPLIFIER"
					displayName="Electret Microphone Bias and TLV2760 Amplifier"
				/>
				<POM_2242P_C33_R
					name="MIC1"
					schX={7.2}
					schY={-2.8}
					pcbX={-3.937}
					pcbY={-28.956}
					pcbRotation={180}
					connections={{ pin1: N.ONBOARD_MIC, pin2: N.GND }}
				/>
				<TLV2760IDBVTG4
					name="U5"
					noSchematicRepresentation
					schX={3.6}
					schY={0.2}
					schWidth="2.7mm"
					schHeight="3.2mm"
					schPinArrangement={{
						leftSide: [3, 4],
						rightSide: [1],
						topSide: [5, 6],
						bottomSide: [2],
					}}
					pcbX={12.192}
					pcbY={-5.461}
					connections={{
						pin1: ".R36 > .pin1",
						pin2: N.GND,
						pin3: ".C19 > .pin2",
						pin4: ".R24 > .pin2",
						pin5: N.MIC_PWR,
						pin6: N.MIC_PWR,
					}}
				/>
				<schematicsymbol
					name="U5A"
					displayName="U5 TLV2760"
					chipRef=".U5"
					symbolName="opamp_with_power"
					schX={0}
					schY={0}
					connections={{
						pin1: ".U5 > .pin3",
						pin2: ".U5 > .pin4",
						pin3: ".U5 > .pin2",
						pin4: ".U5 > .pin1",
						pin5: ".U5 > .pin6",
					}}
				/>
				<capacitor
					name="C19"
					capacitance="0.15uF"
					footprint={TI_0603_CAP}
					manufacturerPartNumber="GRM188R61A154KA01D"
					schX={-4.5}
					schY={-1.8}
					pcbX={7.62}
					pcbY={-6.731}
					connections={{ pin1: N.MIC_RAW }}
				/>
				<resistor
					name="R38"
					resistance="51kohm"
					footprint={TI_0603_RES}
					manufacturerPartNumber="RC0603FR-0751KL"
					schX={-1.8}
					schY={-3.4}
					schRotation={90}
					pcbX={7.62}
					pcbY={-5.207}
					connections={{ pin1: ".C19 > .pin2", pin2: N.GND }}
				/>
				<resistor
					name="R35"
					resistance="47kohm"
					footprint={TI_0603_RES}
					manufacturerPartNumber="RC0603FR-0747KL"
					schX={-1.8}
					schY={-0.4}
					schRotation={90}
					pcbX={7.62}
					pcbY={-3.683}
					pcbRotation={180}
					connections={{ pin1: ".R32 > .pin2", pin2: ".C19 > .pin2" }}
				/>
				<resistor
					name="R32"
					resistance="3kohm"
					footprint={TI_0603_RES}
					manufacturerPartNumber="RC0603FR-073KL"
					schX={-3}
					schY={1.2}
					pcbX={12.192}
					pcbY={-1.143}
					connections={{ pin1: N.MIC_PWR }}
				/>
				<capacitor
					name="C22"
					capacitance="0.47uF"
					footprint={TI_0603_CAP}
					manufacturerPartNumber="GRM188R60J474KA01D"
					schX={-3.3}
					schY={-3.4}
					schRotation={90}
					pcbX={6.096}
					pcbY={-1.143}
					connections={{ pin1: ".R32 > .pin2", pin2: N.GND }}
				/>
				<resistor
					name="R34"
					resistance="8.2kohm"
					footprint={TI_0603_RES}
					manufacturerPartNumber="RC0603FR-078K2L"
					schX={-6.2}
					schY={-1.8}
					pcbX={2.286}
					pcbY={-14.224}
					connections={{ pin1: N.MIC_RAW, pin2: ".R30 > .pin1" }}
				/>
				<resistor
					name="R30"
					resistance="470ohm"
					footprint={TI_0603_RES}
					manufacturerPartNumber="RC0603FR-07470RL"
					schX={-4.6}
					schY={1.2}
					pcbX={9.652}
					pcbY={-13.843}
					pcbRotation={180}
					connections={{ pin2: N.MIC_PWR }}
				/>
				<capacitor
					name="C13"
					capacitance="4.7uF"
					manufacturerPartNumber="TPSA475K010R1400"
					schX={-4.6}
					schY={-3.4}
					schRotation={90}
					pcbX={5.588}
					pcbY={-15.367}
					pcbRotation={270}
					connections={{ pin1: ".R30 > .pin1", pin2: N.GND }}
					footprint={
						<footprint>
							<smtpad
								portHints={["pin1"]}
								pcbX="-1.3mm"
								pcbY="0mm"
								width="1.25mm"
								height="1.8mm"
								shape="rect"
							/>
							<smtpad
								portHints={["pin2"]}
								pcbX="1.3mm"
								pcbY="0mm"
								width="1.25mm"
								height="1.8mm"
								shape="rect"
							/>
						</footprint>
					}
				/>
				<capacitor
					name="C14"
					capacitance="4.7uF"
					manufacturerPartNumber="TPSA475K010R1400"
					schX={0.8}
					schY={-3.4}
					schRotation={90}
					pcbX={16.383}
					pcbY={-2.667}
					pcbRotation={90}
					connections={{ pin1: N.MIC_PWR, pin2: N.GND }}
					footprint={
						<footprint>
							<smtpad
								portHints={["pin1"]}
								pcbX="-1.3mm"
								pcbY="0mm"
								width="1.25mm"
								height="1.8mm"
								shape="rect"
							/>
							<smtpad
								portHints={["pin2"]}
								pcbX="1.3mm"
								pcbY="0mm"
								width="1.25mm"
								height="1.8mm"
								shape="rect"
							/>
						</footprint>
					}
				/>
				<capacitor
					name="C15"
					capacitance="0.1uF"
					footprint={TI_0603_CAP}
					manufacturerPartNumber="GRM188R70J104KA01D"
					schX={2.3}
					schY={-3.4}
					schRotation={90}
					pcbX={18.669}
					pcbY={-2.667}
					pcbRotation={90}
					connections={{ pin1: N.MIC_PWR, pin2: N.GND }}
				/>
				<capacitor
					name="C8"
					capacitance="0.47uF"
					footprint={TI_0603_CAP}
					manufacturerPartNumber="GRM188R60J474KA01D"
					schX={-0.4}
					schY={4.3}
					pcbX={8.509}
					pcbY={-12.065}
					connections={{ pin1: N.GND, pin2: ".R24 > .pin1" }}
				/>
				<resistor
					name="R24"
					resistance="820ohm"
					footprint={TI_0603_RES}
					manufacturerPartNumber="RC0603FR-07820RL"
					schX={1.4}
					schY={4.3}
					pcbX={12.446}
					pcbY={-12.065}
					pcbRotation={180}
				/>
				<resistor
					name="R26"
					resistance="200kohm"
					footprint={TI_0603_RES}
					manufacturerPartNumber="RC0603FR-07200KL"
					schX={3.6}
					schY={1.8}
					pcbX={12.446}
					pcbY={-9.017}
					pcbRotation={180}
					connections={{
						pin1: ".R24 > .pin2",
						pin2: ".R36 > .pin1",
					}}
				/>
				<capacitor
					name="C9"
					capacitance="51pF"
					footprint={TI_0603_CAP}
					manufacturerPartNumber="GRM1885C2A510JA01D"
					schX={3.6}
					schY={3.2}
					pcbX={12.446}
					pcbY={-10.541}
					pcbRotation={180}
					connections={{
						pin1: ".R24 > .pin2",
						pin2: ".R36 > .pin1",
					}}
				/>
				<resistor
					name="R36"
					resistance="820ohm"
					footprint={TI_0603_RES}
					manufacturerPartNumber="RC0603FR-07820RL"
					schX={4.4}
					schY={0}
					pcbX={8.509}
					pcbY={-9.017}
					pcbRotation={180}
					connections={{ pin2: N.MIC_OUT }}
				/>
				<capacitor
					name="C20"
					capacitance="0.015uF"
					footprint={TI_0603_CAP}
					manufacturerPartNumber="C0603C153K1RACTU"
					schX={5.2}
					schY={-1.4}
					schRotation={90}
					pcbX={8.509}
					pcbY={-10.541}
					connections={{ pin1: N.MIC_OUT, pin2: N.GND }}
				/>
			</group>

			<group
				name="ANALOG_AUDIO_SWITCH"
				schSheetName={SWITCH_SHEET}
				schX={0}
				schY={0}
				pcbX={0}
				pcbY={0}
				schTraceAutoLabelEnabled={false}
				schMaxTraceDistance="1.5mm"
			>
				<schematicsection
					name="AUDIO_PATH_SWITCH"
					displayName="Analog Switch for Headset, Microphone, and Loudspeaker Paths"
				/>
				<TS3A44159PWR
					name="U3"
					noSchematicRepresentation
					pcbX={-5.334}
					pcbY={-13.208}
					connections={{
						pin1: N.HEADPHONE_OUT,
						pin2: N.AMP_AUDIO_OUT_P,
						pin3: N.LOUDSPEAKER_OUT_P,
						pin4: N.GND,
						pin5: ".R20 > .pin1",
						pin6: ".R2 > .pin1",
						pin7: ".R7 > .pin1",
						pin8: N.MIC_DET,
						pin9: N.ONBOARD_MIC,
						pin10: N.MIC_RAW,
						pin11: N.HEADSET_MIC,
						pin12: N.V3V3,
						pin13: ".C21 > .pin1",
						pin14: N.AMP_AUDIO_OUT_N,
						pin15: N.LOUDSPEAKER_OUT_N,
						pin16: N.SPEAKER_DET,
					}}
				/>
				<schematicbox
					name="U3A"
					title="U3A Speaker / Headphone −"
					chipRef=".U3"
					schX={-3.6}
					schY={2}
					width="3.8mm"
					height="1.3mm"
					pinLabels={{
						pin13: ["NO1"],
						pin14: ["COM1"],
						pin15: ["NC1"],
						pin16: ["IN1_2"],
					}}
					schPinArrangement={{ leftSide: [14, 15, 16], rightSide: [13] }}
				/>
				<schematicbox
					name="U3B"
					title="U3B Speaker / Headphone +"
					chipRef=".U3"
					schX={3.6}
					schY={2}
					width="3.8mm"
					height="1.2mm"
					pinLabels={{ pin1: ["NO2"], pin2: ["COM2"], pin3: ["NC2"] }}
					schPinArrangement={{ leftSide: [2, 3], rightSide: [1] }}
				/>
				<schematicbox
					name="U3C"
					title="U3C Detection Termination"
					chipRef=".U3"
					schX={-3.6}
					schY={-2}
					width="3.8mm"
					height="1.3mm"
					pinLabels={{
						pin5: ["NO3"],
						pin6: ["COM3"],
						pin7: ["NC3"],
						pin8: ["IN3_4"],
					}}
					schPinArrangement={{ leftSide: [5, 6, 7], rightSide: [8] }}
				/>
				<schematicbox
					name="U3D"
					title="U3D Microphone Source"
					chipRef=".U3"
					schX={3.6}
					schY={-2}
					width="3.8mm"
					height="1.2mm"
					pinLabels={{ pin9: ["NO4"], pin10: ["COM4"], pin11: ["NC4"] }}
					schPinArrangement={{ leftSide: [10, 11], rightSide: [9] }}
				/>
				<schematicbox
					name="U3P"
					title="U3 Power"
					chipRef=".U3"
					schX={0}
					schY={0}
					width="2.4mm"
					height="1mm"
					pinLabels={{ pin4: ["GND"], pin12: ["VCC"] }}
					schPinArrangement={{ topSide: [12], bottomSide: [4] }}
				/>
				<resistor
					name="R7"
					resistance="50ohm"
					footprint={TI_0603_RES}
					manufacturerPartNumber="CRCW060350R0FKEA"
					schX={-7.2}
					schY={2.5}
					pcbX={-11.176}
					pcbY={-13.716}
					pcbRotation={180}
					connections={{ pin2: N.GND }}
				/>
				<resistor
					name="R2"
					resistance="50ohm"
					footprint={TI_0603_RES}
					manufacturerPartNumber="CRCW060350R0FKEA"
					schX={-7.2}
					schY={0.9}
					pcbX={-11.176}
					pcbY={-15.24}
					pcbRotation={180}
					connections={{ pin2: N.GND }}
				/>
				<resistor
					name="R20"
					resistance="50ohm"
					footprint={TI_0603_RES}
					manufacturerPartNumber="CRCW060350R0FKEA"
					schX={-7.2}
					schY={-0.7}
					pcbX={-11.176}
					pcbY={-16.764}
					pcbRotation={180}
					connections={{ pin2: N.GND }}
				/>
				<capacitor
					name="C2"
					capacitance="10uF"
					footprint={TI_0603_CAP}
					manufacturerPartNumber="C1608X5R1A106M080AC"
					schX={7.2}
					schY={2.5}
					schRotation={90}
					pcbX={1.397}
					pcbY={3.81}
					connections={{ pin1: N.HEADPHONE_OUT, pin2: N.HP_LEFT }}
				/>
				<capacitor
					name="C23"
					capacitance="10uF"
					footprint={TI_0603_CAP}
					manufacturerPartNumber="C1608X5R1A106M080AC"
					schX={7.2}
					schY={0.9}
					schRotation={90}
					pcbX={1.397}
					pcbY={5.3077}
					connections={{ pin1: N.HEADPHONE_OUT, pin2: N.HP_RIGHT }}
				/>
				<capacitor
					name="C21"
					capacitance="0.1uF"
					footprint={TI_0603_CAP}
					manufacturerPartNumber="GRM188R70J104KA01D"
					schX={0}
					schY={3.6}
					pcbX={-0.762}
					pcbY={-7.62}
					pcbRotation={270}
					connections={{ pin2: ".R37 > .pin1" }}
				/>
				<resistor
					name="R37"
					resistance="510ohm"
					footprint={TI_0603_RES}
					manufacturerPartNumber="RC0603FR-07510RL"
					schX={2.2}
					schY={3.6}
					pcbX={0.762}
					pcbY={-7.62}
					pcbRotation={90}
					connections={{ pin2: N.GND }}
				/>
			</group>

			<group
				name="LOUDSPEAKER_AMPLIFIER"
				schSheetName={LOUDSPEAKER_SHEET}
				schX={0}
				schY={0}
				pcbX={0}
				pcbY={0}
				schTraceAutoLabelEnabled={false}
				schMaxTraceDistance="1.5mm"
			>
				<schematicsection
					name="LOUDSPEAKER_OUTPUT"
					displayName="TPA301 Loudspeaker Amplifier, Volume, and Speaker"
				/>
				<TPA301DGNR
					name="U4"
					schX={0}
					schY={0.5}
					schWidth="4.4mm"
					schHeight="2.8mm"
					schPinArrangement={{
						leftSide: [1, 2, 3, 4],
						rightSide: [5, 8],
						bottomSide: [7, 9, 6],
					}}
					pcbX={-13.462}
					pcbY={-0.127}
					connections={{
						pin1: N.AUDIO_SHUTDOWN,
						pin2: ".C12 > .pin1",
						pin4: ".R29 > .pin2",
						pin5: N.AMP_AUDIO_OUT_P,
						pin6: N.V3V3,
						pin8: N.AMP_AUDIO_OUT_N,
					}}
				/>
				<trace
					name="U4_POWERPAD_TO_GND"
					from=".U4 > .pin9"
					to=".C17 > .pin2"
					width="0.25mm"
				/>
				<capacitor
					name="C11"
					capacitance="0.56uF"
					footprint={TI_0603_CAP}
					manufacturerPartNumber="GRM188R71A564KA61D"
					schX={-6.2}
					schY={0.2}
					pcbX={-18.161}
					pcbY={-7.455}
					connections={{ pin1: N.AUDIO_OUT, pin2: ".R29 > .pin1" }}
				/>
				<resistor
					name="R29"
					resistance="30kohm"
					footprint={TI_0603_RES}
					manufacturerPartNumber="RC0603FR-0730KL"
					schX={-4.4}
					schY={0.2}
					pcbX={-24.384}
					pcbY={9.271}
					pcbRotation={90}
				/>
				<capacitor
					name="C12"
					capacitance="2.2uF"
					footprint={TI_0603_CAP}
					manufacturerPartNumber="GRM188R61A225KE34D"
					schX={-4.2}
					schY={-1.2}
					schRotation={90}
					pcbX={-13.208}
					pcbY={4.826}
					connections={{ pin2: N.GND }}
				/>
				<resistor
					name="R33"
					resistance="100kohm"
					footprint={TI_0603_RES}
					manufacturerPartNumber="CRCW0603100KFKEA"
					schX={-7}
					schY={-2.6}
					pcbX={-10.287}
					pcbY={0.762}
					pcbRotation={90}
					connections={{ pin1: N.V3V3, pin2: N.AUDIO_SHUTDOWN }}
				/>
				<resistor
					name="R25"
					resistance="0ohm"
					footprint={TI_0603_RES}
					manufacturerPartNumber="CRCW06030000Z0EA"
					schX={-3.8}
					schY={3.2}
					pcbX={-22.86}
					pcbY={9.271}
					pcbRotation={270}
					connections={{
						pin1: ".R29 > .pin2",
						pin2: ".R27 > .pin1",
					}}
				/>
				<A_3352T_1_104LF
					name="R27"
					displayName="R27 100k Volume"
					schX={-1.6}
					schY={3.2}
					pcbX={-20.5}
					pcbY={-3.5}
					pcbRotation={180}
					connections={{
						pin2: ".C10 > .pin2",
						pin3: N.GND,
					}}
				/>
				<capacitor
					name="C10"
					capacitance="5pF"
					footprint={TI_0603_CAP}
					manufacturerPartNumber="CC0603CRNPO9BN5R0"
					schX={-3.4}
					schY={5.7}
					pcbX={-21.336}
					pcbY={9.271}
					pcbRotation={270}
					connections={{
						pin1: ".R29 > .pin2",
						pin2: ".R27 > .pin2",
					}}
				/>
				<capacitor
					name="C16"
					capacitance="10uF"
					footprint={TI_0603_CAP}
					manufacturerPartNumber="C1608X5R1A106M080AC"
					schX={-0.8}
					schY={-3.7}
					schRotation={90}
					pcbX={-9.271}
					pcbY={-5.588}
					pcbRotation={90}
					connections={{ pin1: N.V3V3, pin2: N.GND }}
				/>
				<capacitor
					name="C17"
					capacitance="0.1uF"
					footprint={TI_0603_CAP}
					manufacturerPartNumber="GRM188R70J104KA01D"
					schX={1}
					schY={-3.7}
					schRotation={90}
					pcbX={-10.795}
					pcbY={-5.588}
					pcbRotation={90}
					connections={{ pin1: N.V3V3, pin2: N.GND }}
				/>
				<capacitor
					name="C18"
					capacitance="2.2uF"
					footprint={TI_0603_CAP}
					manufacturerPartNumber="GRM188R61A225KE34D"
					schX={2.8}
					schY={-3.7}
					schRotation={90}
					pcbX={-12.319}
					pcbY={-5.588}
					pcbRotation={270}
					connections={{ pin1: N.V3V3, pin2: N.GND }}
				/>
				<capacitor
					name="C1"
					capacitance="47uF"
					manufacturerPartNumber="TPSB476K010R0250"
					schX={5}
					schY={-2.4}
					pcbX={-6.858}
					pcbY={-0.381}
					pcbRotation={0}
					connections={{
						pin1: N.LOUDSPEAKER_OUT_P,
						pin2: ".S1 > .pin1",
					}}
					footprint={
						<footprint>
							<smtpad
								portHints={["pin1"]}
								pcbX="-1.375mm"
								pcbY="0mm"
								width="1.95mm"
								height="2.25mm"
								shape="rect"
							/>
							<smtpad
								portHints={["pin2"]}
								pcbX="1.375mm"
								pcbY="0mm"
								width="1.95mm"
								height="2.25mm"
								shape="rect"
							/>
						</footprint>
					}
				/>
				<FS_3013
					name="S1"
					displayName="S1 8 Ohm Speaker"
					schX={7.5}
					schY={-2.4}
					pcbX={-4.25}
					pcbY={22}
					connections={{ pin2: N.LOUDSPEAKER_OUT_N }}
				/>
			</group>

			<copperpour
				name="GND_BOTTOM_POUR"
				layer="bottom"
				connectsTo={N.GND}
				clearance="0.2mm"
			/>
		</board>
	);
}
