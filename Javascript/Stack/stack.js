var Stack = (function () {
    function Stack() {
        this.stack = [];
    }
    Stack.prototype.push = function (int) {
        this.stack.push(int);
    };
    Stack.prototype.pop = function () {
        if (!this.stack.length)
            return null;
        return this.stack.pop();
    };
    Stack.prototype.print = function () {
        console.log(this.stack);
    };
    Stack.prototype.isEmpty = function () {
        return this.stack.length ? true : false;
    };
    return Stack;
}());
var stack = new Stack();
stack.push(99);
stack.print();
stack.push(11);
stack.print();
stack.push(21);
stack.print();
stack.pop();
stack.print();
//# sourceMappingURL=stack.js.map