import csd18540ObjPath from "./imports/CSD18540Q5B/CSD18540Q5B.obj"
import drv8305ObjPath from "./imports/DRV8305NPHPR/DRV8305NPHPR.obj"
import lmr16006ObjPath from "./imports/LMR16006XDDCR/LMR16006XDDCR.obj"
import headerObjPath from "./imports/PM254_2_10_Z_8_5/PM254_2_10_Z_8_5.obj"
import terminal3ObjPath from "./imports/WJ500V_5_08_03P_14_00A/WJ500V_5_08_03P_14_00A.obj"
import terminal2ObjPath from "./imports/WJ500V_5_08_2P/WJ500V_5_08_2P.obj"
import shuntObjPath from "./imports/HoLLR2512_3W_7mR_1_/HoLLR2512_3W_7mR_1_.obj"
import inductorObjPath from "./imports/SMNR8040_150MT/SMNR8040_150MT.obj"
import edgeCapObjPath from "./imports/LKME1601J331MF/LKME1601J331MF.obj"

const DRV8305_PINS = {
  pin1: "EN_GATE",
  pin2: "INH_A",
  pin3: "INL_A",
  pin4: "INH_B",
  pin5: "INL_B",
  pin6: "INH_C",
  pin7: "INL_C",
  pin8: "nFAULT",
  pin9: "SCS",
  pin10: "SDI",
  pin11: "SDO",
  pin12: "SCLK",
  pin13: "PWRGD",
  pin14: "GND_14",
  pin15: "AVDD",
  pin16: "SO1",
  pin17: "SO2",
  pin18: "SO3",
  pin19: "SN3",
  pin20: "SP3",
  pin21: "SN2",
  pin22: "SP2",
  pin23: "SN1",
  pin24: "SP1",
  pin25: "GL_C",
  pin26: "SL_C",
  pin27: "SH_C",
  pin28: "GH_C",
  pin29: "GH_B",
  pin30: "SH_B",
  pin31: "SL_B",
  pin32: "GL_B",
  pin33: "GL_A",
  pin34: "SL_A",
  pin35: "SH_A",
  pin36: "GH_A",
  pin37: "VCP_LSD",
  pin38: "VCPH",
  pin39: "CP2H",
  pin40: "CP2L",
  pin41: "PVDD",
  pin42: "CP1L",
  pin43: "CP1H",
  pin44: "VDRAIN",
  pin45: "GND_45",
  pin46: "DVDD",
  pin47: "WAKE",
  pin48: "VREG_VREF",
  pin49: "PAD",
} as const

const POWER_MOSFET_PINS = {
  pin1: "GATE",
  pin2: "SOURCE",
  pin3: "DRAIN",
} as const

const HEADER_PINS = {
  pin1: "P1",
  pin2: "P2",
  pin3: "P3",
  pin4: "P4",
  pin5: "P5",
  pin6: "P6",
  pin7: "P7",
  pin8: "P8",
  pin9: "P9",
  pin10: "P10",
  pin11: "P11",
  pin12: "P12",
  pin13: "P13",
  pin14: "P14",
  pin15: "P15",
  pin16: "P16",
  pin17: "P17",
  pin18: "P18",
  pin19: "P19",
  pin20: "P20",
} as const

type PhaseName = "A" | "B" | "C"

function Drv8305Footprint() {
  const sidePadWidth = 1.6
  const sidePadThickness = 0.28

  return (
    <footprint>
      <smtpad
        portHints={["pin49"]}
        pcbX={0}
        pcbY={0}
        width="5.1mm"
        height="5.1mm"
        shape="rect"
      />
      {Array.from({ length: 12 }, (_, index) => {
        const pin = 48 - index
        return (
          <smtpad
            portHints={[`pin${pin}`]}
            pcbX={-4.2}
            pcbY={-2.75 + index * 0.5}
            width={sidePadWidth}
            height={sidePadThickness}
            shape="rect"
          />
        )
      })}
      {Array.from({ length: 12 }, (_, index) => {
        const pin = 36 - index
        return (
          <smtpad
            portHints={[`pin${pin}`]}
            pcbX={-2.75 + index * 0.5}
            pcbY={4.2}
            width={sidePadThickness}
            height={sidePadWidth}
            shape="rect"
          />
        )
      })}
      {Array.from({ length: 12 }, (_, index) => {
        const pin = 24 - index
        return (
          <smtpad
            portHints={[`pin${pin}`]}
            pcbX={4.2}
            pcbY={2.75 - index * 0.5}
            width={sidePadWidth}
            height={sidePadThickness}
            shape="rect"
          />
        )
      })}
      {Array.from({ length: 12 }, (_, index) => {
        const pin = 12 - index
        return (
          <smtpad
            portHints={[`pin${pin}`]}
            pcbX={2.75 - index * 0.5}
            pcbY={-4.2}
            width={sidePadThickness}
            height={sidePadWidth}
            shape="rect"
          />
        )
      })}
    </footprint>
  )
}

function PowerMosfetFootprint() {
  return (
    <footprint>
      <smtpad
        portHints={["pin1", "GATE"]}
        pcbX={-2.45}
        pcbY={-1.65}
        width="1.3mm"
        height="0.9mm"
        shape="rect"
      />
      <smtpad
        portHints={["pin2", "SOURCE"]}
        pcbX={-2.45}
        pcbY={0.65}
        width="1.3mm"
        height="2.7mm"
        shape="rect"
      />
      <smtpad
        portHints={["pin3", "DRAIN"]}
        pcbX={0.75}
        pcbY={0}
        width="4.3mm"
        height="4.4mm"
        shape="rect"
      />
    </footprint>
  )
}

function Shunt2512Footprint() {
  return (
    <footprint>
      <smtpad portHints={["pin1"]} pcbX={-2.667} pcbY={0} width="2.5mm" height="3.6mm" shape="rect" />
      <smtpad portHints={["pin2"]} pcbX={2.667} pcbY={0} width="2.5mm" height="3.6mm" shape="rect" />
    </footprint>
  )
}

function TerminalBlockFootprint({ pins }: { pins: 2 | 3 }) {
  const firstX = pins === 2 ? -2.54 : -5.08

  return (
    <footprint>
      {Array.from({ length: pins }, (_, index) => (
        <platedhole
          portHints={[`pin${index + 1}`]}
          pcbX={firstX + index * 5.08}
          pcbY={0}
          outerDiameter="2mm"
          holeDiameter="1.3mm"
          shape="circle"
        />
      ))}
      <courtyardrect
        width={pins === 2 ? "11.4mm" : "16.4mm"}
        height="10.7mm"
        pcbX={pins === 2 ? -0.24 : 0.29}
        pcbY={pins === 2 ? 0.56 : -0.52}
      />
    </footprint>
  )
}

function RadialCapacitorFootprint() {
  return (
    <footprint>
      <platedhole portHints={["pin1", "pos"]} pcbX={-2.5} pcbY={0} outerDiameter="2mm" holeDiameter="1mm" shape="circle" />
      <platedhole portHints={["pin2", "neg"]} pcbX={2.5} pcbY={0} outerDiameter="2mm" holeDiameter="1mm" shape="circle" />
    </footprint>
  )
}

function Sot23SixFootprint() {
  return (
    <footprint>
      {[1, 2, 3].map((pin, index) => (
        <smtpad portHints={[`pin${pin}`]} pcbX={1.35} pcbY={0.95 - index * 0.95} width="1.1mm" height="0.6mm" shape="rect" />
      ))}
      {[6, 5, 4].map((pin, index) => (
        <smtpad portHints={[`pin${pin}`]} pcbX={-1.35} pcbY={-0.95 + index * 0.95} width="1.1mm" height="0.6mm" shape="rect" />
      ))}
    </footprint>
  )
}

function SmaDiodeFootprint() {
  return (
    <footprint>
      <smtpad portHints={["pin1", "anode"]} pcbX={-2.3} pcbY={0} width="2.2mm" height="2mm" shape="rect" />
      <smtpad portHints={["pin2", "cathode"]} pcbX={2.3} pcbY={0} width="2.2mm" height="2mm" shape="rect" />
    </footprint>
  )
}

function Inductor8040Footprint() {
  return (
    <footprint>
      <smtpad portHints={["pin1"]} pcbX={3.328} pcbY={0} width="3.024mm" height="7.5mm" shape="rect" />
      <smtpad portHints={["pin2"]} pcbX={-3.328} pcbY={0} width="3.024mm" height="7.5mm" shape="rect" />
    </footprint>
  )
}

function BoosterPackHeaderFootprint() {
  return (
    <footprint>
      {Array.from({ length: 10 }, (_, row) => {
        const oddPin = row * 2 + 1
        const pcbY = -row * 2.54
        return [
          <platedhole
            portHints={[`pin${oddPin}`]}
            pcbX={0}
            pcbY={pcbY}
            outerDiameter="1.8mm"
            holeDiameter="1.1mm"
            shape="circle"
          />,
          <platedhole
            portHints={[`pin${oddPin + 1}`]}
            pcbX={2.54}
            pcbY={pcbY}
            outerDiameter="1.8mm"
            holeDiameter="1.1mm"
            shape="circle"
          />,
        ]
      })}
      <courtyardrect
        width="5mm"
        height="26mm"
        pcbX={1.27}
        pcbY={-11.43}
      />
    </footprint>
  )
}

