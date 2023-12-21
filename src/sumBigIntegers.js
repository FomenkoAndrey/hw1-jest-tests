/*
 Створіть функцію sumBigIntegers, яка приймає два рядки (numStr1 та numStr2), що представляють великі числа.
 Функція повинна перетворити ці рядки на BigInt і повернути їх суму.

 console.log(sumBigIntegers('9007199254740991', '9007199254740991')); // виводить 18014398509481982n
*/

function sumBigIntegers(numStr1, numStr2) {
  const num1 = BigInt(numStr1)
  const num2 = BigInt(numStr2)
  return num1 + num2
}

console.log(sumBigIntegers('1234567890123456789012345678901234567890', '9876543210987654321098765432098765432100')) // виводить 18014398509481982n
module.exports = sumBigIntegers