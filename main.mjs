import {Menu} from "./PresentationLayer/Menu.mjs";
import {ActionItem} from "./PresentationLayer/ActionItem.mjs";
import {language, choose_language} from "./language_choose.mjs"

import * as Commands from "./Logic/Commands/Commands.mjs"; //импорт комманд в обьект! example: Commands.AddStudentCommand!

import * as Errors from "./Errors/errors.mjs";

import readline from "readline-sync";
import fs from "fs";

function main() {

//_____________________________Реализация главного меню_____________________________
    const main_menu = new Menu(language.main_menu);
    /*      Главное меню состоит из следующих пунктов:
                1. Список студентов
                2. Добавить студента
                3. Редактировать студента
                4. Удалить студента
                5. Показать отличников
                6. Показать неуспевающих
                7. Выход
    */

    const list_of_student_action = main_menu.addActionItem(new ActionItem(language.list_of_student, Commands.ListStudentsCommand));
    const add_student_action = main_menu.addActionItem(new ActionItem(language.add_student, Commands.AddStudentCommand));
    const edit_student_submenu = main_menu.addSubmenuItem(language.edit_student); //субменю!
        edit_student_submenu.setStartupCommand(Commands.SelectStudentCommand);
        edit_student_submenu.setBeforeSelectCommand(Commands.ShowSelectedCommand);
        edit_student_submenu.setTearDownCommand(Commands.DeselectStudentCommand);
    //____[выше и ниже смысловой отступ]___Реализация субменю "Редактировать студента"_____________________________ //ЗДЕСЬ ВСЁ СЛОЖНЕЕ ЧЕМ КАЖЕТСЯ. РАБОТА С ВЫБРАННЫМ СТУДЕНТОМ!
        const edit_first_name_action = edit_student_submenu.addActionItem(new ActionItem(language.edit_first_name, Commands.EditFirstNameCommand)); 
        const edit_middle_name_action = edit_student_submenu.addActionItem(new ActionItem(language.edit_middle_name, Commands.EditMiddleNameCommand)); 
        const edit_last_name_action = edit_student_submenu.addActionItem(new ActionItem(language.edit_last_name, Commands.EditLastNameCommand)); 
        const edit_group_action = edit_student_submenu.addActionItem(new ActionItem(language.edit_group, Commands.EditGroupCommand));
        const add_mark_action = edit_student_submenu.addActionItem(new ActionItem(language.add_mark, Commands.AddMarkCommand));
        const edit_mark_action = edit_student_submenu.addActionItem(new ActionItem(language.edit_mark, Commands.EditMarkCommand));
        const delete_mark_action = edit_student_submenu.addActionItem(new ActionItem(language.delete_mark, Commands.DeleteMarkCommand));
    //_____________________________Конец реализации субменю "Редактировать студента"_____________________________

    const delete_student_submenu = main_menu.addActionItem(new ActionItem(language.delete_student, Commands.DeleteStudentCommand));     //что-о не совсем очевидное
    const show_high_achiever_action = main_menu.addActionItem(new ActionItem(language.show_high_achiever, Commands.ShowHighAchieverCommand));   //ВЕДЕТСЯ ОТЛАДКА!!!!!!!!!!!!!!!!!!!!!!! РАСКОММЕНТИРОВАТЬ ПОЗЖЕ!
    const show_low_achiever_action = main_menu.addActionItem(new ActionItem(language.show_low_achiever, Commands.ShowLowAchieverCommand));   //ВЕДЕТСЯ ОТЛАДКА!!!!!!!!!!!!!!!!!!!!!!! РАСКОММЕНТИРОВАТЬ ПОЗЖЕ!
//______________________________Конец реализации главного меню______________________

    main_menu.run();
}

try {
    choose_language();
    main();
}
catch(err) {
    console.log(err);
}