var Recursion = (function () {
    function Recursion() {
    }
    Recursion.prototype.fact = function (num) {
        if (num === 1)
            return 1;
        return num * this.fact(num - 1);
    };
    return Recursion;
}());
var recursion = new Recursion();
console.log(recursion.fact(4));
//# sourceMappingURL=recursion.js.map