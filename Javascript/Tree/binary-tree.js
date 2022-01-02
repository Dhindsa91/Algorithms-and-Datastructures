var BinaryTree = (function () {
    function BinaryTree(V) {
        this.root = null;
        this.V = V;
    }
    BinaryTree.prototype.addNode = function (data) {
        var newNode = new Vertex(null, null, data);
        if (!this.root)
            this.root = newNode;
        else
            this.recursivelyAddNode(this.root, newNode);
    };
    BinaryTree.prototype.recursivelyAddNode = function (root, node) {
        if (node.data < root.data) {
            if (root.left === null) {
                root.left = node;
            }
            else {
                this.recursivelyAddNode(root.left, node);
            }
        }
        else {
            if (root.right === null) {
                root.right = node;
            }
            else {
                this.recursivelyAddNode(root.right, node);
            }
        }
    };
    BinaryTree.prototype.DFS = function (root) {
        if (root !== null) {
            console.log(root.data);
            this.DFS(root.left);
            this.DFS(root.right);
        }
    };
    BinaryTree.prototype.BFS = function (root) {
        var queue = [];
        var visited = [];
        queue.push(root);
        visited.push(root);
        console.log("Root: ", root.data);
        var _loop_1 = function () {
            var current = queue.shift();
            var list = [];
            if (current.left)
                list.push(current.left);
            if (current.right)
                list.push(current.right);
            var _loop_2 = function (i) {
                if (!visited.find(function (v) { return v.data === list[i].data; })) {
                    queue.push(list[i]);
                    visited.push(list[i]);
                    console.log("Node:", list[i].data);
                }
            };
            for (var i in list) {
                _loop_2(i);
            }
        };
        while (queue.length) {
            _loop_1();
        }
    };
    return BinaryTree;
}());
var Vertex = (function () {
    function Vertex(left, right, data) {
        this.left = left;
        this.right = right;
        this.data = data;
    }
    return Vertex;
}());
var BST = new BinaryTree(6);
BST.addNode(50);
BST.addNode(25);
BST.addNode(75);
BST.addNode(40);
BST.addNode(20);
BST.addNode(80);
BST.DFS(BST.root);
console.log("+++++++++++++++++++++");
BST.BFS(BST.root);
//# sourceMappingURL=binary-tree.js.map