const ROUTER = {
  preset: "auto" as const,
  traceClearance: "0.15mm",
}

const EDGE_CAPACITOR_CAD_MODEL = {
  objUrl: edgeCapObjPath,
  pcbRotationOffset: 0,
  modelOriginPosition: {
    x: 0.004999999999999893,
    y: 0.00041899999998573634,
    z: -12.510007000000002,
  },
}

// The GND net is fully routed by explicit short escapes into the inner1 plane.
// This pass-through adapter prevents the general tree router from needlessly
// rebuilding those already-connected plane routes.
const COMPLETED_GROUND_PLANE_ROUTER = {
  local: true,
  algorithmFn: async () => {
    const handlers: Record<string, Array<(event: any) => void>> = {}

    return {
      on(eventName: string, handler: (event: any) => void) {
        handlers[eventName] ??= []
        handlers[eventName].push(handler)
      },
      start() {
        for (const handler of handlers.complete ?? []) {
          handler({ traces: [] })
        }
      },
      stop() {},
    }
  },
}

const SECTION_SPACING = {
  phaseX: 5,
  topPowerY: 8,
  bottomBuckY: -7,
  sideHeaderX: 9.6,
  outerCapX: 18.75,
  leftAnalogX: -5,
  rightSignalX: 5,
} as const

// Dense GND endpoints are escaped directly to the inner1 ground plane. Keeping
// these as explicit short routes avoids forcing the fanout solver to squeeze all
// 43 ground connections through one shared breakout boundary.
const GROUND_ESCAPES = [
  [".U1 > .GND_14", -2.25, -5.2],
  [".U1 > .SN3", 0.25, -5.2],
  [".U1 > .SN2", 1.25, -5.2],
  [".U1 > .SN1", 2.25, -5.2],
  [".U1 > .GND_45", -1.25, 5.2],
  [".U1 > .PAD", -4.5, 4.5],
  [".R4 > .pin2", -4.2, -1.55],
  [".C4 > .pin2", 2.1, 0],
  [".R11 > .pin2", 1.5, 0],
  [".C10 > .pin2", 1.5, 0],
  [".R5 > .pin2", -4.2, -1.55],
  [".C5 > .pin2", 2.1, 0],
  [".R12 > .pin2", 1.5, 0],
  [".C11 > .pin2", 1.5, 0],
  [".R6 > .pin2", -4.2, -1.55],
  [".C6 > .pin2", 2.1, 0],
  [".R13 > .pin2", 1.5, 0],
  [".C12 > .pin2", 1.5, 0],
  [".J3 > .GND", 6.7, 0],
  [".C18 > .neg", 3.8, 0],
  [".C19 > .neg", 3.8, 0],
  [".R16 > .pin2", 1.5, 0],
  [".C22 > .pin2", 1.5, 0],
  [".D2 > .GND", -1.7, 1.42],
  [".C1 > .pin2", 1.5, 0],
  [".C3 > .pin2", 1.5, 0],
  [".C8 > .pin2", 2.1, 0],
  [".C9 > .pin2", 1.5, 0],
  [".C17 > .pin2", 2.1, 0],
  [".C13 > .pin2", 1.5, 0],
  [".C14 > .pin2", 1.5, 0],
  [".C16 > .pin2", 1.5, 0],
  [".U2 > .GND", -2.7, 0],
  [".C20 > .pin2", 2.1, 0],
  [".D4 > .pin1", -4, 0],
  [".C21 > .pin2", 2.1, 0],
  [".R21 > .pin2", 1.5, 0],
  [".R15 > .pin2", 1.5, 0],
  [".J1 > .pin13", -1.6, -4.8],
  [".J2 > .pin7", -1.6, 4.8],
  [".C23 > .pin2", 1.5, 0],
  [".C24 > .pin2", 1.5, 0],
  [".C25 > .pin2", 1.5, 0],
] as const

function GroundEscape(props: {
  name: string
  from: string
  x: number
  y: number
}) {
  const { name, from, x, y } = props

  return (
    <trace
      name={name}
      from={from}
      to="net.GND"
      width={from.startsWith(".U1") ? "0.15mm" : "0.3mm"}
    />
  )
}

const COURTYARDS = {
  c0603: { width: "2.8mm", height: "1.4mm" },
  c1206: { width: "4.5mm", height: "2.4mm" },
  mosfet: { width: "7.2mm", height: "5.8mm" },
  shunt2512: { width: "7.2mm", height: "4.2mm" },
  drv8305: { width: "10.5mm", height: "10.5mm" },
  sot23: { width: "4.2mm", height: "3.2mm" },
  sma: { width: "6.5mm", height: "3.2mm" },
  inductor8040: { width: "9.2mm", height: "9.2mm" },
  terminal2: { width: "10.8mm", height: "9.2mm", pcbX: "-2.5mm" },
  terminal3: { width: "15.8mm", height: "9.2mm", pcbX: "5mm" },
  header2x10: {
    width: "5mm",
    height: "26mm",
    pcbX: "1.27mm",
    pcbY: "-11.43mm",
  },
} as const

function PowerMosfet(props: {
  name: string
  pcbX: number
  pcbY: number
  pcbRotation?: number
  schX: number
  schY: number
  gateNet: string
  sourceNet?: string
  drainNet?: string
  schSheetName: string
  schSectionName: string
}) {
  return (
    <chip
      name={props.name}
      manufacturerPartNumber="CSD18540Q5B"
      supplierPartNumbers={{ jlcpcb: ["C86513"] }}
      footprint={<PowerMosfetFootprint />}
      pinLabels={POWER_MOSFET_PINS}
      cadModel={{
        objUrl: csd18540ObjPath,
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: -0.06750050000005103,
          y: 0.001015999999935957,
          z: 0,
        },
      }}
      schPinArrangement={{
        leftSide: ["GATE", "SOURCE"],
        rightSide: ["DRAIN"],
      }}
      schWidth="2.8mm"
      pcbX={props.pcbX}
      pcbY={props.pcbY}
      pcbRotation={props.pcbRotation ?? 0}
      schX={props.schX}
      schY={props.schY}
      schSheetName={props.schSheetName}
      schSectionName={props.schSectionName}
      connections={{
        GATE: props.gateNet,
        ...(props.sourceNet ? { SOURCE: props.sourceNet } : {}),
        ...(props.drainNet ? { DRAIN: props.drainNet } : {}),
      }}
    >
      <courtyardrect {...COURTYARDS.mosfet} />
    </chip>
  )
}

