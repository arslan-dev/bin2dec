import { describe, expect, it } from 'vitest'
import { bin2decCustom, bin2decSimple } from './converter-lib'

describe("Converter tests", () => {
  it('should convert bin2dec using build method', () => {
    expect(bin2decSimple('101')).toStrictEqual(5)
  })

  it('should convert bin2dec using custom method', () => {
    expect(bin2decCustom('101')).toStrictEqual(5)
    expect(bin2decCustom('001000101011')).toStrictEqual(555)
  })
})