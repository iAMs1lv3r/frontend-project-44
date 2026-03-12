import greetPlayer from './cli.js'
import readlineSync from 'readline-sync'
import { isEven } from './lib.js'
import { getRandomInt } from './lib.js'
import { resolveGame } from './lib.js'

const evenGame = () => {
  let playerName = greetPlayer()

  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  for (let i = 0; i < 3; i++) {
    let randomInt = getRandomInt(21)

    let correctAnswer = isEven(randomInt) ? 'yes' : 'no'

    let playerAnswer = readlineSync.question(`Question: ${randomInt}\nYour answer: `).toString()

    let isPlayerCorrect = resolveGame(playerAnswer, correctAnswer, playerName)

    if (isPlayerCorrect === false) {
      return
    }
  }
  console.log(`Congratulations, ${playerName}!`)
}
export default evenGame
