// // let ourArray = ["Яблоко", "Апельсин", "Слива", 5, true, [1, 2, 3, ["ejewi", "weifhewif"]]];
// // let arrSecond = [1, 2, 3, 10]
// // let arrFirst = [4, 5, 6, 'Вася']
// // let result = []
// // // console.log(ourArray.length, ourArray[5][3][0]);

// // ourArray[4] = 121;
// // console.log(ourArray);

// // for(let i = 0; i < arrSecond.length; i++){
// //     // console.log("i", i);
// //     result[i] = arrFirst[i] + arrSecond[i];
// // }

// // let sumProps = 10;

// // let someShit = `hello ${sumProps}`

// // console.log("someShit", someShit)
// // // delete ourArray[0]
// // ourArray.shift()
// // console.log(ourArray);

// // ourArray.push("Яблоко")
// // console.log(ourArray);

// // // console.log(result)

// let styles = ['Jazz','Blues'];
// console.log(styles);
// styles.push('Rocknrolla');
// console.log(styles);
// let i = styles.length/2;
// i = Math.floor(i); //????????????????????????????????????????
// styles[i] = 'Classic'; //????????????????????????????????????????
// console.log(styles);  //????????????????????????????????????????
// let arr1 = styles.shift();
// console.log( arr1);
// styles.unshift('Rap','Reggae');
// console.log(styles);


let arr = ["Я", "изучаю", "JavaScript", '12', '05', 2020];

arr.splice(4, 1);
let arr2 = arr.slice(1);
console.log('arr2', arr2);
console.log('arr1', arr);

let arr3 = arr.concat(arr2);
console.log("🚀 ~ file: arrays.js ~ line 51 ~ arr3", arr3);
let num = arr.indexOf('Я');
console.log("🚀 ~ file: arrays.js ~ line 53 ~ example", num);


let str = "тест";
let str2 = "JavaScript";

console.log( str.split('') );
console.log( str2.split('', 4).join('') );
console.log( str.split('').reverse() );
console.log( str.split('').reverse().join('') );
