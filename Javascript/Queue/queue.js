var Queue = (function () {
    function Queue() {
        this.queue = [];
    }
    Queue.prototype.push = function (element) {
        this.queue.push(element);
    };
    Queue.prototype.poll = function () {
        return this.queue.shift();
    };
    Queue.prototype.isEmpty = function () {
        return this.queue.length > 0;
    };
    Queue.prototype.print = function () {
        console.log(this.queue);
    };
    return Queue;
}());
var queue = new Queue();
queue.push(1);
queue.print();
queue.push(2);
queue.print();
queue.push(3);
queue.poll();
queue.print();
//# sourceMappingURL=queue.js.map