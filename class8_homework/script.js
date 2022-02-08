// function q1(arr) {
//     let arr2 = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].grade > 75) {
//             arr2.push(std.fn);
//         }
//     }
//     return arr2;
// }

// let arr = [
//     { fn: 'yosi', grade: 70 },
//     { fn: 'miri', grade: 60 },
//     { fn: 'adel', grade: 75 },
//     { fn: 'shimi', grade: 82 },
//     { fn: 'zipi', grade: 85 },
//     { fn: 'bar', grade: 100 },
// ];

// console.log(q1(arr));

class Student {
    grades = [];

    constructor(fullName, Id) {
        this.fullName = fullName;
        this.Id = Id;
    }

    gradeAvg() {
        let sum = 0;
        for (let i = 0; i < this.grades.length; i++) {
            sum += this.grades[i];
        }
        return sum / this.grades.length;
    }

    higherGrade() {
        let higher = 0;
        for (let i = 0; i < this.grades.length; i++) {
            if (higher < this.grades[i]) {
                higher = this.grades[i];
            }
        }
        return higher;
    }
}

class Course {
    students = [];
    lecturer = [];

    constructor(name) {
        this.name = name;
    }

    addStudent(name) {
        if (this.students.length < 20) {
            this.students.push(name);
            return true;
        }
        return false;
    }

    higherGrade() {
        let higher = 0,
            student;
        for (let i = 0; i < this.students.length; i++) {
            if (higher > this.students[i].higherGrade()) {
                higher = this.students[i].higherGrade();
                student = this.students[i];
            }
            return student;
        }
    }
}
