// Write a function to convert a name into initials. This kata strictly takes two words with one space
// in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F6.6
let str = 'Vladimir Putin';
function intoInitials(str){
let newArr = str.split(' ');
let initial = '';
for(let i = 0 ; i<newArr.length;i++){
    let str = newArr[i];
     initial =`${initial}${str[0]}.`;
    
    
}

return initial;

}
console.log(intoInitials(str));