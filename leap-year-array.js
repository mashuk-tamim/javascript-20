function isLeapYear(years){
    let leapYearArray= [], j=0;
    for(let i=0; i<years.length; i++){
        if(years[i]%4===0 && (years[i]%100 !==0 || years[i]%400 === 0)){
            leapYearArray[j] = years[i];
            j++;
        }
    }
    return leapYearArray;
}

let years=[2023, 2024, 2025, 2028, 2030];
let leapYear= isLeapYear(years);

console.log(leapYear);
