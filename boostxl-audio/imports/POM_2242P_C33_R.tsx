import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
	pin1: ["pin1"],
	pin2: ["pin2"],
} as const;

export const POM_2242P_C33_R = (props: ChipProps<typeof pinLabels>) => {
	return (
		<chip
			pinLabels={pinLabels}
			symbol={
				<symbol width="1.4mm" height="1mm">
					<port
						name="pin1"
						pinNumber={1}
						aliases={["1"]}
						direction="left"
						schX={-0.7}
						schY={0}
						schStemLength={0.35}
					/>
					<port
						name="pin2"
						pinNumber={2}
						aliases={["2"]}
						direction="down"
						schX={0}
						schY={-0.5}
						schStemLength={0.3}
					/>
					<schematiccircle
						center={{ x: 0, y: 0 }}
						radius={0.4}
						strokeWidth={0.05}
						color="#000000"
						isFilled={false}
					/>
					<schematicpath
						points={[
							{ x: -0.5, y: 0.2 },
							{ x: -0.5, y: -0.2 },
						]}
						strokeWidth={0.05}
						strokeColor="#000000"
					/>
					<schematicpath
						points={[
							{ x: -0.62, y: 0.2 },
							{ x: -0.62, y: -0.2 },
						]}
						strokeWidth={0.04}
						strokeColor="#000000"
					/>
				</symbol>
			}
			supplierPartNumbers={{
				jlcpcb: ["C3273844"],
			}}
			manufacturerPartNumber="POM-2242P-C33-R"
			footprint="radial_p1.8999mm_od1.3mm"
			cadModel={{
				objUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C3273844.obj?uuid=befd25304e014c9fae044d33b8f0eee2",
				stepUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C3273844.step?uuid=befd25304e014c9fae044d33b8f0eee2",
				pcbRotationOffset: 0,
				modelOriginPosition: {
					x: 0.0015544999999999032,
					y: -0.9989057999999886,
					z: -0.10000540000000013,
				},
			}}
			{...props}
		/>
	);
};
