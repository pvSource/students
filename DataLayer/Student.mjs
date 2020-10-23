import StudentVisitor from "./../Logic/Visitors/StudentVisitor.mjs";
import Mark from "./Mark.mjs";
import {language} from "./../language_choose.mjs"

export default class Student { 
    constructor(last_name, first_name, middle_name, group) {
        this.last_name = last_name;
        this.first_name = first_name;
        this.middle_name = middle_name;
        this.group = group;
        this.marks = [];
    }

    printShort() {
        console.log(`\n ${language.last_name}: ${this.last_name}\n ${language.first_name}: ${this.first_name}\n ${language.middle_name}: ${this.middle_name}\n ${language.group}: ${this.group}`);
    }

    printSubjects() {
        this.marks.forEach(function(item, i, arr){
            console.log(`   ${i+1}. ${item.subject}: ${item.mark}`)
        });
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
    }

    isLowAchiever() {
        return this.marks.some(function(current_mark){
            return(current_mark.mark < 3)
        })
    }

    static fromObject(obj) {
        let new_stud = new Student(obj.last_name, obj.first_name, obj.middle_name, obj.group);
        obj.marks.forEach(function(current_mark){
            new_stud.marks.push(current_mark);
        });
        return new_stud;
    }
}