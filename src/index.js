import readlineSync from 'readline-sync'

export const randomNumber = (max) => {
    return Math.floor(Math.random() * max)
  }

const getGame = (taskGame, roundGame) => {
    console.log('Welkome to the Brain Games!')
    const userName = readlineSync.question('May I have your name?  ')
    console.log('Hello, ' + userName + '!')
    console.log(`${taskGame}`)
    
    for (let i = 0; i < 3; i++) {
    const [question, answer] = roundGame()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')
     if (userAnswer !== String(answer)) {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${userName}!`)
        break
    } else {
        console.log('Correct!')
    }
}
console.log(`Congratulations, ${userName}!`)
}

export default getGame