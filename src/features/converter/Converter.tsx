import { useState } from "react";
import ModeSwitcher from "./ModeSwitcher";
import { EConversionMode } from "./EConversionMode";

export default function Converter() {
  const [mode, setMode] = useState(EConversionMode.Simple)
  return (
    <main className="row">
      <div className="col">
        <section>
          <ModeSwitcher
            mode={mode}
            setMode={setMode}
          />
        </section>
        <section>
          Input
        </section>
        <section>
          Result
        </section>
      </div>
    </main>
  )
}