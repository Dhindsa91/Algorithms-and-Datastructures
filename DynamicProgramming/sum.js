// Return true if it is possible to return the sum of a target with digits in array
/** @param {number} target 
 *  @param {number[]} arr 
 *  @returns {boolean || number[]} 
 */


function backtrack(arr, first, temp, result, target){

    if(temp.reduce((acc, curr) => acc+ curr, 0) === target) result.push(Object.assign([], temp));


    for(let i = first; i < arr.length; i++){
        temp.push(arr[i]);
        backtrack(arr, i + 1,  temp, result, target);
        temp.pop();
    }
}


 function canSum(target, arr){
    let result = [];
    let first = 0;

    backtrack(arr, first, [], result, target);
    return result;
 }

 let result = canSum(7, new Array(1000).fill(9));
 console.log(result);


 function canSum2(target, arr){
     if(target === 0) return true;

     for(let num of arr){
        const remainder = target - num;
        if(canSum(remainder, arr) === true){
            return true;
        }; 
     }

     return false;
 }

result = canSum2(7, [5,3,4,7]);
console.log(result);
