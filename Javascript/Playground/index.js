var _this = this;
function findMissingNumber(arr) {
    var missingNum = -1;
    for (var i = 0; i < arr.length - 1; i++) {
        var num1 = arr[i];
        var num2 = arr[i + 1];
        if (num1 + 1 !== num2) {
            missingNum = num1 + 1;
            break;
        }
    }
    return missingNum;
}
console.log(findMissingNumber([1, 2, 3, 5, 6]));
var person = {
    fullName: function () {
        console.log("Call:", this);
    }
};
person.fullName.call(5);
var Dog = {
    breed: "Husky",
    bark: function () {
        console.log(_this);
    }
};
Dog.bark();
var Bear = function () {
    this.age = 1;
    console.log("Bear:", this.age);
};
Bear();
var o = {
    x: 42,
    getX: function () {
        return this.x;
    }
};
var ob = {
    x: 59
};
var unbound = o.getX;
var boundGetX = unbound.bind(ob);
console.log("Bind:", boundGetX());
var arguments = 1;
console.log(arguments);
function myFunction() {
    var a = arguments[0];
    console.log("Arguement:", a);
}
myFunction();
var numArr = Array.from('123');
console.log("Array from:", numArr);
var ref = [1, 2, 3];
var ref2 = ref;
var a = 10;
var b = a;
a = 20;
console.log("Ref B:", b);
ref[0] = 99;
console.log(ref2);
var link1 = {
    next: null,
    last: null,
    data: 1
};
var link2 = {
    last: link1,
    next: null,
    data: 2
};
link1.next = link2;
var prev = link1.next.last;
link1.data = 3;
console.log("Ref Link", prev);
var map = new Map();
map.set(1, "Apples");
map.set(2, 99);
console.log("Map:", map, map.keys);
var hm = {
    prop: "Hello"
};
if (hm["nonprop"])
    console.log("this will never print");
var set = new Set(["a", "b", "c"]);
set.add("a");
console.log("Set:", set);
//# sourceMappingURL=index.js.map