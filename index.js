
// Задание 1)
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // a - преинкремент 1 добавляется сразу
// d = b++; alert(d);           // b- постинкремент 1 добавляется при следующем вызове переменной
// c = (2+ ++a); alert(c);      // 2 + a ; а= 2 + 1 , a - преинкремент 1 добавляется сразу
// d = (2+ b++); alert(d);      // 2 + b; b - постинкремент  1 добавляется при следующем вызове переменной
// alert(a);                    // 3 т.к. a вызывается 3-й раз с оператором ++
// alert(b);                    // 3 т.к. b вызывается 3-й раз с оператором ++


// Задание 2)
// var a = 2;
// var x = 1 + (a *= 2);  // x=5 т.к  1 + 2*2 = 5


//  Задание 3)
//  let a = 4;
// let b = -3;
//
// if (a > 0 && b > 0) {
//   console.log(a - b)
// } else  if (a < 0 && b < 0) {
//   console.log(a * b)
// } else {
//   console.log(a + b)
// }


// Задание 4)

//  let a = 13;
//
// switch (a) {
//   case 0:
//     console.log('0');
//   case 1:
//     console.log('1');
//   case 2:
//     console.log('2');
//   case 3:
//     console.log('3');
//   case 4:
//     console.log('4');
//   case 5:
//     console.log('5');
//   case 6:
//     console.log('6');
//   case 7:
//     console.log('7');
//   case 8:
//     console.log('8');
//   case 9:
//     console.log('9');
//   case 10:
//     console.log('10');
//   case 11:
//     console.log('11');
//   case 12:
//     console.log('12');
//   case 13:
//     console.log('13');
//   case 14:
//     console.log('14');
//   case 15:
//     console.log('15');
//     break;
//   default:
//     console.log('default');
// }


// Задание 5)

 function sum(a, b) {
 let c = a+b
  return c
 }
function subtraction(a, b) {
  let c = a-b
  return c
}
function multiplication(a, b) {
  let c = a*b
  return c
}
function division(a, b) {
  let c = a/b
  return c
}



// Задание 6)
let options = prompt(' Арифметическая операция :')

function mathOperation(arg1, arg2, operation) {
  let decision;
  switch (operation) {
    case  '+':
      decision = sum(arg1, arg2);
    break;
    case  '-':
      decision = subtraction(arg1, arg2);
      break;
    case  '*':
      decision = multiplication(arg1, arg2);
      break;
    case '/':
      decision = division(arg1, arg2);
      break;
    default:
  }
  return decision;
}

console.log( mathOperation(3, 4, options))


