import {MenuItem} from "./PresentationLayer/MenuItem.mjs";
import {Menu} from "./PresentationLayer/Menu.mjs";
import {ActionItem} from "./PresentationLayer/ActionItem.mjs";

import * as Commands from "./Logic/Commands/Commands.mjs"; //импорт комманд в обьект! example: Commands.AddStudentCommand !




import {AbstractMethodError, IncorrectInputError} from "./Errors/errors.mjs";

import readline from "readline-sync";

function main() {

//_____________________________Реализация главного меню_____________________________
    const main_menu = new Menu("Главное меню");
    /*      Главное меню состоит из следующих пунктов:
                1. Список студентов
                2. Добавить студента
                3. Редактировать студента
                4. Удалить студента
                5. Показать отличников
                6. Показать неуспевающих
                7. Выход
    */


    const list_of_student_menu = main_menu.addActionItem(new ActionItem("Список студентов", Commands.ListStudentsCommand));
    const add_student_menu = main_menu.addActionItem(new ActionItem("Добавить студента", Commands.AddStudentCommand));
    //const edit_student_menu = main_menu.addActionItem(new ActionItem("Редактировать студента", Commands.EditStudentCommand));  //Видимо это сабменю??
    //const delete_student_menu = main_menu.addActionItem(new ActionItem("Удалить студента", Commands.DeleteStudentCommand));     //что-о не совсем очевидное
    const show_high_achiever_menu = main_menu.addActionItem(new ActionItem("Показать отличников", Commands.ShowHighAchieverCommand));   //ВЕДЕТСЯ ОТЛАДКА!!!!!!!!!!!!!!!!!!!!!!! РАСКОММЕНТИРОВАТЬ ПОЗЖЕ!
    const show_low_achiever_menu = main_menu.addActionItem(new ActionItem("Показать неуспевающих", Commands.ShowLowAchieverCommand));   //ВЕДЕТСЯ ОТЛАДКА!!!!!!!!!!!!!!!!!!!!!!! РАСКОММЕНТИРОВАТЬ ПОЗЖЕ!


//______________________________Конец реализации главного меню______________________


    main_menu.run();
}

try {
    main();
}
catch(err) {
    console.log(err);
}