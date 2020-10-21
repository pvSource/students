import fs from "fs";

import Student from "./Student.mjs";

export default class StudentRegistry { //ОСТОРОЖНО! тут применён паттерн Одиночка
    static instance = null;

    constructor() {
        if (StudentRegistry.instance != null) {
            throw new SingletoneError("Attempt to create a Singletone Class object twice!");
        }
        this.students = [];
        this._load();
    }

    static getInstance() {
        if (StudentRegistry.instance == null) {
            StudentRegistry.instance = new StudentRegistry();
        }
        return StudentRegistry.instance;
    }

    addStudent(student) { //ДОБАВИТЬ ВАРИАНТЫ ОШИБОК
        this.students.push(student);
        this.save();       
    }

    removeStudentByNumber(number) {
        this.students.splice(number, 1);
        this.save();
    }

    removeStudentByObject(student) {
        this.students.splice(this.students.indexOf(student), 1);
        this.save();
    }

    getStudentCount() {
        return this.students.length;
    }

    visitStudents(visitor) {
        visitor.startVisit();
        for(let i = 0; i < this.students.length; i++) {
            visitor.visitStudent(i, this.students[i]);
        }
        visitor.finishVisit();

    }

    _load() {
        try {
            let stud_reg_data = fs.readFileSync("./studRegData.json", "utf-8");
            this.students = JSON.parse(stud_reg_data).map(Student.fromObject);
        } catch (err) {}
        
    }

    save() {
        fs.writeFileSync("./studRegData.json", JSON.stringify(this.students));
    }
}