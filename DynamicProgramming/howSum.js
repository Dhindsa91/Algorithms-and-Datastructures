// Return combination of target sum
/**
 * @param {number} target to assemble
 * @param {number[]} arr
 * @returns {number[]}
 */
function howSum(target, arr, memo = {}) {
  console.log(memo);
  if (memo[target]) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  for (let index = 0; index < arr.length; index++) {
    let remainder = target - arr[index];
    let r = howSum(remainder, arr, memo);
    if (r !== null) {
      memo[remainder] = [...r, arr[index]];
      return memo[remainder];
    }
  }
}
let combo = [];
let result = howSum(7, [5, 2, 3, 7, 1, 6, 4]);
console.log("RES:", result);
