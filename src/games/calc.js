import getGame from '../index.js';

import { getRandomNumber } from '../funct.js';

const taskGame = 'What is the result of the expression?';

const operatorArray = ['+', '-', '*'];
const index = getRandomNumber(1, operatorArray.length - 1);
const selectedOperator = operatorArray[index];


const calculation = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unkown order state: '${operator}'!`);
  }
};

const startGame = () => {
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const operator = selectedOperator;
  const question = `${number1} ${operator} ${number2}`;
  const answer = calculation(number1, number2, operator);
  return [question, answer];
};

export default () => {
  getGame(taskGame, startGame);
};
