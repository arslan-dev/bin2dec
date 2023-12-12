import { EConversionMode } from "./EConversionMode"

interface TProps {
  mode: EConversionMode
  setMode: (mode: EConversionMode) => void
}

export default function ModeSwitcher({ mode, setMode }: TProps) { 
  return (
    <>
      <input
        type="radio"
        id="simpleModeRadio"
        checked={mode === EConversionMode.Simple}
        onChange={() => setMode(EConversionMode.Simple)}
      />
      <label htmlFor="simpleModeRadio">Simple mode</label>

      <input
        type="radio"
        id="customModeRadio"
        checked={mode === EConversionMode.Custom}
        onChange={() => setMode(EConversionMode.Custom)}
      />
      <label htmlFor="customModeRadio">Custom mode</label>
    </>
  )
}