// 2) External packege
// External packagelarni ustanovka qilish shart!

// moment package: datalarni chiqaradi

// const moment = require("moment");
// const times = moment().format(); // umumiy data
// const time = moment().format('YYYY MM DD');
// console.log(times);
// console.log(time);

// -----------------------------------------------------
// setInterval(() => {
//     const time = moment().format();
//     console.log(`hozir vakt ${time}`);
// }, 3000);
// -----------------------------------------------------

// import inquirer from 'inquirer';

// inquirer
//     .prompt([{ type: "input", name: "raqam", message: "raqamni kirit" }])
//     .then((answer) => {    
//         console.log("kiritgan raqam kiymati: " + answer.raqam);
//     })
//     .catch((err) => console.log(err));
// javob:
//     ? raqamni kirit 34
//     kiritgan raqam kiymati: 34
// demak: key - "raqam" bo'lyapti, bu orqali value - 34ni olyapmiz
// shu shaklda tuzsak: "User" - kiritadigon input qiymatlarini ovoladi. Inquirer package shu ish uchun ishlatiladi

//-----------------------------------------------------------------------------------------------------------------

// validator: ma'lumotlarni tastiqlovchi
// isEmail, isDataURL, isFloat, isInt...

// const v = require('validator');
// // isEmail() - emailmi email masmi shuni tekshiradi
// const test = v.isEmail('foo@bar.com'); // @, . --> shular yo'q bo'lsa 'false' chiqadi
// console.log(test);
// javob: true

//------------------------------------------------------------------------------------------

// UUID: random string hosil qiladi

// const { v4: ali25 } = require('uuid');
// const ali24 = ali25();
// console.log(ali24);
// javob: d48ba69c-6108-4c55-a28e-0238a85c4530

//-------------------------------------------------------

// chalk - ranglar beradi

// const chalk = require('chalk');
// const a = console.log;

// a(chalk.blue('Hello'));

// bu packagelarni hammasini 'npmjs.com'dan topsak bo'ladi

//-------------------------------------------------------------

const a = require('os');
console.log(a.platform());
console.log(a.arch());
// javob: 
//      win32
//      x64
