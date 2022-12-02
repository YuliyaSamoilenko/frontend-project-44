import readlineSync from 'readline-sync'

export const greeting = () => {
  console.log('Welkome to the Brain Games!')
}

const random = (max) => {
  return Math.floor(Math.random() * max)
}

const getRandomOperator = () => {
  const operatorArray = ['+', '-', '*']
  const index = Math.floor(Math.random() * operatorArray.length)
  let operator = operatorArray[index]
  return operator
}

export const brainCalc = () => {
  const userName = readlineSync.question('May I have your name?  ')
  console.log('Hello, ' + userName + '!')
  console.log('What is the result of the expression?')
  for (let i = 0; i < 3; i++) {
    const number1 = random(10)
    const number2 = random(10)
    const result = `${number1} ${Number(operator)} ${number2}`
    console.log('Question: ' + number1 + Number(operator) + number2)
    const answer = readlineSync.question('Your answer: ')
    if (answer === result) {
      console.log('Correct!')
    } else {
      const result = `${answer} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${userName}!`
      console.log(result)
      break
    }
    console.log('Congratulations, ' + userName + '!')
  }
}
