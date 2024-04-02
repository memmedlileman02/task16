//task1
// let birthday = new Date("03-28-2024");
// setInterval(() => {
//   let now = new Date();
//   let between = now - birthday;
//   let gun = Math.trunc(between / (1000 * 60 * 60 * 24));
//   let saat = Math.trunc((between / (1000 * 60 * 60)) % 24);
//   let deqiqe = Math.trunc((between / (1000 * 60)) % 60);
//   let saniye = Math.trunc((between / 1000) % 60);
//   let r=Math.floor(Math.random() *256);
//   let g=Math.floor(Math.random() *256);
//   let b=Math.floor(Math.random() *256);  
//   console.log(` %c${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye` , `color: rgb(${r},${g},${b})`);
// }, 1000);
//  let random = (min,max) => Math.floor((Math.random() * (max - min *1)) +min );






//task3
// let soz = prompt("soz daxil edin:");
// let a = 0;
// let find = setInterval(()=> {
//     console.log(soz.slice(0, a));
//     a++;
//     if (a > soz.length) {
//         clearInterval(find); 
//         a = soz.length - 1;
//         find = setInterval(() => {
//             console.log(soz.slice(0, a));
//             a--;
//             if (a === 0) {
//                 clearInterval(find); 
//             }
//         }, 1000); 
//     }
// },1000);



//bele bir yolda yazdim istediyimiz alinir ama struktur baximindan ne qeder duzdu bilmiorem
// let soz = prompt("soz daxil edin:");
// for (let i = 1; i <= soz.length; i++) {
//     console.log(soz.slice(0, i));
// }
// for (let i = soz.length -1 ; i >= 0; i--) {
//     console.log(soz.slice(0, i));
// }





//task2
// let students =[
//     {
//         id:1,
//         ad:"Eliyar",
//         soyad:"Ehmedli",
//         hobby:"idman",
//         qiymet:80
//     },
//     {
//         id:2,
//         ad:"Xeyale",
//         soyad:"Mustafayeva",
//         hobby:"kitab oxumaq",
//         qiymet:100
//     },
//     {
//         id:3,
//         ad:"Arzu",
//         soyad:"Musayeva",
//         hobby:"mahni oxumaq",
//         qiymet:91
//     } ,
//     {
//         id:4,
//         ad:"Eli",
//         soyad:"eliyev",
//         hobby:"idman",
//         qiymet:60
//     }
// ];
  
// //    console.log(students);
  
// let name = prompt("Enter product name: ").toLowerCase();
// let netice = students.filter((a) => a.ad.toLowerCase().includes(name));
// let cmd = netice.map((st) => st.ad);
// console.log(cmd);
