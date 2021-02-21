// More generally given parameters:
// - p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)
// - the function nb_year should return n number of entire years needed to get a population
// greater or equal to p.
// - aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)
// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
 function nb_year(p0 , percent ,aug , p){ 
     
     let populatuon =p0;
     
    
   
     let countYear = 1;
     while (populatuon< p)
     {
         percentPop =  Math.round( populatuon * (percent / 100));
         populatuon = populatuon + percentPop + aug;
        countYear++;
        console.log(`poInc :${populatuon}, percent : ${percentPop} `);}
        return countYear;

 };
  console.log(nb_year(40000 , 2 , 2000 , 80000));
