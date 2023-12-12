import { afterEach, describe, expect, it, test } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/vitest'
import Converter from "./Converter";

afterEach(() => cleanup())

describe("Binary input tests", () => {
  it("should be able to input a binary number of 0 and 1 with LTE 8 digits", () => {
    render( <Converter /> )
    const $input = screen.getByLabelText("Binary input")
    fireEvent.change($input, { target: { value: "10101010"}})
    expect(screen.queryByText(/digits other than '0' or '1' are not allowed!/i)).not.toBeInTheDocument()
  })

  it("shouldn't be able to input a binary number that consists digits other than 0 or 1", () => {
    render( <Converter /> )
    const $input = screen.getByLabelText("Binary input")
    fireEvent.change($input, { target: { value: "12"}})
    expect(screen.queryByText(/digits other than '0' or '1' are not allowed!/i)).toBeInTheDocument()
  })

  test("In Simple mode it shouldn't be able to input a GT of 8 digits", () => {
    render( <Converter /> ) // Assuming simple mode by default
    const $input = screen.getByLabelText("Binary input")
    fireEvent.change($input, { target: { value: "101010101"}})
    expect(screen.queryByText(/In Simple mode numbers greater than 8 digits are not allowed!/i)).toBeInTheDocument()
  })

  test("In Custom mode any number of digits is allowed in the number, but switching the mode should display the error", () => {
    render( <Converter /> ) // Assuming simple mode by default

    const $customModeRadio = screen.getByLabelText(/Custom mode/i)
    fireEvent.click($customModeRadio)

    const $input = screen.getByLabelText("Binary input")
    fireEvent.change($input, { target: { value: "101010101"}})
    expect(screen.queryByText(/In Simple mode numbers greater than 8 digits are not allowed!/i)).not.toBeInTheDocument()

    const $simpleModeRadio = screen.getByLabelText(/Simple mode/i)
    fireEvent.click($simpleModeRadio)
    expect(screen.queryByText(/In Simple mode numbers greater than 8 digits are not allowed!/i)).toBeInTheDocument()
  })
})