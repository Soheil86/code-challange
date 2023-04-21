export default class Transform {
  fibonacci(number) {
    if (number < 0) {
      throw new Error('Number must be greater than 0')
    }
    let a = 0
    let b = 1

    while (b < number) {
      const temp = b
      b = a + b
      a = temp
    }

    if (number - a < b - number) {
      return a
    } else {
      return b
    }
  }
}
