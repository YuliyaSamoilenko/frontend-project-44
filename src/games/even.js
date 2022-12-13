import getGame from '../index.js';

import { randomNumber } from '../index.js';

const even = (number) => number % 2 === 0;

const taskGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const roundGame = () => {
  const number = randomNumber(100);
  const question = `${number}`;
  const answer = even(number) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  getGame(taskGame, roundGame);
};