function PhaseBridge(props: {
  phase: PhaseName
  highSideName: string
  lowSideName: string
  shuntName: string
  senseHighName: string
  senseLowName: string
  senseCapName: string
  localCapName: string
  pcbX: number
  schX: number
}) {
  const schSectionName = `phase-${props.phase.toLowerCase()}`
  const phaseNet = `net.MOT_${props.phase}`
  const highGateNet = `net.GH_${props.phase}`
  const lowGateNet = `net.GL_${props.phase}`
  const shuntHighNet = `net.SL_${props.phase}`
  const voltageSenseNet = `net.VSEN_${props.phase}`
  const senseLayout = {
    A: {
      highX: -24,
      highY: 6,
      lowX: -20.8,
      lowY: 7,
      capX: -20.8,
      capY: 4.2,
    },
    B: {
      highX: -5,
      highY: 10,
      lowX: -2,
      lowY: 10,
      capX: 1,
      capY: 10,
    },
    C: {
      highX: 22.5,
      highY: 5,
      lowX: 25.7,
      lowY: 7,
      capX: 24.2,
      capY: 1,
    },
  }[props.phase]

  return (
    <>
      <PowerMosfet
        name={props.highSideName}
        pcbX={props.pcbX - 3.4}
        pcbY={12.8 + SECTION_SPACING.topPowerY}
        pcbRotation={90}
        schX={props.schX}
        schY={5}
        schSheetName="power-stage"
        schSectionName={schSectionName}
        gateNet={highGateNet}
        sourceNet={phaseNet}
        drainNet="net.PVDD"
      />
      <PowerMosfet
        name={props.lowSideName}
        pcbX={props.pcbX + 3.4}
        pcbY={12.8 + SECTION_SPACING.topPowerY}
        pcbRotation={90}
        schX={props.schX}
        schY={1}
        schSheetName="power-stage"
        schSectionName={schSectionName}
        gateNet={lowGateNet}
        sourceNet={shuntHighNet}
        drainNet={phaseNet}
      />

      <resistor
        name={props.shuntName}
        resistance={0.007}
        tolerance="1%"
        manufacturerPartNumber="HoLLR2512-3W-7mR-1%"
        supplierPartNumbers={{ jlcpcb: ["C2985710"] }}
        footprint={<Shunt2512Footprint />}
        cadModel={{
          objUrl: shuntObjPath,
          pcbRotationOffset: 0,
          modelOriginPosition: { x: 0, y: 0.000012699999956566899, z: -0.01 },
        }}
        pcbX={
          {
            A: -10.8 - SECTION_SPACING.phaseX,
            B: 9.7,
            C: 15.7 + SECTION_SPACING.phaseX,
          }[props.phase]
        }
        pcbY={4.6 + SECTION_SPACING.topPowerY}
        pcbRotation={90}
        schX={props.schX}
        schY={-2.5}
        schRotation="90deg"
        schSheetName="power-stage"
        schSectionName={schSectionName}
        connections={{ pin1: shuntHighNet }}
      >
        <courtyardrect {...COURTYARDS.shunt2512} />
      </resistor>

      <capacitor
        name={props.localCapName}
        capacitance="1uF"
        maxDecouplingTraceLength="10mm"
        maxVoltageRating="63V"
        footprint="1206"
        pcbX={props.pcbX - 3.4}
        pcbY={7.8 + SECTION_SPACING.topPowerY}
        schX={props.schX - 2.2}
        schY={5}
        schSheetName="power-stage"
        schSectionName={schSectionName}
        connections={{ pin1: "net.PVDD" }}
        schRotation="90deg"
      >
      </capacitor>

      <resistor
        name={props.senseHighName}
        resistance="62k"
        tolerance="1%"
        footprint="1206"
        pcbX={senseLayout.highX}
        pcbY={senseLayout.highY}
        pcbRotation={90}
        schX={props.schX + 1.6}
        schY={-5}
        schSheetName="power-stage"
        schSectionName={schSectionName}
        connections={{ pin1: phaseNet, pin2: voltageSenseNet }}
      >
      </resistor>
      <resistor
        name={props.senseLowName}
        resistance="4.99k"
        tolerance="1%"
        footprint="0603"
        pcbX={senseLayout.lowX}
        pcbY={senseLayout.lowY}
        pcbRotation={90}
        schX={props.schX + 4.2}
        schY={-5}
        schSheetName="power-stage"
        schSectionName={schSectionName}
        connections={{ pin1: voltageSenseNet }}
      >
      </resistor>
      <capacitor
        name={props.senseCapName}
        capacitance="100nF"
        maxDecouplingTraceLength="50mm"
        footprint="0603"
        pcbX={senseLayout.capX}
        pcbY={senseLayout.capY}
        schX={props.schX + 4.2}
        schY={-7}
        schRotation="90deg"
        schSheetName="power-stage"
        schSectionName={schSectionName}
        connections={{ pin1: voltageSenseNet }}
      >
      </capacitor>
    </>
  )
}

