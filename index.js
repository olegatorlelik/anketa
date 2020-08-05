// alert("Я JavaScript");

// let name = "Джон";
// let admin = name;
// alert(admin);

// let ourPlane;
// let currentUse;

// let oficialName = prompt("Какое официальное название у JavaSckript");

// if (oficialName === "ECMAScript") {
//   alert("верно");
// } else {
//   alert("Не слышал про ECMAScript");
// }

// let num = prompt("Загадай число");

// if (num > 1) {
//   alert(1);
// } else if (num < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

// let a = 1;
// let b = 2;

// let resalt = a + b < 4 ? alert("min") : alert("max");

// let login = "hi";
// let mesage;

// login == "Сотрудник"
//   ? (mesage = "Hi")
//   : login == "director"
//   ? (mesage = "hellow")
//   : login == "";
// mesage = "";
// alert(mesage);

// let use = prompt("login");

// if (use === "admin") {
//   let password = prompt("pasword");
//   if (password === "i am boss") {
//     alert("HI BOSS");
//   } else if (password === null) {
//     alert("ESC");
//   } else {
//     alert("i dont rememder you");
//   }
// } else if (use === null) {
//   alert("ESC");
// } else {
//   alert("I DONT KNOW YOU");
// }

let name = prompt("your name?");
let serName = prompt("your serName?");
let age = prompt("how old are you?");
let people = confirm("Ваш пол");
if (people === true) {
  people = "men";
} else {
  people = "women";
}

let older;

if (age >= 65 && people === "men") {
  older = "Да я пенсионер";
} else if (age >= 55 && people === "women") {
  older = "да я пенсионерка";
}

alert(
  "Ваше ФИО:" +
    name +
    " " +
    serName +
    "," +
    "Ваш возвраст: " +
    age +
    "," +
    "ваш возвраст в дня" +
    age * 365 +
    " " +
    "Через 5 лет мне будет" +
    (Number(age) + 5) +
    "Ваш пол" +
    " " +
    people +
    " " +
    "Вы на пенсии" +
    " " +
    " " +
    older
);
