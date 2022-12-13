import getGame from '../index.js';

import {randomNumber} from '../index.js';

const taskGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const calculation = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
    return 'no';
    }
    }
    return 'yes';
};

const roundGame = () => { 
  const number = Math.abs(randomNumber(100));
  const question = number;
  const answer = String(calculation(number));
  return [question, answer];
};

export default () => {
  getGame(taskGame, roundGame);
};
