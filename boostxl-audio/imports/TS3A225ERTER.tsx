import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["SCL"],
  pin2: ["SDA"],
  pin3: ["GND2"],
  pin4: ["ADDR_SEL"],
  pin5: ["DET_TRIGGER"],
  pin6: ["SLEEVE"],
  pin7: ["RING2"],
  pin8: ["MIC_PRESENT"],
  pin9: ["TIP_SENSE"],
  pin10: ["GND1"],
  pin11: ["MICP"],
  pin12: ["MICN"],
  pin13: ["VDD2"],
  pin14: ["RING2_SENSE"],
  pin15: ["SLEEVE_SENSE"],
  pin16: ["VDD1"],
  pin17: ["EP"]
} as const

export const TS3A225ERTER = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C544327"
  ]
}}
      manufacturerPartNumber="TS3A225ERTER"
      footprint={<footprint>
        <smtpad portHints={["pin17"]} points={[{x: "0.8501634mm", y: "0.8498586mm"}, {x: "0.8501634mm", y: "-0.8501634mm"}, {x: "-0.8498586mm", y: "-0.8501634mm"}, {x: "-0.8498586mm", y: "0.4998466mm"}, {x: "-0.4998466mm", y: "0.8498586mm"}]} shape="polygon" />
<smtpad portHints={["pin16"]} pcbX="-0.749935mm" pcbY="1.499997mm" width="0.2800096mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="-0.250063mm" pcbY="1.499997mm" width="0.2800096mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="0.250063mm" pcbY="1.499997mm" width="0.2800096mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="0.749935mm" pcbY="1.499997mm" width="0.2800096mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="1.499997mm" pcbY="0.749935mm" width="0.7999984mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="1.499997mm" pcbY="0.250063mm" width="0.7999984mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="1.499997mm" pcbY="-0.250063mm" width="0.7999984mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="1.499997mm" pcbY="-0.749935mm" width="0.7999984mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="0.749935mm" pcbY="-1.499997mm" width="0.2800096mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="0.250063mm" pcbY="-1.499997mm" width="0.2800096mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-0.250063mm" pcbY="-1.499997mm" width="0.2800096mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-0.749935mm" pcbY="-1.499997mm" width="0.2800096mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-1.499997mm" pcbY="-0.749935mm" width="0.7999984mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.499997mm" pcbY="-0.250063mm" width="0.7999984mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-1.499997mm" pcbY="0.250063mm" width="0.7999984mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-1.499997mm" pcbY="0.749935mm" width="0.7999984mm" height="0.2800096mm" shape="rect" />
<silkscreenpath route={[{"x":1.6001237999999987,"y":-1.144219200000009},{"x":1.6001237999999987,"y":-1.5999714000000012}]} />
<silkscreenpath route={[{"x":1.6001237999999987,"y":1.6000222000000122},{"x":1.6001237999999987,"y":1.144270000000006}]} />
<silkscreenpath route={[{"x":-1.5998698000000005,"y":1.6000222000000122},{"x":-1.5998698000000005,"y":1.144270000000006}]} />
<silkscreenpath route={[{"x":-1.5998698000000005,"y":-1.5999714000000012},{"x":-1.1441176000000013,"y":-1.5999714000000012}]} />
<silkscreenpath route={[{"x":-1.5998698000000005,"y":-1.144219200000009},{"x":-1.5998698000000005,"y":-1.5999714000000012}]} />
<silkscreenpath route={[{"x":1.6001237999999987,"y":1.6000222000000122},{"x":1.1443715999999995,"y":1.6000222000000122}]} />
<silkscreenpath route={[{"x":-1.1441176000000013,"y":1.6000222000000122},{"x":-1.5998698000000005,"y":1.6000222000000122}]} />
<silkscreenpath route={[{"x":1.1443715999999995,"y":-1.5999714000000012},{"x":1.6001237999999987,"y":-1.5999714000000012}]} />
<silkscreenpath route={[{"x":-1.819783000000001,"y":1.2698729999999898},{"x":-1.8231930070082996,"y":1.2439714252423215},{"x":-1.8331906416908765,"y":1.2198350000000033},{"x":-1.849094581765975,"y":1.1991085817659695},{"x":-1.8698210000000088,"y":1.1832046416908497},{"x":-1.893957425242327,"y":1.1732070070083012},{"x":-1.9198590000000024,"y":1.1697969999999884},{"x":-1.945760574757685,"y":1.1732070070083012},{"x":-1.9698970000000102,"y":1.1832046416908497},{"x":-1.990623418234037,"y":1.1991085817659695},{"x":-2.0065273583091354,"y":1.2198350000000033},{"x":-2.0165249929917124,"y":1.2439714252423215},{"x":-2.019935000000004,"y":1.2698729999999898},{"x":-2.0165249929917124,"y":1.2957745747576865},{"x":-2.0065273583091354,"y":1.3199110000000047},{"x":-1.990623418234037,"y":1.3406374182340244},{"x":-1.9698970000000102,"y":1.35654135830913},{"x":-1.945760574757685,"y":1.3665389929916927},{"x":-1.9198590000000024,"y":1.3699489999999912},{"x":-1.893957425242327,"y":1.3665389929916927},{"x":-1.8698210000000088,"y":1.35654135830913},{"x":-1.849094581765975,"y":1.3406374182340244},{"x":-1.8331906416908765,"y":1.3199110000000047},{"x":-1.8231930070082996,"y":1.2957745747576865},{"x":-1.819783000000001,"y":1.2698729999999898}]} />
<silkscreentext text="{NAME}" pcbX="-0.062357mm" pcbY="2.891157mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-2.268157000000002,"y":2.1411569999999926},{"x":2.1434429999999978,"y":2.1411569999999926},{"x":2.1434429999999978,"y":-2.1688430000000096},{"x":-2.268157000000002,"y":-2.1688430000000096},{"x":-2.268157000000002,"y":2.1411569999999926}]} />
      </footprint>}
      {...props}
    />
  )
}
