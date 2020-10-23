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


import {language} from "./../../language_choose.mjs"


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
    StudentRegistry.getInstance().save();
}

export function DeleteStudentCommand() {
    StudentRegistry.getInstance().visitStudents(new BriefPrintVisitor);
    let student_number = Number(readline.question(language.what_name_of_student_do_you_want_to_delete));
    StudentRegistry.getInstance().students.splice(student_number, 1);
    StudentRegistry.getInstance().save();
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
    let student_number = readline.question(language.choose_students_number);
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
    let new_name = readline.question(language.new_name);
    EditContext.getInstance().student.first_name = new_name;
    StudentRegistry.getInstance().save();
}

export function EditMiddleNameCommand() {
    let new_name = readline.question(language.new_middle_name);
    EditContext.getInstance().student.middle_name = new_name;
    StudentRegistry.getInstance().save();
}

export function EditLastNameCommand() {
    let new_name = readline.question(language.new_last_name);
    EditContext.getInstance().student.last_name = new_name;
    StudentRegistry.getInstance().save();
}

export function EditGroupCommand() {    
    let new_group = readline.question(language.new_group);
    EditContext.getInstance().student.group = new_group;
    StudentRegistry.getInstance().save();    
}


//____________StudentsEditors.MarksEditors:

export function AddMarkCommand() {
    let new_subject = readline.question(language.add_subject_mark_question);

    if (EditContext.getInstance().student.marks.some(function(current_subject){
        current_subject.subject == new_subject;
    })) {
        throw new Errors.StudentMarkError("Attempt to add already existing subject");
    }

    let new_mark = Number(readline.question(language.mark));//добавить ошибку на не integer;
    EditContext.getInstance().student.marks.push(new Mark(new_subject, new_mark));
    StudentRegistry.getInstance().save();
}

export function EditMarkCommand() { //здесь все корочен подредасчть не дописано
    let edit_subject = readline.question(language.edit_subject_mark_question);
    
    for (let i = 0; i < EditContext.getInstance().student.marks.length; i++) {
        if (EditContext.getInstance().student.marks[i].subject == edit_subject) {
            let new_mark = Number(readline.question(language.new_mark));
            EditContext.getInstance().student.marks[i].mark = new_mark;
            StudentRegistry.getInstance().save();
            return;git 
        }
    }
    throw new Errors.StudentMarkError("Attempt to edit mark on non-existing subject");
}

export function DeleteMarkCommand() {
    let del_subject = readline.question(language.del_subject_mark_question);

    for(let i = 0; i < EditContext.getInstance().student.marks.length; i++) {
        if(EditContext.getInstance().student.marks[i].subject == del_subject) {
            EditContext.getInstance().student.marks.splice(i, 1);
            StudentRegistry.getInstance().save();
            return;
        }
    }

    throw new Errors.StudentMarkError("Attempt to delete non-existing subject");
    
}
