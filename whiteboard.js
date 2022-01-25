function bt(arr, first, temp, result) {
  if (temp.length === 3) {
    result.push(Object.assign([], temp));
    return;
  }

  for (let i = first; i < arr.length; i++) {
    let curr = arr[i];
    temp.push(curr);
    bt(arr, i + 1, temp, result);
    temp.pop();
  }
}

function bble(arr, first, sum, target, memo = {}) {
  console.log(memo);
  if (sum in memo) {
    console.log("+++++++++++++++++++++++++++++++++++", sum);
    return memo[sum];
  }
  if (target === sum) {
    return [];
  }

  if (sum > target) return false;

  let result;
  for (let i = first; i < arr.length; i++) {
    sum += arr[i];
    result = bble(arr, i + 1, sum, target, memo);
    memo[sum] = result;
    if (result) {
      return [...result, arr[i]];
    }
    sum -= arr[i];
  }
  return result;
}
let result = [];
let r = bt([3, 5, 2, 1], 0, [], result);
console.log(result);

console.time();
r = bble([7, 14], 0, 0, 400);
console.log(r);
console.timeEnd();

function merge(left, right) {
  console.log(left, right);
  let newArr = [];

  while (left && left.length && right && right.length) {
    if (left[0] <= right[0]) {
      let curr = left.shift();
      console.log(curr);
      newArr.push(curr);
    } else {
      let curr = right.shift();
      console.log(curr);
      newArr.push(curr);
    }
  }

  while (left && left.length) {
    newArr.push(left.shift());
  }

  while (right && right.length) {
    newArr.push(right.shift());
  }
  return newArr;
}

function mergeSort(arr, left = 0, right = arr.length) {
  if (arr.length < 2) return arr;

  let middle = Math.floor(arr.length / 2);
  let leftArr = mergeSort(arr.slice(0, middle));
  let rightArr = mergeSort(arr.slice(middle, arr.length));
  return merge(leftArr, rightArr);
}

console.log("MERGE SORT", mergeSort([6, 4, 7, 2]));

function swap(arr, x, y) {
  let b = arr[y];
  arr[y] = arr[x];
  arr[x] = b;
  return arr;
}

function bubbleSort(arr) {
  for (let num1 in arr) {
    for (let num2 in arr) {
      if (arr[num1] < arr[num2]) {
        swap(arr, num1, num2);
      }
    }
  }

  return arr;
}

console.log("BUBBLE SORT", bubbleSort([6, 2, 7, 4]));

/**
 *
 * Detect Palindrome longest sub
 *
 */
function palin(str){
    let max = "";
    for(let i = 0; i < str.length; i++){
        let left = palinUtil(str, i, i);
        let right = palinUtil(str, i, i + 1);

        if(left.length > right.length){
            if(left.length > max.length) max = left;
        } else {
            if(right.length > max.length) max = right;
        }
    }

    return max;
}

function palinUtil(str, left, right){
    while(left >= 0 && right <= str.length && str.charAt(left) === str.charAt(right)){
        left--;
        right++;
    }
    console.log(left, right);
    return str.slice(left + 1, right);
}

let pali = palin("racecar");
console.log("PALINDROME", pali);