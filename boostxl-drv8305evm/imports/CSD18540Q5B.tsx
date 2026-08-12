import type { ChipProps } from "@tscircuit/props";
import { CAD_MODELS } from "./cadModels";

const PIN_LABELS = { pin1: "GATE", pin2: "SOURCE", pin3: "DRAIN" } as const;

const Csd18540Footprint = () => (
	<footprint>
		<smtpad
			portHints={["pin1", "GATE"]}
			pcbX={-2.45}
			pcbY={-1.65}
			width="1.3mm"
			height="0.9mm"
			shape="rect"
		/>
		<smtpad
			portHints={["pin2", "SOURCE"]}
			pcbX={-2.45}
			pcbY={0.65}
			width="1.3mm"
			height="2.7mm"
			shape="rect"
		/>
		<smtpad
			portHints={["pin3", "DRAIN"]}
			pcbX={0.75}
			pcbY={0}
			width="4.3mm"
			height="4.4mm"
			shape="rect"
		/>
		<courtyardrect width="7.2mm" height="5.8mm" />
	</footprint>
);

export const CSD18540Q5B = (props: ChipProps<typeof PIN_LABELS>) => (
	<chip
		manufacturerPartNumber="CSD18540Q5B"
		supplierPartNumbers={{ jlcpcb: ["C86513"] }}
		footprint={<Csd18540Footprint />}
		pinLabels={PIN_LABELS}
		cadModel={{
			...CAD_MODELS.mosfet,
			pcbRotationOffset: 90,
			modelOriginPosition: {
				x: -0.06750050000005103,
				y: 0.001015999999935957,
				z: 0,
			},
		}}
		{...props}
	/>
);
