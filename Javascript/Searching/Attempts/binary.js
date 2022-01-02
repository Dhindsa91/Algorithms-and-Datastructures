// Binary Search Algorithm Attempt

function BinarySearch(arr, search){
    if(!arr.length) return false;
    let middle = Math.floor((arr.length - 1)/2); // 5 - 1 -> 4/2 -> 2    4 - 1 -> 3/2 = 1.5
    if(arr[middle] === search) return true;
    if(arr[middle] < search){
        return BinarySearch(arr.slice(middle + 1, arr.length +1), search);
    } else {
        return BinarySearch(arr.slice(0, middle), search);
    }
}

const input = [1, 4, 5, 8, 11, 15, 17]  //20, 21, 45, 87, 99, 100, 111, 123];
const result = BinarySearch(input, 69);
console.log(result);