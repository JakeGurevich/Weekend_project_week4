function nextPerfectSquare(n){
    let perfectSqr;
    let nextPrf;
   if(Number.isInteger(Math.sqrt(n))) {
    perfectSqr = Math.sqrt(n);
    nextPrf = Math.pow(perfectSqr+1,2);

   }else{
      return -1;
   }; 
   return nextPrf;
    
  

}
console.log(nextPerfectSquare(625));