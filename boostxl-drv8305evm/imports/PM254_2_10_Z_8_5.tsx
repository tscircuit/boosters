import type { ChipProps } from "@tscircuit/props";
import { CAD_MODELS } from "./cadModels";

const PIN_LABELS = Object.fromEntries(
	Array.from({ length: 20 }, (_, index) => [
		`pin${index + 1}`,
		`P${index + 1}`,
	]),
) as Record<`pin${number}`, string>;

const HeaderFootprint = () => (
	<footprint>
		{Array.from({ length: 10 }, (_, row) => {
			const oddPin = row * 2 + 1;
			const pcbY = -row * 2.54;
			return [
				<platedhole
					portHints={[`pin${oddPin}`]}
					pcbX={0}
					pcbY={pcbY}
					outerDiameter="1.8mm"
					holeDiameter="1.1mm"
					shape="circle"
				/>,
				<platedhole
					portHints={[`pin${oddPin + 1}`]}
					pcbX={2.54}
					pcbY={pcbY}
					outerDiameter="1.8mm"
					holeDiameter="1.1mm"
					shape="circle"
				/>,
			];
		})}
		<courtyardrect width="5mm" height="26mm" pcbX={1.27} pcbY={-11.43} />
	</footprint>
);

export const PM254_2_10_Z_8_5 = (props: ChipProps) => (
	<chip
		manufacturerPartNumber="PM254-2-10-Z-8.5"
		supplierPartNumbers={{ jlcpcb: ["C2897411"] }}
		footprint={<HeaderFootprint />}
		pinLabels={PIN_LABELS}
		cadModel={{
			...CAD_MODELS.header,
			pcbRotationOffset: 90,
			modelOriginPosition: { x: 0.0004862999999293294, y: 0, z: -4.2500064 },
		}}
		{...props}
	/>
);
