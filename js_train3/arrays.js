let ourArray = ["Яблоко", "Апельсин", "Слива", 5, true, [1, 2, 3, ["ejewi", "weifhewif"]]];
let arrSecond = [1, 2, 3, 10]
let arrFirst = [4, 5, 6, 'Вася']
let result = []
// console.log(ourArray.length, ourArray[5][3][0]);

ourArray[4] = 121;
console.log(ourArray);

for(let i = 0; i < arrSecond.length; i++){
    // console.log("i", i);
    result[i] = arrFirst[i] + arrSecond[i];
}

let sumProps = 10;

let someShit = `hello ${sumProps}`

console.log("someShit", someShit)
// delete ourArray[0]
ourArray.shift()
console.log(ourArray);

ourArray.push("Яблоко")
console.log(ourArray);

// console.log(result)