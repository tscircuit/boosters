import { expect } from "bun:test"
import type { ReactElement } from "react"
import { Circuit } from "tscircuit"

export async function expectBoardExcludes(params: {
  board: ReactElement
  excludedElementNames: string[]
  excludedText?: string[]
}): Promise<void> {
  const circuit = new Circuit()
  circuit.add(params.board)
  await circuit.renderUntilSettled()

  const circuitJson = circuit.getCircuitJson()
  expect(circuitJson.some((element) => element.type === "pcb_board")).toBe(true)
  expect(
    circuitJson.some((element) => element.type.startsWith("source_failed_to_create_component_error")),
  ).toBe(false)
  expect(circuitJson.some((element) => element.type === "pcb_placement_error")).toBe(false)
  expect(circuitJson.some((element) => element.type === "pcb_autorouting_error")).toBe(false)

  const renderedElementNames = new Set(
    circuitJson.flatMap((element) =>
      "name" in element && typeof element.name === "string" ? [element.name] : [],
    ),
  )
  for (const excludedElementName of params.excludedElementNames) {
    expect(renderedElementNames.has(excludedElementName)).toBe(false)
  }

  const serializedCircuitJson = JSON.stringify(circuitJson)
  for (const excludedText of params.excludedText ?? []) {
    expect(serializedCircuitJson).not.toContain(excludedText)
  }
}
