export default class StudentRegistry { //ОСТОРОЖНО! тут применён паттерн Одиночка
    static instance = null;

    constructor() {
        if (StudentRegistry.instance != null) {
            throw new SingletoneError("Attempt to create a Singletone Class object twice!");
        }

        this.students = [];
    }

    static getInstance() {
        if (StudentRegistry.instance == null) {
            StudentRegistry.instance = new StudentRegistry();
        }
        return StudentRegistry.instance;
    }

    addStudent(student) { //ДОБАВИТЬ ВАРИАНТЫ ОШИБОК
        this.students.push(student);        
    }

    removeStudentByNumber(number) {
        this.students.splice(number, 1);
    }

    removeStudentByObject(student) {
        this.students.splice(this.students.indexOf(student), 1);
    }

    getStudentCount() {
        return this.students.length;
    }

    visitStudents(visitor) {
        visitor.startVisit();
        for(let i = 0; i < this.students.length; i++) {
            visitor.visitStudents(i, this.students[i]);
        }
        visitor.finishVisit();

    }

    static load() {

    }

    save() {

    }
}