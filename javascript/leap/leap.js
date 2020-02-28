//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (year) => {
  let leap = false
  console.log(year % 4)
  year % 4 === 0 ? leap = true : leap = false
  console.log(leap)
  return leap
};
