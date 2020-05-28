//Kata 1: ADD (1 POINT)

function add(x, y) {
  return x + y
}
console.log(add(8, 6))

//Kata 2: MULTIPLY (2 POINTS)

function multiply(a, b) {
  let answer = a
  for (let i = 0; i < b - 1; i++) {
    answer += a
  }
  return answer
}
console.log(multiply(22, 11))

//Kata 3: POWER/EXPON (2 POINTS)

function power(x, n) {
  let answer = x
  for (let i = 0; i < n - 1; i++) {
    answer = multiply(answer, x)
  }
  return answer
}
console.log(power(6, 2))
console.log(power(16, 24))


/*Kata 4: FACTORIAL (2 POINTS)

function factorial(m) {
  let answer = m
  for (let i = 0; i >= -1; i++)
    answer = multiply(answer, answer)
  return answer
}
console.log(factorial(125))*/