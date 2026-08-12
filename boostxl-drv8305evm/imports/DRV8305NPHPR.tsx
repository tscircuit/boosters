import type { ChipProps } from "@tscircuit/props";
import { CAD_MODELS } from "./cadModels";

export const DRV8305_PINS = {
	pin1: "EN_GATE",
	pin2: "INH_A",
	pin3: "INL_A",
	pin4: "INH_B",
	pin5: "INL_B",
	pin6: "INH_C",
	pin7: "INL_C",
	pin8: "nFAULT",
	pin9: "SCS",
	pin10: "SDI",
	pin11: "SDO",
	pin12: "SCLK",
	pin13: "PWRGD",
	pin14: "GND_14",
	pin15: "AVDD",
	pin16: "SO1",
	pin17: "SO2",
	pin18: "SO3",
	pin19: "SN3",
	pin20: "SP3",
	pin21: "SN2",
	pin22: "SP2",
	pin23: "SN1",
	pin24: "SP1",
	pin25: "GL_C",
	pin26: "SL_C",
	pin27: "SH_C",
	pin28: "GH_C",
	pin29: "GH_B",
	pin30: "SH_B",
	pin31: "SL_B",
	pin32: "GL_B",
	pin33: "GL_A",
	pin34: "SL_A",
	pin35: "SH_A",
	pin36: "GH_A",
	pin37: "VCP_LSD",
	pin38: "VCPH",
	pin39: "CP2H",
	pin40: "CP2L",
	pin41: "PVDD",
	pin42: "CP1L",
	pin43: "CP1H",
	pin44: "VDRAIN",
	pin45: "GND_45",
	pin46: "DVDD",
	pin47: "WAKE",
	pin48: "VREG_VREF",
	pin49: "PAD",
} as const;

const Drv8305Footprint = () => {
	const sidePadWidth = 1.6;
	const sidePadThickness = 0.28;

	return (
		<footprint>
			<smtpad
				portHints={["pin49"]}
				pcbX={0}
				pcbY={0}
				width="5.1mm"
				height="5.1mm"
				shape="rect"
			/>
			{Array.from({ length: 12 }, (_, index) => {
				const pin = 48 - index;
				return (
					<smtpad
						portHints={[`pin${pin}`]}
						pcbX={-4.2}
						pcbY={2.75 - index * 0.5}
						width={sidePadWidth}
						height={sidePadThickness}
						shape="rect"
					/>
				);
			})}
			{Array.from({ length: 12 }, (_, index) => {
				const pin = index + 1;
				return (
					<smtpad
						portHints={[`pin${pin}`]}
						pcbX={-2.75 + index * 0.5}
						pcbY={4.2}
						width={sidePadThickness}
						height={sidePadWidth}
						shape="rect"
					/>
				);
			})}
			{Array.from({ length: 12 }, (_, index) => {
				const pin = 24 - index;
				return (
					<smtpad
						portHints={[`pin${pin}`]}
						pcbX={4.2}
						pcbY={-2.75 + index * 0.5}
						width={sidePadWidth}
						height={sidePadThickness}
						shape="rect"
					/>
				);
			})}
			{Array.from({ length: 12 }, (_, index) => {
				const pin = 36 - index;
				return (
					<smtpad
						portHints={[`pin${pin}`]}
						pcbX={2.75 - index * 0.5}
						pcbY={-4.2}
						width={sidePadThickness}
						height={sidePadWidth}
						shape="rect"
					/>
				);
			})}
			<courtyardrect width="10.5mm" height="10.5mm" />
		</footprint>
	);
};

export const DRV8305NPHPR = (props: ChipProps<typeof DRV8305_PINS>) => (
	<chip
		manufacturerPartNumber="DRV8305NPHPR"
		supplierPartNumbers={{ jlcpcb: ["C75602"] }}
		footprint={<Drv8305Footprint />}
		obstructsWithinBounds={false}
		pinLabels={DRV8305_PINS}
		cadModel={{
			...CAD_MODELS.driver,
			pcbRotationOffset: 0,
			modelOriginPosition: { x: 0, y: 0, z: -0.6 },
		}}
		{...props}
	/>
);
