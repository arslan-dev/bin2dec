import { afterEach, describe, expect, test, it } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/vitest'
import Converter from "./Converter";

afterEach(() => cleanup())

describe("Converter tests", () => {
  it("should convert a binary number of 0 and 1 with LTE 8 digits", () => {
    render( <Converter /> )
    const $input = screen.getByLabelText("Binary input")
    fireEvent.change($input, { target: { value: "10101010"}})

    expect(screen.queryByText(/digits other than '0' or '1' are not allowed!/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/170/i)).toBeInTheDocument()
  })

  it("shouldn't be able to input a binary number that consists digits other than 0 or 1", () => {
    render( <Converter /> )
    const $input = screen.getByLabelText("Binary input")
    fireEvent.change($input, { target: { value: "12"}})

    expect(screen.queryByText(/digits other than '0' or '1' are not allowed!/i)).toBeInTheDocument()
    expect(screen.queryByText(/Invalid input/i)).toBeInTheDocument()
  })

  test("In Simple mode it shouldn't be able to input a GT of 8 digits", () => {
    render( <Converter /> ) // Assuming the Simple mode by default
    const $input = screen.getByLabelText("Binary input")
    fireEvent.change($input, { target: { value: "101010101"}})

    expect(screen.queryByText(/In Simple mode numbers greater than 8 digits are not allowed!/i)).toBeInTheDocument()
    expect(screen.queryByText(/Invalid input/i)).toBeInTheDocument()
  })

  test("In Custom mode any number of digits is allowed in the number, but switching the mode should display the error", () => {
    render( <Converter /> )

    const $customModeRadio = screen.getByLabelText(/Custom mode/i)
    fireEvent.click($customModeRadio)

    const $input = screen.getByLabelText("Binary input")
    fireEvent.change($input, { target: { value: "101010101"}})
    expect(screen.queryByText(/In Simple mode numbers greater than 8 digits are not allowed!/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/341/i)).toBeInTheDocument()

    const $simpleModeRadio = screen.getByLabelText(/Simple mode/i)
    fireEvent.click($simpleModeRadio)
    expect(screen.queryByText(/In Simple mode numbers greater than 8 digits are not allowed!/i)).toBeInTheDocument()
    expect(screen.queryByText(/Invalid input/i)).toBeInTheDocument()
  })
  
  it("should display a suggestion to enter the binary number when there is nothing in the text input", () => {
    render( <Converter /> )
    expect(screen.queryByText(/NaN/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Enter a number/i)).toBeInTheDocument()
  })
})