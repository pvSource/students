import {AbstractMethodError} from "../../Errors/errors.mjs";

//Интерфейс! Для прочих визиторов
export default class StudentVisitor {
    startVisit() {
        throw new AbstractMethodError("StudentVisitor is an abstract class!");
    }

    visitStudent(number, student) {
        throw new AbstractMethodError("StudentVisitor is an abstract class!");
    }

    finishVisit() {
        throw new AbstractMethodError("StudentVisitor is an abstract class!");

    }
}