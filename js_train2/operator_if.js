let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');



if ((year >= 2010) && (year <= 2020) || (year == 2300)) { //(false) || (year == 2300)
    alert('Вы правы!');
} else if (year <= 1800 || year > 2300) {
    alert('Холодно мудак!');
} else if (isNaN(year)) {
    alert('Введи число животное!');
} else {
    alert('Учи джес Гавно!');
}

let myNum = 10;

for (let i = 0; myNum > i; i++) {
    console.log(year = +year + i)
}

// console.log(isNaN(year))

// year > 2000 ?  console.log('loh') : console.log('norm')