
// Ex6.1 - Mumbling
// This time no story, no theory. The examples below show you how to write function
// accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

let str = 'absd';
function accum(str){
    let arr = str.split('');
    arr = arr.map((letter,index)=> {
        console.log(letter,index);
       return letter.toUpperCase()+letter.repeat(index);

});return arr.join('-');
};
console.log(accum(str));