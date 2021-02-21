
const arr = [12 ,45 ,3 ,2 ,9 , 3,1];
function sumOfLowest(arr){
    const sorted = arr.sort((a,b)=>a-b);
    const sum = sorted[0]+sorted[1];
console.log(sum);
return sum;
};
console.log(sumOfLowest(arr));