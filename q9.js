const a=require("readline-sync");
let year=a.question("enter the year ");
if(year>=5){
    console.log("you can go to school");
}
if( year>=18){
    console.log("you can vote in elections.");
}
if(year>=21){
    console.log(" you can drive a car.");
}
if(year>=24){
    console.log("you can marry.");
}
if(year>=25){
    console.log(" you can legally drink.");
}
else{
    console.log("hey now you are not eligble to do anything! ")
}

let isTrue = "True";
if(isTrue==="False"){
  console.log("Output should show")
}
if(isTrue ==="True"){
  console.log("Both are same");
}
else {
  console.log("Please run it. if all conditions false")
}


const number = 23;
if(number%3===0 && number%7===0) {
    console.log("Chocolate");
}
else if(number%3 === 0){
   console.log("choco");
}
else if(number % 7===0){
   console.log("late");
}
else {
   console.log("Not divisible by 3 , 7");
}


let a = 1;
switch (a) {
    case 1:
        a = 'one';
        break;
    case 2:
        a = 'two';
        break;
    default:
        a = 'not found';
        break;
}
console.log(`The value is ${a}`);




