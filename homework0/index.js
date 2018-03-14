const plus = (...args) => args.reduce(
  (left, right) => left + right,
  0
)


const multiply = (...args) => args.reduce(
  (left, right) => left * right,
  1
)

const mergeArrays = (...args) => args.reduce(
  (left, right) => left.concat(right),
  []
)

const filterFemales = people => people.filter(
  user => user.gender == 'female'
)

const people = [
  {
    firstName: 'Ilya',
    lastName: 'Osipov',
    gender: 'male'
  },
  {
    firstName: 'Evgeniy',
    lastName: 'Osipov',
    gender: 'female'
  },
  {
    firstName: 'Alexandra',
    lastName: 'Semenova',
    gender: 'female'
  },
  {
    firstName: 'Artem',
    lastName: 'Lomonosov',
    gender: 'male'
  }
]

const getQuadrant = (x, y) => {
  let answer
  if (x == 0 && y == 0) answer = 'Center'
  if (x == 0 && y > 0) answer = 'Betweem 2 and 1'
  if (x == 0 && y > 0) answer = 'Betweem 2 and 1'
  if (x > 0 && y == 0) answer = 'Betweem 1 and 4'
  if (x < 0 && y == 0) answer = 'Betweem 2 and 3'
  if (x > 0 && y > 0) answer = 'In 1'
  if (x < 0 && y > 0) answer = 'In 2'
  if (x > 0 && y < 0) answer = 'In 4'
  if (x < 0 && y < 0) answer = 'In 3'
  return answer
}

const objectToQueryString = (object) => encodeURIComponent(
  Object.entries(object).map(
      ([key, value]) => `${key}=${value}`
  ).join("&")
)

const person = {
    address: {
        street: "Кутузовский проспект"
    }
}

var getIn = (object, path, def) => path.reduce(
    (currentObject, property) => {
      if (currentObject && currentObject.hasOwnProperty(property)) {return currentObject[property]}
    },
    object
  ) || def

// Basic tests
console.log(plus(1, 2))
console.log(multiply(3, 10))
console.log(mergeArrays([1, 2, 3], [4, 5]))
console.log(filterFemales(people))
console.log(getQuadrant(1, 2))
console.log(getQuadrant(-1, 2))
console.log(getQuadrant(-2, -3))
console.log(getQuadrant(4, -7))
console.log(getQuadrant(0, 0))
console.log(plus(2, 3, 5, 7, 3))
console.log(objectToQueryString({ name1: 'John', name2: 'Федор' }))
console.log(getIn(person, ['address', 'street'], 'Бомж'))
// Own tests
console.log(plus())
console.log(multiply())
console.log(multiply(2, 3, -5))
console.log(getIn(person, ['address'], 'Бомж'))
console.log(getIn(person, ['street'], 'Бомж'))
