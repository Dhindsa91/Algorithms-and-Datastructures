
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinaryST {
    constructor() {
        this.root = null;
    }

    addNewData(data)
{
    var newNode = new Node(data);
    if (this.root === null)
        this.root = newNode;
    else
        this.addNewDataNode(this.root, newNode);
}
addNewDataNode(node, newNode)
{
    if (newNode.data < node.data) {
        if (node.left === null)
            node.left = newNode;
        else
            this.addNewDataNode(node.left, newNode);
    }
    else {
        if (node.right === null)
            node.right = newNode;
        else
            this.addNewDataNode(node.right, newNode);
    }
}
inorderTraversal(node)
{
    if (node !== null) {
        this.inorderTraversal(node.left);
        console.log(node.data);
        this.inorderTraversal(node.right);
    }
}
preorderTraversal(node)
{
    if (node !== null) {
        console.log(node.data);
        this.preorderTraversal(node.left);
        this.preorderTraversal(node.right);
    }
}
postorderTraversal(node)
{
    if (node !== null) {
        this.postorderTraversal(node.left);
        this.postorderTraversal(node.right);
        console.log(node.data);
    }
}
findMininumValue(node)
{
    if (node.left === null)
        return node;
    else
        return this.findMininumValue(node.left);
}
retrieveRootValue()
{
    return this.root;
}
find(node, data)
{
    if (node === null)
        return null;
    else if (data < node.data)
        return this.find(node.left, data);
    else if (data > node.data)
        return this.find(node.right, data);
    else
        return node;
}
}

var BST = new BinaryST();
BST.addNewData(15);
BST.addNewData(28);
BST.addNewData(10);
BST.addNewData(7);
BST.addNewData(22);
BST.addNewData(17);
BST.addNewData(13);
BST.addNewData(5);
BST.addNewData(9);
BST.addNewData(30);
var root = BST.retrieveRootValue();
BST.inorderTraversal(root);
var root = BST.retrieveRootValue();
BST.inorderTraversal(root);
var root = BST.retrieveRootValue();
BST.inorderTraversal(root);
var root = BST.retrieveRootValue();
console.log("Tree content when traveled in in order manner");
BST.inorderTraversal(root);
console.log("Tree content when traveled in post order manner");
BST.postorderTraversal(root);
console.log("Tree content when traveled in pre order manner");
BST.preorderTraversal(root);