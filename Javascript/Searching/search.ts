interface SearchAlgorithms {
    linear: (element: number) => boolean; 
    binary: (arr: number[], search: number) => boolean; 
}

class Search implements SearchAlgorithms{

    list;

    constructor(list: number[]){
        this.list = list;
    }

    linear(search: number): boolean{
        for(let x in this.list){
            if(this.list[x] === search) return true;
        }
        return false;
    }

    binary(arr: number[], search: number): boolean{

       if(arr.length){
            let mid = Math.floor( (arr.length) / 2 );
            console.log(mid, arr[mid]);
            if(arr[mid] === search) { return true; }
            if(arr[mid] < search) { return this.binary(arr.slice(mid + 1, arr.length), search); }
            if(arr[mid] > search)  { return this.binary(arr.slice(0, mid), search); }
       }
        

        return false;
    }
}

let searchArr = [6,1,2,56,12,76,4,2,10,11,99,2800,999,111,23,7];

const s = new Search(searchArr)

console.log(s.binary(searchArr.sort((a,b) => a - b), 6));
// console.log(s.linear(56));
