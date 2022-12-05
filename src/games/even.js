import readlineSync from 'readline-sync'

import {random, name} from "./index.js"

export const brainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  for (let i = 0; i < 3; i++) {
    const number = random(100)
    console.log('Question: ' + number)
    const answer = readlineSync.question('Your answer: ')
    if (((number % 2 === 0) && (answer === 'yes')) || ((number % 2 !== 0) && (answer === 'no'))) {
      console.log('Correct!')
    } else {
      const correct = (answer === 'yes' ? 'no' : 'yes')
      const result = `${answer} is wrong answer ;(. Correct answer was ${correct}.\nLet's try again, ${name()}!`
      console.log(result)
      break
    }
    console.log(`Congratulations, ${name()}!`)
  }
}
