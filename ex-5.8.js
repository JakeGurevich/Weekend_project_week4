let str = 'His name is Josef';
function findLongest(str){
    let arr = str.split(' ');
    console.log(arr);
    let num = 0;
    let word = '';
    for(let i = 0; i<arr.length ; i++){
       
        if(arr[i].length>num) {
            num = arr[i].length;
            
            word = arr[i]
        };
      
    };  return word;
};
console.log(findLongest(str));