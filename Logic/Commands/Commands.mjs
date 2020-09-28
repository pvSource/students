//________Add&DelStudentsCommands:

import EditContext from "./../Context/EditContext.mjs";

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
    let client_wants_to_add_marks = readline.question("Добавить оценки ")//здесь остановился..................................................
    //дописать

    
    StudentRegistry.getInstance().addStudent(new_student);
}

export function DeleteStudentCommand() {
    //
}



//________ShowStudentsCommands:

export function ShowHighAchieverCommand() {
    StudentRegistry.getInstance().visitStudents(new HighAchievedVisitor);
}

export function ShowLowAchieverCommand() {
    StudentRegistry.getInstance().visitStudents(new LowAchievedVisitor);
}

export function ListStudentsCommand () {
    StudentRegistry.getInstance().visitStudents(new DetailedPrintVisitor);
}



//________EditContextCommands:

export function SelectStudentCommand() {
    StudentRegistry.getInstance().visitStudents(new BriefPrintVisitor);
    let student = readline.question("Выберите номер студента:"); //подключить ридлайн
    EditContext.getInstance().student = student; //связать контекст
}

export function ShowSelectedCommand() {
    EditContext.getInstance().student.printLong();
}

export function DeselectStudentCommand() {
    delete EditContext.getInstance(); //разобраться во время отладки как лучше
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
    let new_mark = Number(readline.question("Оценка: "));//добавить ошибку на не integer;
    EditContext.getInstance().student.marks.set(new_subject, new_mark);
}

export function EditMarkCommand() {
    let edit_subject = readline.question("По какому предмету Вы хотите изменить оценку: ");//переписать! под выбор номера из списка и вообще переписать короче 
    let new_mark = Number(readline.question("Оценка: "));//добавить ошибку на не integer;
    EditContext.getInstance().student.marks.set(edit_subject, new_mark); //может не переписать! Отладить, убедиться, что это работает!
}

export function DeleteMarkCommand() {
    let del_subject = readline.question("Какой предмет удалить: ");
    EditContext.getInstance().student.marks.delete(del_subject);
}
