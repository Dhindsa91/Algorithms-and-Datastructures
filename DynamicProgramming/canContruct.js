// Can you contruct a word with a bank of substrings
/**
 * @param {string} word to contruct
 * @param {string[]} bank of possible substring
 * @returns {boolean}
*/

function canConstruct(word, bank, index, assemble, memo = {}){
    // if(memo[assemble] !== undefined) {
    //     return memo[assemble];
    // }
    if(assemble.length > word.length) return false;
    if(word === assemble) return true;

    for(let i = index; i < bank.length; i++){
        let curr = bank[i];
        assemble += curr;
        let result = canConstruct(word, bank, 0, assemble, memo);
        memo[assemble] = result;
        assemble = assemble.slice(0, -1 * curr.length);
        if(result === true) return true;
    }
    return false;
}

// let result = canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"], 0, "");
// console.log(result);

// result = canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"], 0, "");
// console.log(result);

// result = canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"], 0, "");
// console.log(result);

result = canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"], 0, "");
console.log(result);

function bubbleUpCanConstruct(word, bank, index, assemble, memo = {}){
    if(assemble.length > word.length) return false;
    if(word === assemble) return [];

    for(let i = index; i < bank.length; i++){
        let curr = bank[i];
        assemble += curr;
        let result = bubbleUpCanConstruct(word, bank, i + 1, assemble, memo);
        assemble = assemble.slice(0, -1 * curr.length);
        if(result) {
            return curr + result;
        }
    }
    return false;
}

result = bubbleUpCanConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"], 0, "");
console.log("Bubbled Up", result);

result = bubbleUpCanConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"], 0, "");
console.log(result);

function canContruct2(word, bank, index, memo = {}){
    // if(assemble in memo) return memo[assemble];
    if(word === "") return true;

    for(let i = index; i < bank.length; i++){
        let curr = bank[i];
        if(word.slice(0, curr.length) === curr && word.length <= curr){
            let result = canContruct2(word.slice(curr.length), bank, i + 1, memo);
            if(result === true) return true;
        }
        // memo[assemble] = result;
        if(result === true) return true;
    }

    return false;
}

// result = canContruct2("abcdef", ["ab", "abc", "cd", "def", "abcd"], 0, "");
// console.log(result);

// result = canContruct2("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"], 0, "");
// console.log(result);

function freeCodeCampCanConstruct(target, wordBank){
    if(target === '') {
        return true;
    }

    for(word of wordBank) {
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length)
            let result = freeCodeCampCanConstruct(suffix, wordBank);
            if(result) return true;
        }
    }

    return false;
}

result = freeCodeCampCanConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"], 0, "");
console.log("Free Code Camp", result);

result = freeCodeCampCanConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"], 0, "");
console.log(result);