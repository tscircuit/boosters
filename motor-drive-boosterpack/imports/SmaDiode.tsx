import type { DiodeProps } from "@tscircuit/props";

const SmaDiodeFootprint = () => (
	<footprint>
		<smtpad
			portHints={["pin1", "anode"]}
			pcbX={-2.3}
			pcbY={0}
			width="2.2mm"
			height="2mm"
			shape="rect"
		/>
		<smtpad
			portHints={["pin2", "cathode"]}
			pcbX={2.3}
			pcbY={0}
			width="2.2mm"
			height="2mm"
			shape="rect"
		/>
		<courtyardrect width="6.5mm" height="3.2mm" />
	</footprint>
);

export const SmaDiode = (props: DiodeProps) => (
	<diode footprint={<SmaDiodeFootprint />} {...props} />
);
