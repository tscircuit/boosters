import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
	pin1: ["pin1"],
	pin2: ["pin2"],
} as const;

export const FS_3013 = (props: ChipProps<typeof pinLabels>) => (
	<chip
		pinLabels={pinLabels}
		symbol={
			<symbol>
				<port
					name="pin1"
					pinNumber={1}
					aliases={["1"]}
					direction="left"
					schX={-1.6}
					schY={0.3}
					schStemLength={1.2}
				/>
				<port
					name="pin2"
					pinNumber={2}
					aliases={["2"]}
					direction="left"
					schX={-1.6}
					schY={-0.3}
					schStemLength={1.2}
				/>
				<schematicpath
					points={[
						{ x: -0.4, y: 0.55 },
						{ x: -0.2, y: 0.55 },
						{ x: 0.38, y: 0.9 },
						{ x: 0.38, y: -0.9 },
						{ x: -0.2, y: -0.55 },
						{ x: -0.4, y: -0.55 },
						{ x: -0.4, y: 0.55 },
					]}
					strokeWidth={0.05}
					strokeColor="#000000"
				/>
				<schematicpath
					points={[
						{ x: 0.02, y: 0.38 },
						{ x: 0.28, y: 0.38 },
					]}
					strokeWidth={0.05}
					strokeColor="#FF0000"
				/>
				<schematicpath
					points={[
						{ x: 0.15, y: 0.25 },
						{ x: 0.15, y: 0.51 },
					]}
					strokeWidth={0.05}
					strokeColor="#FF0000"
				/>
				<schematicpath
					points={[
						{ x: 0.02, y: -0.38 },
						{ x: 0.28, y: -0.38 },
					]}
					strokeWidth={0.05}
					strokeColor="#FF0000"
				/>
			</symbol>
		}
		supplierPartNumbers={{ jlcpcb: ["C482323"] }}
		manufacturerPartNumber="FS-3013"
		footprint={
			<footprint>
				<platedhole
					portHints={["pin1"]}
					pcbX="7.500112mm"
					pcbY="0mm"
					outerDiameter="1.999996mm"
					holeDiameter="1.1999976mm"
					shape="circle"
				/>
				<platedhole
					portHints={["pin2"]}
					pcbX="-7.500112mm"
					pcbY="0mm"
					outerDiameter="1.999996mm"
					holeDiameter="1.1999976mm"
					shape="circle"
				/>
				<silkscreenpath
					route={[
						{ x: 6.477, y: 1.905 },
						{ x: 7.493, y: 1.905 },
					]}
				/>
				<silkscreenpath
					route={[
						{ x: 6.985, y: 1.397 },
						{ x: 6.985, y: 2.413 },
					]}
				/>
				<silkscreenpath
					route={[
						{ x: -7.493, y: 2.032 },
						{ x: -6.477, y: 2.032 },
					]}
				/>
				<silkscreencircle
					pcbX="0mm"
					pcbY="0mm"
					radius="15.100046mm"
					strokeWidth="0.2mm"
				/>
				<silkscreentext
					text="{NAME}"
					pcbX="0mm"
					pcbY="16.0876mm"
					anchorAlignment="center"
					fontSize="1mm"
				/>
				<courtyardoutline
					outline={[
						{ x: -15.3376, y: 15.3376 },
						{ x: 15.363, y: 15.3376 },
						{ x: 15.363, y: -15.363 },
						{ x: -15.3376, y: -15.363 },
						{ x: -15.3376, y: 15.3376 },
					]}
				/>
			</footprint>
		}
		cadModel={{
			objUrl:
				"https://modelcdn.tscircuit.com/easyeda_models/assets/C482323.obj?uuid=933e910c111e4b0a854c5a7fff930d39",
			stepUrl:
				"https://modelcdn.tscircuit.com/easyeda_models/assets/C482323.step?uuid=933e910c111e4b0a854c5a7fff930d39",
			pcbRotationOffset: 0,
			modelOriginPosition: { x: 0, y: 0, z: -0.00001 },
		}}
		{...props}
	/>
);
