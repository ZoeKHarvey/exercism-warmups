//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (strOne, strTwo) => {
  if(strOne === '' && strTwo !== '') {
    throw 'left strand must not be empty'
  } 
  if(strTwo === '' && strOne !== '') {
    throw 'right strand must not be empty'
  }
  if(strOne.length !==  strTwo.length) {
    throw 'left and right strands must be of equal length'
  }
  let splitOne = strOne.split('')
  return splitOne.reduce((acc, elem, i) => {
    if(elem !== strTwo[i]) {
      acc++
    }
    return acc
  }, 0)

};