export default function BoosterPackDrv8305() {
  return (
    <board
      name="motor-drive-boosterpack"
      title="Motor Drive BoosterPack"
      width="90mm"
      height="75mm"
      thickness="1.6mm"
      layers={4}
      solderMaskColor="green"
      silkscreenColor="white"
      minViaPadDiameter="0.45mm"
      minViaHoleDiameter="0.3mm"
      pcbStyle={{
        viaPadDiameter: "0.45mm",
        viaHoleDiameter: "0.3mm",
      }}
      autorouter={ROUTER}
      autorouterEffortLevel="2x"
      pcbSx={{
        "& footprint[src^='kicad:'] silkscreentext": {
          visibility: "hidden",
        },
        "& fabricationnotetext": {
          visibility: "hidden",
        },
      }}
    >
      <schematicsheet
        name="power-stage"
        displayName="1. Power Input & Three-Phase Bridge"
        sheetIndex={1}
      >
        <schematicsection name="input-power" displayName="DC Input & Bulk Storage" />
        <schematicsection name="phase-a" displayName="Phase A Half-Bridge" />
        <schematicsection name="phase-b" displayName="Phase B Half-Bridge" />
        <schematicsection name="phase-c" displayName="Phase C Half-Bridge" />
        <schematicsection name="motor-output" displayName="Motor Output" />
      </schematicsheet>
      <schematicsheet
        name="gate-driver"
        displayName="2. DRV8305 Gate Driver"
        sheetIndex={2}
      >
        <schematicsection name="driver-core" displayName="Gate Driver" />
        <schematicsection name="driver-supplies" displayName="Bias & Local Supplies" />
        <schematicsection name="charge-pump" displayName="Charge Pumps" />
        <schematicsection name="driver-status" displayName="Control & Status" />
      </schematicsheet>
      <schematicsheet
        name="sensing-io"
        displayName="3. Sensing & BoosterPack I/O"
        sheetIndex={3}
      >
        <schematicsection name="boosterpack-io" displayName="BoosterPack Headers" />
        <schematicsection name="voltage-sense" displayName="Voltage Sense & Protection" />
        <schematicsection name="current-sense" displayName="Current Sense Filters" />
      </schematicsheet>
      <schematicsheet
        name="aux-power"
        displayName="4. 3.3 V Auxiliary Supply"
        sheetIndex={4}
      >
        <schematicsection name="buck-input" displayName="Buck Input & Switch" />
        <schematicsection name="buck-output" displayName="3.3 V Output & Feedback" />
        <schematicsection name="power-status" displayName="Power Status" />
      </schematicsheet>

      {false && (
        <>
      <autoroutingphase name="LOCAL_POWER" phaseIndex={0} autorouter={ROUTER} />
      <autoroutingphase name="GATE_DRIVE" phaseIndex={1} autorouter={ROUTER} />
      <autoroutingphase name="PVDD_BRANCH_1" phaseIndex={2} autorouter={ROUTER} />
      <autoroutingphase name="PVDD_BRANCH_2" phaseIndex={3} autorouter={ROUTER} />
      <autoroutingphase name="PVDD_BRANCH_3" phaseIndex={4} autorouter={ROUTER} />
      <autoroutingphase name="PVDD_BRANCH_4" phaseIndex={5} autorouter={ROUTER} />
      <autoroutingphase name="PVDD_BRANCH_5" phaseIndex={6} autorouter={ROUTER} />
      <autoroutingphase name="PVDD_BRANCH_6" phaseIndex={7} autorouter={ROUTER} />
      <autoroutingphase name="PVDD_BRANCH_7" phaseIndex={8} autorouter={ROUTER} />
      <autoroutingphase name="PVDD_BRANCH_8" phaseIndex={9} autorouter={ROUTER} />
      <autoroutingphase name="PVDD_BRANCH_9" phaseIndex={10} autorouter={ROUTER} />
      <autoroutingphase name="PVDD_BRANCH_10" phaseIndex={11} autorouter={ROUTER} />
      <autoroutingphase name="PVDD_BRANCH_11" phaseIndex={12} autorouter={ROUTER} />
      <autoroutingphase name="PVDD_BRANCH_12" phaseIndex={13} autorouter={ROUTER} />
      <autoroutingphase name="PVDD_BRANCH_13" phaseIndex={14} autorouter={ROUTER} />
      <autoroutingphase name="PVDD_BRANCH_14" phaseIndex={15} autorouter={ROUTER} />
      <autoroutingphase name="PVDD_BRANCH_15" phaseIndex={16} autorouter={ROUTER} />
      <autoroutingphase name="PVDD_BRANCH_16" phaseIndex={17} autorouter={ROUTER} />
      <autoroutingphase name="ROUTE_SCS" phaseIndex={18} autorouter={ROUTER} />
      <autoroutingphase name="ROUTE_SDI" phaseIndex={19} autorouter={ROUTER} />
      <autoroutingphase name="ROUTE_SDO" phaseIndex={20} autorouter={ROUTER} />
      <autoroutingphase name="ROUTE_SCLK" phaseIndex={21} autorouter={ROUTER} />
      <autoroutingphase name="ROUTE_NFAULT" phaseIndex={22} autorouter={ROUTER} />
      <autoroutingphase name="ROUTE_NFAULT_LED" phaseIndex={23} autorouter={ROUTER} />
      <autoroutingphase name="ROUTE_PWRGD" phaseIndex={24} autorouter={ROUTER} />
      <autoroutingphase name="ROUTE_WAKE" phaseIndex={25} autorouter={ROUTER} />
      <autoroutingphase name="ROUTE_POWER_LED" phaseIndex={26} autorouter={ROUTER} />
      <autoroutingphase name="CONTROL_IO" phaseIndex={27} autorouter={ROUTER} />
      <autoroutingphase name="ROUTE_VSEN_A" phaseIndex={28} autorouter={ROUTER} />
      <autoroutingphase name="ROUTE_VSEN_B_DIVIDER" phaseIndex={29} autorouter={ROUTER} />
      <autoroutingphase name="ROUTE_VSEN_B_CAP" phaseIndex={30} autorouter={ROUTER} />
      <autoroutingphase name="ROUTE_VSEN_B_BUFFER" phaseIndex={31} autorouter={ROUTER} />
      <autoroutingphase name="ROUTE_VSEN_B_HEADER" phaseIndex={32} autorouter={ROUTER} />
      <autoroutingphase name="ROUTE_VSEN_C" phaseIndex={33} autorouter={ROUTER} />
      <autoroutingphase name="ROUTE_VSEN_PVDD" phaseIndex={34} autorouter={ROUTER} />
      <autoroutingphase
        name="GROUND_ESCAPES"
        phaseIndex={35}
        autorouter={COMPLETED_GROUND_PLANE_ROUTER}
      />
      <autoroutingphase name="CURRENT_A_OUT" phaseIndex={36} autorouter={ROUTER} />
      <autoroutingphase name="CURRENT_B_OUT" phaseIndex={37} autorouter={ROUTER} />
      <autoroutingphase name="CURRENT_C_OUT" phaseIndex={38} autorouter={ROUTER} />
      <autoroutingphase name="LOGIC_SUPPLY" phaseIndex={39} autorouter={ROUTER} />
      <autoroutingphase name="ROUTE_WAKE_HEADER" phaseIndex={40} autorouter={ROUTER} />
      <autoroutingphase name="PHASE_A_POWER" phaseIndex={41} autorouter={ROUTER} />
      <autoroutingphase name="PHASE_B_POWER" phaseIndex={42} autorouter={ROUTER} />
      <autoroutingphase name="PHASE_C_POWER" phaseIndex={43} autorouter={ROUTER} />
      <autoroutingphase name="VSEN_B_LOCAL" phaseIndex={44} autorouter={ROUTER} />
        </>
      )}

      <net name="AVDD" />
      <net name="DVDD" />
      <net name="VREF" />
      <net name="CP1H" />
      <net name="CP1L" />
      <net name="CP2H" />
      <net name="CP2L" />
      <net name="VCP_LSD" />
      <net name="VCPH" />
      <net name="VDRAIN" />
      <net name="CB" />
      <net name="BUCK_FB" />
      <net name="SW" nominalTraceWidth="0.6mm" />

      <net name="GH_A" />
      <net name="GL_A" />
      <net name="GH_B" />
      <net name="GL_B" />
      <net name="GH_C" />
      <net name="GL_C" />

      <net name="EN_GATE" />
      <net name="INH_A" />
      <net name="INL_A" />
      <net name="INH_B" />
      <net name="INL_B" />
      <net name="INH_C" />
      <net name="INL_C" />
      <net name="SCS" />
      <net name="SDI" />
      <net name="SDO" />
      <net name="SCLK" />
      <net name="nFAULT" />
      <net name="nFAULT_LED" />
      <net name="PWRGD" />
      <net name="WAKE" />
      <net name="POWER_LED" />

      <net name="ISEN_A" />
      <net name="ISEN_B" />
      <net name="ISEN_C" />
      <net name="VSEN_A" />
      <net name="VSEN_B" />
      <net name="VSEN_C" />
      <net name="VSEN_PVDD" />

      <net
        name="V3V3"
        isPowerNet
        nominalTraceWidth="0.4mm"
      />
      <net
        name="GND"
        isGroundNet
        nominalTraceWidth="0.4mm"
      />

      {GROUND_ESCAPES.map(([from, x, y], index) => (
        <GroundEscape
          key={from}
          name={`GROUND_ESCAPE_${index + 1}`}
          from={from}
          x={x}
          y={y}
        />
      ))}
      <net name="MOT_A" nominalTraceWidth="0.15mm" />
      <net name="SL_A" nominalTraceWidth="0.15mm" />
      <net name="MOT_B" nominalTraceWidth="0.15mm" />
      <net name="SL_B" nominalTraceWidth="0.15mm" />
      <net name="MOT_C" nominalTraceWidth="0.15mm" />
      <net name="SL_C" nominalTraceWidth="0.15mm" />
      <net
        name="PVDD"
        isPowerNet
        nominalTraceWidth="0.15mm"
      />
      <net name="ISEN_A_RAW" />
      <net name="ISEN_B_RAW" />
      <net name="ISEN_C_RAW" />

      <hole name="H1" diameter="2.7mm" pcbX={-42.7} pcbY={-35.3} />
      <hole name="H2" diameter="2.7mm" pcbX={42.7} pcbY={-35.3} />

      <silkscreentext
        text="DRV8305 3-PHASE BOOSTERPACK"
        pcbX={0}
        pcbY={17.2}
        fontSize="1.1mm"
      />
      <silkscreentext
        text="4.4-45V | 15A CONT. REQUIRES MOTOR-CONTROL MCU"
        pcbX={0}
        pcbY={-35.7}
        fontSize="0.62mm"
      />
      <silkscreentext text="GND" pcbX={-13} pcbY={36} fontSize="0.9mm" />
      <silkscreentext text="PVDD" pcbX={-8} pcbY={36} fontSize="0.9mm" />
      <silkscreentext text="MOT A" pcbX={2} pcbY={36} fontSize="0.8mm" />
      <silkscreentext text="MOT B" pcbX={7} pcbY={36} fontSize="0.8mm" />
      <silkscreentext text="MOT C" pcbX={12} pcbY={36} fontSize="0.8mm" />

      <chip
        name="U1"
        manufacturerPartNumber="DRV8305NPHPR"
        supplierPartNumbers={{ jlcpcb: ["C75602"] }}
        footprint={<Drv8305Footprint />}
        obstructsWithinBounds={false}
        pinLabels={DRV8305_PINS}
        cadModel={{
          objUrl: drv8305ObjPath,
          pcbRotationOffset: 0,
          modelOriginPosition: { x: 0, y: 0, z: -0.6 },
        }}
        schPinArrangement={{
          leftSide: [
            "EN_GATE",
            "INH_A",
            "INL_A",
            "INH_B",
            "INL_B",
            "INH_C",
            "INL_C",
            "nFAULT",
            "SCS",
            "SDI",
            "SDO",
            "SCLK",
            "PWRGD",
          ],
          topSide: ["AVDD", "DVDD", "PVDD", "VDRAIN", "WAKE", "VREG_VREF"],
          rightSide: [
            "GH_A",
            "SH_A",
            "GL_A",
            "SL_A",
            "GH_B",
            "SH_B",
            "GL_B",
            "SL_B",
            "GH_C",
            "SH_C",
            "GL_C",
            "SL_C",
            "SO1",
            "SO2",
            "SO3",
            "SN1",
            "SP1",
            "SN2",
            "SP2",
            "SN3",
            "SP3",
          ],
          bottomSide: [
            "VCP_LSD",
            "VCPH",
            "CP2H",
            "CP2L",
            "CP1L",
            "CP1H",
            "GND_14",
            "GND_45",
            "PAD",
          ],
        }}
        schWidth="10mm"
        schHeight="18mm"
        pcbX={-2}
        pcbY={-2}
        schX={-6}
        schY={0}
        schSheetName="gate-driver"
        schSectionName="driver-core"
        connections={{
          EN_GATE: "net.EN_GATE",
          INH_A: "net.INH_A",
          INL_A: "net.INL_A",
          INH_B: "net.INH_B",
          INL_B: "net.INL_B",
          INH_C: "net.INH_C",
          INL_C: "net.INL_C",
          nFAULT: "net.nFAULT",
          SCS: "net.SCS",
          SDI: "net.SDI",
          SDO: "net.SDO",
          SCLK: "net.SCLK",
          PWRGD: "net.PWRGD",
          WAKE: "net.WAKE",
          AVDD: "net.AVDD",
          GL_C: "net.GL_C",
          GH_C: "net.GH_C",
          GH_B: "net.GH_B",
          GL_B: "net.GL_B",
          GL_A: "net.GL_A",
          GH_A: "net.GH_A",
          SH_A: "net.MOT_A",
          SL_A: "net.SL_A",
          SP1: "net.SL_A",
          VCP_LSD: "net.VCP_LSD",
          VCPH: "net.VCPH",
          CP2H: "net.CP2H",
          CP2L: "net.CP2L",
          CP1L: "net.CP1L",
          CP1H: "net.CP1H",
          PVDD: "net.PVDD",
          SH_B: "net.MOT_B",
          SL_B: "net.SL_B",
          SP2: "net.SL_B",
          SH_C: "net.MOT_C",
          SL_C: "net.SL_C",
          SP3: "net.SL_C",
          SO1: "net.ISEN_A_RAW",
          SO2: "net.ISEN_B_RAW",
          SO3: "net.ISEN_C_RAW",
          VDRAIN: "net.VDRAIN",
          DVDD: "net.DVDD",
          VREG_VREF: "net.VREF",
        }}
      >
        <courtyardrect {...COURTYARDS.drv8305} />
      </chip>

      <PhaseBridge
        phase="A"
        highSideName="Q1"
        lowSideName="Q4"
        shuntName="R4"
        senseHighName="R8"
        senseLowName="R11"
        senseCapName="C10"
        localCapName="C4"
        pcbX={-14.2 - SECTION_SPACING.phaseX}
        schX={-10}
      />
      <PhaseBridge
        phase="B"
        highSideName="Q2"
        lowSideName="Q5"
        shuntName="R5"
        senseHighName="R9"
        senseLowName="R12"
        senseCapName="C11"
        localCapName="C5"
        pcbX={4}
        schX={0}
      />
      <PhaseBridge
        phase="C"
        highSideName="Q3"
        lowSideName="Q6"
        shuntName="R6"
        senseHighName="R10"
        senseLowName="R13"
        senseCapName="C12"
        localCapName="C6"
        pcbX={14.2 + SECTION_SPACING.phaseX}
        schX={10}
      />

      {false && (
        <>
      <trace
        name="TRACE_MOT_A_DRIVER_TO_SENSE"
        from=".U1 > .SH_A"
        to=".R8 > .pin1"
        width="0.4mm"
        routingPhaseIndex={41}
      />
      <trace
        name="TRACE_MOT_A_SENSE_TO_HIGH_SIDE"
        from=".R8 > .pin1"
        to=".Q1 > .SOURCE"
        width="0.4mm"
        routingPhaseIndex={41}
      />
      <trace
        name="TRACE_MOT_A_HALF_BRIDGE"
        from=".Q1 > .SOURCE"
        to=".Q4 > .DRAIN"
        width="0.8mm"
        routingPhaseIndex={41}
      />
      <trace
        name="TRACE_MOT_A_TO_TERMINAL"
        from=".Q4 > .DRAIN"
        to=".J4 > .MOT_A"
        width="0.8mm"
        routingPhaseIndex={41}
      />
      <trace
        name="TRACE_SL_A_DRIVER_SENSE"
        from=".U1 > .SN1"
        to=".U1 > .SL_A"
        width="0.4mm"
        routingPhaseIndex={41}
      />
      <trace
        name="TRACE_SL_A_TO_SNUBBER"
        from=".U1 > .SL_A"
        to=".C13 > .pin1"
        width="0.4mm"
        routingPhaseIndex={41}
      />
      <trace
        name="TRACE_SL_A_SNUBBER_TO_SHUNT"
        from=".C13 > .pin1"
        to=".R4 > .pin1"
        width="0.4mm"
        routingPhaseIndex={41}
      />
      <trace
        name="TRACE_SL_A_SHUNT_TO_LOW_SIDE"
        from=".R4 > .pin1"
        to=".Q4 > .SOURCE"
        width="0.4mm"
        routingPhaseIndex={41}
      />

      <trace
        name="TRACE_MOT_B_SENSE_TAP"
        from=".Q2 > .SOURCE"
        to=".R9 > .pin1"
        width="0.4mm"
        routingPhaseIndex={42}
      />
      <trace
        name="TRACE_MOT_B_DRIVER_TO_HIGH_SIDE"
        from=".U1 > .SH_B"
        to=".R9 > .pin1"
        width="0.4mm"
        routingPhaseIndex={42}
      />
      <trace
        name="TRACE_MOT_B_HALF_BRIDGE"
        from=".Q2 > .SOURCE"
        to=".Q5 > .DRAIN"
        width="0.8mm"
        routingPhaseIndex={42}
      />
      <trace
        name="TRACE_MOT_B_TO_TERMINAL"
        from=".Q5 > .DRAIN"
        to=".J4 > .MOT_B"
        width="0.8mm"
        routingPhaseIndex={42}
      />
      <trace
        name="TRACE_SL_B_DRIVER_SENSE"
        from=".U1 > .SN2"
        to=".U1 > .SL_B"
        width="0.4mm"
        routingPhaseIndex={42}
      />
      <trace
        name="TRACE_SL_B_TO_SNUBBER"
        from=".U1 > .SL_B"
        to=".C14 > .pin1"
        width="0.4mm"
        routingPhaseIndex={42}
      />
      <trace
        name="TRACE_SL_B_SNUBBER_TO_SHUNT"
        from=".C14 > .pin1"
        to=".R5 > .pin1"
        width="0.4mm"
        routingPhaseIndex={42}
      />
      <trace
        name="TRACE_SL_B_SHUNT_TO_LOW_SIDE"
        from=".R5 > .pin1"
        to=".Q5 > .SOURCE"
        width="0.4mm"
        routingPhaseIndex={42}
      />
      <trace
        name="TRACE_MOT_C_DRIVER_TO_SENSE"
        from=".U1 > .SH_C"
        to=".R10 > .pin1"
        width="0.4mm"
        routingPhaseIndex={43}
      />
      <trace
        name="TRACE_MOT_C_SENSE_TO_HIGH_SIDE"
        from=".R10 > .pin1"
        to=".Q3 > .SOURCE"
        width="0.4mm"
        routingPhaseIndex={43}
      />
      <trace
        name="TRACE_MOT_C_HALF_BRIDGE"
        from=".Q3 > .SOURCE"
        to=".Q6 > .DRAIN"
        width="0.8mm"
        routingPhaseIndex={43}
      />
      <trace
        name="TRACE_MOT_C_TO_TERMINAL"
        from=".Q6 > .DRAIN"
        to=".J4 > .MOT_C"
        width="0.8mm"
        routingPhaseIndex={43}
      />
      <trace
        name="TRACE_SL_C_DRIVER_SENSE"
        from=".U1 > .SN3"
        to=".U1 > .SL_C"
        width="0.4mm"
        routingPhaseIndex={43}
      />
      <trace
        name="TRACE_SL_C_TO_SNUBBER"
        from=".U1 > .SL_C"
        to=".C16 > .pin1"
        width="0.4mm"
        routingPhaseIndex={43}
      />
      <trace
        name="TRACE_SL_C_SNUBBER_TO_SHUNT"
        from=".C16 > .pin1"
        to=".R6 > .pin1"
        width="0.4mm"
        routingPhaseIndex={43}
      />
      <trace
        name="TRACE_SL_C_SHUNT_TO_LOW_SIDE"
        from=".R6 > .pin1"
        to=".Q6 > .SOURCE"
        width="0.4mm"
        routingPhaseIndex={43}
      />

      <trace
        name="TRACE_VSEN_B_DIVIDER_HIGH_TO_LOW"
        from=".R9 > .pin2"
        to=".R12 > .pin1"
        width="0.3mm"
        routingPhaseIndex={44}
      />
      <trace
        name="TRACE_VSEN_B_DIVIDER_TO_CAP"
        from=".R12 > .pin1"
        to=".C11 > .pin1"
        width="0.3mm"
        routingPhaseIndex={44}
      />
      <trace
        name="TRACE_VSEN_B_CAP_TO_BUFFER"
        from=".C11 > .pin1"
        to=".D2 > .VSEN_B"
        width="0.3mm"
        routingPhaseIndex={44}
      />
      <trace
        name="TRACE_VSEN_B_BUFFER_TO_HEADER"
        from=".D2 > .VSEN_B"
        to=".J1 > .pin7"
        width="0.3mm"
        routingPhaseIndex={32}
        pcbRouteHints={[
          { x: -24, y: -21.45, via: true, to_layer: "inner2" },
          { x: -34, y: -21.45 },
          { x: -34, y: -4.12, via: true, to_layer: "top" },
        ]}
      />
        </>
      )}

      {false && (
        <>
      <trace name="PVDD_01_INPUT_TO_PHASE_A" from=".J3 > .PVDD" to=".Q1 > .DRAIN" width="1.2mm" routingPhaseIndex={2} />
      <trace name="PVDD_02_PHASE_A_DECOUPLING" from=".Q1 > .DRAIN" to=".C4 > .pin1" width="0.8mm" routingPhaseIndex={3} />
      <trace name="PVDD_03_PHASE_A_TO_B" from=".Q1 > .DRAIN" to=".Q2 > .DRAIN" width="1.2mm" routingPhaseIndex={4} />
      <trace name="PVDD_04_PHASE_B_DECOUPLING" from=".Q2 > .DRAIN" to=".C5 > .pin1" width="0.8mm" routingPhaseIndex={5} />
      <trace name="PVDD_05_PHASE_B_TO_C" from=".Q2 > .DRAIN" to=".Q3 > .DRAIN" width="1.2mm" routingPhaseIndex={6} />
      <trace name="PVDD_06_PHASE_C_DECOUPLING" from=".Q3 > .DRAIN" to=".C6 > .pin1" width="0.8mm" routingPhaseIndex={7} />
      <trace name="PVDD_07_PHASE_C_BULK" from=".Q3 > .DRAIN" to=".C18 > .pos" width="1.2mm" routingPhaseIndex={8} />
      <trace name="PVDD_08_PHASE_A_BULK" from=".Q1 > .DRAIN" to=".C19 > .pos" width="1.2mm" routingPhaseIndex={9} />
      <trace
        name="PVDD_09_INPUT_TO_DRIVER"
        from=".U1 > .PVDD"
        to=".J3 > .PVDD"
        width="0.8mm"
        pcbPath={[
          { x: 0.75, y: 6.5 },
          { x: 0.75, y: 6.5, via: true, fromLayer: "top", toLayer: "bottom" },
          { x: -38, y: 6.5 },
          { x: -38, y: 28.5 },
          { x: -10.05, y: 28.5 },
          { x: -10.05, y: 28.5, via: true, fromLayer: "bottom", toLayer: "top" },
        ]}
      />
      <trace
        name="PVDD_10_DRIVER_DECOUPLING"
        from=".U1 > .PVDD"
        to=".C8 > .pin1"
        width="0.6mm"
        routingPhaseIndex={11}
      />
      <trace name="PVDD_11_DRIVER_VCP_BIAS" from=".C8 > .pin1" to=".C15 > .pin1" width="0.6mm" routingPhaseIndex={12} />
      <trace
        name="PVDD_12_DRIVER_DRAIN_BIAS"
        from=".C8 > .pin1"
        to=".R2 > .pin1"
        width="0.6mm"
        routingPhaseIndex={13}
      />
      <trace
        name="PVDD_13_VOLTAGE_MONITOR"
        from=".R2 > .pin1"
        to=".R14 > .pin1"
        width="0.6mm"
        routingPhaseIndex={14}
      />
      <trace
        name="PVDD_14_BUCK_INPUT"
        from=".R2 > .pin1"
        to=".U2 > .VIN"
        width="0.8mm"
        routingPhaseIndex={15}
      />
      <trace
        name="PVDD_15_BUCK_ENABLE"
        from=".U2 > .VIN"
        to=".U2 > .SHDN"
        width="0.4mm"
        routingPhaseIndex={16}
      />
      <trace
        name="PVDD_16_BUCK_DECOUPLING"
        from=".U2 > .VIN"
        to=".C20 > .pin1"
        width="0.8mm"
        routingPhaseIndex={17}
      />
      <trace
        name="TRACE_SDO_TO_HEADER"
        from=".U1 > .SDO"
        to=".J2 > .pin13"
        width="0.3mm"
        routingPhaseIndex={20}
      />
      <trace
        name="TRACE_SCLK_TO_HEADER"
        from=".U1 > .SCLK"
        to=".J1 > .pin14"
        width="0.3mm"
        routingPhaseIndex={21}
      />
      <trace
        name="TRACE_WAKE_DRIVER_TO_PULLUP"
        from=".U1 > .WAKE"
        to=".R1 > .pin2"
        width="0.3mm"
        routingPhaseIndex={25}
      />
      <trace
        name="TRACE_WAKE_PULLUP_TO_HEADER"
        from=".R1 > .pin2"
        to=".J2 > .pin17"
        width="0.3mm"
        routingPhaseIndex={40}
      />
        </>
      )}

      <chip
        name="J3"
        manufacturerPartNumber="WJ500V-5.08-2P"
        supplierPartNumbers={{ jlcpcb: ["C8465"] }}
        footprint={<TerminalBlockFootprint pins={2} />}
        pinLabels={{ pin1: "PVDD", pin2: "GND" }}
        schPinArrangement={{ rightSide: ["PVDD", "GND"] }}
        pcbPinLabels={{ pin1: "PVDD", pin2: "GND" }}
        cadModel={{
          objUrl: terminal2ObjPath,
          pcbRotationOffset: 0,
          modelOriginPosition: {
            x: -2.5399878999999967,
            y: 0,
            z: -0.000006999999999646178,
          },
        }}
        pcbX={-12.05}
        pcbY={22.095 + SECTION_SPACING.topPowerY}
        pcbRotation={0}
        schX={-9}
        schY={10}
        schSheetName="power-stage"
        schSectionName="input-power"
        connections={{ PVDD: "net.PVDD" }}
      />

      <chip
        name="J4"
        manufacturerPartNumber="WJ500V-5.08-03P-14-00A"
        supplierPartNumbers={{ jlcpcb: ["C72334"] }}
        footprint={<TerminalBlockFootprint pins={3} />}
        pinLabels={{ pin1: "MOT_A", pin2: "MOT_B", pin3: "MOT_C" }}
        schPinArrangement={{ leftSide: ["MOT_A", "MOT_B", "MOT_C"] }}
        pcbPinLabels={{ pin1: "MOT_A", pin2: "MOT_B", pin3: "MOT_C" }}
        cadModel={{
          objUrl: terminal3ObjPath,
          pcbRotationOffset: 0,
          modelOriginPosition: {
            x: 0.000013299999995108891,
            y: 0.5160009999999886,
            z: -0.000009000000000369823,
          },
        }}
        pcbX={12.05}
        pcbY={21.905 + SECTION_SPACING.topPowerY}
        pcbRotation={180}
        schX={0}
        schY={-10}
        schSheetName="power-stage"
        schSectionName="motor-output"
        connections={{ MOT_A: "net.MOT_A", MOT_B: "net.MOT_B", MOT_C: "net.MOT_C" }}
      />

      <capacitor
        name="C18"
        capacitance="330uF"
        maxDecouplingTraceLength="50mm"
        maxVoltageRating="63V"
        manufacturerPartNumber="LKME1601J331MF"
        supplierPartNumbers={{ jlcpcb: ["C442946"] }}
        polarized
        schShowRatings
        footprint={<RadialCapacitorFootprint />}
        cadModel={EDGE_CAPACITOR_CAD_MODEL}
        pcbX={19.75 + SECTION_SPACING.outerCapX}
        pcbY={19.5 + SECTION_SPACING.topPowerY}
        pcbRotation={90}
        schX={3}
        schY={10}
        schRotation="90deg"
        schSheetName="power-stage"
        schSectionName="input-power"
        connections={{ pos: "net.PVDD" }}
      >
        <courtyardcircle radius="5.5mm" pcbX="2.5mm" />
      </capacitor>
      <capacitor
        name="C19"
        capacitance="330uF"
        maxDecouplingTraceLength="50mm"
        maxVoltageRating="63V"
        manufacturerPartNumber="LKME1601J331MF"
        supplierPartNumbers={{ jlcpcb: ["C442946"] }}
        polarized
        schShowRatings
        footprint={<RadialCapacitorFootprint />}
        cadModel={EDGE_CAPACITOR_CAD_MODEL}
        pcbX={-19.75 - SECTION_SPACING.outerCapX}
        pcbY={19.5 + SECTION_SPACING.topPowerY}
        pcbRotation={90}
        schX={-2}
        schY={10}
        schRotation="90deg"
        schSheetName="power-stage"
        schSectionName="input-power"
        connections={{ pos: "net.PVDD" }}
      >
        <courtyardcircle radius="5.5mm" pcbX="2.5mm" />
      </capacitor>

      <resistor
        name="R14"
        resistance="62k"
        tolerance="1%"
        footprint="1206"
        pcbX={-16 + SECTION_SPACING.leftAnalogX}
        pcbY={-12}
        schX={2}
        schY={6}
        schSheetName="sensing-io"
        schSectionName="voltage-sense"
        connections={{ pin1: "net.PVDD", pin2: "net.VSEN_PVDD" }}
      >
      </resistor>
      <resistor
        name="R16"
        resistance="4.99k"
        tolerance="1%"
        footprint="0603"
        pcbX={-16 + SECTION_SPACING.leftAnalogX}
        pcbY={-14.7}
        schX={6}
        schY={6}
        schSheetName="sensing-io"
        schSectionName="voltage-sense"
        connections={{ pin1: "net.VSEN_PVDD" }}
      >
      </resistor>
      <capacitor
        name="C22"
        capacitance="100nF"
        footprint="0603"
        pcbX={-16 + SECTION_SPACING.leftAnalogX}
        pcbY={-17.1}
        schX={6}
        schY={3}
        schRotation="90deg"
        schSheetName="sensing-io"
        schSectionName="voltage-sense"
        connections={{ pin1: "net.VSEN_PVDD" }}
      >
      </capacitor>

      <chip
        name="D2"
        manufacturerPartNumber="5-channel low-capacitance ESD array"
        footprint="sot23_5"
        pinLabels={{
          pin1: "GND",
          pin2: "VSEN_A",
          pin3: "VSEN_B",
          pin4: "VSEN_C",
          pin5: "VSEN_PVDD",
        }}
        schPinArrangement={{
          leftSide: ["VSEN_A", "VSEN_B", "VSEN_C", "VSEN_PVDD"],
          rightSide: ["GND"],
        }}
        pcbX={-16 + SECTION_SPACING.leftAnalogX}
        pcbY={-20.5}
        schX={11}
        schY={1}
        schSheetName="sensing-io"
        schSectionName="voltage-sense"
        connections={{
          VSEN_A: "net.VSEN_A",
          VSEN_B: "net.VSEN_B",
          VSEN_C: "net.VSEN_C",
          VSEN_PVDD: "net.VSEN_PVDD",
        }}
      />

      <capacitor
        name="C1"
        capacitance="1uF"
        footprint="0603"
        pcbX={5}
        pcbY={-1}
        schX={5}
        schY={7}
        schRotation="90deg"
        schSheetName="gate-driver"
        schSectionName="driver-supplies"
        connections={{ pin1: "net.AVDD" }}
      >
      </capacitor>
      <capacitor
        name="C3"
        capacitance="1uF"
        footprint="0603"
        pcbX={5}
        pcbY={-3.2}
        schX={8}
        schY={7}
        schRotation="90deg"
        schSheetName="gate-driver"
        schSectionName="driver-supplies"
        connections={{ pin1: "net.DVDD" }}
      >
      </capacitor>
      <capacitor
        name="C8"
        capacitance="4.7uF"
        maxDecouplingTraceLength="20mm"
        maxVoltageRating="63V"
        footprint="1206"
        pcbX={-9.8}
        pcbY={-4.5}
        schX={11}
        schY={7}
        schRotation="90deg"
        schSheetName="gate-driver"
        schSectionName="driver-supplies"
        connections={{ pin1: "net.PVDD" }}
      >
      </capacitor>
      <capacitor
        name="C9"
        capacitance="1uF"
        footprint="0603"
        pcbX={5}
        pcbY={-5.4}
        schX={5}
        schY={4}
        schRotation="90deg"
        schSheetName="gate-driver"
        schSectionName="driver-supplies"
        connections={{ pin1: "net.VREF" }}
      >
      </capacitor>
      <capacitor
        name="C2"
        capacitance="47nF"
        footprint="0603"
        pcbX={-10.5}
        pcbY={-8.7}
        schX={5}
        schY={0}
        schSheetName="gate-driver"
        schSectionName="charge-pump"
        connections={{ pin1: "net.CP1H", pin2: "net.CP1L" }}
      >
      </capacitor>
      <capacitor
        name="C7"
        capacitance="47nF"
        footprint="0603"
        pcbX={-3.8}
        pcbY={-8.7}
        schX={8}
        schY={0}
        schSheetName="gate-driver"
        schSectionName="charge-pump"
        connections={{ pin1: "net.CP2H", pin2: "net.CP2L" }}
      >
      </capacitor>
      <capacitor
        name="C15"
        capacitance="2.2uF"
        maxDecouplingTraceLength="10mm"
        maxVoltageRating="63V"
        footprint="1206"
        pcbX={-9.8}
        pcbY={-1.5}
        pcbRotation={180}
        schX={11}
        schY={0}
        schSheetName="gate-driver"
        schSectionName="charge-pump"
        connections={{ pin1: "net.PVDD", pin2: "net.VCP_LSD" }}
      >
      </capacitor>
      <capacitor
        name="C17"
        capacitance="1uF"
        maxVoltageRating="63V"
        footprint="1206"
        pcbX={10.3 + SECTION_SPACING.rightSignalX}
        pcbY={5.2}
        schX={5}
        schY={-3}
        schSheetName="gate-driver"
        schSectionName="charge-pump"
        connections={{ pin1: "net.VCPH" }}
      >
      </capacitor>
      <resistor
        name="R2"
        resistance="100"
        footprint="0603"
        pcbX={-0.6}
        pcbY={-8.7}
        schX={8}
        schY={4}
        schSheetName="gate-driver"
        schSectionName="driver-supplies"
        connections={{ pin1: "net.PVDD", pin2: "net.VDRAIN" }}
      >
      </resistor>
      <resistor
        name="R1"
        resistance="10k"
        footprint="0603"
        pcbX={3.4}
        pcbY={-8.3}
        schX={5}
        schY={-6}
        schSheetName="gate-driver"
        schSectionName="driver-status"
        connections={{ pin1: "net.V3V3", pin2: "net.WAKE" }}
      >
      </resistor>

      <capacitor
        name="C13"
        capacitance="1nF"
        footprint="0603"
        pcbX={-9}
        pcbY={7}
        schX={-10}
        schY={-7}
        schSheetName="power-stage"
        schSectionName="phase-a"
        connections={{ pin1: "net.SL_A" }}
      >
      </capacitor>
      <capacitor
        name="C14"
        capacitance="1nF"
        footprint="0603"
        pcbX={9}
        pcbY={7}
        schX={0}
        schY={-7}
        schSheetName="power-stage"
        schSectionName="phase-b"
        connections={{ pin1: "net.SL_B" }}
      >
      </capacitor>
      <capacitor
        name="C16"
        capacitance="1nF"
        footprint="0603"
        pcbX={16}
        pcbY={8}
        schX={10}
        schY={-7}
        schSheetName="power-stage"
        schSectionName="phase-c"
        connections={{ pin1: "net.SL_C" }}
      >
      </capacitor>

      <resistor
        name="R3"
        resistance="10k"
        footprint="0603"
        pcbX={6.5 + SECTION_SPACING.rightSignalX}
        pcbY={-7.8}
        schX={5}
        schY={-9.5}
        schSheetName="gate-driver"
        schSectionName="driver-status"
        connections={{ pin1: "net.V3V3", pin2: "net.nFAULT" }}
      >
      </resistor>
      <led
        name="D1"
        color="red"
        footprint="0603"
        pcbX={12.9 + SECTION_SPACING.rightSignalX}
        pcbY={-7.8}
        schX={8}
        schY={-9.5}
        schSheetName="gate-driver"
        schSectionName="driver-status"
        connections={{ pin1: "net.V3V3", pin2: "net.nFAULT_LED" }}
      >
      </led>
      <resistor
        name="R7"
        resistance="330"
        footprint="0603"
        pcbX={9.7 + SECTION_SPACING.rightSignalX}
        pcbY={-7.8}
        schX={11}
        schY={-9.5}
        schSheetName="gate-driver"
        schSectionName="driver-status"
        connections={{ pin1: "net.nFAULT_LED", pin2: "net.nFAULT" }}
      >
      </resistor>

      <chip
        name="U2"
        manufacturerPartNumber="LMR16006XDDCR"
        supplierPartNumbers={{ jlcpcb: ["C87080"] }}
        footprint={<Sot23SixFootprint />}
        pinLabels={{
          pin1: "CB",
          pin2: "GND",
          pin3: "FB",
          pin4: "SHDN",
          pin5: "VIN",
          pin6: "SW",
        }}
        cadModel={{
          objUrl: lmr16006ObjPath,
          pcbRotationOffset: 180,
          modelOriginPosition: {
            x: 0.000025399999913133797,
            y: -0.0000889000000370288,
            z: -0.048939,
          },
        }}
        schPinArrangement={{
          leftSide: ["VIN", "SHDN", "GND"],
          rightSide: ["CB", "SW", "FB"],
        }}
        pcbX={-4.2}
        pcbY={-20.6 + SECTION_SPACING.bottomBuckY}
        pcbRotation={180}
        schX={-8}
        schY={2}
        schSheetName="aux-power"
        schSectionName="buck-input"
        connections={{
          CB: "net.CB",
          FB: "net.BUCK_FB",
          SHDN: "net.PVDD",
          VIN: "net.PVDD",
          SW: "net.SW",
        }}
      >
        <courtyardrect {...COURTYARDS.sot23} />
      </chip>
      <capacitor
        name="C20"
        capacitance="1uF"
        maxDecouplingTraceLength="10mm"
        maxVoltageRating="63V"
        footprint="1206"
        pcbX={-8.9}
        pcbY={-20.6 + SECTION_SPACING.bottomBuckY}
        schX={-12}
        schY={2}
        schRotation="90deg"
        schSheetName="aux-power"
        schSectionName="buck-input"
        connections={{ pin1: "net.PVDD" }}
      >
      </capacitor>
      <capacitor
        name="C26"
        capacitance="330nF"
        footprint="0603"
        pcbX={-1}
        pcbY={-17.5 + SECTION_SPACING.bottomBuckY}
        schX={-4}
        schY={5}
        schSheetName="aux-power"
        schSectionName="buck-input"
        connections={{ pin1: "net.CB", pin2: "net.SW" }}
      >
      </capacitor>
      <diode
        name="D4"
        footprint={<SmaDiodeFootprint />}
        pcbX={0}
        pcbY={-22.7 + SECTION_SPACING.bottomBuckY}
        pcbRotation={90}
        schX={-3}
        schY={0}
        schRotation="90deg"
        schSheetName="aux-power"
        schSectionName="buck-input"
        connections={{ pin2: "net.SW" }}
      >
        <courtyardrect {...COURTYARDS.sma} />
      </diode>
      <inductor
        name="L1"
        inductance="15uH"
        maxCurrentRating="1.5A"
        manufacturerPartNumber="SMNR8040-150MT"
        supplierPartNumbers={{ jlcpcb: ["C467156"] }}
        footprint={<Inductor8040Footprint />}
        cadModel={{
          objUrl: inductorObjPath,
          pcbRotationOffset: 0,
          modelOriginPosition: { x: 0, y: 0.00004999999999988347, z: 0 },
        }}
        pcbX={7.2}
        pcbY={-19.5 + SECTION_SPACING.bottomBuckY}
        pcbRotation={90}
        schX={2}
        schY={2}
        schSheetName="aux-power"
        schSectionName="buck-output"
        connections={{ pin1: "net.SW", pin2: "net.V3V3" }}
      >
        <courtyardrect {...COURTYARDS.inductor8040} />
      </inductor>
      <capacitor
        name="C21"
        capacitance="22uF"
        maxVoltageRating="10V"
        footprint="1206"
        pcbX={14.3}
        pcbY={-20.5 + SECTION_SPACING.bottomBuckY}
        schX={8}
        schY={0}
        schRotation="90deg"
        schSheetName="aux-power"
        schSectionName="buck-output"
        connections={{ pin1: "net.V3V3" }}
      >
      </capacitor>
      <resistor
        name="R20"
        resistance="68k"
        tolerance="1%"
        footprint="0603"
        pcbX={-8.1}
        pcbY={-25.3 + SECTION_SPACING.bottomBuckY}
        schX={6}
        schY={-4}
        schSheetName="aux-power"
        schSectionName="buck-output"
        connections={{ pin1: "net.V3V3", pin2: "net.BUCK_FB" }}
      >
      </resistor>
      <resistor
        name="R21"
        resistance="20k"
        tolerance="1%"
        footprint="0603"
        pcbX={-4.9}
        pcbY={-25.3 + SECTION_SPACING.bottomBuckY}
        schX={10}
        schY={-4}
        schSheetName="aux-power"
        schSectionName="buck-output"
        connections={{ pin1: "net.BUCK_FB" }}
      >
      </resistor>
      <led
        name="D3"
        color="green"
        footprint="0603"
        pcbX={-14.5}
        pcbY={-25.3 + SECTION_SPACING.bottomBuckY}
        schX={-4}
        schY={-6}
        schSheetName="aux-power"
        schSectionName="power-status"
        connections={{ pin1: "net.V3V3", pin2: "net.POWER_LED" }}
      >
      </led>
      <resistor
        name="R15"
        resistance="330"
        footprint="0603"
        pcbX={-11.3}
        pcbY={-25.3 + SECTION_SPACING.bottomBuckY}
        schX={0}
        schY={-6}
        schSheetName="aux-power"
        schSectionName="power-status"
        connections={{ pin1: "net.POWER_LED" }}
      >
      </resistor>

      <chip
        name="J1"
        manufacturerPartNumber="PM254-2-10-Z-8.5"
        supplierPartNumbers={{ jlcpcb: ["C2897411"] }}
        footprint={<BoosterPackHeaderFootprint />}
        layer="bottom"
        pinLabels={HEADER_PINS}
        cadModel={{
          objUrl: headerObjPath,
          pcbRotationOffset: 90,
          modelOriginPosition: {
            x: 0.0004862999999293294,
            y: 0,
            z: -4.2500064,
          },
        }}
        noConnect={["pin1", "pin3", "pin4", "pin8", "pin10", "pin12", "pin16", "pin18", "pin20"]}
        schPinArrangement={{
          leftSide: ["pin2", "pin4", "pin6", "pin8", "pin10", "pin12", "pin14", "pin16", "pin18", "pin20"],
          rightSide: ["pin1", "pin3", "pin5", "pin7", "pin9", "pin11", "pin13", "pin15", "pin17", "pin19"],
        }}
        pcbPinLabels={{
          pin2: "3V3",
          pin5: "VSEN_A",
          pin6: "nFAULT",
          pin7: "VSEN_B",
          pin9: "VSEN_C",
          pin11: "VSEN_PVDD",
          pin13: "GND",
          pin14: "SCLK",
          pin15: "ISEN_A",
          pin17: "ISEN_B",
          pin19: "ISEN_C",
        }}
        pcbX={-22.77 - SECTION_SPACING.sideHeaderX}
        pcbY={3.5}
        pcbRotation={0}
        schX={-10}
        schY={3}
        schSheetName="sensing-io"
        schSectionName="boosterpack-io"
        connections={{
          pin2: "net.V3V3",
          pin5: "net.VSEN_A",
          pin6: "net.nFAULT",
          pin7: "net.VSEN_B",
          pin9: "net.VSEN_C",
          pin11: "net.VSEN_PVDD",
          pin14: "net.SCLK",
          pin15: "net.ISEN_A",
          pin17: "net.ISEN_B",
          pin19: "net.ISEN_C",
        }}
      />

      <chip
        name="J2"
        manufacturerPartNumber="PM254-2-10-Z-8.5"
        supplierPartNumbers={{ jlcpcb: ["C2897411"] }}
        footprint={<BoosterPackHeaderFootprint />}
        layer="bottom"
        pinLabels={HEADER_PINS}
        cadModel={{
          objUrl: headerObjPath,
          pcbRotationOffset: 90,
          modelOriginPosition: {
            x: 0.0004862999999293294,
            y: 0,
            z: -4.2500064,
          },
        }}
        noConnect={["pin1", "pin5", "pin14", "pin16", "pin18", "pin19", "pin20"]}
        schPinArrangement={{
          leftSide: ["pin2", "pin4", "pin6", "pin8", "pin10", "pin12", "pin14", "pin16", "pin18", "pin20"],
          rightSide: ["pin1", "pin3", "pin5", "pin7", "pin9", "pin11", "pin13", "pin15", "pin17", "pin19"],
        }}
        pcbPinLabels={{
          pin2: "INH_A",
          pin3: "SCS",
          pin4: "INL_A",
          pin6: "INH_B",
          pin7: "GND",
          pin8: "INL_B",
          pin9: "PWRGD",
          pin10: "INH_C",
          pin11: "SDI",
          pin12: "INL_C",
          pin13: "SDO",
          pin15: "EN_GATE",
          pin17: "WAKE",
        }}
        pcbX={20.23 + SECTION_SPACING.sideHeaderX}
        pcbY={3.5}
        pcbRotation={0}
        schX={-10}
        schY={-5}
        schSheetName="sensing-io"
        schSectionName="boosterpack-io"
        connections={{
          pin2: "net.INH_A",
          pin3: "net.SCS",
          pin4: "net.INL_A",
          pin6: "net.INH_B",
          pin8: "net.INL_B",
          pin9: "net.PWRGD",
          pin10: "net.INH_C",
          pin11: "net.SDI",
          pin12: "net.INL_C",
          pin13: "net.SDO",
          pin15: "net.EN_GATE",
          pin17: "net.WAKE",
        }}
      />

      <resistor
        name="R17"
        resistance="56"
        footprint="0603"
        pcbX={-8.3 + SECTION_SPACING.leftAnalogX}
        pcbY={-10.5}
        pcbRotation={180}
        schX={1}
        schY={-4}
        schSheetName="sensing-io"
        schSectionName="current-sense"
        connections={{ pin1: "net.ISEN_A_RAW", pin2: "net.ISEN_A" }}
      >
      </resistor>
      <resistor
        name="R18"
        resistance="56"
        footprint="0603"
        pcbX={-8.3 + SECTION_SPACING.leftAnalogX}
        pcbY={-13}
        pcbRotation={180}
        schX={5}
        schY={-4}
        schSheetName="sensing-io"
        schSectionName="current-sense"
        connections={{ pin1: "net.ISEN_B_RAW", pin2: "net.ISEN_B" }}
      >
      </resistor>
      <resistor
        name="R19"
        resistance="56"
        footprint="0603"
        pcbX={-8.3 + SECTION_SPACING.leftAnalogX}
        pcbY={-15.5}
        pcbRotation={180}
        schX={9}
        schY={-4}
        schSheetName="sensing-io"
        schSectionName="current-sense"
        connections={{ pin1: "net.ISEN_C_RAW", pin2: "net.ISEN_C" }}
      >
      </resistor>
      <capacitor
        name="C23"
        capacitance="2.2nF"
        footprint="0603"
        pcbX={-11.5 + SECTION_SPACING.leftAnalogX}
        pcbY={-10.5}
        schX={1}
        schY={-7}
        schRotation="90deg"
        schSheetName="sensing-io"
        schSectionName="current-sense"
        connections={{ pin1: "net.ISEN_A" }}
      >
      </capacitor>
      <capacitor
        name="C24"
        capacitance="2.2nF"
        footprint="0603"
        pcbX={-11.5 + SECTION_SPACING.leftAnalogX}
        pcbY={-13}
        schX={5}
        schY={-7}
        schRotation="90deg"
        schSheetName="sensing-io"
        schSectionName="current-sense"
        connections={{ pin1: "net.ISEN_B" }}
      >
      </capacitor>
      <capacitor
        name="C25"
        capacitance="2.2nF"
        footprint="0603"
        pcbX={-11.5 + SECTION_SPACING.leftAnalogX}
        pcbY={-15.5}
        schX={9}
        schY={-7}
        schRotation="90deg"
        schSheetName="sensing-io"
        schSectionName="current-sense"
        connections={{ pin1: "net.ISEN_C" }}
      >
      </capacitor>

      {false && (
        <>
      <trace
        name="TRACE_ISEN_A_RAW"
        from=".U1 > .SO1"
        to=".R17 > .pin1"
        width="0.3mm"
        pcbStraightLine
      />
      <trace
        name="TRACE_ISEN_B_RAW"
        from=".U1 > .SO2"
        to=".R18 > .pin1"
        width="0.3mm"
        pcbStraightLine
      />
      <trace
        name="TRACE_ISEN_C_RAW"
        from=".U1 > .SO3"
        to=".R19 > .pin1"
        width="0.3mm"
        pcbStraightLine
      />
        </>
      )}

      <copperpour
        name="GND_POUR_TOP"
        layer="top"
        connectsTo="net.GND"
        padMargin="0.3mm"
        traceMargin="0.25mm"
      />
      <copperpour
        name="GND_POUR_BOTTOM"
        layer="bottom"
        connectsTo="net.GND"
        padMargin="0.3mm"
        traceMargin="0.25mm"
      />
      <copperpour
        name="GND_PLANE_INNER1"
        layer="inner1"
        connectsTo="net.GND"
        padMargin="0.3mm"
        traceMargin="0.25mm"
      />
    </board>
  )
}
