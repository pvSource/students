import {AbstractMethodError, IncorrectInputError} from "./errors.mjs";
import readline from "readline-sync";




/* MenuItem(Пункт меню) - основополагающий полуабстрактный класс, по-сути интерфейс для всего что будет далее.
    здесь будет красивый комментарий
*/
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



export class Menu extends MenuItem {
    constructor(title) {
        super(title);
        this.listOfMenuItem = []; //если возникнет ошибка синтаксиса, возможно здесь
        this.isSubmenu = false; 
    }

    addMenuItem(title) { //позже исправить под place (в определенное место)

        let currentItem = new Menu(title);

        this.listOfMenuItem.push(currentItem);

        currentItem.isSubmenu = true;

        return currentItem;
        
    }

    addActionItem(item) {
        if (!(item instanceof ActionItem)) {
            throw new IncorrectInputError("Trying to add incorrect item into a Menu"); //создать этакий класс
        }

        this.listOfMenuItem.push(item);

    }


    run() {
        while(true) {

            this._printMenu();

            let currentStep = this._getStepFromConsole();

            if (currentStep === this.listOfMenuItem.length) return;
            if (currentStep === this.listOfMenuItem.length + 1) {
                console.log("Это заглушка пока что");
                continue;
            }

            this.listOfMenuItem[currentStep].run();
        }
    }

    _printMenu() { //добавить выход и назад
        console.log(`\n\n---------------${this.getTitle()}---------------`);
        let i; //иницилизация вынесена из цикла, чтобы добавить Вверх и Выход за пределами цикла под номерами i, которые ещё не выведены
        for (i = 0; i < this.listOfMenuItem.length; i++) {
            console.log(`   ${i}. ${this.listOfMenuItem[i].getTitle()}`); //пусть нумерация будет идти с нуля для начала, во избежание поиска трудноотлавливаемой ошибки
        }
        if (this.isSubmenu) {
            console.log(`       ${i}. Назад\n         ${i+1}. Выход в главное меню`);
        } else {
            console.log(`         ${i}. Выход в главное меню`);
        }
    }

    _getStepFromConsole() {
        while (true) {
            let inputStep = Number(readline.question("> "));
            if (this._isStepCorrect(inputStep)) {
                return(inputStep);
            }
            console.log("Incorrect Step!");
        }
    }

    _isStepCorrect(inputStep) {
        return (Number.isInteger(inputStep) && inputStep >= 0 && inputStep < this.listOfMenuItem.length+2);
    }

}



export class ActionItem extends MenuItem {
    constructor(title, runFunction) {
        super(title);
        this.setRunFunction(runFunction);
    }

    setRunFunction(runFunction) {
        if (typeof(runFunction) !== "function") {
            throw new IncorrectInputError("Trying to add incorrect runFunction into an ActionItem");
        }

        this._runFunction = runFunction;
    }

    run() {
        this._runFunction();
    }

}