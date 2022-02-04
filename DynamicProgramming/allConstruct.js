// Return combination of target sum
/**
 * @param {number} target to assemble
 * @param {number[]} arr
 * @returns {number[]} ALL solutions
 */
function allConstruct(target, wordBank, memo = {}){

    if(target === '')  return [[]];
    let result = []

    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            let suffixWays = allConstruct(suffix, wordBank);
            let targetWays = suffixWays.map(way => [word, ...way])
            result.push(...targetWays);
        }
    }
    return result;
}
// console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']))
// console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));


function allConstruct2(target, wordBank){

    if(target === '')  return [[]];
    let result = []

    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            let suffixWays = allConstruct2(suffix, wordBank);
            let targetWays = suffixWays.map(way => [word, ...way])
            result.push(...targetWays);
        }
    }
    return result;
}
// console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']))
// console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
