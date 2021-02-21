function fibonacci(n){
    let num=0;
    for(let i = 1 ; i<n ;i=i+num){
        num = i;
        console.log(i);
    }
}
console.log(fibonacci(100));
