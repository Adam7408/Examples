// hisob objectini chaqirib keldik
// const calc = require('./hisob');

// const natija1 = calc.kopaytirish(80, 20);
// console.log(natija1);

// console.log('==============')

// const natija2 = calc.bolish(80, 20);
// console.log(natija2);

// console.log('==============')

// const natija3 = calc.qoshish(80, 20);
// console.log(natija3);

// console.log('=============')

// const natija4 = calc.ayrish(80, 20);
// console.log(natija4);

// ---------------------------------------------

//           NodeJSni izlash tartibi

// "./hisob" -> ./ - folderimizi ichidan izlaydi
// "moment" -> ./ yo'q bo'lsa: 

//   Users\ASUS\Desktop\example\node_modules',
//  'C:\\Users\\ASUS\\Desktop\\node_modules',
//  'C:\\Users\\ASUS\\node_modules',
//  'C:\\Users\\node_modules',
//  'C:\\node_modules'
// shu yergacha izlaydi

// console.log(arguments);

//-----------------------------------------------------------------------

// moduleni ichidagi hamma syntacslarni aytib beradi
// console.log(require('module').wrapper);
//  [
//    '(function (exports, require, module, __filename, __dirname) { ',
//    '\n});'
//  ]

//=============================================================================


//          Account

// account file packageimizni choqiramiz 
const Account = require('./account'); 
// classni choqiramiz 
Account.telMeAboutClass(); 
Account.telMeTime(); 
 
// javob:  
// Bu class accountlarni yasash uchun hizmat qiladi 
// Hozirgi vaqt 2023 09 18 10:46:59 
 
// Account.giveMeDetails(); 
// XATO! chunki static method emas! 
 
console.log('=========================================================='); 
 
// object yasash 
const myAccount = new Account('ali', 200000, 1234567854); 
 
myAccount.giveMeDetails(); 
// javob:  
    // Salom hurmatli ali, sizning hisobingiz 200000$ ga teng 
    // Hisob raqamingiz: 1234567854 
 
console.log('=========================================================='); 
 
myAccount.makeDeposit(10000); 
// javob:  
    // hisobingiz to'ldirildi, hisobingiz 210000$ tashkil etdi 
 
console.log('=========================================================='); 
 
myAccount.wihtdrawMoney(2400000); 
// javob:  
    // Sizning balansizdagi pul yetarli emas: 210000$ 
 
console.log('=========================================================='); 
 
myAccount.wihtdrawMoney(24000); 
// javob:  
    // hisobingiz to'ldirildi, hisobingiz 210000$ tashkil etdi 
    // hisobdan 24000$ yechildi va qoldiq 186000$ 
 
 
// umumiy javoblar: 
 
// Bu class accountlarni yasash uchun hizmat qiladi 
// Hozirgi vaqt 2023 09 18 10:55:19 
// ========================================================== 
// Salom hurmatli ali, sizning hisobingiz 200000$ ga teng 
// Hisob raqamingiz: 1234567854 
// ========================================================== 
// hisobingiz to'ldirildi, hisobingiz 210000$ tashkil etdi 
// ========================================================== 
// Sizning balansizdagi pul yetarli emas: 210000$ 
// ========================================================== 
// hisobdan 24000$ yechildi va qoldiq 186000$