var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  console.log(array.unshift(element))
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  const newArray = [element, ...array]
  console.log(newArray)
}

function addElementToEndOfArray(array, element) {
  console.log(array.push(element))
}

function destructivelyAddElementToEndOfArray(array, element) {
  const newArray = [...array, element]
  console.log(newArray)
}