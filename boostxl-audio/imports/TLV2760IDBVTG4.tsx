import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
	pin1: ["OUT"],
	pin2: ["GND"],
	pin3: ["IN_PLUS"],
	pin4: ["IN_MINUS"],
	pin5: ["SHUTDOWN"],
	pin6: ["VDD"],
} as const;

/** TI DBV-6 footprint transcribed from BOOSTXL-AUDIO_EVM.PcbDoc. */
export const TLV2760IDBVTG4 = (props: ChipProps<typeof pinLabels>) => (
	<chip
		pinLabels={pinLabels}
		manufacturerPartNumber="TLV2760IDBVTG4"
		supplierPartNumbers={{ lcsc: ["C2059523"] }}
		datasheetUrl="https://www.ti.com/lit/ds/symlink/tlv2760.pdf"
		footprint={
			<footprint>
				<smtpad
					portHints={["pin1"]}
					pcbX="-1.2mm"
					pcbY="0.95mm"
					width="1.1mm"
					height="0.65mm"
					shape="rect"
				/>
				<smtpad
					portHints={["pin2"]}
					pcbX="-1.2mm"
					pcbY="0mm"
					width="1.1mm"
					height="0.65mm"
					shape="rect"
				/>
				<smtpad
					portHints={["pin3"]}
					pcbX="-1.2mm"
					pcbY="-0.95mm"
					width="1.1mm"
					height="0.65mm"
					shape="rect"
				/>
				<smtpad
					portHints={["pin4"]}
					pcbX="1.2mm"
					pcbY="-0.95mm"
					width="1.1mm"
					height="0.65mm"
					shape="rect"
				/>
				<smtpad
					portHints={["pin5"]}
					pcbX="1.2mm"
					pcbY="0mm"
					width="1.1mm"
					height="0.65mm"
					shape="rect"
				/>
				<smtpad
					portHints={["pin6"]}
					pcbX="1.2mm"
					pcbY="0.95mm"
					width="1.1mm"
					height="0.65mm"
					shape="rect"
				/>
				<silkscreenrect pcbX="0mm" pcbY="0mm" width="2.9mm" height="1.6mm" />
			</footprint>
		}
		{...props}
	/>
);
