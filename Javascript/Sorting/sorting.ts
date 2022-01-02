interface SortingAlgorithms {
    selection: (arr: number[]) => number[];
    bubble: (arr: number[]) => number[];
    insertion: (arr: number[], low: number, high: number) => number[];
}

class Sort implements SortingAlgorithms {

    swap(arr: number[], a: number, b: number){
    }

    selection(arr: number[]): number[]{
        console.time('selection sort');
        for(let i = 0; i < arr.length - 1; i ++){
            let minIndex = i;
            for(let j = i + 1; j < arr.length; j++){
                if (arr[j] < arr[minIndex]) minIndex = j;
            }

            let temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
            // this.swap(arr, arr[minIndex], arr[i]);
        }
        
        console.timeEnd('selection sort');
        return arr;
    }
    insertion(arr: number[]): number[]{
        console.time('insertion');
        for (let i = 1; i < arr.length; i++) {
            const key = arr[i];
            let j = i - 1

            console.log("KEY",key, arr[j], "J", j);

            while(j >= 0 && arr[j] > key){
                console.log("HERE");
                arr[j+1] = arr[j];
                j--;
                console.log(arr);
            }

            arr[j + 1] = key;
            console.log("Arr", arr);
        }
        console.timeEnd('insertion');
        return arr;
    }
    bubble(arr: number[]): number[]{
        console.time('bubble sort');
        for(let i = 0; i < arr.length; i ++){
            for(let j = 0; j < arr.length - 1; j++){
                if (arr[j] > arr[j + 1]){
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        console.timeEnd('bubble sort');
        return arr;
    }

    mergesort(arr: number[], left: number, right: number){
        // console.log("MergeSort Arr", arr.slice(left, right + 1));
        console.log(arr);
        if(left >= right){
            return;
        }
        let middle = Math.floor(Number((left + right - 1)/2));
        this.mergesort(arr, left, middle);
        this.mergesort(arr, middle + 1, right);
        this.merge(arr, left, middle, right);
        return arr;
        
    }
    merge(arr: number[], left: number, middle: number, right: number) {
        var n1 = middle - left + 1;
        var n2 = right - middle 

        var Left = new Array(n1);
        var Right = new Array(n2);

        for(let i = 0; i < n1; i++){
            Left[i] = arr[left + i];
        }
        for(let i = 0; i < n2; i++){
            Right[i] = arr[middle + 1 + i];
        }
    
        //console.log(Left, Right);
        // Initial index of first subarray
        var i = 0;
        
        // Initial index of second subarray
        var j = 0;

        // Initial index of merged subarray
        var k = left;

        while (i < n1 && j < n2) {
            if (Left[i] <= Right[j]) {
                arr[k] = Left[i];
                i++;
            }
            else {
                arr[k] = Right[j];
                j++;
            }
            k++;
        }

        // Copy the remaining elements of
        // L[], if there are any
        while (i < n1) {
            arr[k] = Left[i];
            i++;
            k++;
        }

        // Copy the remaining elements of
        // R[], if there are any
        while (j < n2) {
            arr[k] = Right[j];
            j++;
            k++;
        }

    }
}

const sort = new Sort();
const randNumArr = [7, 290, 467, 69, 12, 32, 99, 1, 20, 4, 77, 98];
let nums = [38,27,43, 3];
// console.log(sort.selection(randNumArr));
// console.log(sort.bubble(randNumArr));
// const arr = [ 10, 7, 8, 9, 1, 5 ];
// const x = sort.insertion([5,3,7,6,2,9]);
// console.log(x);
// console.log(parseInt("9"));
// console.time('merge sort');
// console.log(sort.mergesort(nums, 0, nums.length - 1));
// console.timeEnd('merge sort');


function A(num){

    B(num);
 
    console.log(num)
}

function B(num){
    num[0] = 11;
}

A([]);