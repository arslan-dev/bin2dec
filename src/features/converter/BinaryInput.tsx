interface TProps {
  binaryNumber: string
  setBinaryNumber: (b: string) => void
  hasForbiddenSymbols: boolean
  hasLengthError: boolean
}

export default function BinaryInput(props: TProps) {
  return(
    <div className="mb-3">
      <div className="input-group">
        <div className="form-floating">
          <input
            type="text"
            id="binaryInput"
            className="form-control"
            placeholder="A number consisting of 0 and 1 only"
            value={props.binaryNumber}
            onChange={e => props.setBinaryNumber(e.target.value)}
          />
          <label htmlFor="binaryInput">Binary input</label>
        </div>
      </div>
      {
        props.hasForbiddenSymbols &&
        <div className="form-text text-danger">Digits other than '0' or '1' are not allowed!</div>
      }
      {
        props.hasLengthError &&
        <div className="form-text text-danger">In Simple mode numbers greater than 8 digits are not allowed!</div>
      }
    </div>
  )
}