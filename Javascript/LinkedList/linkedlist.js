var Nod = (function () {
    function Nod(data) {
        this.next = null;
        this.last = null;
        this.data = null;
        this.data = data;
    }
    return Nod;
}());
var LinkedList = (function () {
    function LinkedList() {
        this.head = null;
    }
    LinkedList.prototype.addNode = function (data) {
        var n = new Nod(data);
        if (this.head == null) {
            this.head = n;
        }
        else {
            n.next = this.head;
            this.head = n;
            n;
        }
    };
    return LinkedList;
}());
var LL = new LinkedList();
LL.addNode(1);
LL.addNode(2);
LL.addNode(3);
LL.addNode(4);
LL.addNode(5);
console.log(LL.head);
//# sourceMappingURL=linkedlist.js.map