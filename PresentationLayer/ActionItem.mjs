import * as Errors from "./../Errors/errors.mjs";


import {MenuItem} from "./MenuItem.mjs";


export class ActionItem extends MenuItem {
    constructor(title, runFunction) {
        super(title);
        this.setRunFunction(runFunction);
    }

    setRunFunction(runFunction) {
        if (typeof(runFunction) !== "function") {
            throw new Errors.IncorrectInputError("Trying to add incorrect runFunction into an ActionItem");
        }

        this._runFunction = runFunction;
    }

    run() {
        this._runFunction();
    }

}