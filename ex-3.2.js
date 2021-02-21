const stops = [[6,0],[8,7],[5,3],[9,7]];
function findRest(arr){
    let inBus = 0;
    let outBus= 0;
    
    stops.forEach(el=>
     inBus+= el[0]);
     
     stops.forEach(el=>
        outBus+= el[1]); 
        let result = inBus-outBus;
        return result ;

};
console.log(findRest(stops));