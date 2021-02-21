// Ex5.3 - To Camel Case
// Complete the method/function so that it converts dash/underscore delimited words into camel
// casing. The first word within the output should be capitalized only if the original word was
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
let str = 'i-like_appleseeds-bootcamp';
function toCamelCase(str){
let newArr = str.split(/[_-]/);
for(let i = 1 ; i<newArr.length;i++){
    let str = newArr[i];
    console.log(str);
    arr = str.split('');
    console.log(arr);
    strUpper = arr[0].toUpperCase();
    arr[0] = strUpper;
    console.log(arr[0]);
    newArr[i] = arr.join('');
    console.log(newArr[i]);
}
let newStr = newArr.join('');
// console.log(newStr);
return newStr;

}
console.log(toCamelCase(str));