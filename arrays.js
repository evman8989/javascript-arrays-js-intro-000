var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  newArray = array.unshift(element)
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  console.log(array.push(element))
}

function destructivelyAddElementToEndOfArray(array, element) {
  const newArray = [...array, element]
  console.log(newArray)
}
