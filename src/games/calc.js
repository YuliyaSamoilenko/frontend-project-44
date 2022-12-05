import readlineSync from 'readline-sync'

import {random, name} from "./index.js"

const getRandomOperator = () => {
    const operatorArray = ['+', '-', '*']
    const index = Math.floor(Math.random() * operatorArray.length)
    let operator = operatorArray[index]
    return operator
  }

export const brainCalc = () => {
  console.log('What is the result of the expression?')
  for (let i = 0; i < 3; i++) {
    const number1 = random(10)
    const number2 = random(10)
    let calculation = 0
    const selectedOperator = getRandomOperator()
    console.log(`Question: ${number1} ${selectedOperator} ${number2}`)
    const answer = readlineSync.question('Your answer: ')
    switch (selectedOperator) {
      case "+":
        calculation = number1 + number2;
        break;
        case "-":
          calculation = number1 - number2;
          break;
          case "*":
            calculation = number1 * number2;
            break;
    }
    if (Number(answer) === calculation) {
      console.log('Correct!')
    } else {
      const incorrect = `${answer} is wrong answer ;(. Correct answer was ${calculation}.\nLet's try again, ${name()}!`
      console.log(incorrect)
      break
    }
    console.log(`Congratulations, ${name()}!`)
  }
}
