// Return combination of target sum
/**
 * @param {number} target to assemble
 * @param {number[]} arr
 * @returns {number[]} shortest possible combo 
 */
const outScopeArr = [];
function bestSum(targetSum, numbers, temp = [], memo = {}){
    // console.log(temp, targetSum);
    if(memo[targetSum]){
        console.log(...temp, ...memo[targetSum]);
        return [...temp, ...memo[targetSum]];
    }
    if(targetSum === 0) {
        // console.log(temp.length);
        let res = Object.assign([], temp);
        outScopeArr.push(res);
        return res; 
    }
    if(targetSum < 0) return null;

    let shortestCombination = null;

    for(let num of numbers){
        temp.push(num)
        const remainder = targetSum - num;
        let m = bestSum(remainder, numbers, temp, memo);
        // if(m) console.log(m);
        if(shortestCombination === null || m && m.length < shortestCombination.length){
            shortestCombination = m;
        }
        temp.pop();
    }
    // console.log(shortestCombination);
    memo[targetSum] = shortestCombination ? Object.assign([], shortestCombination) : null;
    return memo[targetSum];
}
console.time();
result = bestSum(100, [ 10, 20, 25]);
console.timeEnd();
console.log(result)


// Return combination of target sum - Non backtracking returning up approach
/**
 * @param {number} target to assemble
 * @param {number[]} arr
 * @returns {number[]} shortest possible combo 
 */
function bestSum2(targetSum, numbers, memo = {}){
    // console.log(memo);
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    let shortestCombination = null;

    for(let num of numbers){
        const remainder = targetSum - num;
        const r  = bestSum2(remainder, numbers, memo);
        if(r){
            const combination = [...r, num];
            if(shortestCombination === null || combination.length < shortestCombination.length){
                shortestCombination = combination
            }
        }
    }



    memo[targetSum] = shortestCombination;
    return memo[targetSum];
}
console.time();
// result = bestSum2(7, [1, 3, 4], []);
result = bestSum2(7, [5, 3, 4, 7]);
// result = bestSum2(100, [1, 2, 5, 25]);
console.timeEnd();
console.log(result)