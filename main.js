class Students {
    marks = [5, 4, 4, 5];
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
    }


    get getInfo(){
        return console.log('Студент ' +this.course +'курсу, ' +this.university +', ' +this.fullName +'.');
    }

    get getMarks() {
        return console.log('getMarks: ', this.marks);
    }

    set setMarks(numbers) {
        if (this.marks === null) {
            return null;
        } else {
            return this.marks.push(numbers);
        }
    }

    getAverageMark() {
        if (this.marks == null) {
            return null;
        } else {
            let average =  this.marks.reduce((a, b) => {
                return a+b;
            }, 0) / this.marks.length;
            return average;
        }
    }

    dismiss() {
        return this.marks = null;
    }

    recover() {
        return this.marks = [5, 4, 4, 5];
    }
}

let student = new Students('НУЛП', 2, 'Муран Василь');
student.getInfo;
student.getMarks;
student.setMarks = 5;
student.getMarks;
console.log('getAverageMark: ', student.getAverageMark());
console.log('dismiss: ', student.dismiss());
console.log('recover: ', student.recover());

