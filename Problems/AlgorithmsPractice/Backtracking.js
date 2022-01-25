// Find all possible K subsets of an array. OA question basis
// https://leetcode.com/problems/combinations/solution/

let output = [];
let N;
let K;

var backtrack = function(first, curr){
    // console.trace(first, curr)
    if(curr.length === K) {    
        output.push(Object.assign([], curr));
        return
    }
    for(let i = first; i < N + 1; i++){
        curr.push(i);
        
        backtrack(i + 1, curr);
        
        curr.pop();
    }

}

var combine = function(n, k) {
    console.time();
    N = n;
    K = k;
    backtrack(1, []);
    console.timeEnd();

    return output;
};

const result = combine(4, 3);
console.log(result);

const result1 = combine(4, 2);
console.log(result1);

const result2 = combine(4, 1);
console.log(result2);


function combinations(arr, i, k, temp, result){
    
    if(temp.length <= k && temp.length > 0){
        result.push(Object.assign([],temp));
    }

    if(temp.length === k){
        return;
    }

    for(let index = i; index < arr.length; index++){
        let current = arr[index];
        temp.push(current);
        combinations(arr, index + 1, k, temp, result);
        temp.pop();
    }
}

function KCombinations(arr, k){
    let result = [];
    let i = 0;
    combinations(arr, i, k, [], result);

    return result;
}

console.log("___________________________");
console.log("OA Question");
console.log("___________________________");

const input = [3, 5, -2];
const result3 = KCombinations(input, 2);
console.log(result3);

const input2 = [1, 2, 3];
const result4 = KCombinations(input2, 3);
console.log(result4);

