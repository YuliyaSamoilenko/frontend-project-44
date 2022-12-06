import readlineSync from 'readline-sync'

export const greeting = () => {
    console.log('Welkome to the Brain Games!')
}

export const random = (max) => {
    return Math.floor(Math.random() * max)
  }

export const game = () => {
    const userName = readlineSync.question('May I have your name?  ')
    console.log('Hello, ' + userName + '!')
    console.log(`${quest}`)
    for (i = 0; i < 3; i++) {
    const question = getQuestion
    console.log(`Question: ${question}`)
    const answer = readlineSync.question('Your answer: ')
    if (answer === correct) {
        console.log('Correct!')
    } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${correct}.\nLet's try again, ${userName}!`)
        break
    }
}
console.log(`Congratulations, ${userName}!`)
}