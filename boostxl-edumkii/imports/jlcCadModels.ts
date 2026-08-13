import type { CadModelProp } from "@tscircuit/props"

export const resistor0603CadModel: CadModelProp = {
  objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C25804.obj?uuid=6bd5cd867e9542ebae21caaf5d2d4c4d",
  stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C25804.step?uuid=6bd5cd867e9542ebae21caaf5d2d4c4d",
  pcbRotationOffset: 90,
  modelOriginPosition: { x: -0.005, y: 0, z: -0.01 },
}

export const capacitor0603CadModel: CadModelProp = {
  objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C14663.obj?uuid=ac9b32e974bc448eab36b1293f859dcb",
  stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C14663.step?uuid=ac9b32e974bc448eab36b1293f859dcb",
  modelOriginPosition: { x: 0, y: 0, z: -0.4 },
}

export const capacitor0805CadModel: CadModelProp = {
  objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C15850.obj?uuid=b87ab0c5465a48b3a1c9a6dac8d30bc5",
  stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C15850.step?uuid=b87ab0c5465a48b3a1c9a6dac8d30bc5",
  modelOriginPosition: { x: 0, y: -0.0000127, z: -0.65 },
}

export const sot23CadModel: CadModelProp = {
  objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C82460.obj?uuid=d777607a152f4f3aac9bb0d0c14ed6fd",
  stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C82460.step?uuid=d777607a152f4f3aac9bb0d0c14ed6fd",
  pcbRotationOffset: 0,
  modelOriginPosition: { x: 0.0000127, y: -0.0000127, z: 0.050795 },
}

export const sod323CadModel: CadModelProp = {
  objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2128.obj?uuid=7459fe65e23146c0a8d836e46a0add72",
  stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2128.step?uuid=7459fe65e23146c0a8d836e46a0add72",
  modelOriginPosition: { x: 0, y: 0.0001143, z: 0 },
}

export const greenLed0603CadModel: CadModelProp = {
  objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C125098.obj?uuid=3c2caa1a3e7d4a5a87f46b87d898ef41",
  stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C125098.step?uuid=3c2caa1a3e7d4a5a87f46b87d898ef41",
  modelOriginPosition: { x: -0.0000127, y: 0.0000127, z: -0.01 },
}

export const redLed0603CadModel: CadModelProp = {
  objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2286.obj?uuid=0da0275bf7a84667bce8747a921fb9e3",
  stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2286.step?uuid=0da0275bf7a84667bce8747a921fb9e3",
  modelOriginPosition: { x: 0.0000508, y: -0.0000508, z: -0.01 },
}

export const buttonCadModel: CadModelProp = {
  objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C84931.obj?uuid=ca13360db5d54550a11550852a0f41e8",
  stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C84931.step?uuid=ca13360db5d54550a11550852a0f41e8",
  modelOriginPosition: { x: 0.0000127, y: -0.0031242, z: -0.2196736 },
}

export const microphoneCadModel: CadModelProp = {
  objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C530035.obj?uuid=d58f406863284e7ab4a14d28d76d2085",
  stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C530035.step?uuid=d58f406863284e7ab4a14d28d76d2085",
  // The custom microphone footprint and circular silkscreen are centered on
  // the component origin, so do not retain the EasyEDA footprint's Y offset.
  modelOriginPosition: { x: 0, y: 0, z: -0.000006 },
}

export const buzzerCadModel: CadModelProp = {
  objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C96093.obj?uuid=659b7b30e5a340e8a7eddac89d8c69d7",
  stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C96093.step?uuid=659b7b30e5a340e8a7eddac89d8c69d7",
  pcbRotationOffset: 90,
  modelOriginPosition: { x: 0, y: -0.0199898, z: -0.000009 },
}

export const rgbLedCadModel: CadModelProp = {
  objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C5345899.obj?uuid=71a8e53030004306acdc24854d6aa343",
  stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C5345899.step?uuid=71a8e53030004306acdc24854d6aa343",
  modelOriginPosition: { x: 0, y: -0.0000127, z: -1 },
}

