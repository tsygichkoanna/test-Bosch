export function createRandomString(length, lang) {
    let text = "";
    const language = {
        en : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
        ru : "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя",
        ua : "АБВГҐДЕЄЖЗИІЇІЇІЇІЇІЇІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯабвгґдеєжзиіїйклмнопрстуфхцчшщьюя"
    };
    
    for(let i = 0; i < length; i++)
     text += language[lang].charAt(Math.floor(Math.random() * language[lang].length));

     return text;
}

















