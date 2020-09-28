import StudentVisitor from "./StudentVisitor.mjs"
import Student from "./../../DataLayer/Student.mjs"

export default class LowAchieverVisitor extends StudentVisitor {
    constructor() {
        super();
        this.has_students = false;
    }

    startVisit() {
        this.has_students = false;
    }
    
    visitStudent(num, student) {
        if (student.isLowAchiever()) {
            process.stdout.write(num + ". ");
            student.printLong();
            this.has_students = true;
        }
    }

    finishVisit() {
        if (!this.has_students) {
            console.log("В базе данных нет студентов!");
        }
    }
}