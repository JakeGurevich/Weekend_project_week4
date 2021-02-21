const str = 'sgffFF';

function countDoble(str){
 let counts = {};
 let arr = str.split('');
 let isDouble = false;

 for(let i =0; i < arr.length; i++){ 
     if (counts[arr[i]]){
     counts[arr[i]] += 1;
     isDouble = true;

     } else {
     counts[arr[i]] = 1
     }
    }  
    for (let prop in counts){
         
        if (counts[prop] == 2){
            console.log(`${prop} occurs : twise `)
        }else if(counts[prop] > 2){
            console.log(`${prop} occurs :${counts[prop]} times`)
        
    } ;};
    if(isDouble==false){
        console.log('no characters repeats more than once');
    }
 
};

countDoble(str);