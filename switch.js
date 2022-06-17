// let a = 2;

// switch (a) {

//     case 1:
//         a = 'one';
//         break;
//     case 2:
//         a = 'two';
//         break;
//     default:
//         a = 'not found';
//         break;
// }
// console.log(`The value is ${a}`);




const a=require("readline-sync");
let name=a.question("enter the num ");
str=name.length
if(str>2){
    if (name.includes("ing")){
        console.log(name+"ly")
    }
    else{
        console.log(name+"ing")
    }
}
else{
    console.log(name)
}