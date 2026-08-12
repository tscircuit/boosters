import type { ResistorProps } from "@tscircuit/props";
import { CAD_MODELS } from "./cadModels";

const ShuntFootprint = () => (
	<footprint>
		<smtpad
			portHints={["pin1"]}
			pcbX={-2.667}
			pcbY={0}
			width="2.5mm"
			height="3.6mm"
			shape="rect"
		/>
		<smtpad
			portHints={["pin2"]}
			pcbX={2.667}
			pcbY={0}
			width="2.5mm"
			height="3.6mm"
			shape="rect"
		/>
		<courtyardrect width="7.2mm" height="4.2mm" />
	</footprint>
);

export const HoLLR2512_3W_7mR_1_ = (
	props: Omit<ResistorProps, "resistance">,
) => (
	<resistor
		resistance={0.007}
		tolerance="1%"
		manufacturerPartNumber="HoLLR2512-3W-7mR-1%"
		supplierPartNumbers={{ jlcpcb: ["C2985710"] }}
		footprint={<ShuntFootprint />}
		cadModel={{
			...CAD_MODELS.shunt,
			pcbRotationOffset: 0,
			modelOriginPosition: { x: 0, y: 0.000012699999956566899, z: -0.01 },
		}}
		{...props}
	/>
);
