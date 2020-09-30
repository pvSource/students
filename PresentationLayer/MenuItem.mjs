import * as Errors from "./../Errors/errors.mjs"

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
        throw new Errors.AbstractMethodError("Trying to call an abstract method run() in a MenuItem object");
    }
}