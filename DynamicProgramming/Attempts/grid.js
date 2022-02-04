// start: top left corner
// goal: bottom right
// possible moves: down, right
/**
 * @param m {number} height
 * @param n {number} width
 * @returns possible routs {number} 
 */
function grid(m, n, memo = {}){

    if(`${m}-${n}` in memo) return memo[`${m}-${n}`];
    if(m === 1 && n === 1) return 1;
    if(m === 0 || n === 0) return 0;

    memo[`${m}-${n}`]  = grid(m - 1, n, memo)  +  grid(m, n - 1, memo);
    return memo[`${m}-${n}`]
}

console.time();
console.log(grid(2,2));
console.timeEnd();
