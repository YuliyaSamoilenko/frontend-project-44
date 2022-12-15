import getGame from '../index.js';

import { getRandomNumber } from '../funct.js';

const taskGame = 'What number is missing in the progression?';

const arithmProgression = (number1, quantityNumber, step) => {
  const arithmProgressionArray = [];
  for (let i = 1; i <= quantityNumber; i += 1) {
    const number = number1 + (step * i);
    arithmProgressionArray.push(number);
  }
  return arithmProgressionArray;
};

const startGame = () => {
  const number1 = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const quantityNumber = getRandomNumber(5, 10);
  const unkownMemberIndex = getRandomNumber(quantityNumber - 1);
  const arithmProgressionArray = arithmProgression(number1, quantityNumber, step);
  const answer = arithmProgressionArray[unkownMemberIndex];
  arithmProgressionArray[unkownMemberIndex] = '..';
  const question = arithmProgressionArray.join(' ');
  return [question, answer];
};

export default () => {
  getGame(taskGame, startGame);
};
