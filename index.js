"use strict";

// Написати рекурсивну функцію, яка обчислює факторіал числа.
// Функція повина приймати тип данних: number або bigint,
// і кидатися помилками.
// Викликати функцію, використовуючи конструкцію try...catch

/**
 * calculates the factorial of a number
 * @param {number} n
 * @returns {number}
 */
const getFactorial = (n) => (n === 1) ? 1 : n * getFactorial(n - 1);

/**
 * check the data from the user
 * @param {number} n
 * @returns {number}
 * @throws {TypeError} type must be a number or bigint for n
 * @throws {RangeError} type must be a positive n or zero
 */
const checkDataFactorial = function (n) {
  if (typeof n !== "number" && typeof n !== "bigint") {
    throw new TypeError("Type is not number!");
  }
  if (n < 0) {
    throw new RangeError("Number must be positive!");
  }
  if (n === 0) {
    return typeof n === "bigint" ? 1n : 1;
  }
  return getFactorial(n);
};

try {
  console.log(checkDataFactorial(5));
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


