import getGame from "../index.js"

import {randomNumber} from "../index.js"

const taskGame = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const calculation = (number) => {
    for (let i = 2; i < number; i++)
    if (number !== 2 && number % i === 0) {
return 'no'
} else {
    return 'yes'
}
}

const roundGame = () => { 
    const number = Math.abs(randomNumber(100))
    const question = number
    const answer = calculation()
    return [question, answer]
}  

export default () => {
    getGame(taskGame, roundGame)
}