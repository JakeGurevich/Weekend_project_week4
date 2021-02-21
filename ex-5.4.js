// Ex5.4 - To Weird Case
// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same
// string with all even indexed characters in each word upper cased, and all odd indexed
// characters in each word lower cased. The indexing just explained is zero based, so the zero-ith
// index is even, therefore that character should be upper cased.
// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only
// be present if there are multiple words. Words will be separated by a single space(' ').
// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
let str = 'David likes appleseeds bootcamp';
function  toWeirdCase(str){
let newArr = str.split(' ' );
for(let i = 0 ; i<newArr.length;i++){
    let str = newArr[i];
    console.log(str);
    arr = str.split('');
    console.log(arr);
    for(let j = 0 ; j< arr.length ;j+=2){
        strUpper = arr[j].toUpperCase();
        console.log(strUpper);
        arr[j]=strUpper;
    }
    
    
    console.log(arr);
    newArr[i] = arr.join('');
    console.log(newArr[i]);
}
let newStr = newArr.join(' ');
// console.log(newStr);
return newStr;

}
console.log( toWeirdCase(str));