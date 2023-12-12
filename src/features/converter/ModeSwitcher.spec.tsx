import { afterEach, describe, expect, test, it } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/vitest'
import Converter from "./Converter";

afterEach(() => cleanup())

describe("ModeSwitcher tests", () => {
  test("Simple mode must be on, initially", () => {
    render( <Converter /> )
    const $simpleModeRadio = screen.getByLabelText(/Simple mode/i)
    expect($simpleModeRadio).toBeChecked()
  })

  it("should switch mode when checked on another radio button", () => {
    render( <Converter /> )
    const $simpleModeRadio = screen.getByLabelText(/Simple mode/i)
    const $customModeRadio = screen.getByLabelText(/Custom mode/i)

    fireEvent.click($customModeRadio)
    expect( $simpleModeRadio ).not.toBeChecked()
    expect( $customModeRadio ).toBeChecked()

    fireEvent.click($simpleModeRadio)
    expect( $simpleModeRadio ).toBeChecked()
    expect( $customModeRadio ).not.toBeChecked()
  })
})