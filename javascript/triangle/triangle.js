//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(firstSide, secondSide, thirdSide) {
    this.firstSide = firstSide
    this.secondSide = secondSide
    this.thirdSide = thirdSide
  }

  isEquilateral() {
    if(this.firstSide === this.secondSide && this.secondSide === this.thirdSide && this.firstSide !== 0 ) {
      console.log(this.firstSide, this.secondSide, this.thirdSide)
      return true;
    } else {
      return false
    }
  }

  isIsosceles() {
    throw new Error("Remove this statement and implement this function");
  }

  isScalene() {
    throw new Error("Remove this statement and implement this function");
  }
}
