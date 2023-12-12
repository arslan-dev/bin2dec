import { useState } from "react";
import ModeSwitcher from "./ModeSwitcher";
import { EConversionMode } from "./EConversionMode";
import BinaryInput from "./BinaryInput";

export default function Converter() {
  const [conversionMode, setConversionMode] = useState(EConversionMode.Simple)

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
            conversionMode={conversionMode}
          />
        </section>
        <section>
          Result
        </section>
      </div>
    </main>
  )
}