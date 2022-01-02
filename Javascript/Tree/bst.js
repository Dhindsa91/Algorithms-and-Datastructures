var Vertex = (function () {
    function Vertex(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    return Vertex;
}());
var BST = (function () {
    function BST() {
        this.root = null;
    }
    BST.prototype.addNewData = function (data) {
        var newVertex = new Vertex(data);
        if (this.root === null)
            this.root = newVertex;
        else
            this.addChild(this.root, newVertex);
    };
    BST.prototype.addChild = function (root, newVertex) {
        if (newVertex.data < root.data) {
            if (root.left === null) {
                root.left = newVertex;
            }
            else {
                this.addChild(root.left, newVertex);
            }
        }
        else {
            if (root.right === null) {
                root.right = newVertex;
            }
            else {
                this.addChild(root.right, newVertex);
            }
        }
    };
    BST.prototype.BFS = function (node) {
        if (node !== null) {
        }
    };
    BST.prototype.DFS = function (node) {
        if (node !== null) {
            console.log(node.data);
            this.DFS(node.left);
            this.DFS(node.right);
        }
    };
    BST.prototype.inorderTraversal = function (root) {
        if (root !== null) {
            this.inorderTraversal(root.left);
            console.log(root.data);
            this.inorderTraversal(root.right);
        }
    };
    BST.prototype.postorderTraversal = function (node) {
        if (node !== null) {
            this.postorderTraversal(node.left);
            this.postorderTraversal(node.right);
            console.log(node.data);
        }
    };
    return BST;
}());
var bst = new BST();
bst.addNewData(50);
bst.addNewData(25);
bst.addNewData(75);
bst.addNewData(40);
bst.addNewData(60);
bst.addNewData(10);
console.log(bst);
bst.inorderTraversal(bst.root);
console.log("_______________");
bst.DFS(bst.root);
console.log("_______________");
bst.postorderTraversal(bst.root);
//# sourceMappingURL=bst.js.map