import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["A0"],
  pin2: ["A1"],
  pin3: ["A2"],
  pin4: ["VSS"],
  pin5: ["SDA"],
  pin6: ["SCL"],
  pin7: ["WP"],
  pin8: ["VCC"]
} as const

export const CAT24C32YI_GT3 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C94264"
  ]
}}
      manufacturerPartNumber="CAT24C32YI_GT3"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-0.975106mm" pcbY="-2.927096mm" width="0.3530092mm" height="1.4539976mm" radius="0.1765046mm" shape="pill" />
<smtpad portHints={["pin2"]} pcbX="-0.324866mm" pcbY="-2.927096mm" width="0.3530092mm" height="1.4539976mm" radius="0.1765046mm" shape="pill" />
<smtpad portHints={["pin3"]} pcbX="0.32512mm" pcbY="-2.927096mm" width="0.3530092mm" height="1.4539976mm" radius="0.1765046mm" shape="pill" />
<smtpad portHints={["pin4"]} pcbX="0.975106mm" pcbY="-2.927096mm" width="0.3530092mm" height="1.4539976mm" radius="0.1765046mm" shape="pill" />
<smtpad portHints={["pin8"]} pcbX="-0.975106mm" pcbY="2.927096mm" width="0.3530092mm" height="1.4539976mm" radius="0.1765046mm" shape="pill" />
<smtpad portHints={["pin7"]} pcbX="-0.324866mm" pcbY="2.927096mm" width="0.3530092mm" height="1.4539976mm" radius="0.1765046mm" shape="pill" />
<smtpad portHints={["pin6"]} pcbX="0.32512mm" pcbY="2.927096mm" width="0.3530092mm" height="1.4539976mm" radius="0.1765046mm" shape="pill" />
<smtpad portHints={["pin5"]} pcbX="0.975106mm" pcbY="2.927096mm" width="0.3530092mm" height="1.4539976mm" radius="0.1765046mm" shape="pill" />
<silkscreenpath route={[{"x":1.4999969999998939,"y":1.9658838000000287},{"x":1.4999969999998939,"y":-1.9381978000000117}]} />
<silkscreenpath route={[{"x":-1.4999970000000076,"y":-0.5080000000000382},{"x":-1.4999970000000076,"y":-1.9381978000000117}]} />
<silkscreenpath route={[{"x":-1.501139999999964,"y":0.5080000000000382},{"x":-1.501139999999964,"y":1.9658838000000287}]} />
<silkscreenpath route={[{"x":-1.4999970000000076,"y":-1.9381978000000117},{"x":1.4999969999998939,"y":-1.9381978000000117}]} />
<silkscreenpath route={[{"x":-1.4999970000000076,"y":1.9658838000000287},{"x":1.4999969999998939,"y":1.9658838000000287}]} />
<silkscreenpath route={[{"x":-1.4999970000000076,"y":-0.5080000000000382},{"x":-1.501139999999964,"y":0.5080000000000382}]} />
<silkscreentext text="{NAME}" pcbX="0mm" pcbY="4.4798mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-1.748600000000124,"y":3.7298000000000684},{"x":1.7486000000000104,"y":3.7298000000000684},{"x":1.7486000000000104,"y":-4.009199999999964},{"x":-1.748600000000124,"y":-4.009199999999964},{"x":-1.748600000000124,"y":3.7298000000000684}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C94264.obj",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C94264.step",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
