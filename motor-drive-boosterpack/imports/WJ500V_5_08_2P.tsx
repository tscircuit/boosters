import type { ChipProps } from "@tscircuit/props";
import { CAD_MODELS } from "./cadModels";

const PIN_LABELS = { pin1: "PVDD", pin2: "GND" } as const;

const TerminalFootprint = () => (
	<footprint>
		<platedhole
			portHints={["pin1"]}
			pcbX={-2.54}
			pcbY={0}
			outerDiameter="2mm"
			holeDiameter="1.3mm"
			shape="circle"
		/>
		<platedhole
			portHints={["pin2"]}
			pcbX={2.54}
			pcbY={0}
			outerDiameter="2mm"
			holeDiameter="1.3mm"
			shape="circle"
		/>
		<courtyardrect width="11.4mm" height="10.7mm" pcbX={-0.24} pcbY={0.56} />
	</footprint>
);

export const WJ500V_5_08_2P = (props: ChipProps<typeof PIN_LABELS>) => (
	<chip
		manufacturerPartNumber="WJ500V-5.08-2P"
		supplierPartNumbers={{ jlcpcb: ["C8465"] }}
		footprint={<TerminalFootprint />}
		pinLabels={PIN_LABELS}
		pcbPinLabels={PIN_LABELS}
		cadModel={{
			...CAD_MODELS.terminal2,
			pcbRotationOffset: 0,
			modelOriginPosition: {
				x: -2.5399878999999967,
				y: 0,
				z: -0.000006999999999646178,
			},
		}}
		{...props}
	/>
);
