export class AbstractMethodError extends Error {
    constructor(message) {
        super(message);
        this.name = "AbstractMethodError";
    }
}

export class IncorrectInputError extends Error {
    constructor(message) {
        super(message);
        this.name = "IncorrectInputError";
    }
}