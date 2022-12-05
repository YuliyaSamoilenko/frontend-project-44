import readlineSync from 'readline-sync'

export const greeting = () => {
    console.log('Welkome to the Brain Games!')
}

export const name = () => {
const userName = readlineSync.question('May I have your name?  ')
    console.log('Hello, ' + userName + '!')
    return userName
}

export const random = (max) => {
    return Math.floor(Math.random() * max)
  }