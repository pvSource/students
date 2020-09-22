import {StudentVisitor} from "./StudentVisitor.mjs"
import {Student} from "./../DataLayer/Student.mjs"

class DetailedPrintVisitor extends StudentVisitor {
    constructor() {
        this.has_students = false;
    }

    startVisit() {
        this.has_students = false;
    }
    
    visitStudent(num, student) {
        process.stdout.write(num + ". ");
        student.printLong();
        this.has_students = true;
    }

    finishVisit() {
        if (!this.has_students) {
            console.log("В базе данных нет студентов!");
        }
    }
}