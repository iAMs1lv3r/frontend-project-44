export function getRandomInt(max) {
  return Math.floor(Math.random() * max)
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
export function isPrime(number) {
  if (number <= 1)
    return false

  if (number <= 3)
    return true

  if (number % 2 == 0 || number % 3 == 0)
    return false

  for (var i = 5; i * i <= number; i = i + 6) {
    if (number % i == 0 || number % (i + 2) == 0)
      return false
  }

  return true
}
