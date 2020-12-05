// let b=10;
// for (let i=2;i<=b;i++){
//     if(i%2==0){
// alert(i);
//     }
// }

// let i=0;
// while (i < 3) {
//     alert( `number ${i}!` );
//     i++;
//   }

// let inputNum = prompt('Please, insert number ...', 'mone than 100');
// let i = inputNum;
//  if (i >=100){
//     alert(`right number ${i}`);
//     if(i < 100){
//         inputNum = prompt('Please, insert number ...', 'mone than 100');
//     }
// } 

// for ( let i = prompt('Please, insert number ...', 'mone than 100'); i < 100;){
//     let a = prompt('Please, insert number, pay attention to the condition ...', 'mone than 100');
//    if (a >= 100){
//     alert(`right number ${a}`);
//    }
// }



// //????????????????????????????????????????
// for (let i = 2; i < 10; i++){
//     let count = 0;
//     for (let j = 2; j < i; j++)
//     if(i % j == 0){
//     }
//     else {
//         count++;
//     }
//     console.log(`Prime number - ${i}`)
//     console.log(count)
// }

// <!-- Easy: -->
// ### Задача 1
// // С помощью цикла найдите сумму чисел от 1 до 100.
// let a = 0;
// for (let i = 0; i <= 100; i++){
// a +=i;
// }
// console.log('Sum of numbers from 0 to 100 is:' + a);  


// ### Задача 2
// // Задача. В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).

// let i = prompt('You need to input number from 0 to 59', '0 - 59');
// let a = i;
// if(i > 0 & i < 15){
//     alert("First quarter");
// }
// else if(i > 15 & i <= 30){
//     alert("Second quarter");
// }
// else if(i > 30 & i <= 45){
//     alert("Third quarter");
// }
// else if(i > 45 & i <= 59){
//     alert("Fourth quarter");
// }
// else{
//     alert("You had inputted wrong number !");
// }


// <!-- Medium: -->

// ### Задача 3
// Напишите программу, которая выводит через console.log все цифры от 1 до
// 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
// Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех
// чисел, которые делятся и на 3 и на 5.

// for(let i = 1; i <=100; i++){
//     if (i % 3 == 0){
//         console.log("Fizz" + i);
//     }
//     else if (i % 5 == 0){
//         console.log("Buzz" + i);
//     }
//     else if (i % 3 == 0 && i % 5 == 0){
//         console.log("FizzBuzz" + i);
//     }
//     else{
//         console.log("Ordinary" + i);
//     }
// }

// ### Задача 4
// Даны числа 4, -2, 5, 19, -130, 0, 10, 200, -30. Найдите минимальное и максимальное число.
 
// let numbers = [4, -2, 5, 19, -130, 0, 10, 200, -30];
// for (var i = 0; i < numbers.length; i++) {
//     if(numbers[i] > numbers[0]){
//         numbers[0] = numbers[i];
//     }
// }
// alert(numbers[0]);

// let numbers = [4, -2, 5, 19, -130, 0, 10, 200, -30];
// for (var i = 0; i < numbers.length; i++) {
//     if(numbers[i] < numbers[0]){
//         numbers[0] = numbers[i];
//     }
// }
// alert(numbers[0]);
 


