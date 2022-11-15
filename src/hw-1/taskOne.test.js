const hwOne = require('./taskOne');

describe('When given 2 numbers', () => {
    expect(hwOne.a).toBe(3);
    expect(hwOne.b).toBe(4);
    it('returns the sum of those 2 numbers', () => {
        const result = (hwOne.a + hwOne.b)
        const expected = 7

        expect(result).toEqual(expected)
    })
    it('returns the multiplier of these 2 numbers', () => {
        const result = (hwOne.a * hwOne.b)
        const expected = 12

        expect(result).toEqual(expected)
    })
})
