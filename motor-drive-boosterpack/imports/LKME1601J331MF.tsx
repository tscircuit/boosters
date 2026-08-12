import type { CapacitorProps } from "@tscircuit/props";
import { CAD_MODELS } from "./cadModels";

const RadialCapacitorFootprint = () => (
	<footprint>
		<platedhole
			portHints={["pin1", "pos"]}
			pcbX={-2.5}
			pcbY={0}
			outerDiameter="2mm"
			holeDiameter="1mm"
			shape="circle"
		/>
		<platedhole
			portHints={["pin2", "neg"]}
			pcbX={2.5}
			pcbY={0}
			outerDiameter="2mm"
			holeDiameter="1mm"
			shape="circle"
		/>
		<courtyardcircle radius="5.5mm" pcbX="2.5mm" />
	</footprint>
);

export const LKME1601J331MF = (props: Omit<CapacitorProps, "capacitance">) => (
	<capacitor
		capacitance="330uF"
		maxVoltageRating="63V"
		manufacturerPartNumber="LKME1601J331MF"
		supplierPartNumbers={{ jlcpcb: ["C442946"] }}
		polarized
		schShowRatings
		footprint={<RadialCapacitorFootprint />}
		cadModel={{
			...CAD_MODELS.edgeCapacitor,
			pcbRotationOffset: 0,
			modelOriginPosition: {
				x: 0.004999999999999893,
				y: 0.00041899999998573634,
				z: -12.510007000000002,
			},
		}}
		{...props}
	/>
);
