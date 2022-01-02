// Find first missing number in a sequence
function findMissingNumber(arr: number[]){
    let missingNum: number = -1;
    for(let i = 0; i < arr.length - 1; i++){
        let num1: number = arr[i];
        let num2: number = arr[i+1]

        if(num1 + 1 !== num2){
            missingNum = num1 + 1;
            break;
        }
    }
    return missingNum;
}
console.log(findMissingNumber([1,2,3,5,6]));

// .call invokes function with 'this' as input
const person = {
    fullName: function() {
      console.log("Call:",this);
    }
  }
person.fullName.call(5);

// this context
const Dog = {
    breed: "Husky",
    bark: () => {
        console.log(this);
    }
}
Dog.bark();

const Bear = function(){
    //mapped to global
     this.age = 1;
     console.log("Bear:",this.age);
 }

Bear();

const o = {
    x: 42,
    getX: function() {
        return this.x;
    }
};
const ob: any = {
    x: 59
}
const unbound = o.getX;
const boundGetX = unbound.bind(ob);
console.log("Bind:", boundGetX());

// Arguments Object
let arguments = 1;
console.log(arguments);
function myFunction(){
    let a = arguments[0];
    console.log("Arguement:", a);
}
myFunction();

// Array.prototype.slice.call()


// Array.from()
const numArr = Array.from('123');
console.log("Array from:", numArr);

// references
const ref = [1,2,3];
const ref2 = ref;

let a = 10;
let b = a;
a = 20;
console.log("Ref B:", b);

ref[0] = 99;
console.log(ref2);

let link1 = {
    next: null,
    last: null,
    data: 1
}

let link2 = {
    last: link1,
    next: null,
    data: 2
}

link1.next = link2

const prev =  link1.next.last;
link1.data = 3;
console.log("Ref Link", prev);




// range



// map
const map = new Map();
map.set(1,"Apples");
map.set(2, 99);
console.log("Map:", map, map.keys);

// objects
const hm = {
    prop: "Hello"
}
if(hm["nonprop"]) console.log("this will never print");

// set
const set = new Set(["a", "b", "c"]);
set.add("a");
console.log("Set:",set);