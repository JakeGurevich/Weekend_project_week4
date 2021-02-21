// Ex2.6 - Years and Centuries
// The first century spans from the year 1 up to and including the year 100, The second - from the
// year 101 up to and including the year 200, etc.
// Task :
// Given a year, return the century it is in.
// Input , Output Examples ::
// centuryFromYear(1705) returns (18)
// centuryFromYear( 1900) returns (19)
// centuryFromYear(1601) returns (17)
// centuryFromYear(2000) returns (20)


function centuryFromYear(year) {
    let str = year.toString();
    let century =Number(str.slice(0,2)) ;
    if(year<1000){
        century = Number(str.slice(0,1)) ;
    }
    let correctCentury = Number( str.slice(2,4));
    if(year<100){
        correctCentury = Number( str.slice(1,3));

    }
    if(correctCentury>0 ){
        century+=1;
        
    } if (year <100 ){  
        century = 1
    }
    return century ;
}
console.log(centuryFromYear(7));
