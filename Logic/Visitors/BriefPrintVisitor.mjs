import StudentVisitor from "./StudentVisitor.mjs"
import Student from "./../../DataLayer/Student.mjs"
import { language } from "../../languages/language_choose.mjs";
import { language } from "./../../languages/language_choose.mjs";

export default class BriefPrintVisitor extends StudentVisitor {
    constructor() {
        super();
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
            console.log(language.DB_has_no_any_students);
        }
    }
}