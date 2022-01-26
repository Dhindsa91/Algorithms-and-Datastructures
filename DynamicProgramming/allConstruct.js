// Return combination of target sum
/**
 * @param {number} target to assemble
 * @param {number[]} arr
 * @returns {number[]} ALL solutions
 */
function allConstruct(target, wordBank, memo = {}){

    if(target === '') return [[]];
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
console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
console.log(allConstruct('acbdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']))
