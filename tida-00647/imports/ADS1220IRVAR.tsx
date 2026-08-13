import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["CLK"],
  pin2: ["DGND"],
  pin3: ["AVSS"],
  pin4: ["AIN3_REFN1"],
  pin5: ["AIN2"],
  pin6: ["REFN0"],
  pin7: ["REFP0"],
  pin8: ["AIN1"],
  pin9: ["AIN0_REFP1"],
  pin10: ["AVDD"],
  pin11: ["DVDD"],
  pin12: ["DRDYN", "DRDY"],
  pin13: ["DOUT_DRDY"],
  pin14: ["DIN"],
  pin15: ["SCLK"],
  pin16: ["CSN", "CS"],
  pin17: ["EP", "EPAD"]
} as const

export const ADS1220IRVAR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2651338"
  ]
}}
      manufacturerPartNumber="ADS1220IRVAR"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-0.750062mm" pcbY="-1.657604mm" width="0.2800096mm" height="0.8150098mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin2"]} pcbX="-0.249936mm" pcbY="-1.657604mm" width="0.2800096mm" height="0.8150098mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin3"]} pcbX="0.249936mm" pcbY="-1.657604mm" width="0.2800096mm" height="0.8150098mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin4"]} pcbX="0.750062mm" pcbY="-1.657604mm" width="0.2800096mm" height="0.8150098mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin5"]} pcbX="1.657604mm" pcbY="-0.750062mm" width="0.8150098mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin6"]} pcbX="1.657604mm" pcbY="-0.249936mm" width="0.8150098mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin7"]} pcbX="1.657604mm" pcbY="0.249936mm" width="0.8150098mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin8"]} pcbX="1.657604mm" pcbY="0.750062mm" width="0.8150098mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin9"]} pcbX="0.750062mm" pcbY="1.657604mm" width="0.2800096mm" height="0.8150098mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin10"]} pcbX="0.249936mm" pcbY="1.657604mm" width="0.2800096mm" height="0.8150098mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin11"]} pcbX="-0.249936mm" pcbY="1.657604mm" width="0.2800096mm" height="0.8150098mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin12"]} pcbX="-0.750062mm" pcbY="1.657604mm" width="0.2800096mm" height="0.8150098mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin13"]} pcbX="-1.657604mm" pcbY="0.750062mm" width="0.8150098mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin14"]} pcbX="-1.657604mm" pcbY="0.249936mm" width="0.8150098mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin15"]} pcbX="-1.657604mm" pcbY="-0.249936mm" width="0.8150098mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin16"]} pcbX="-1.657604mm" pcbY="-0.750062mm" width="0.8150098mm" height="0.2800096mm" radius="0.1400048mm" shape="pill" />
<smtpad portHints={["pin17"]} pcbX="0mm" pcbY="0mm" width="2.0999958mm" height="2.0999958mm" shape="rect" />
<silkscreenpath route={[{"x":-1.0423906000000045,"y":-1.8262091999999939},{"x":-1.8261837999999955,"y":-1.8262091999999939},{"x":-1.8261837999999955,"y":-1.0423906000000045}]} />
<silkscreenpath route={[{"x":-1.0423906000000045,"y":1.8261838000000097},{"x":-1.8261837999999955,"y":1.8261838000000097},{"x":-1.8261837999999955,"y":1.0423906000000045}]} />
<silkscreenpath route={[{"x":1.0423906000000045,"y":1.8261838000000097},{"x":1.826209200000008,"y":1.8261838000000097},{"x":1.826209200000008,"y":1.0423906000000045}]} />
<silkscreenpath route={[{"x":1.0423906000000045,"y":-1.8262091999999939},{"x":1.826209200000008,"y":-1.8262091999999939},{"x":1.826209200000008,"y":-1.0423906000000045}]} />
<silkscreenpath route={[{"x":-0.6500621999999794,"y":-2.3408639999999963},{"x":-0.6534696105562574,"y":-2.3667458527464333},{"x":-0.6634596328266298,"y":-2.3908638999999994},{"x":-0.6793514633027087,"y":-2.4115745366973016},{"x":-0.7000620999999967,"y":-2.427466367173352},{"x":-0.7241801472535485,"y":-2.4374563894437387},{"x":-0.7500619999999998,"y":-2.4408638000000025},{"x":-0.7759438527464226,"y":-2.4374563894437387},{"x":-0.8000618999999745,"y":-2.427466367173352},{"x":-0.8207725366972909,"y":-2.4115745366973016},{"x":-0.8366643671733414,"y":-2.3908638999999994},{"x":-0.846654389443728,"y":-2.3667458527464333},{"x":-0.8500617999999918,"y":-2.3408639999999963},{"x":-0.846654389443728,"y":-2.314982147253545},{"x":-0.8366643671733414,"y":-2.290864099999993},{"x":-0.8207725366972909,"y":-2.270153463302691},{"x":-0.8000618999999745,"y":-2.2542616328266405},{"x":-0.7759438527464226,"y":-2.244271610556254},{"x":-0.7500619999999998,"y":-2.24086419999999},{"x":-0.7241801472535485,"y":-2.244271610556254},{"x":-0.7000620999999967,"y":-2.2542616328266405},{"x":-0.6793514633027087,"y":-2.270153463302691},{"x":-0.6634596328266298,"y":-2.290864099999993},{"x":-0.6534696105562574,"y":-2.314982147253545},{"x":-0.6500621999999794,"y":-2.3408639999999963}]} />
<silkscreentext text="{NAME}" pcbX="0.0127mm" pcbY="3.0574mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-2.3074000000000012,"y":2.3074000000000154},{"x":2.3327999999999918,"y":2.3074000000000154},{"x":2.3327999999999918,"y":-2.6883999999999872},{"x":-2.3074000000000012,"y":-2.6883999999999872},{"x":-2.3074000000000012,"y":2.3074000000000154}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2651338.obj?uuid=b971549606df466cb844ddff3ea6f088",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2651338.step?uuid=b971549606df466cb844ddff3ea6f088",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012699999999199463, y: -0.000012699999999199463, z: -1 },
      }}
      {...props}
    />
  )
}
