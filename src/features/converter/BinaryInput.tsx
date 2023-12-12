interface TProps {
  binaryNumber: string
  setBinaryNumber: (b: string) => void
  hasForbiddenSymbols: boolean
  hasLengthError: boolean
}

export default function BinaryInput(props: TProps) {
  return(
    <>
      <label htmlFor="binaryInput">Binary input</label>
      <input
        type="text"
        id="binaryInput"
        placeholder="A number consisting of 0 and 1 only"
        value={props.binaryNumber}
        onChange={e => props.setBinaryNumber(e.target.value)}
      />
      {
        props.hasForbiddenSymbols &&
        <div>Digits other than '0' or '1' are not allowed!</div>
      }
      {
        props.hasLengthError &&
        <div>In Simple mode numbers greater than 8 digits are not allowed!</div>
      }
    </>
  )
}