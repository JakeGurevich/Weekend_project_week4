const arr = [ 1, 1, 1,5, 1, 1, 1 ];
function checkForUnic(arr){
    
        const sorted = arr.sort((a,b)=>a-b);
        let unic;
        if(sorted[0]!==sorted[1])  {
            unic = sorted[0];
        } else{
            unic = sorted[sorted.length-1];
        }return unic;
    
 
}; 
console.log(checkForUnic(arr));