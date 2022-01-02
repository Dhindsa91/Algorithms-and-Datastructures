class BinaryTree {
    root: Vertex = null;
    V;

    constructor(V: number){
        this.V = V;
    }

    addNode(data: number){
        const newNode = new Vertex(null, null, data);
        if(!this.root) this.root = newNode;
        else this.recursivelyAddNode(this.root, newNode);
    }
    recursivelyAddNode(root: Vertex, node: Vertex) {
        if(node.data < root.data){
            if(root.left === null){
                root.left = node;
            } else {
                this.recursivelyAddNode(root.left, node);
            }
        } else {
            if(root.right === null){
                root.right = node;
            } else {
                this.recursivelyAddNode(root.right, node);
            }
        }
    }

    DFS(root: Vertex){
        if(root !== null){
            console.log(root.data);
            this.DFS(root.left);
            this.DFS(root.right);
        }
    }

    BFS(root: Vertex){
        var queue: Vertex[] = [];
        var visited: Vertex[] = [];  

        queue.push(root);
        visited.push(root);

        console.log("Root: ",root.data);
        while(queue.length){
            let current = queue.shift();
            let list = [];

            if(current.left) list.push(current.left);
            if(current.right) list.push(current.right);

            for(let i in list){
                if(!visited.find(v => v.data === list[i].data)){
                    queue.push(list[i]);
                    visited.push(list[i]);
                    console.log("Node:",list[i].data)
                }
            }

        }
    }

}

class Vertex {
    left;
    right;
    data;
    constructor(left, right, data){
        this.left = left;
        this.right = right;
        this.data = data;
    }
}

const BST = new BinaryTree(6);
// BST.addNode(Math.floor(Math.random() * 100));
// BST.addNode(Math.floor(Math.random() * 100));
// BST.addNode(Math.floor(Math.random() * 100));
// BST.addNode(Math.floor(Math.random() * 100));
BST.addNode(50);
BST.addNode(25);
BST.addNode(75);
BST.addNode(40);
BST.addNode(20);
BST.addNode(80);
BST.DFS(BST.root);
console.log("+++++++++++++++++++++")

BST.BFS(BST.root);
/*
    50
    /\
  25  75
  /\  /\
20 40   80
*/