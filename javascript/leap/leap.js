//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (year) => {
  let leap = false
  year % 4 === 0 ? leap = true : leap = false
  return leap
};
