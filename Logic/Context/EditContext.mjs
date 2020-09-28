export default class EditContext { //ОСТОРОЖНО! тут применён паттерн Одиночка
    static instance = null;

    constructor() {
        if (EditContext.instance != null) {
            throw new SingletoneError("Attempt to create a Singletone Class object twice!");
        }

        this.student = null;
    }

    static getInstance() {
        if (EditContext.instance == null) {
            EditContext.instance = new EditContext();
        }
        return EditContext.instance;
    }
}