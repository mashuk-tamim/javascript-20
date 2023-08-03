function inchToFeet(inches){
    let feet= inches/12;
    return feet;
}
let heightInInches= 84;
let heightInFeet = inchToFeet(heightInInches);
console.log(heightInFeet);