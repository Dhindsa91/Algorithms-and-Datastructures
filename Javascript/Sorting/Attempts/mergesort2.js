const _mergeArrays = (a, b) => {
    let i = 0;
    let j = 0;
    let k = 0;

    let sortedArr = new Array(a.length + b.length);

    while(i < a.length && j < b.length){
        if(a[i] <= b[j]){
            sortedArr[k] = a[i];
            i++;
            k++;
        } else {
            sortedArr[k] = b[j];
            j++;
            k++;  
        }
    }

    while(i < a.length) {
        sortedArr[k] = a[i];
        i++;
        k++;
    }

    while(j < b.length) {
        sortedArr[k] = b[j];
        j++;
        k++;
    }
    // console.log(sortedArr)
    return sortedArr;
  }
  
  const mergeSort = (arr) => {
    if (arr.length < 2) return arr
    const middle = Math.floor(arr.length / 2)
    const l = mergeSort(arr.slice(0, middle))
    const r = mergeSort(arr.slice(middle, arr.length))
    return _mergeArrays(l, r)
  }


  const result = mergeSort([7,3,9,1]);
  console.log(result);

