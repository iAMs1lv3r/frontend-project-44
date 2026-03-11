import greetPlayer from './cli.js'
import readlineSync from 'readline-sync'

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const isEven = num => {
    if (num === 0) return false
    return num % 2 === 0
}

const evenGame = () => {
    let playerName = greetPlayer()

    console.log('Answer "yes" if the number is even, otherwise answer "no".')

    for (let i = 0; i < 3; i++) {
        let randomInt = getRandomInt(21)
        let correctAnswer
        if (isEven(randomInt) === true) {
            correctAnswer = 'yes'
        } else {
            correctAnswer = 'no'
        }
        let stringAnswer = readlineSync.question(`Question: ${randomInt}\nYour answer: `)
        let boolAnswer
        if (stringAnswer === 'yes') {
            boolAnswer = true
        }else if (stringAnswer === 'no') {
            boolAnswer = false
        }
        if (isEven(randomInt) === boolAnswer) {
            console.log('Correct!')
        } else {
            console.log(`'${stringAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`)
            return
        }
    }
    console.log(`Congratulations, ${playerName}!`)
}
export default evenGame