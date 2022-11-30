"use strict";

// Написати рекурсивну функцію, яка обчислює факторіал числа.
// Функція повина приймати тип данних: number або bigint,
// і кидатися помилками.
// Викликати функцію, використовуючи конструкцію try...catch

/**
 * calculates the factorial of a number
 * @param {number | bigint} num
 * @returns {number | bigint}
 * @throws {TypeError} type must be a number or bigint for num
 * @throws {RangeError} type must be a positive num or zero
 */
const getFactorial = function (num) {
  if (typeof num !== "number" && typeof num !== "bigint") {
    throw new TypeError("Type is not number!");
  }
  if (num < 0) {
    throw new RangeError("Number must be positive!");
  }
  if (num === 0) {
    return 1;
  }
  if (typeof num === "bigint") {
    return BigInt(Number(num) * getFactorial(Number(num) - 1));
  }
  return num * getFactorial(num - 1);
};

try {
  console.log(getFactorial(7n));
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Wrong type");
  }
  if (error instanceof RangeError) {
    console.log("Wrong value");
  }
  console.log(error);
}

console.log("************");
console.log("************");

// !!!!!!!
const getFactorial1 = function (num) {
  if (typeof num !== "number" && typeof num !== "bigint") {
    throw new TypeError("Type is not number!");
  }
  if (num < 0 || num < 0n) {
    throw new RangeError("Number must be positive!");
  }
  if (num === 0  || num === 0n) {
    return typeof num === "bigint"? 1n : 1;
  }
    
  return num * getFactorial(num - (typeof num === "bigint"? 1n : 1));
};
// або так - тобто скрізь врахувати цей тип данних