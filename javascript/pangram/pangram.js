//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (str) => {
  const correct = 'abcdefghijklmnopqrstuvwxyz'
  if(str === '') {
    return false
  }
  if(correct.includes(str)) {
    return true
  }
};
