
const bin =  [0, 1, 0, 1];
function binToDec(arr){
    const array = arr.join('');
    console.log(array);
    const num = parseInt(array,2);
   return num;
   ;
}

console.log(binToDec(bin));