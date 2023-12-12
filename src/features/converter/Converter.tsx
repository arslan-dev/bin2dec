import { useState } from "react";
import ModeSwitcher from "./ModeSwitcher";
import { EConversionMode } from "./EConversionMode";
import BinaryInput from "./BinaryInput";
import { bin2decCustom, bin2decSimple } from "./converter-lib";

const MAX_ALLOWED_DIGITS = 8
const FORBIDDEN_SYMBOLS = new RegExp('[^01.]')

export default function Converter() {
  const [conversionMode, setConversionMode] = useState(EConversionMode.Simple)
  const [binaryNumber, setBinaryNumber] = useState('')

  const hasForbiddenSymbols = FORBIDDEN_SYMBOLS.test(binaryNumber)
  const hasNumberLengthError = binaryNumber.length > MAX_ALLOWED_DIGITS
  const hasLengthError = hasNumberLengthError && conversionMode === EConversionMode.Simple

  const result = (function() {
    if (hasForbiddenSymbols || hasLengthError) {
      return "Invalid input."
    }
    
    const convertedDecimal = (conversionMode === EConversionMode.Simple)
      ? bin2decSimple(binaryNumber)
      : bin2decCustom(binaryNumber)

    return `Result: ${convertedDecimal}.`
  })()

  return (
    <main className="row">
      <div className="col">
        <section>
          <ModeSwitcher
            conversionMode={conversionMode}
            setConversionMode={setConversionMode}
          />
        </section>
        <section>
          <BinaryInput
            binaryNumber={binaryNumber}
            setBinaryNumber={setBinaryNumber}
            hasForbiddenSymbols={hasForbiddenSymbols}
            hasLengthError={hasLengthError}
          />
        </section>
        <section>
          <p>{ result }</p>
        </section>
      </div>
    </main>
  )
}