/* Create a validation class similar to ‘yup’ and add validations for required, min and max
  for strings. Expose an isValid method that returns true or false based on the argument passed */

class CustomYup {
  constructor() {
    this.arr = []
  }

  required() {
    this.arr.push((value) => {
      if (!value) {
        return false
      }
      return true
    })
    return this
  }

  min(length) {
    this.arr.push((value) => {
      if (value.length < length) {
        return false
      }
      return true
    })
    return this
  }

  max(length) {
    this.arr.push((value) => {
      if (value.length > length) {
        return false
      }
      return true
    })
    return this
  }

  isValid(input) {
    for (const method of this.arr) {
      const result = method(input)
      if (!result) {
        return false
      }
    }
    return true
  }

}

const obj1 = new CustomYup()
obj1.required().min(9).max(20)

console.log(obj1.isValid(""))
console.log(obj1.isValid("hello"))
console.log(obj1.isValid("hellooooooo"))
console.log(obj1.isValid("hellllooooooooooooooooooooooooooo"))

