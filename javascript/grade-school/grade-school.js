//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {

    constructor() {
        this.school = {};
    }

    roster() {
        return JSON.parse(JSON.stringify(this.school));
    }

    add(name, grade) {
        this.school[grade] = (this.school[grade] || []).slice().concat(name).sort();
    }

    grade(grade) {
        return (this.school[grade] || []).slice();
    }
}
