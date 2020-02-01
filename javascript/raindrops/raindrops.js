//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (num) => {
  if(num%3 !== 0 && num%5 !==0 && num%7 !==0) {
    return num.toString()
  if(num%3 === 0) {
    return 'Pling'
  }
  if(num%5 !==0) {
    return num.toString()
  } else {
    return 'Plang'
  }
};
