import getGame from '../index.js';

import { getRandomNumber } from '../funct.js';

const taskGame = 'What number is missing in the progression?';

const getProgression = (number1, quantityNumber, step) => {
  const arithmProgresArr = [];
  for (let i = 1; i <= quantityNumber; i += 1) {
    const number = number1 + (step * i);
    arithmProgresArr.push(number);
  }
  return arithmProgresArr;
};

const startGame = () => {
  const number1 = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const quantityNumber = getRandomNumber(5, 10);
  const unkownMemberIndex = getRandomNumber(quantityNumber - 1);
  const arithmProgresArr = getProgression(number1, quantityNumber, step);
  const answer = arithmProgressArr[unkownMemberIndex];
  arithmProgresArr[unkownMemberIndex] = '..';
  const question = arithmProgresArr.join(' ');
  return [question, answer];
};

export default () => {
  getGame(taskGame, startGame);
};
