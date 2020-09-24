//________Add&DelStudentsCommands:

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
    new_student = "aaa";
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
    
}

export function EditMiddleNameCommand() {
    
}

export function EditLastNameCommand() {
    
}

export function EditGroupCommand() {
    
}


//____________StudentsEditors.MarksEditors:

export function AddMarkCommand() {
    
}

export function EditMarkCommand() {
    
}

export function DeleteMarkCommand() {
    
}


