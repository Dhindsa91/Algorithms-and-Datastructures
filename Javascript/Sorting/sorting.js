var Sort = (function () {
    function Sort() {
    }
    Sort.prototype.swap = function (arr, a, b) {
    };
    Sort.prototype.selection = function (arr) {
        console.time('selection sort');
        for (var i = 0; i < arr.length - 1; i++) {
            var minIndex = i;
            for (var j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minIndex])
                    minIndex = j;
            }
            var temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
        console.timeEnd('selection sort');
        return arr;
    };
    Sort.prototype.insertion = function (arr) {
        console.time('insertion');
        for (var i = 1; i < arr.length; i++) {
            var key = arr[i];
            var j = i - 1;
            console.log("KEY", key, arr[j], "J", j);
            while (j >= 0 && arr[j] > key) {
                console.log("HERE");
                arr[j + 1] = arr[j];
                j--;
                console.log(arr);
            }
            arr[j + 1] = key;
            console.log("Arr", arr);
        }
        console.timeEnd('insertion');
        return arr;
    };
    Sort.prototype.bubble = function (arr) {
        console.time('bubble sort');
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        console.timeEnd('bubble sort');
        return arr;
    };
    Sort.prototype.mergesort = function (arr, left, right) {
        console.log(arr);
        if (left >= right) {
            return;
        }
        var middle = Math.floor(Number((left + right - 1) / 2));
        this.mergesort(arr, left, middle);
        this.mergesort(arr, middle + 1, right);
        this.merge(arr, left, middle, right);
        return arr;
    };
    Sort.prototype.merge = function (arr, left, middle, right) {
        var n1 = middle - left + 1;
        var n2 = right - middle;
        var Left = new Array(n1);
        var Right = new Array(n2);
        for (var i_1 = 0; i_1 < n1; i_1++) {
            Left[i_1] = arr[left + i_1];
        }
        for (var i_2 = 0; i_2 < n2; i_2++) {
            Right[i_2] = arr[middle + 1 + i_2];
        }
        var i = 0;
        var j = 0;
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
        while (i < n1) {
            arr[k] = Left[i];
            i++;
            k++;
        }
        while (j < n2) {
            arr[k] = Right[j];
            j++;
            k++;
        }
    };
    return Sort;
}());
var sort = new Sort();
var randNumArr = [7, 290, 467, 69, 12, 32, 99, 1, 20, 4, 77, 98];
var nums = [38, 27, 43, 3];
function A(num) {
    B(num);
    console.log(num);
}
function B(num) {
    num[0] = 11;
}
A([]);
//# sourceMappingURL=sorting.js.map