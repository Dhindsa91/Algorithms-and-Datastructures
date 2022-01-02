// binary search tree 
class Vertex {

    data;
    left?;
    right?;

    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    root;
    constructor() {
        this.root = null;
    }

    addNewData(data) {
        var newVertex = new Vertex(data);
        if(this.root === null) this.root = newVertex;
        else this.addChild(this.root, newVertex)
    }


    addChild(root: Vertex, newVertex: Vertex) {
        if(newVertex.data < root.data){
            if(root.left === null){
                root.left = newVertex
            } else {
                this.addChild(root.left, newVertex)
            }
        } else {
            if(root.right === null){
                root.right = newVertex
            } else {
                this.addChild(root.right, newVertex)
            }
        }
    }


    BFS(node){
        if(node !== null){

        }
    }

    DFS(node) // preorder
    {
        if (node !== null) {
            console.log(node.data);
            this.DFS(node.left);
            this.DFS(node.right);
        }
    }

    inorderTraversal(root: Vertex){
        if(root !== null){
            this.inorderTraversal(root.left);
            console.log(root.data)
            this.inorderTraversal(root.right);
        }
    }

    postorderTraversal(node){
        if (node !== null) {
            this.postorderTraversal(node.left);
            this.postorderTraversal(node.right);
            console.log(node.data);
        }
    }
}
var bst = new BST();
bst.addNewData(50);
bst.addNewData(25);
bst.addNewData(75);
bst.addNewData(40);
bst.addNewData(60);
bst.addNewData(10);

console.log(bst)

bst.inorderTraversal(bst.root);
console.log("_______________");
bst.DFS(bst.root);
console.log("_______________");
bst.postorderTraversal(bst.root);