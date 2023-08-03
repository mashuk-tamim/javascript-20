/*
function factorial(num){
    let fact=1;
    for(let i=1; i<=num; i++){
        fact=fact*i;
    }
    return fact;
}

let num=3;
fact=factorial(num);
console.log(fact);
*/

//using decrement

// function factorial(num){
//     let fact=1;
//     for(let i=num; i>0; i--){
//         fact=fact*i;
//     }
//     return fact;
// }

// let num=5;
// fact=factorial(num);
// console.log(fact);

//USING WHILE LOOP

function factorial(num){
    let fact=1;
    let i=1;
    while(i<=num){
        fact=fact*i;
        i++;
    }
    return fact;
}

let num=5;
fact=factorial(num);
console.log(fact);