//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (num) => {
  let statement = ''
  if(num%3 !== 0 && num%5 !==0 && num%7 !==0) {
    return num.toString()
  }
  if(num%3 === 0) {
    statement = statement + 'Pling'
  }
  if(num%5 === 0) {
    statement = statement + 'Plang'
  }
  if(num%7 === 0) {
    statement = statement + 'Plong'
  }
  return statement
};

