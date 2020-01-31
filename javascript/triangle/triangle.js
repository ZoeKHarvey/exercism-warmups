//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(firstSide, secondSide, thirdSide) {
    this.firstSide = firstSide
    this.secondSide = secondSide
    this.thirdSide = thirdSide
    this.isItIsosceles = false
    this.isItScalene = false
  }

  isEquilateral() {
    if(this.firstSide === this.secondSide && this.secondSide === this.thirdSide && this.firstSide !== 0 ) {      return true;
    } else {
      return false
    }
  }

  isIsosceles() {
    if(this.firstSide === this.secondSide || this.secondSide === this.thirdSide || this.firstSide === this.thirdSide) {
      this.isItIsosceles = true
    } else {
      this.isItIsosceles = false
    }

    if (this.firstSide === 1 || this.secondSide === 1 || this.thirdSide === 1) {
      this.isItIsosceles = false;
    }

    return this.isItIsosceles
  }

  isScalene() {
    if(this.firstSide !== this.secondSide && this.secondSide !== this.thirdSide && this.firstSide !== this.thirdSide) {
      this.isItScalene = true
    } else {
      this.isItScalene = false
    }
    
    if(this.secondSide + this.thirdSide < this.firstSide) {
      this.isItScalene = false
    }
    return this.isItScalene
  }
}
