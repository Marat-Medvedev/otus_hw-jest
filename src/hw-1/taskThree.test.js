const hwThree = require('./taskThree');

describe('When given a 3-digit numbers', () => {
    it('returns the sum of those 3 numbers', () => {
        global.prompt = () => "123";
        expect(hwThree.sumOfInputDigits()).toBe(6);
    })
})