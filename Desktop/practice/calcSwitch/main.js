const ADD = 'add';
const MULTI = 'multi';
const SUBSTRACT = 'subtract';

function сalc(operation, firstOperand, secondOperand) {
  let result;
  if (
    isNaN(firstOperand) ||
    isNaN(secondOperand) ||
    typeof firstOperand !== 'number' ||
    typeof secondOperand !== 'number'
  ) {
    return 'Неверный ввод данных';
  } else {
    switch (operation) {
      case ADD:
        result = firstOperand + secondOperand;
        return result;
      case MULTI:
        result = firstOperand * secondOperand;
        return result;
      case SUBSTRACT:
        result = firstOperand - secondOperand;
        return result;
      default:
        return 'Нет такой операции';
    }
  }
}

console.log(сalc('hf', 2, 4));
console.log(сalc(MULTI, 1, 2));
console.log(сalc(SUBSTRACT, 3, ''));
