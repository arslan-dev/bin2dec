import { useState } from "react"
import { EConversionMode } from "./EConversionMode"

const MAX_ALLOWED_DIGITS = 8
const FORBIDDEN_SYMBOLS = new RegExp('[^01.]')

interface TProps {
  conversionMode: EConversionMode
}

export default function BinaryInput({ conversionMode }: TProps) {
  const [value, setValue] = useState('')

  const hasForbiddenSymbols = FORBIDDEN_SYMBOLS.test(value)
  const hasNumberLengthError = value.length > MAX_ALLOWED_DIGITS
  const hasLengthError = hasNumberLengthError && conversionMode === EConversionMode.Simple

  return(
    <>
      <label htmlFor="binaryInput">Binary input</label>
      <input
        type="text"
        id="binaryInput"
        placeholder="A number consisting of 0 and 1 only"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      {
        hasForbiddenSymbols &&
        <div>Digits other than '0' or '1' are not allowed!</div>
      }
      {
        hasLengthError &&
        <div>In Simple mode numbers greater than 8 digits are not allowed!</div>
      }
    </>
  )
}