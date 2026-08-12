import { CSD18540Q5B } from "./CSD18540Q5B";
import { HoLLR2512_3W_7mR_1_ } from "./HoLLR2512_3W_7mR_1_";

type PhaseName = "A" | "B" | "C";

const PHASE_SPACING_X = 5;
const TOP_POWER_SPACING_Y = 8;

const PowerMosfet = (props: {
	name: string;
	pcbX: number;
	pcbY: number;
	pcbRotation?: number;
	schX: number;
	schY: number;
	gateNet: string;
	sourceNet?: string;
	drainNet?: string;
	schSheetName: string;
	schSectionName: string;
}) => (
	<CSD18540Q5B
		name={props.name}
		schPinArrangement={{ leftSide: ["GATE", "SOURCE"], rightSide: ["DRAIN"] }}
		schWidth="2.8mm"
		pcbX={props.pcbX}
		pcbY={props.pcbY}
		pcbRotation={props.pcbRotation ?? 0}
		schX={props.schX}
		schY={props.schY}
		schSheetName={props.schSheetName}
		schSectionName={props.schSectionName}
		connections={{
			GATE: props.gateNet,
			...(props.sourceNet ? { SOURCE: props.sourceNet } : {}),
			...(props.drainNet ? { DRAIN: props.drainNet } : {}),
		}}
	/>
);

export const PhaseBridge = (props: {
	phase: PhaseName;
	highSideName: string;
	lowSideName: string;
	shuntName: string;
	senseHighName: string;
	senseLowName: string;
	senseCapName: string;
	localCapName: string;
	pcbX: number;
	schX: number;
}) => {
	const schSectionName = `phase-${props.phase.toLowerCase()}`;
	const phaseNet = `net.MOT_${props.phase}`;
	const highGateNet = `net.GH_${props.phase}`;
	const lowGateNet = `net.GL_${props.phase}`;
	const shuntHighNet = `net.SL_${props.phase}`;
	const voltageSenseNet = `net.VSEN_${props.phase}`;
	const senseLayout = {
		A: { highX: -24, highY: 6, lowX: -20.8, lowY: 7, capX: -20.8, capY: 4.2 },
		B: { highX: -5, highY: 10, lowX: -2, lowY: 10, capX: 1, capY: 10 },
		C: { highX: 22.5, highY: 5, lowX: 25.7, lowY: 7, capX: 24.2, capY: 1 },
	}[props.phase];

	return (
		<>
			<PowerMosfet
				name={props.highSideName}
				pcbX={props.pcbX - 3.4}
				pcbY={12.8 + TOP_POWER_SPACING_Y}
				pcbRotation={90}
				schX={props.schX}
				schY={5}
				schSheetName="power-stage"
				schSectionName={schSectionName}
				gateNet={highGateNet}
				sourceNet={phaseNet}
				drainNet="net.PVDD"
			/>
			<PowerMosfet
				name={props.lowSideName}
				pcbX={props.pcbX + 3.4}
				pcbY={12.8 + TOP_POWER_SPACING_Y}
				pcbRotation={90}
				schX={props.schX}
				schY={1}
				schSheetName="power-stage"
				schSectionName={schSectionName}
				gateNet={lowGateNet}
				sourceNet={shuntHighNet}
				drainNet={phaseNet}
			/>

			<HoLLR2512_3W_7mR_1_
				name={props.shuntName}
				pcbX={
					{ A: -10.8 - PHASE_SPACING_X, B: 9.7, C: 15.7 + PHASE_SPACING_X }[
						props.phase
					]
				}
				pcbY={4.6 + TOP_POWER_SPACING_Y}
				pcbRotation={90}
				schX={props.schX}
				schY={-2.5}
				schRotation="90deg"
				schSheetName="power-stage"
				schSectionName={schSectionName}
				connections={{ pin1: shuntHighNet }}
			/>

			<capacitor
				name={props.localCapName}
				capacitance="1uF"
				maxDecouplingTraceLength="10mm"
				maxVoltageRating="63V"
				footprint="1206"
				pcbX={props.pcbX - 3.4}
				pcbY={7.8 + TOP_POWER_SPACING_Y}
				schX={props.schX - 2.2}
				schY={5}
				schSheetName="power-stage"
				schSectionName={schSectionName}
				connections={{ pin1: "net.PVDD" }}
				schRotation="90deg"
			/>

			<resistor
				name={props.senseHighName}
				resistance="62k"
				tolerance="1%"
				footprint="1206"
				pcbX={senseLayout.highX}
				pcbY={senseLayout.highY}
				pcbRotation={90}
				schX={props.schX + 1.6}
				schY={-5}
				schSheetName="power-stage"
				schSectionName={schSectionName}
				connections={{ pin1: phaseNet, pin2: voltageSenseNet }}
			/>
			<resistor
				name={props.senseLowName}
				resistance="4.99k"
				tolerance="1%"
				footprint="0603"
				pcbX={senseLayout.lowX}
				pcbY={senseLayout.lowY}
				pcbRotation={90}
				schX={props.schX + 4.2}
				schY={-5}
				schSheetName="power-stage"
				schSectionName={schSectionName}
				connections={{ pin1: voltageSenseNet }}
			/>
			<capacitor
				name={props.senseCapName}
				capacitance="100nF"
				maxDecouplingTraceLength="50mm"
				footprint="0603"
				pcbX={senseLayout.capX}
				pcbY={senseLayout.capY}
				schX={props.schX + 4.2}
				schY={-7}
				schRotation="90deg"
				schSheetName="power-stage"
				schSectionName={schSectionName}
				connections={{ pin1: voltageSenseNet }}
			/>
		</>
	);
};
