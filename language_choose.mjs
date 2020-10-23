import readline from "readline-sync";
import fs from "fs";

//______________________________Выбор языка и загрузка языкового модуля
let language = null;
function choose_language() {
    const lang_choose = readline.question("Choose your language:\nВыберите язык:\n(eng/rus):");
    if (lang_choose == "rus") {
        language = JSON.parse(fs.readFileSync("./languages/rus.json", "utf-8"));
    } else {
        language = JSON.parse(fs.readFileSync("./languages/eng.json", "utf-8"));
    }
}
export {language, choose_language};