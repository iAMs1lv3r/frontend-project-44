export function getRandomInt(max) {
  return Math.floor(Math.random() * max )
}

export function isEven(num) {
  if (num === 0) return false
  return num % 2 === 0
}

export function greatestCommonDenominator(firstInt, secondInt) {
  firstInt = Math.abs(firstInt)
  secondInt = Math.abs(secondInt)
  while (secondInt !== 0) {
    let temp = secondInt
    secondInt = firstInt % secondInt
    firstInt = temp
  }
  return firstInt
}

export function resolveGame(playerAnswer, correctAnswer, playerName) {
  if (playerAnswer === correctAnswer) {
    console.log('Correct!')
  }
  else {
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`)
    return false
  }
}
