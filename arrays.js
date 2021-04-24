var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  var newArray = array.unshift(element)
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element)
}

function addElementToEndOfArray(array, element) {
  var newArray = array.push(element))
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  const newArray = [...array, element]
  console.log(newArray)
}
