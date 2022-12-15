import getGame from '../index.js';

import { getRandomNumber } from '../funct.js';

const isEven = (number) => number % 2 === 0;

const taskGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const startGame = () => {
  const number = getRandomNumber(1, 100);
  const question = String(number);
  const answer = isEven(number) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  getGame(taskGame, startGame);
};
