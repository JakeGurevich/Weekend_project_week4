// Patrick Feeney => P.F6.6
// Ex5.6 - Mask
// Usually when you buy something, you're asked whether your credit card number, phone number
// or answer to your most secret question is still correct. However, since someone could look over
// your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// Examples
// maskify("4556364607935616") == "############5616"
// maskify( "64607935616") == "#######5616"
// maskify( "1") == "1"
// maskify( "") == ""
// // "What was the name of your first pet?"
// maskify("Skippy") == "##ippy"
// maskify("Nananananananananananananananana Batman!") ==
// "####################################man!"
let str = '89800';
function maskify(str){
    
    let mask = '#';
     mask = mask.repeat(str.length-4);
    console.log(mask);
    let newStr =mask+ str.slice(-4)
    console.log(newStr);

}
console.log(maskify(str));