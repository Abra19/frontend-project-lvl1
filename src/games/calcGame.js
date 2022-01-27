export const questionForCalc = 'What is the result of the expression?';

const selectOperation = () => {
  const number = Math.ceil(Math.random() * 100);
  if (number % 3 === 0) {
    return '+';
  }
  if (number % 3 === 1) {
    return '-';
  }
  return '*';
};

export const makeQuestionCalc = (maximum) => {
  let items = '';
  items += `${Math.ceil(Math.random() * maximum)} `;
  items += `${selectOperation()} `;
  items += `${Math.ceil(Math.random() * maximum)}`;
  return items;
};

const trueAnswerCalc = (a, operation, b) => {
  if (operation === '+') {
    return Number(a) + Number(b);
  }
  if (operation === '-') {
    return Number(a) - Number(b);
  }
  return Number(a) * Number(b);
};

export const isTrueAnswerCalc = (a, operation, b, answer) => {
  const etalon = trueAnswerCalc(a, operation, b);
  if (Number(answer) === etalon) {
    return [etalon, true];
  }
  return [etalon, false];
};
