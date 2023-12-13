import { EConversionMode } from "./EConversionMode"

interface TProps {
  conversionMode: EConversionMode
  setConversionMode: (mode: EConversionMode) => void
}

export default function ModeSwitcher({ conversionMode, setConversionMode }: TProps) { 
  return (
    <div className="btn-group mb-3" role="group" aria-label="Conversion mode radio toggle group">
      <input
        type="radio"
        id="simpleModeRadio"
        className="btn-check"
        checked={conversionMode === EConversionMode.Simple}
        onChange={() => setConversionMode(EConversionMode.Simple)}
      />
      <label className="btn btn-outline-primary" htmlFor="simpleModeRadio">Simple mode</label>

      <input
        type="radio"
        id="customModeRadio"
        className="btn-check"
        checked={conversionMode === EConversionMode.Custom}
        onChange={() => setConversionMode(EConversionMode.Custom)}
      />
      <label className="btn btn-outline-primary" htmlFor="customModeRadio">Custom mode</label>
    </div>
  )
}