<h1>Исправленное, новая ветка</h1>;
<h1>ЕЩЕ одна попытка</h1>;

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

const name = prompt("your name?");
const lastName = prompt("your last name?");
const serName = prompt("your serName?");
const age = prompt("how old are you?");
let people = confirm("Ваш пол");
if (people) {
  people = "men";
} else {
  people = "women";
}

let older = null;

if (age >= 65 && people === "men") {
  older = "Да я пенсионер";
} else if (age >= 55 && people === "women") {
  older = "да я пенсионерка";
} else {
  older = "я не пенсионер";
}

alert(
  "Ваше ФИО:" +
    name +
    " " +
    serName +
    "," +
    " " +
    lastName +
    "\nВаш возвраст: " +
    age +
    "," +
    "\nваш возвраст в дня" +
    age * 365 +
    " " +
    "\nЧерез 5 лет мне будет" +
    (Number(age) + 5) +
    "\nВаш пол" +
    " " +
    people +
    " " +
    "\nВы на пенсии" +
    " " +
    " " +
    older
);
