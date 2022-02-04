function permutations(arr, i, result){
    if(i === arr.length) {
        result.push(Object.assign([], arr));
        return
    }

    for(let index = i; index < arr.length; index++){
        // console.log(index, i);
        swap(arr, index, i)
        permutations(arr, i + 1, result);
        swap(arr, i, index)
    }
}

function KPermutations(arr){
    let result = [];
    let i = 0;
    permutations(arr, i, result);

    return result;
}

function swap(arr, x, y){
    let b = arr[y];
    arr[y] = arr[x];
    arr[x] = b;
    return arr;
}

const input = [1,2,3];
const result = KPermutations(input);
console.log(result);


    // public void backtrack(int n, ArrayList<Integer> nums, List<List<Integer>> output, int first) {
    //   if (first == n)
    //     output.add(new ArrayList<Integer>(nums));
    //   for (int i = first; i < n; i++) {
    //     Collections.swap(nums, first, i);
    //     backtrack(n, nums, output, first + 1);
    //     Collections.swap(nums, first, i);
    //   }
    // }
  
    // public List<List<Integer>> permute(int[] nums) {

    //   backtrack(n, nums_lst, output, 0);
    //   return output;
    // }
  