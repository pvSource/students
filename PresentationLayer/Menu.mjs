import {MenuItem} from "./MenuItem.mjs";
import {ActionItem} from "./ActionItem.mjs";
import readline from "readline-sync";
import { language } from "../language_choose.mjs";

const empty_func = function() {};

export class Menu extends MenuItem {
    constructor(title) {
        super(title);
        this.list_of_menu_items = []; //если возникнет ошибка синтаксиса, возможно здесь
        this.isSubmenu = false;
        this.startup_command = empty_func;
        this.before_select_command = empty_func;
        this.tear_down_command = empty_func;
    }

    addSubmenuItem(title) { //позже исправить под place (в определенное место)
        let current_item = new Menu(title);
        this.list_of_menu_items.push(current_item);
        current_item.isSubmenu = true;
        return current_item;       
    }

    addActionItem(item) {
        if (!(item instanceof ActionItem)) {
            throw new IncorrectInputError("Trying to add incorrect item into a Menu");
        }
        this.list_of_menu_items.push(item);
    }

    setStartupCommand(command) {
        this.startup_command = command;
    }

    setBeforeSelectCommand(command) {
        this.before_select_command = command;
    }

    setTearDownCommand(command) {
        this.tear_down_command = command;
    }

    run() {
        this.startup_command(); //ВОТ ЭТО ПРОВЕРИТЬ!


        while(true) {
            this.before_select_command(); //потом разобраться че за смысл этой и 53 строки и их отличие

            this._printMenu();

            let current_step = this._getStepFromConsole();

            if (current_step === this.list_of_menu_items.length) {
                this.tear_down_command();
                return;
            }
            this.list_of_menu_items[current_step].run();
        }
    }

    _printMenu() { //добавить выход и назад
        console.log(`\n\n---------------${this.getTitle()}---------------`);
        let i; //иницилизация вынесена из цикла, чтобы добавить Вверх и Выход за пределами цикла под номерами i, которые ещё не выведены
        for (i = 0; i < this.list_of_menu_items.length; i++) {
            console.log(`   ${i+1}. ${this.list_of_menu_items[i].getTitle()}`); //пусть нумерация будет идти с нуля для начала, во избежание поиска трудноотлавливаемой ошибки
        }
        if (this.isSubmenu) {
            console.log(`       ${i+1}. ${language.go_back}`);
        } else {
            console.log(`         ${i+1}. ${language.go_back_into_main_menu}`);
        }
    }

    _getStepFromConsole() {
        while (true) {
            let input_step = Number(readline.question("> "))-1;
            if (this._isStepCorrect(input_step)) {
                return(input_step);
            }
            console.log("Incorrect Step!");
        }
    }

    _isStepCorrect(input_step) {
        return (Number.isInteger(input_step) && input_step >= 0 && input_step < this.list_of_menu_items.length+1);
    }7

}