export const boosterHeaderCadModel: CadModelProp = {
  objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2897411.obj?uuid=b43d0c057b6b4175ab19ee916be5b1eb",
  stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2897411.step?uuid=b43d0c057b6b4175ab19ee916be5b1eb",
  positionOffset: { x: 1.27, y: 0, z: 0 },
  modelOriginPosition: { x: 0.0004863, y: 0, z: -4.2500064 },
}

export const servoHeaderCadModel: CadModelProp = {
  objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C49257.obj?uuid=c023159e66794c6e8fc0907055f01d55",
  stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C49257.step?uuid=c023159e66794c6e8fc0907055f01d55",
  modelOriginPosition: { x: -2.54, y: 0, z: -0.000006 },
}

// The legacy Crystalfontz TFT is not in JLCPCB's current catalog. The exact
// SFV10R-2STE1HLF connector was imported as C3195321. This material-free OBJ
// data URL keeps the panel self-contained and compatible with cloud eval,
// which does not import local MTL files.
export const displayCadModel: CadModelProp = {
  objUrl:
    "data:text/plain;base64,byBNb2R1bGVQQ0IKdiAtMTcgLTE5IDAKdiAxNyAtMTkgMAp2IDE3IDE5IDAKdiAtMTcgMTkgMAp2IC0xNyAtMTkgMQp2IDE3IC0xOSAxCnYgMTcgMTkgMQp2IC0xNyAxOSAxCmYgMSA0IDMgMgpmIDUgNiA3IDgKZiAxIDIgNiA1CmYgMiAzIDcgNgpmIDMgNCA4IDcKZiA0IDEgNSA4CgpvIEJlemVsCnYgLTE1IC0xNiAxCnYgMTUgLTE2IDEKdiAxNSAxNiAxCnYgLTE1IDE2IDEKdiAtMTUgLTE2IDEuNgp2IDE1IC0xNiAxLjYKdiAxNSAxNiAxLjYKdiAtMTUgMTYgMS42CmYgOSAxMiAxMSAxMApmIDEzIDE0IDE1IDE2CmYgOSAxMCAxNCAxMwpmIDEwIDExIDE1IDE0CmYgMTEgMTIgMTYgMTUKZiAxMiA5IDEzIDE2CgpvIEdsYXNzCnYgLTEzLjggLTE0LjggMS42CnYgMTMuOCAtMTQuOCAxLjYKdiAxMy44IDE0LjggMS42CnYgLTEzLjggMTQuOCAxLjYKdiAtMTMuOCAtMTQuOCAxLjg1CnYgMTMuOCAtMTQuOCAxLjg1CnYgMTMuOCAxNC44IDEuODUKdiAtMTMuOCAxNC44IDEuODUKZiAxNyAyMCAxOSAxOApmIDIxIDIyIDIzIDI0CmYgMTcgMTggMjIgMjEKZiAxOCAxOSAyMyAyMgpmIDE5IDIwIDI0IDIzCmYgMjAgMTcgMjEgMjQKCm8gQ29ubmVjdG9yCnYgLTQuOCAxMy4zIDEKdiA0LjggMTMuMyAxCnYgNC44IDE1LjcgMQp2IC00LjggMTUuNyAxCnYgLTQuOCAxMy4zIDIuMgp2IDQuOCAxMy4zIDIuMgp2IDQuOCAxNS43IDIuMgp2IC00LjggMTUuNyAyLjIKZiAyNSAyOCAyNyAyNgpmIDI5IDMwIDMxIDMyCmYgMjUgMjYgMzAgMjkKZiAyNiAyNyAzMSAzMApmIDI3IDI4IDMyIDMxCmYgMjggMjUgMjkgMzIK",
  // The component origin is the FFC connector; the panel outline is centered
  // 14.5 mm below it.
  positionOffset: { x: 0, y: -14.5, z: 0 },
  modelOriginPosition: { x: 0, y: 0, z: 0 },
}
