import {MenuItem, Menu, ActionItem} from "./menuClasses.mjs";
import {AbstractMethodError, IncorrectInputError} from "./errors.mjs";

function main() {

//_____________________________Реализация главного меню_____________________________
    const glMenu = new Menu("Главное меню");
    /*      Главное меню состоит из следующих пунктов:
                1. Список студентов
                2. Добавить студента
                3. Редактировать студента
                4. Удалить студента
                5. Показать отличников
                6. Показать неуспевающих
                7. Выход
    */
    const glMenu__listOfStudents = glMenu.addMenuItem("Список студентов");
    const glMenu__addStudents = glMenu.addMenuItem("Добавить студента");
    const glMenu__editStudents = glMenu.addMenuItem("Редактировать студента");
    const glMenu__deleteStudents = glMenu.addMenuItem("Удалить студента");
    const glMenu__showExcellentStudents = glMenu.addMenuItem("Показать отличников");
    const glMenu__showLaggingStudents = glMenu.addMenuItem("Показать неуспевающих");
//______________________________Конец реализации главного меню______________________



    /*a.addMenuItem("c");
    a.addMenuItem("d");
    a.listOfMenuItem[0].addMenuItem("e");
    a.listOfMenuItem[0].addMenuItem("f");

    function consol() {
        console.log("it works!");
    }

    let func = new ActionItem("func", consol);
    a.addActionItem(func);
    */

    glMenu.run();
}

try {
    main();
}
catch(err) {
    console.log(err);
}