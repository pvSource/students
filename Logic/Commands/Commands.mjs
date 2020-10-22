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
import Mark from "../../DataLayer/Mark.mjs";


import {language} from "./../../languages/language_choose.mjs"


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
    new_student.last_name = readline.question(language.last_name);
    new_student.first_name = readline.question(language.first_name);
    new_student.middle_name = readline.question(language.middle_name);
    new_student.group = readline.question(language.group);
    
    StudentRegistry.getInstance().addStudent(new Student(new_student.last_name, new_student.first_name, new_student.middle_name, new_student.group));
}

export function DeleteStudentCommand() {
    StudentRegistry.getInstance().visitStudents(new BriefPrintVisitor);
    let student_number = readline.question("Какого студента удалить?");
    //тут по всей видимости не дописано
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

    if (EditContext.getInstance().student.marks.some(function(current_subject){
        current_subject.subject == new_subject;
    })) {
        throw new Errors.StudentMarkError("Attempt to add already existing subject");
    }

    //for (let current_subject of EditContext.getInstance().student.marks.keys()) {
    //    if (current_subject == new_subject) {
    //        throw new Errors.StudentMarkError("Attempt to add already existing subject"); //добавить в Error
    //    }
    //}

    let new_mark = Number(readline.question("Оценка: "));//добавить ошибку на не integer;
    EditContext.getInstance().student.marks.push(new Mark(new_subject, new_mark));
    StudentRegistry.getInstance().save();
    // console.log(StudentRegistry.getInstance());
}

export function EditMarkCommand() { //здесь все корочен подредасчть не дописано
    let edit_subject = readline.question("По какому предмету Вы хотите изменить оценку: ");//переписать! под выбор номера из списка и вообще переписать короче
    
    if (EditContext.getInstance().student.marks.every(function(current_subject){
        current_subject.subject != edit_subject;
    })) {
        throw new Errors.StudentMarkError("Attempt to edit mark on non-existing subject");
    }

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
    //
    //
    //
    for(let i = 0; i < EditContext.getInstance().marks.length; i++) {
        if(EditContext.getInstance().marks[i].subject == del_subject) {
            EditContext.getInstance().marks.splice(del_subject_number_in_marks, 1);
            return;
        }
    }

    throw new Errors.StudentMarkError("Attempt to delete non-existing subject");
    
}
