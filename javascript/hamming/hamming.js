//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (strOne, strTwo) => {
  if(strOne.length !==  strTwo.length) {
    return 0
  }
  let splitOne = strOne.split('')
  return splitOne.reduce((acc, elem, i) => {
    if(elem !== strTwo[i]) {
      acc++
    }
    return acc
  }, 0)
};
