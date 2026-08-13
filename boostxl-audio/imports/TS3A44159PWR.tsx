import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
  pin1: ["NO2"],
  pin2: ["COM2"],
  pin3: ["NC2"],
  pin4: ["GND"],
  pin5: ["NO3"],
  pin6: ["COM3"],
  pin7: ["NC3"],
  pin8: ["IN3_4"],
  pin9: ["NO4"],
  pin10: ["COM4"],
  pin11: ["NC4"],
  pin12: ["VCC"],
  pin13: ["NO1"],
  pin14: ["COM1"],
  pin15: ["NC1"],
  pin16: ["IN1_2"],
} as const;

export const TS3A44159PWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C151886"],
      }}
      manufacturerPartNumber="TS3A44159PWR"
      footprint="dfn16_pillpads_p0.65mm_w7.463mm_pw0.343mm_pl1.7315mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C151886.obj?uuid=534f03d8fe164fbab551f91e5a792e30",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C151886.step?uuid=534f03d8fe164fbab551f91e5a792e30",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: -0.00012700000002041634, y: 0, z: -0.019205 },
      }}
      {...props}
    />
  );
};
