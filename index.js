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

// let str = prompt("int string");

// let arr = ["я", "и", "ю", "э", "о", "а", "ы", "е", "у"];
// let counter = 0;
// for (let i = 0; i < str.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (str[i] === arr[j]) {
//       counter += 1;
//       break;
//     }
//   }
// }

// // console.log(counter);

// function int(outputText) {
//   let intString = prompt(outputText);

//   if (!intString || Number(intString)) {
//     while (!intString || Number(intString)) {
//       intString = prompt(outputText);
//     }
//   }
//   return intString;
// }

// const chechAge = (outputText) => {
//   let age = prompt(outputText);
//   Number(age);
//   if (!age || !Number(age)) {
//     while (!age || !Number(age)) {
//       age = prompt(outputText);
//     }
//   }
//   return age;
// };

// function people() {
//   let gender = confirm("Ваш пол");
//   if (gender) {
//     gender = "men";
//   } else {
//     gender = "women";
//   }
//   return gender;
// }

// const checkOlder = () => {
//   let grendPeople = null;
//   let valueCheckAge = chechAge;
//   if (valueCheckAge >= 65 && people() === "men") {
//     grendPeople = "Да я пенсионер";
//   } else if (valueCheckAge >= 55 && people() === "women") {
//     grendPeople = "да я пенсионерка";
//   } else {
//     grendPeople = "я не пенсионер";
//   }
//   return grendPeople;
// };

// function anketa(name, lastName, serName, valueAge, valueGender, older) {
//   alert(`Ваше ФИО: ${name} ${lastName} ${serName}
//   Ваш возвраст ${valueAge}
//   Ваш пол ${valueGender}
//   Возрост через 5 лет ${Number(valueAge) + 5}
//   Возрост в днях ${valueAge * 365}
//   Ты на пенсии ${older}
//   `);
// }

// anketa(
//   int("Введите ваше имя"),
//   int("Ваша фамилия"),
//   int("Введите отчество"),
//   chechAge("введи свой возвраст"),
//   people(),
//   checkOlder()
// );

function discrimination(a, b, c) {
  let d = Math.pow(b, 2) - 4 * a * c;
  let x = 0;
  if (d > 0) {
    x = ((-b + Math.sqrt(d)) / 2) * a;
    x = ((-b - Math.sqrt(d)) / 2) * a;
  } else if (d === 0) {
    x = (-b / 2) * a;
  } else if (d < 0) {
    x = (b + Math.sqrt(d)) / (2 * a);
  }
  return x;
}
console.log(discrimination(1, 10, 3));
