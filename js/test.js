// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// //   // Пиши код ниже этой строки
// function composeMessage(position) {

//   const messages = orders.map(
//         (key, index) =>
//           `Готовим ${key.dish} для ${key.email}. Ваш заказ ${index + 1}-й в очереди.`,
//       );
//       return messages;
// }

// //     console.log(messages);
// //   }
// // let messages = [];
// //   const pos = orders.map((num, index) => index );
// //   console.log(composeMessage.call(orders, ...pos));
// //   composeMessage.call(orders, position);
// console.log(composeMessage());
// /


// ============================ 6-й модуль ========================

// const inventors = [
//     {
//       first: "Albert",
//       last: "Einstein",
//       year: 1879,
//       passed: 1955,
//       photo: 'https://pbs.twimg.com/profile_images/697950843199303680/obyZ2Qrv.jpg'
//     },
//     {
//       first: "Isaac",
//       last: "Newton",
//       year: 1643,
//       passed: 1727,
//       photo: 'https://pbs.twimg.com/profile_images/697950843199303680/obyZ2Qrv.jpg'
//     },
//     {
//       first: "Galileo",
//       last: "Galilei",
//       year: 1564,
//       passed: 1642,
//       photo: 'https://pbs.twimg.com/profile_images/697950843199303680/obyZ2Qrv.jpg'
//     },
//     {
//       first: "Marie",
//       last: "Curie",
//       year: 1867,
//       passed: 1934,
//       photo: 'https://pbs.twimg.com/profile_images/697950843199303680/obyZ2Qrv.jpg'
//     },
//     {
//       first: "Johannes",
//       last: "Kepler",
//       year: 1571,
//       passed: 1630,
//       photo: 'https://pbs.twimg.com/profile_images/697950843199303680/obyZ2Qrv.jpg'
//     },
//     {
//       first: "Nicolaus",
//       last: "Copernicus",
//       year: 1473,
//       passed: 1543,
//       photo: 'https://pbs.twimg.com/profile_images/697950843199303680/obyZ2Qrv.jpg'
//     },
//     {
//       first: "Max",
//       last: "Planck",
//       year: 1858,
//       passed: 1947,
//       photo: 'https://pbs.twimg.com/profile_images/697950843199303680/obyZ2Qrv.jpg'
//     },
//     {
//       first: "Katherine",
//       last: "Blodgett",
//       year: 1898,
//       passed: 1979,
//       photo: 'https://pbs.twimg.com/profile_images/697950843199303680/obyZ2Qrv.jpg'
//     },
//     {
//       first: "Ada",
//       last: "Lovelace",
//       year: 1815,
//       passed: 1852,
//       photo: 'https://pbs.twimg.com/profile_images/697950843199303680/obyZ2Qrv.jpg'
//     },
//     {
//       first: "Sarah E.",
//       last: "Goode",
//       year: 1855,
//       passed: 1905,
//       photo: 'https://pbs.twimg.com/profile_images/697950843199303680/obyZ2Qrv.jpg'
//     },
//     {
//       first: "Lise",
//       last: "Meitner",
//       year: 1878,
//       passed: 1968,
//       photo: 'https://pbs.twimg.com/profile_images/697950843199303680/obyZ2Qrv.jpg'
//     },
//     {
//       first: "Hanna",
//       last: "Hammarström",
//       year: 1829,
//       passed: 1909,
//       photo: 'https://pbs.twimg.com/profile_images/697950843199303680/obyZ2Qrv.jpg'
//     }
//   ];

//=============
// inventors.forEach(({ first, last }) => {
//     first.includes('e') || first.includes('E') ? console.log(last) : '';
//   });

//   const woman = (inventors.find(
//     ({ first, last }) => last === 'Curie' && first === 'Marie',
//   ).husband = 'Pierre');
//   console.log(woman);
//   console.log(inventors);
//   const sumYears = inventors.reduce(
//     (acc, { year, passed }) => acc + passed - year,
//     0,
//   );
//   console.log(sumYears);


// ==============================
// Напишите ф-ю которая принимает строку и возвращает количество гласных букв в строке
// console.log(countOfVowels('The quick brown fox')) // 5
// console.log(countOfVowels('Example string')) // 4
// console.log(countOfVowels('Go to the editor')) // 6


// const countOfVowels = (str) => {
//   const arrVow = ['A', 'E', 'I', 'O', 'U', 'Y'];
//  const arrStr = str.split('');
//   let result =0;
//  arrStr.forEach(element => {
//   arrVow.forEach(item => {
//     if(element.toUpperCase() === item){
//       result += 1;
//     }

//   })
//  });
//  return result
// }

// console.log(countOfVowels('The quick brown fox')) // 5

// ==============================

