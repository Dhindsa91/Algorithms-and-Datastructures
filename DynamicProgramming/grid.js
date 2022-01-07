// start: top left corner
// goal: bottom right
// possible moves: down, right
/**
 * @param m {number} height
 * @param n {number} width
 * @returns possible routs {number} 
 */
function gridTraveler(m, n, map = {}){
    // console.log(map);
    if(`${m},${n}` in map) return map[`${m},${n}`];
    if(m === 1 && n === 1) return 1;
    if(m === 0 || n === 0) return 0;

 
    map[`${m},${n}`] = gridTraveler(m - 1, n, map) +  gridTraveler(m, n - 1, map);
    return map[`${m},${n}`];

}
console.time();
const result = gridTraveler(16, 16);
console.timeEnd();
// const result2 = gridTraveler(10, 10, 0);
console.log(result);
// console.log(result2);
