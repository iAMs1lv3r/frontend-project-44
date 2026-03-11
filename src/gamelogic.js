import greetPlayer from './cli.js'
import readlineSync from 'readline-sync'

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

const isEven = num => num % 2 === 0

const evenGame = () => {
  let playerName = greetPlayer()
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  for (let i = 0; i < 3; i++) {
    let randomInt = getRandomInt(21)
    let answer = readlineSync.question(`Question: ${randomInt}\nYour answer: `, {
      trueValue: ['yes', 'y', 'yep', 'yeah', 'yay', 'true'],
      falseValue: ['no', 'n', 'nope', 'nah', 'nay', 'false'],
    })
    if (isEven(randomInt) === answer) {
      console.log('Correct!')
    }
    else {
      console.log('Incorrect!')
    }
  }
  console.log(`Congratulations, ${playerName}!`)
}

export default evenGame
