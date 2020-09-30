//________Add&DelStudentsCommands:
import readline from "readline-sync";

import EditContext from "./../Context/EditContext.mjs";
import StudentRegistry from "./../../DataLayer/StudentRegistry.mjs";
import Student from "./../../DataLayer/Student.mjs"

import BriefPrintVisitor from "./../Visitors/BriefPrintVisitor.mjs";
import DetailedPrintVisitor from "./../Visitors/DetailedPrintVisitor.mjs";
import HighAchieverVisitor from "./../Visitors/HighAchieverVisitor.mjs";
import LowAchieverVisitor from "./../Visitors/LowAchieverVisitor.mjs";

import * as Errors from "./../../Errors/errors.mjs"


export function AddStudentCommand () {
    /*
            class Student { 
            constructor(last_name, first_name, middle_name, group, marks) {
                this.last_name = last_name;
                this.first_name = first_name;
                this.middle_name = middle_name;
                this.group = group;
                this.marks = marks;
            }
    */
    let new_student = {};
    new_student.last_name = readline.question("*Последнее имя: ");
    new_student.first_name = readline.question("*Первое имя: ");
    new_student.middle_name = readline.question("*Среднее имя: ");
    new_student.group = readline.question("*Группа: ");
    // let client_wants_to_add_marks = readline.question("Добавить оценки ") // доработать в будущем

    
    StudentRegistry.getInstance().addStudent(new Student(new_student.last_name, new_student.first_name, new_student.middle_name, new_student.group));
}

export function DeleteStudentCommand() {
    StudentRegistry.getInstance().visitStudents(new BriefPrintVisitor);
    let student_number = readline.question("Какого студента удалить?");
    
}



//________ShowStudentsCommands:

export function ShowHighAchieverCommand() {
    StudentRegistry.getInstance().visitStudents(new HighAchieverVisitor);
}

export function ShowLowAchieverCommand() {
    StudentRegistry.getInstance().visitStudents(new LowAchieverVisitor);
}

export function ListStudentsCommand () {
    StudentRegistry.getInstance().visitStudents(new DetailedPrintVisitor);
}



//________EditContextCommands:

export function SelectStudentCommand() {
    StudentRegistry.getInstance().visitStudents(new BriefPrintVisitor);
    let student_number = readline.question("Выберите номер студента:");
    EditContext.getInstance().student = StudentRegistry.getInstance().students[student_number]; //связать контекст
}

export function ShowSelectedCommand() {
    EditContext.getInstance().student.printLong();
}

export function DeselectStudentCommand() {
    EditContext.getInstance().student = null;
}



//________StudentsEditors:

//____________StudentsEditors.NamesEditors:

export function EditFirstNameCommand() {
    let new_name = readline.question("Новое *первое имя: ");
    EditContext.getInstance().student.first_name = new_name;
}

export function EditMiddleNameCommand() {
    let new_name = readline.question("Новое *среднее имя: ");
    EditContext.getInstance().student.middle_name = new_name;
}

export function EditLastNameCommand() {
    let new_name = readline.question("Новое *последнее имя: ");
    EditContext.getInstance().student.last_name = new_name;
}

export function EditGroupCommand() {    
    let new_group = readline.question("Новая группа: ");
    EditContext.getInstance().student.group = new_group;    
}


//____________StudentsEditors.MarksEditors:

export function AddMarkCommand() {
    let new_subject = readline.question("По какому предмету Вы хотите добавить оценку: ");
    for (let current_subject of EditContext.getInstance().student.marks.keys()) {
        if (current_subject == new_subject) {
            throw new Errors.StudentMarkError("Attempt to add already existing subject"); //добавить в Error
        }
    }
    let new_mark = Number(readline.question("Оценка: "));//добавить ошибку на не integer;
    EditContext.getInstance().student.marks.set(new_subject, new_mark);
}

export function EditMarkCommand() {
    let edit_subject = readline.question("По какому предмету Вы хотите изменить оценку: ");//переписать! под выбор номера из списка и вообще переписать короче 
    for (let current_subject of EditContext.getInstance().student.marks.keys()) {
        if (current_subject == new_subject) {
            let new_mark = Number(readline.question("Оценка: "));
            EditContext.getInstance().marks.set(edit_subject, new_mark);
            return;
        }
    }
    throw new Errors.StudentMarkError("Attempt to edit mark on non-existing subject");
}

export function DeleteMarkCommand() {
    let del_subject = readline.question("Какой предмет удалить: ");
    EditContext.getInstance().marks.delete(del_subject);
}
