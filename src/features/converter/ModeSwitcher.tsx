import { EConversionMode } from "./EConversionMode"

interface TProps {
  conversionMode: EConversionMode
  setConversionMode: (mode: EConversionMode) => void
}

export default function ModeSwitcher({ conversionMode, setConversionMode }: TProps) { 
  return (
    <>
      <input
        type="radio"
        id="simpleModeRadio"
        checked={conversionMode === EConversionMode.Simple}
        onChange={() => setConversionMode(EConversionMode.Simple)}
      />
      <label htmlFor="simpleModeRadio">Simple mode</label>

      <input
        type="radio"
        id="customModeRadio"
        checked={conversionMode === EConversionMode.Custom}
        onChange={() => setConversionMode(EConversionMode.Custom)}
      />
      <label htmlFor="customModeRadio">Custom mode</label>
    </>
  )
}