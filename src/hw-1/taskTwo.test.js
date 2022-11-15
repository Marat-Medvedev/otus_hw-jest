
const hwTwo = require("./taskTwo");

describe('Задание 2', () => {
    test('суммарное количество символов в строках "test1" и "test2" равно 10', () => {
        expect(hwTwo.c).toBe('test1');
        expect(hwTwo.d).toBe('test2');
        expect(hwTwo.c + hwTwo.d).toHaveLength(10);
    });
});