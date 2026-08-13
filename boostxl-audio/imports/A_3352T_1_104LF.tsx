import type { PotentiometerProps } from "@tscircuit/props";

const BOURNS_3352T_STEP_URL =
	"https://raw.githubusercontent.com/logisim-evolution/GECKO5Education/4ad623c16fbaa38afff32c41c3c8ef138a61bec4/kicad/cpuAddOn/3DModels/3352T-1-103LF.step";

type ImportedThumbwheelProps = Omit<
	PotentiometerProps,
	"maxResistance" | "pinVariant"
>;

/**
 * JLCPCB C17214971 / Bourns 3352T-1-104LF.
 *
 * EasyEDA supplies the electrical part and footprint but no 3D model. The STEP
 * URL is a mechanically identical Bourns 3352T-family model; resistance does
 * not change the package geometry.
 */
export const A_3352T_1_104LF = (props: ImportedThumbwheelProps) => (
	<potentiometer
		maxResistance="100kohm"
		pinVariant="three_pin"
		symbolName="potentiometer3"
		supplierPartNumbers={{ jlcpcb: ["C17214971"] }}
		manufacturerPartNumber="3352T-1-104LF"
		footprint={
			<footprint>
				<platedhole
					portHints={["pin1"]}
					pcbX="2.54mm"
					pcbY="0mm"
					outerDiameter="1.6mm"
					holeDiameter="1mm"
					shape="circle"
				/>
				<platedhole
					portHints={["pin2"]}
					pcbX="0mm"
					pcbY="0mm"
					outerDiameter="1.6mm"
					holeDiameter="1mm"
					shape="circle"
				/>
				<platedhole
					portHints={["pin3"]}
					pcbX="-2.54mm"
					pcbY="0mm"
					outerDiameter="1.6mm"
					holeDiameter="1mm"
					shape="circle"
				/>
				<silkscreencircle
					pcbX="0mm"
					pcbY="-2.60mm"
					radius="4.765mm"
					strokeWidth="0.2mm"
				/>
				<silkscreenpath
					route={[
						{ x: -4.14, y: -0.08 },
						{ x: -4.14, y: 2.51 },
						{ x: 4.09, y: 2.51 },
						{ x: 4.09, y: -0.08 },
					]}
				/>
				<silkscreentext
					text="{NAME}"
					pcbX="0mm"
					pcbY="3.4mm"
					anchorAlignment="center"
					fontSize="1mm"
				/>
				<courtyardoutline
					outline={[
						{ x: -5.1, y: 2.76 },
						{ x: 5.1, y: 2.76 },
						{ x: 5.1, y: -7.73 },
						{ x: -5.1, y: -7.73 },
						{ x: -5.1, y: 2.76 },
					]}
				/>
			</footprint>
		}
		cadModel={{
			stepUrl: BOURNS_3352T_STEP_URL,
			rotationOffset: { x: -90, y: 180, z: 0 },
			positionOffset: { x: 0, y: 2.6, z: 0 },
		}}
		{...props}
	/>
);
