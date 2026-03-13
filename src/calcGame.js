import greetPlayer from './cli.js'
import readlineSync from 'readline-sync'
import { getRandomInt, resolveGame } from './lib.js'

export default function calcGame() {
  let playerName = greetPlayer()
  for (let i = 0; i < 3; i++) {
    let firstInt = getRandomInt(21)
    let secondInt = getRandomInt(21)
    let operation = getRandomInt(3)
    console.log('What is the result of the expression?')
    let correctAnswer
    switch (operation) {
      case 0: //*
        operation = '*'
        correctAnswer = (firstInt * secondInt).toString()
        break
      case 1:// +
        operation = '+'
        correctAnswer = (firstInt + secondInt).toString()
        break
      case 2:// -
        operation = '-'
        correctAnswer = (firstInt - secondInt).toString()
        break
    }
    let playerAnswer = readlineSync.question(`Question: ${firstInt} ${operation} ${secondInt}\nYour answer: `)

    let isPlayerCorrect = resolveGame(playerAnswer, correctAnswer, playerName)
    if (isPlayerCorrect === false) {
      return
    }
  }
  console.log(`Congratulations, ${playerName}!`)
}
