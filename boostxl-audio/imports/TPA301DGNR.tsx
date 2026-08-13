import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
  pin1: ["SHUTDOWN"],
  pin2: ["BYPASS"],
  pin3: ["IN_POS"],
  pin4: ["IN"],
  pin5: ["VO_POS"],
  pin6: ["VDD"],
  pin7: ["GND"],
  pin8: ["VO_NEG"],
  pin9: ["EP"],
} as const;

const footprinterPinLabels = {
  ...pinLabels,
  pin9: [...pinLabels["pin9"], "thermalpad"],
} as const;

export const TPA301DGNR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={footprinterPinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C544668"],
      }}
      manufacturerPartNumber="TPA301DGNR"
      externallyConnectedPins={[["pin7", "pin9"]]}
      footprint="vssop8_thermalpad1.5mmx1.8mm_pw0.364mm_pl1.43mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C544668.obj?uuid=623c28a9e7234740a83ac7ee7c966295",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C544668.step?uuid=623c28a9e7234740a83ac7ee7c966295",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.000012699999999199463, z: -0.6 },
      }}
      {...props}
    />
  );
};
