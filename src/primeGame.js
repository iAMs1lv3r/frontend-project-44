import readlineSync from 'readline-sync'
import { isPrime, resolveGame, getRandomInt } from './lib.js'
import greetPlayer from './cli.js'

export default function primeGame() {
  let playerName = greetPlayer()
  console.log(`Answer "yes" if given number is prime. Otherwise answer "no".`)
  for (let i = 0; i < 3; i++) {
    let randomInt = getRandomInt(101)
    let correctAnswer = isPrime(randomInt) ? 'yes' : 'no'
    let playerAnswer = readlineSync.question(`Question: ${randomInt}\nYour answer: `).toString()
    let isPlayerCorrect = resolveGame(playerAnswer, correctAnswer, playerName)
    if (isPlayerCorrect === false) {
      return
    }
  }
  console.log(`Congratulations, ${playerName}!`)
}
