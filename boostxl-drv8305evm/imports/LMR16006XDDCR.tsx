import type { ChipProps } from "@tscircuit/props";
import { CAD_MODELS } from "./cadModels";

const PIN_LABELS = {
	pin1: "CB",
	pin2: "GND",
	pin3: "FB",
	pin4: "SHDN",
	pin5: "VIN",
	pin6: "SW",
} as const;

const Sot23SixFootprint = () => (
	<footprint>
		{[1, 2, 3].map((pin, index) => (
			<smtpad
				portHints={[`pin${pin}`]}
				pcbX={1.35}
				pcbY={0.95 - index * 0.95}
				width="1.1mm"
				height="0.6mm"
				shape="rect"
			/>
		))}
		{[6, 5, 4].map((pin, index) => (
			<smtpad
				portHints={[`pin${pin}`]}
				pcbX={-1.35}
				pcbY={-0.95 + index * 0.95}
				width="1.1mm"
				height="0.6mm"
				shape="rect"
			/>
		))}
		<courtyardrect width="4.2mm" height="3.2mm" />
	</footprint>
);

export const LMR16006XDDCR = (props: ChipProps<typeof PIN_LABELS>) => (
	<chip
		manufacturerPartNumber="LMR16006XDDCR"
		supplierPartNumbers={{ jlcpcb: ["C87080"] }}
		footprint={<Sot23SixFootprint />}
		pinLabels={PIN_LABELS}
		cadModel={{
			...CAD_MODELS.buckRegulator,
			pcbRotationOffset: 180,
			modelOriginPosition: {
				x: 0.000025399999913133797,
				y: -0.0000889000000370288,
				z: -0.048939,
			},
		}}
		{...props}
	/>
);
