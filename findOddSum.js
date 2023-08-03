// function findOddSum(array){
//     let sum = 0;
//     for(let i = 0; i < array.length; i++){
//         if(array[i]%2 !== 0)
//             sum = sum + array[i];
//     }
//     console.log(sum);
// }

function getEvenNumbers(array){
    let evenArray = [], j=0;
    for(let i=0; i< array.length; i++){
        if(array[i] % 2 === 0){
            evenArray[j] = array[i];
            j++;
        }
    }
    return evenArray;
}

let myArray= [5, 7, 8, 10,45,30];
evenArray = getEvenNumbers(myArray);
console.log(evenArray);