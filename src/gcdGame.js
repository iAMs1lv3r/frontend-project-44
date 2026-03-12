import greetPlayer from './cli.js'
import readlineSync from 'readline-sync'
import { greatestCommonDenominator } from './lib.js'
import { getRandomInt, gameResolve } from './lib.js'

export default function gcdGame() {
  let playerName = greetPlayer()
  console.log('Find the greatest common divisor of given numbers.')
  for (let i = 0; i < 3; i++) {
    let firstInt = getRandomInt(101)
    let secondInt = getRandomInt(101)
    let correctAnswer = greatestCommonDenominator(firstInt, secondInt).toString()
    console.log(`Question: ${firstInt} ${secondInt}`)

    let playerAnswer = readlineSync.question(`Your answer: `).toString()
    let gameResolve = resolveGame(playerAnswer, correctAnswer, playerName)
    if (gameResolve === false) {
      return
    }
  }
  console.log(`Congratulations, ${playerName}!`)
}
