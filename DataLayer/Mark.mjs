export default class Mark {
    constructor(subject, mark) {
        this.subject = subject;
        this.mark = mark;
    }

    static toMark(obj){
        return new Mark(obj.subject, obj.mark);
    }
}