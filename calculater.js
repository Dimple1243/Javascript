
let a=require("readline-sync");
const number1 = a.questionInt('Enter first number: ');
const operator=a.question("enter the symbol: ");
const number2 = a.questionInt('Enter second number: ');
switch(operator) {
    case '+':
        console.log(number1+number2);
        break;
    case '-':
        console.log(number1 - number2);
        break;
    case '*':
        console.log(number1 * number2);a
        break;
    case '/':
        console.log(number1 / number2);
        break;
    default:
        console.log('Invalid operator');
        break;
}
