import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["1B"],
  pin2: ["2B"],
  pin3: ["3B"],
  pin4: ["4B"],
  pin5: ["5B"],
  pin6: ["6B"],
  pin7: ["7B"],
  pin8: ["8B"],
  pin9: ["GND"],
  pin10: ["COM"],
  pin11: ["8C"],
  pin12: ["7C"],
  pin13: ["6C"],
  pin14: ["5C"],
  pin15: ["4C"],
  pin16: ["3C"],
  pin17: ["2C"],
  pin18: ["1C"]
} as const

export const ULN2803ADWR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C9683"
  ]
}}
      manufacturerPartNumber="ULN2803ADWR"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-5.08mm" pcbY="-4.800092mm" width="0.5599938mm" height="2.0999958mm" radius="0.2799969mm" shape="pill" />
<smtpad portHints={["pin2"]} pcbX="-3.81mm" pcbY="-4.800092mm" width="0.5599938mm" height="2.0999958mm" radius="0.2799969mm" shape="pill" />
<smtpad portHints={["pin3"]} pcbX="-2.54mm" pcbY="-4.800092mm" width="0.5599938mm" height="2.0999958mm" radius="0.2799969mm" shape="pill" />
<smtpad portHints={["pin4"]} pcbX="-1.27mm" pcbY="-4.800092mm" width="0.5599938mm" height="2.0999958mm" radius="0.2799969mm" shape="pill" />
<smtpad portHints={["pin5"]} pcbX="0mm" pcbY="-4.800092mm" width="0.5599938mm" height="2.0999958mm" radius="0.2799969mm" shape="pill" />
<smtpad portHints={["pin6"]} pcbX="1.27mm" pcbY="-4.800092mm" width="0.5599938mm" height="2.0999958mm" radius="0.2799969mm" shape="pill" />
<smtpad portHints={["pin7"]} pcbX="2.54mm" pcbY="-4.800092mm" width="0.5599938mm" height="2.0999958mm" radius="0.2799969mm" shape="pill" />
<smtpad portHints={["pin8"]} pcbX="3.81mm" pcbY="-4.800092mm" width="0.5599938mm" height="2.0999958mm" radius="0.2799969mm" shape="pill" />
<smtpad portHints={["pin9"]} pcbX="5.08mm" pcbY="-4.800092mm" width="0.5599938mm" height="2.0999958mm" radius="0.2799969mm" shape="pill" />
<smtpad portHints={["pin18"]} pcbX="-5.08mm" pcbY="4.800092mm" width="0.5599938mm" height="2.0999958mm" radius="0.2799969mm" shape="pill" />
<smtpad portHints={["pin17"]} pcbX="-3.81mm" pcbY="4.800092mm" width="0.5599938mm" height="2.0999958mm" radius="0.2799969mm" shape="pill" />
<smtpad portHints={["pin16"]} pcbX="-2.54mm" pcbY="4.800092mm" width="0.5599938mm" height="2.0999958mm" radius="0.2799969mm" shape="pill" />
<smtpad portHints={["pin15"]} pcbX="-1.27mm" pcbY="4.800092mm" width="0.5599938mm" height="2.0999958mm" radius="0.2799969mm" shape="pill" />
<smtpad portHints={["pin14"]} pcbX="0mm" pcbY="4.800092mm" width="0.5599938mm" height="2.0999958mm" radius="0.2799969mm" shape="pill" />
<smtpad portHints={["pin13"]} pcbX="1.27mm" pcbY="4.800092mm" width="0.5599938mm" height="2.0999958mm" radius="0.2799969mm" shape="pill" />
<smtpad portHints={["pin12"]} pcbX="2.54mm" pcbY="4.800092mm" width="0.5599938mm" height="2.0999958mm" radius="0.2799969mm" shape="pill" />
<smtpad portHints={["pin11"]} pcbX="3.81mm" pcbY="4.800092mm" width="0.5599938mm" height="2.0999958mm" radius="0.2799969mm" shape="pill" />
<smtpad portHints={["pin10"]} pcbX="5.08mm" pcbY="4.800092mm" width="0.5599938mm" height="2.0999958mm" radius="0.2799969mm" shape="pill" />
<silkscreenpath route={[{"x":-5.8419999999999845,"y":3.4289999999999736},{"x":-5.8419999999999845,"y":0.9728200000000697}]} />
<silkscreenpath route={[{"x":-5.8419999999999845,"y":-3.4290000000000873},{"x":-5.8419999999999845,"y":-1.0107421999998678}]} />
<silkscreenpath route={[{"x":5.841999999999871,"y":-3.4290000000000873},{"x":-5.8419999999999845,"y":-3.4290000000000873}]} />
<silkscreenpath route={[{"x":5.841999999999871,"y":3.4289999999999736},{"x":5.841999999999871,"y":-3.4290000000000873}]} />
<silkscreenpath route={[{"x":-5.8419999999999845,"y":3.4289999999999736},{"x":5.841999999999871,"y":3.4289999999999736}]} />
<silkscreenpath route={[{"x":-5.8419999999999845,"y":-0.9829799999998841},{"x":-6.076026826071143,"y":-0.9545640463450127},{"x":-6.29645287227936,"y":-0.8709675159391281},{"x":-6.490467774504168,"y":-0.7370487366072211},{"x":-6.646796088735073,"y":-0.5605905831748714},{"x":-6.7563525790748145,"y":-0.3518481649475689},{"x":-6.81277021877122,"y":-0.12295283586865935},{"x":-6.81277021877122,"y":0.11279283586884503},{"x":-6.7563525790748145,"y":0.3416881649475272},{"x":-6.646796088735073,"y":0.5504305831750571},{"x":-6.490467774504168,"y":0.7268887366071795},{"x":-6.29645287227936,"y":0.8608075159390864},{"x":-6.076026826071143,"y":0.9444040463450847},{"x":-5.8419999999999845,"y":0.9728200000000697}]} />
<silkscreentext text="{NAME}" pcbX="0mm" pcbY="6.5626mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-6.0919999999999845,"y":5.812600000000089},{"x":6.091999999999871,"y":5.812600000000089},{"x":6.091999999999871,"y":-5.965000000000032},{"x":-6.0919999999999845,"y":-5.965000000000032},{"x":-6.0919999999999845,"y":5.812600000000089}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C9683.obj?uuid=fc3a93654c1b420498d6b79940c8e856",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.049425 },
      }}
      {...props}
    />
  )
}
