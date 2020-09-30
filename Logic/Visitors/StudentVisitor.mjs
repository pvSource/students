import * as Errors from "../../Errors/errors.mjs";

//Интерфейс! Для прочих визиторов
export default class StudentVisitor {
    startVisit() {
        throw new Errors.AbstractMethodError("StudentVisitor is an abstract class!");
    }

    visitStudent(number, student) {
        throw new Errors.AbstractMethodError("StudentVisitor is an abstract class!");
    }

    finishVisit() {
        throw new Errors.AbstractMethodError("StudentVisitor is an abstract class!");

    }
}