var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
var max_num=0;
var sm=0
var tm=0
for(var i=0;i<numbers.length;i++){
   if (numbers[i]>max_num){
       tm=sm
       sm=max_num
       max_num=numbers[i]     
   }
   else if (numbers[i]>sm){
        tm=sm
        sm=numbers[i]
   } 
   else if (numbers[i]>tm){
        tm=numbers[i]
   }
}
console.log(max_num,sm,tm)
