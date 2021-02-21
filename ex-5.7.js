// Ex5.7 - shortest words
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types
let str = 'His name is Josef';
function findShortest(str){
    let arr = str.split(' ');
    console.log(arr);
    let shortest = 20;
    let word = '';
    for(let i = 0; i<arr.length ; i++){
       
        if(arr[i].length<shortest) {
            shortest = arr[i].length;
            
            word = arr[i]
        };
      
    };  return word;
};
console.log(findShortest(str));