import StudentVisitor from "./../Logic/Visitors/StudentVisitor.mjs";


export default class Student { 
    constructor(last_name, first_name, middle_name, group, marks) {
        this.last_name = last_name;
        this.first_name = first_name;
        this.middle_name = middle_name;
        this.group = group;
        this.marks = marks;
    }

    printShort() {
        console.log(` Фамилия: ${this.last_name}\n Имя: ${this.first_name}\n Отчество: ${this.middle_name}\n Группа: ${this.group}`);
    }

    printSubjects() {
        //дописать
    }

    printLong() {
        this.printShort();
        this.printSubjects()
    }

    //Методы оценки успеваемости студента low/high:

    isHighAchiever() {
        for (let current_mark of this.marks.values()) {
            if (current_mark != 5) {
                return false;
            }
        }
        return true;
    }

    isLowAchiever() {
        for (let current_mark of this.marks.values()) {
            if (current_mark < 3) {
                return true;
            }
        }
        return false;
    }
}