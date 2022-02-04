/**
 * @param {number} 
 * @return {number} n-th number of fibonacci sequence
 * 
 */

function fibonacci(n, memo = {}){
    if(n in memo) return memo[n];
    
    if(n <= 2) return 1;

    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    
    return memo[n];
} 

console.time();

const result = fibonacci(7);
console.timeEnd();
console.log(result)

function series(n){
    if(n <= 1) return 1;
    return n * series(n - 1);
}

const result2 = series(5);
console.log(result2);