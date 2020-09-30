import {Menu} from "./PresentationLayer/Menu.mjs";
import {ActionItem} from "./PresentationLayer/ActionItem.mjs";

import * as Commands from "./Logic/Commands/Commands.mjs"; //импорт комманд в обьект! example: Commands.AddStudentCommand !




import * as Errors from "./Errors/errors.mjs";

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


    const list_of_student_action = main_menu.addActionItem(new ActionItem("Список студентов", Commands.ListStudentsCommand));
    const add_student_action = main_menu.addActionItem(new ActionItem("Добавить студента", Commands.AddStudentCommand));
    const edit_student_submenu = main_menu.addSubmenuItem("Редактировать студента"); //субменю!\

    //____[ниже смысловой отступ]___Реализация субменю "Редактировать студента"_____________________________ //ЗДЕСЬ ВСЁ СЛОЖНЕЕ ЧЕМ КАЖЕТСЯ. РАБОТА С ВЫБРАННЫМ СТУДЕНТОМ!
        const __DELETE_ME__ = edit_student_submenu.addActionItem(new ActionItem("__ВЫБРАТЬ КОНТЕКСТ__УДАЛИТЬ(отладочное)!", Commands.SelectStudentCommand)); //отладочная строка(в последствии удалить!);
        const edit_first_name_action = edit_student_submenu.addActionItem(new ActionItem("Редактировать *первое имя", Commands.EditFirstNameCommand)); 
        const edit_middle_name_action = edit_student_submenu.addActionItem(new ActionItem("Редактировать *второе имя", Commands.EditMiddleNameCommand)); 
        const edit_last_name_action = edit_student_submenu.addActionItem(new ActionItem("Редактировать *последнее имя", Commands.EditLastNameCommand)); 
        const edit_group_action = edit_student_submenu.addActionItem(new ActionItem("Редактировать группу", Commands.EditGroupCommand));
        const add_mark_action = edit_student_submenu.addActionItem(new ActionItem("Добавить оценку", Commands.AddMarkCommand));
        const edit_mark_action = edit_student_submenu.addActionItem(new ActionItem("Редактировать оценку", Commands.EditMarkCommand));
        const delete_mark_action = edit_student_submenu.addActionItem(new ActionItem("Удалить оценку", Commands.DeleteMarkCommand));
    //_____________________________Конец реализации субменю "Редактировать студента"_____________________________

    //const delete_student_submenu = main_menu.addActionItem(new ActionItem("Удалить студента", Commands.DeleteStudentCommand));     //что-о не совсем очевидное
    const show_high_achiever_action = main_menu.addActionItem(new ActionItem("Показать отличников", Commands.ShowHighAchieverCommand));   //ВЕДЕТСЯ ОТЛАДКА!!!!!!!!!!!!!!!!!!!!!!! РАСКОММЕНТИРОВАТЬ ПОЗЖЕ!
    const show_low_achiever_action = main_menu.addActionItem(new ActionItem("Показать неуспевающих", Commands.ShowLowAchieverCommand));   //ВЕДЕТСЯ ОТЛАДКА!!!!!!!!!!!!!!!!!!!!!!! РАСКОММЕНТИРОВАТЬ ПОЗЖЕ!
//______________________________Конец реализации главного меню______________________



    main_menu.run();
}

try {
    main();
}
catch(err) {
    console.log(err);
}