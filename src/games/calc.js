import getGame from "../index.js"

import {randomNumber} from "../index.js"

const taskGame = 'What is the result of the expression?'
             
const getRandomOperator = () => {
    const operatorArray = ['+', '-', '*']
    const index = Math.floor(Math.random() * operatorArray.length)
    let selectedOperator = operatorArray[index]
    return selectedOperator
  }

const calculation = (number1, number2, operator) => {
  switch (operator) {
    case "+":
      return number1 + number2
        case "-":
        return number1 - number2;
          case "*":
          return number1 * number2;
  }
}

const roundGame = () => {
  const number1 = randomNumber(10)
  const number2 = randomNumber(10)
  const operator = getRandomOperator()
  const question = `${number1} ${operator} ${number2}`
  const answer = calculation(number1, number2, operator)
  return [question, answer]  
}

export default () => {
  getGame(taskGame, roundGame)
}
    

