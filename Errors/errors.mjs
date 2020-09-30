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

export class StudentMarkError extends Error {
    constructor(message) {
        super(message);
        this.name = "StudentMarkError";
    }
}