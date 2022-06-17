var a=require('readline-sync');
var n=a.questionInt('enter number');
if (n >= 0) {
    if (n == 0) {
        console.log("You entered number 0");
    }else {
        console.log("You entered a positive number");
    }
} else {
    console.log("You entered a negative number");
}