import getGame, { getRandomNumber } from '../index.js';

const taskGame = 'What is the result of the expression?';
const getRandomOperator = () => {
  const operatorArray = ['+', '-', '*'];
  const index = Math.floor(Math.random() * operatorArray.length);
  const selectedOperator = operatorArray[index];
  return selectedOperator;
};

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

const roundGame = () => {
  const number1 = getRandomNumber(10);
  const number2 = getRandomNumber(10);
  const operator = getRandomOperator();
  const question = `${number1} ${operator} ${number2}`;
  const answer = calculation(number1, number2, operator);
  return [question, answer];
};

export default () => {
  getGame(taskGame, roundGame);
};
