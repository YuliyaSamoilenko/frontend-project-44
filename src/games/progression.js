import getGame from '../index.js';

import { randomNumber } from '../index.js';

const taskGame = 'What number is missing in the progression?';

const arithmProgression = (number1, quantityNumber, step) => {
  const arithmProgressionArray = [];
  for (let i = 1; i <= quantityNumber; i += 1) {
    const number = number1 + (step * i);
    arithmProgressionArray.push(number);
  }
  return arithmProgressionArray;
};

const roundGame = () => {
  const number1 = Math.abs(randomNumber(9) + 1);
  const step = Math.abs(randomNumber(9) + 1);
  const quantityNumber = Math.abs(randomNumber(5) + 5);
  const unkownMemberIndex = Math.abs(randomNumber(quantityNumber - 1));
  const arithmProgressionArray = arithmProgression(number1, quantityNumber, step);
  const answer = arithmProgressionArray[unkownMemberIndex];
  arithmProgressionArray[unkownMemberIndex] = '..';
  const question = arithmProgressionArray.join(' ');
  return [question, answer];
};

export default () => {
  getGame(taskGame, roundGame);
};
