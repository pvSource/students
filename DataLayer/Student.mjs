import StudentVisitor from "./../Logic/Visitors/StudentVisitor.mjs";
import Mark from "./Mark.mjs";

export default class Student { 
    constructor(last_name, first_name, middle_name, group) {
        this.last_name = last_name;
        this.first_name = first_name;
        this.middle_name = middle_name;
        this.group = group;
        this.marks = [];
    }

    printShort() {
        console.log(`\n Фамилия: ${this.last_name}\n Имя: ${this.first_name}\n Отчество: ${this.middle_name}\n Группа: ${this.group}`);
    }

    printSubjects() {
        this.marks.forEach(function(item, i, arr){
            console.log(`   ${i+1}. ${item.subject}: ${item.mark}`)
        });



        //for (let subj_mark of this.marks) {
        //    console.log(` ${subj_mark[0]}: ${subj_mark[1]}`);         
        //}
        //console.log(`\n`);
    }

    printLong() {
        this.printShort();
        this.printSubjects()
    }

    //Методы оценки успеваемости студента low/high:

    isHighAchiever() {
        return this.marks.every(function(current_mark){
            return current_mark.mark == 5;
        })

        //for (let current_mark of this.marks.values()) {
        //    if (current_mark != 5) {
        //        return false;
        //    }
        //}
        //return true;
    }

    isLowAchiever() {
        return this.marks.some(function(current_mark){
            return(current_mark.mark < 3)
        })


        //for (let current_mark of this.marks.values()) {
        //    if (current_mark < 3) {
        //        return true;
        //    }
        //}
        //return false;
    }

    static fromObject(obj) {
        let new_stud = new Student(obj.last_name, obj.first_name, obj.middle_name, obj.group);
        //new_stud.marks.push(obj.marks.forEach(Mark.toMark)); // ОТЛАДИТЬ! Возможен некорректный синтаксис
        obj.marks.forEach(function(current_mark){
            new_stud.marks.push(current_mark);
        });
        //new_stud.marks = new Map(Object.entries(obj.marks));
        return new_stud;
    }
}