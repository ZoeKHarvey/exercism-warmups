//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor() {
  }

  isEquilateral(firstSide, secondSide, thirdSide) {
    console.log('--->', this.isEquilateral)
    if(firstSide === secondSide && secondSide === thirdSide) {
      return true;
    }
  }

  isIsosceles() {
    throw new Error("Remove this statement and implement this function");
  }

  isScalene() {
    throw new Error("Remove this statement and implement this function");
  }
}
