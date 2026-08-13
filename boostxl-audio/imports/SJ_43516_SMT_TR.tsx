import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
	pin1: ["pin1"],
	pin2: ["pin2"],
	pin3: ["pin3"],
	pin4: ["pin4"],
	pin5: ["pin5"],
	pin6: ["pin6"],
} as const;

export const SJ_43516_SMT_TR = (props: ChipProps<typeof pinLabels>) => {
	return (
		<chip
			pinLabels={pinLabels}
			supplierPartNumbers={{
				jlcpcb: ["C4992780"],
			}}
			manufacturerPartNumber="SJ-43516-SMT-TR"
			footprint={
				<footprint>
					<hole pcbX="-4.4498895mm" pcbY="-0.000254mm" diameter="1.9000216mm" />
					<hole pcbX="2.5500965mm" pcbY="-0.000254mm" diameter="1.9000216mm" />
					<smtpad
						portHints={["pin1"]}
						pcbX="-8.3500595mm"
						pcbY="-3.499866mm"
						width="1.999996mm"
						height="2.999994mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin2"]}
						pcbX="4.0502205mm"
						pcbY="-3.499866mm"
						width="1.999996mm"
						height="2.999994mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin3"]}
						pcbX="-3.6500435mm"
						pcbY="3.499866mm"
						width="1.999996mm"
						height="2.999994mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin4"]}
						pcbX="-5.4498875mm"
						pcbY="-3.499866mm"
						width="1.999996mm"
						height="2.999994mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin5"]}
						pcbX="7.8500605mm"
						pcbY="0.8001mm"
						width="2.999994mm"
						height="1.999996mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin6"]}
						pcbX="-6.4498855mm"
						pcbY="3.499866mm"
						width="1.999996mm"
						height="2.999994mm"
						shape="rect"
					/>
					<silkscreenpath
						route={[
							{ x: -2.929902699999957, y: -2.999994000000015 },
							{ x: 2.8189809000000423, y: -2.999994000000015 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -4.218724099999918, y: -3.7902387999999974 },
							{ x: -2.929902699999957, y: -3.7902387999999974 },
							{ x: -2.929902699999957, y: -2.999994000000015 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -7.118896099999915, y: -3.7902387999999974 },
							{ x: -6.681000100000119, y: -3.7902387999999974 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -10.449953699999924, y: -2.43779040000004 },
							{ x: -9.58117209999989, y: -2.43779040000004 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -10.449953699999924, y: 2.4970740000001115 },
							{ x: -10.449953699999924, y: -2.43779040000004 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -8.949855100000036, y: 2.4970740000001115 },
							{ x: -10.449953699999924, y: 2.4970740000001115 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -8.949855100000036, y: 2.999994000000129 },
							{ x: -8.949855100000036, y: -1.7687544000000344 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 6.550012299999935, y: -0.4311395999999377 },
							{ x: 6.550012299999935, y: -2.999994000000015 },
							{ x: 5.281256900000017, y: -2.999994000000015 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -2.418880100000024, y: 2.999994000000129 },
							{ x: 6.550012299999935, y: 2.999994000000129 },
							{ x: 6.550012299999935, y: 2.0311364000000367 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -5.218722100000036, y: 2.999994000000129 },
							{ x: -4.881156099999998, y: 2.999994000000129 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -8.949855100000036, y: 2.999994000000129 },
							{ x: -7.680998100000011, y: 2.999994000000129 },
						]}
					/>
					<silkscreentext
						text="{NAME}"
						pcbX="-0.5674995mm"
						pcbY="6.0038mm"
						anchorAlignment="center"
						fontSize="1mm"
					/>
					<courtyardoutline
						outline={[
							{ x: -10.736199500000112, y: 5.253799999999956 },
							{ x: 9.601200500000004, y: 5.253799999999956 },
							{ x: 9.601200500000004, y: -5.253799999999956 },
							{ x: -10.736199500000112, y: -5.253799999999956 },
							{ x: -10.736199500000112, y: 5.253799999999956 },
						]}
					/>
				</footprint>
			}
			cadModel={{
				objUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C4992780.obj?uuid=6db50654bbe5460aacd16a62d84f6640",
				stepUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C4992780.step?uuid=6db50654bbe5460aacd16a62d84f6640",
				pcbRotationOffset: 0,
				modelOriginPosition: {
					x: 10.449973199999931,
					y: 0,
					z: -2.5000020000000003,
				},
			}}
			{...props}
		/>
	);
};
