//
// This is only a SKELETON file for the 'High-Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(input) {
    this.input = input
  }

  get scores() {
    return this.input
  }

  get latest() {
    return this.input[this.input.length-1]
  }

  get personalBest() {
   return this.input.map(function(subArray) {
    return Math.max.apply(null, subArray);
  })
   }

  get personalTopThree() {
    throw new Error("Remove this statement and implement this function");
}
}