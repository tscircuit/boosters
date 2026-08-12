import type { ChipProps } from "@tscircuit/props";
import { CAD_MODELS } from "./cadModels";

const PIN_LABELS = { pin1: "MOT_A", pin2: "MOT_B", pin3: "MOT_C" } as const;

const TerminalFootprint = () => (
	<footprint>
		{[0, 1, 2].map((index) => (
			<platedhole
				portHints={[`pin${index + 1}`]}
				pcbX={-5.08 + index * 5.08}
				pcbY={0}
				outerDiameter="2mm"
				holeDiameter="1.3mm"
				shape="circle"
			/>
		))}
		<courtyardrect width="16.4mm" height="10.7mm" pcbX={0.29} pcbY={-0.52} />
	</footprint>
);

export const WJ500V_5_08_03P_14_00A = (props: ChipProps<typeof PIN_LABELS>) => (
	<chip
		manufacturerPartNumber="WJ500V-5.08-03P-14-00A"
		supplierPartNumbers={{ jlcpcb: ["C72334"] }}
		footprint={<TerminalFootprint />}
		pinLabels={PIN_LABELS}
		pcbPinLabels={PIN_LABELS}
		cadModel={{
			...CAD_MODELS.terminal3,
			pcbRotationOffset: 0,
			modelOriginPosition: {
				x: 0.000013299999995108891,
				y: 0.5160009999999886,
				z: -0.000009000000000369823,
			},
		}}
		{...props}
	/>
);
