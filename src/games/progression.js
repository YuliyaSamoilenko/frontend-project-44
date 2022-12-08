import getGame from "../index.js";

import { randomNumber } from "../index.js";

const taskGame = 'What number is missing in the progression?'

const arithmProgression = (number1, step) => {
    
    const arithmProgressionArray = []
    for (let i = 0; i <= 10; i ++) {
        const number = number1 + step * i
        arithmProgressionArray.push(number)
        
    }
    return arithmProgressionArray
}

const roundGame = () => {
    const number1 = Math.abs(randomNumber(10))
    const step = Math.abs(randomNumber(10))
    const arithmProgressionArray = arithmProgression(number1, step)
    const unkownMemberIndex = Math.abs(randomNumber(10))
    const answer = arithmProgressionArray[unkownMemberIndex]
    arithmProgressionArray[unkownMemberIndex] = '..'
    const question = arithmProgressionArray.join('  ')
    
    return [question, answer]
}

export default () => {
    getGame(taskGame, roundGame)
}
