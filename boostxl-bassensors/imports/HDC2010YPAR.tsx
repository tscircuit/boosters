import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["A2"],
  pin2: ["A1"],
  pin3: ["B1"],
  pin4: ["C1"],
  pin5: ["C2"],
  pin6: ["B2"]
} as const

export const HDC2010YPAR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C477922"
  ]
}}
      manufacturerPartNumber="HDC2010YPAR"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-0.499999mm" pcbY="0.499999mm" width="0.229997mm" height="0.229997mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.499999mm" pcbY="-0.499999mm" width="0.229997mm" height="0.229997mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-0.000127mm" pcbY="-0.499999mm" width="0.229997mm" height="0.229997mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="0.499999mm" pcbY="-0.499999mm" width="0.229997mm" height="0.229997mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="0.499999mm" pcbY="0.499999mm" width="0.229997mm" height="0.229997mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-0.000127mm" pcbY="0.499999mm" width="0.229997mm" height="0.229997mm" shape="rect" />
<silkscreenpath route={[{"x":-0.8599678000000495,"y":0.8499602000001687},{"x":0.8400288000000273,"y":0.8499602000001687},{"x":0.8400288000000273,"y":-0.8500363999999081},{"x":-0.8599678000000495,"y":-0.8500363999999081},{"x":-0.8599678000000495,"y":0.8499602000001687}]} />
<silkscreenpath route={[{"x":-0.7999984000000495,"y":-0.8000745999999026},{"x":-0.6501383999999462,"y":-0.8000745999999026},{"x":-0.7999984000000495,"y":-0.6502145999997992},{"x":-0.7999984000000495,"y":-0.8000745999999026}]} />
<silkscreentext text="{NAME}" pcbX="-0.018923mm" pcbY="1.855091mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-1.119822999999883,"y":1.1050910000001295},{"x":1.0819770000000517,"y":1.1050910000001295},{"x":1.0819770000000517,"y":-1.0967089999998052},{"x":-1.119822999999883,"y":-1.0967089999998052},{"x":-1.119822999999883,"y":1.1050910000001295}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C477922.obj",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C477922.step",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.00003810000009707437, y: 0.000025399999913133797, z: -0.565 },
      }}
      {...props}
    />
  )
}