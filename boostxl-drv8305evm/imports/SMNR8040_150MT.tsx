import type { InductorProps } from "@tscircuit/props";
import { CAD_MODELS } from "./cadModels";

const InductorFootprint = () => (
	<footprint>
		<smtpad
			portHints={["pin1"]}
			pcbX={3.328}
			pcbY={0}
			width="3.024mm"
			height="7.5mm"
			shape="rect"
		/>
		<smtpad
			portHints={["pin2"]}
			pcbX={-3.328}
			pcbY={0}
			width="3.024mm"
			height="7.5mm"
			shape="rect"
		/>
		<courtyardrect width="9.2mm" height="9.2mm" />
	</footprint>
);

export const SMNR8040_150MT = (props: Omit<InductorProps, "inductance">) => (
	<inductor
		inductance="15uH"
		maxCurrentRating="1.5A"
		manufacturerPartNumber="SMNR8040-150MT"
		supplierPartNumbers={{ jlcpcb: ["C467156"] }}
		footprint={<InductorFootprint />}
		cadModel={{
			...CAD_MODELS.inductor,
			pcbRotationOffset: 0,
			modelOriginPosition: { x: 0, y: 0.00004999999999988347, z: 0 },
		}}
		{...props}
	/>
);
