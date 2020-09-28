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
    //const edit_student_menu = main_menu.addActionItem(new ActionItem("Редактировать студента", Commands.EditStudentCommand));  //ВЕДЕТСЯ ОТЛАДКА!!!!!!!!!!!!!!!!!!!!!!! РАСКОММЕНТИРОВАТЬ ПОЗЖЕ!
    //const delete_student_menu = main_menu.addActionItem(new ActionItem("Удалить студента", Commands.DeleteStudentCommand));     //ВЕДЕТСЯ ОТЛАДКА!!!!!!!!!!!!!!!!!!!!!!! РАСКОММЕНТИРОВАТЬ ПОЗЖЕ!
    //const show_high_achiever_students_menu = main_menu.addActionItem(new ActionItem("Показать отличников", Commands.ShowHighAchieverStudentCommand));   //ВЕДЕТСЯ ОТЛАДКА!!!!!!!!!!!!!!!!!!!!!!! РАСКОММЕНТИРОВАТЬ ПОЗЖЕ!
    //const show_low_achiever_students_menu = main_menu.addActionItem(new ActionItem("Показать неуспевающих", Commands.ShowLowAchieverStudentCommand));   //ВЕДЕТСЯ ОТЛАДКА!!!!!!!!!!!!!!!!!!!!!!! РАСКОММЕНТИРОВАТЬ ПОЗЖЕ!


    /*
    const glMenu__listOfStudents = glMenu.addMenuItem("Список студентов"); //ПОЗЖЕ УДАЛИТЬ ЭТО БЫЛИ ЗАГЛУШКИ!
    const glMenu__addStudents = glMenu.addMenuItem("Добавить студента");    //ПОЗЖЕ УДАЛИТЬ ЭТО БЫЛИ ЗАГЛУШКИ!
    const glMenu__editStudents = glMenu.addMenuItem("Редактировать студента");  //ПОЗЖЕ УДАЛИТЬ ЭТО БЫЛИ ЗАГЛУШКИ!
    const glMenu__deleteStudents = glMenu.addMenuItem("Удалить студента");  //ПОЗЖЕ УДАЛИТЬ ЭТО БЫЛИ ЗАГЛУШКИ!
    const glMenu__showExcellentStudents = glMenu.addMenuItem("Показать отличников");    //ПОЗЖЕ УДАЛИТЬ ЭТО БЫЛИ ЗАГЛУШКИ!
    const glMenu__showLaggingStudents = glMenu.addMenuItem("Показать неуспевающих");    //ПОЗЖЕ УДАЛИТЬ ЭТО БЫЛИ ЗАГЛУШКИ!
//______________________________Конец реализации главного меню______________________

*/

    main_menu.run();
}

try {
    main();
}
catch(err) {
    console.log(err);
}