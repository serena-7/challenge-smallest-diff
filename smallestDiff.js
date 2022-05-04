function smallDiff(arr1,arr2){
    let differences = [];
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            differences.push(Math.abs(arr1[i] - arr2[j]));
        }
    }
    return Math.min(...differences);
}

const arr1 = [10, 20, 14, 16, 18];
const arr2 = [30, 23, 54, 33, 96];

console.log(smallDiff(arr1,arr2));