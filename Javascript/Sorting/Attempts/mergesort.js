class Sorting {
    merge(arr, left, middle, right) {
        let l = middle - left + 1;
        let r = right - middle;
        const leftArr = [];
        const rightArr = [];
        for (let index = left; index < l; index++) {
            leftArr.push(arr[index]);
        }
        for (let index = middle + 1; index <= r; index++) {
            rightArr.push(arr[index]);
        }
        console.log(leftArr);
        console.log(rightArr);
        let i = 0;
        let j = 0;
        let k = left;
        while (i < left && j < right) {
            if (leftArr[i] < rightArr[j]) {
                arr[k] = leftArr[i];
                i++;
                k++;
            }
            else {
                arr[k] = rightArr[j];
                j++;
                k++;
            }
        }
        while (i < l) {
            arr.push(leftArr[i]);
            i++;
        }
        while (j < r) {
            arr.push(rightArr[i]);
            j++;
        }
    }
    mergesort(arr, left, right) {
        if (left < right) {
            const middle = Math.floor((right + left) / 2);
            this.mergesort(arr, left, middle);
            this.mergesort(arr, middle + 1, right);
            this.merge(arr, left, middle, right);
        }
        return arr;
    }
}
const sorting = new Sorting();
const arr = [14, 3, 6, 7];
console.log(sorting.mergesort(arr, 0, arr.length - 1));
