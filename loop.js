
// for (let i=100;i>=1;i--){
//     console.log(i);
// }

// let j=1
// while (j<=100){
//     console.log(j);
//     j+=1
// }

let k=0;
do{
    if(k===5){
        k+=1;
        continue;
    }
    console.log(k+1);
    k+=1;
}while(k<10);
console.log("done")