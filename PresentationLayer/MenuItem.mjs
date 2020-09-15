export class MenuItem {
    constructor(title) {
        this.setTitle(title);
    }

    setTitle(title) {
        this._title = title;
    }

    getTitle() {
        return this._title;
    }

    run() {
        throw new AbstractMethodError("Trying to call an abstract method run() in a MenuItem object"); //здесь создать такой класс нужно будет потом
    }
}