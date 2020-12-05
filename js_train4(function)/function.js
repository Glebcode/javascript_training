// function showMessage(name) {
//     let hello = "Hello "
//     alert(hello + name);
//     function hyankshen(){
//         alert(hello);
//     }
//     hyankshen();
// }

// showMessage("Dick!");
// showMessage("Pick!");




//   function showMessage() {
//     let message = "Привет, я JavaScript!"; 

//     alert( message );
//   }

//   showMessage(); 

//   alert( message );





// let userName = 'Вася';

// function showMessage() {
//   let message = 'Привет, ' + userName;
//   alert(message);
// }

// showMessage();



// let userName = 'Вася';

// function showMessage() {
//   userName = "Петя"; 

//   let message = 'Привет, ' + userName;
//   alert(message);
// }

// alert( userName );

// showMessage();

// alert( userName );




// function showMessage(from, text) { 
//     alert(from + ': ' + text);
//   }

//   showMessage('Аня', 'Привет!'); 
//   showMessage('Аня', "Как дела?"); 




// function showMessage(from, text) {

//     from = '*' + from + '*'; 

//     alert( from + ': ' + text );
//   }

//   let from = "Аня";

//   showMessage(from, "Привет"); 

//   alert( from ); 




// function sum(a, b) {
//     return a + b;
// }

// let result = sum(8, 2);
//   alert( result ); 

// function divide(a, b) {
//     alert(a / b);
// }
// divide(sum(8, 2), 5);




function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('А родители разрешили?');
    }
  }

  let age = prompt('Сколько вам лет?', 18);

  if ( checkAge(age) ) {
    alert( 'Доступ получен' );
  } else {
    alert( 'Доступ закрыт' );
  }