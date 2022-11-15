/*
3.*Написать программу, которая запрашивает у
пользователя ввод трёхзначного числа, а потом
выводит в консоль сумму цифр введённого числа.
*/

const sumOfInputDigits = () => {
    let input = prompt("Enter a 3-digit integer number: ");
    if (/^\d{3}$/.test(input)) {
        //it is a string of 3 digits
        //get array
        let inputArray = input.split("");
        //get sum
        return inputArray.reduce((acc, digit) => {
            return (acc += Number(digit));
        }, 0);
    } else {
        //one or more digits is not a number
        return `${input} is not a 3-digit number`;
    }
};

module.exports = {sumOfInputDigits};