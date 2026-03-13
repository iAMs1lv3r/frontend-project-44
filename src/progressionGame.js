import { resolveGame, getRandomInt } from './lib.js'
import greetPlayer from './cli.js'
import readlineSync from 'readline-sync'

export default function progressionGame() {
  let playerName = greetPlayer()
  console.log('What number is missing in the progression?')
  for (let i = 0; i < 3; i++) {
    let progressionLength = getRandomInt(6) + 5 // 5-10
    let missingIndex = getRandomInt(progressionLength)
    let step = getRandomInt(11)
    let firstInt = getRandomInt(21)
    let progression = []
    let shownProgression = []

    for (let i = 0; i < progressionLength; i++) {
      progression.push(firstInt + step * i)
      shownProgression.push(firstInt + step * i)
    }

    shownProgression[missingIndex] = '..'
    let shownProgressionString = shownProgression.join(' ')
    let correctAnswer = progression[missingIndex].toString()
    let playerAnswer = readlineSync.question(`Question: ${shownProgressionString}\nYour answer: `).toString()
    let isPlayerCorrect = resolveGame(playerAnswer, correctAnswer, playerName)

    if (isPlayerCorrect === false) {
      return
    }
  }
  console.log(`Congratulations, ${playerName}!`)
}
