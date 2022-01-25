class Tree {
    root = null;

    addNode(val, root){
        const newNode = new Node(val);
        if(!root) return this.root = newNode;

        if(newNode.val < root.val) {
            if(!root.left) {
                return root.left = newNode;
            } else {
                this.addNode(newNode.val, root.left);
            }
        } else {
            if(!root.right) {
                return root.right = newNode;
            } else {
                this.addNode(newNode.val, root.right);
            }
        }
    }

    preOrderTraversal(node){
        if(node === null) return;
        console.log(node.val);
        this.preOrderTraversal(node.left);
        this.preOrderTraversal(node.right);
    }

    inOrderTraversal(node){
        if(node === null) return;
        this.preOrderTraversal(node.left);
        console.log(node.val);
        this.preOrderTraversal(node.right);
    }

    postOrderTraversal(node){
        if(node === null) return;
        this.preOrderTraversal(node.left);
        this.preOrderTraversal(node.right);
        console.log(node.val);
    }

    BFS(node){
        
        let q = [];
        q.push(node);

        while(q.length){
            let curr = q.shift();
            console.log(curr.val);
            if(curr.left) q.push(curr.left);
            if(curr.right) q.push(curr.right);
        }

    }

    getHeight(node){
        let maxDepth = 0;

        node.level = 0;
        let q = [];
        q.push(node);

        while(q.length){
            let curr = q.shift();
            if(curr.level > maxDepth) maxDepth = curr.level;
            if(curr.left) {
                curr.left.level = curr.level + 1;
                q.push(curr.left);
            }
            if(curr.right) {
                curr.right.level = curr.level + 1;
                q.push(curr.right);
            }
        }
        console.log("Max Depth: ", maxDepth);
    }

    getLevelN(node, n){
        let results = [];
        node.level = 0;
        let q = [];
        q.push(node);

        while(q.length){
            let curr = q.shift();
            if(curr.level  === n) results.push(curr.val);

            if(curr.left) {
                curr.left.level = curr.level + 1;
                q.push(curr.left);
            }
            if(curr.right) {
                curr.right.level = curr.level + 1;
                q.push(curr.right);
            }
        }
        console.log(`Nodes at Level ${n}`, results);
    }

    recursiveGetLevelN(node, k){
        if (node == null|| k < 0 ) return;
        
        if (k == 0){
            console.log(node.val);
            return;
        }
        this.recursiveGetLevelN(node.left, k - 1);
        this.recursiveGetLevelN(node.right, k - 1);
        
    }
 
    search(node, val){
        if(node === null) {
            console.log(`Node ${val} not found`);
            return false;
        }
        if(node.val === val)  {
            console.log(`Node ${val} found`);
            return true;
        }
        else if (node.val < val){
            this.search(node.right, val);
        } else {
            this.search(node.left, val);
        }
    }

    getSumOfPaths(node, sum = 0, results){
        // console.log(node);
        if(node.left === null && node.right === null) {
            console.log(sum + node.val);
            return;
        } 

        if(node.left) this.getSumOfPaths(node.left, sum + node.val, results);
        if(node.right) this.getSumOfPaths(node.right, sum + node.val, results);
    }
}

class Node {
    val = null
    left = null;
    right = null;
    level = null;
    constructor(val){
        this.val = val;
    }
}


// const t = new Tree();
// t.addNode(50, t.root);
// t.addNode(25, t.root);
// t.addNode(75, t.root);
// t.addNode(1, t.root);
// t.addNode(999, t.root);
// t.addNode(60, t.root);
// t.addNode(40, t.root);
// t.addNode(0, t.root);
// t.addNode(750, t.root);
// t.addNode(65, t.root);
// t.addNode(1000, t.root);
// t.addNode(740, t.root);

// t.preOrderTraversal(t.root);
// console.log("=========================");
// t.inOrderTraversal(t.root);
// console.log("=========================");
// t.postOrderTraversal(t.root);

// console.log("BFS=========================");
// t.BFS(t.root);
// console.log("=========================");
// t.getHeight(t.root);
// console.log("=========================");
// t.getLevelN(t.root, 4);
// console.log("=========================");
// t.search(t.root, 999);
// t.search(t.root, 1111);
// console.log("=========================");
// t.recursiveGetLevelN(t.root, 2);
// console.log("=========================");
// let results = [];
// t.getSumOfPaths(t.root, 0, results);
// console.log("Paths Sum: ". results);

// // const t = new Tree();
// // t.addNode(3, t.root);
// // t.addNode(2, t.root);
// // t.addNode(4, t.root);
// // t.addNode(1, t.root);
// // t.addNode(5, t.root);
// // t.addNode(6, t.root);
// console.log("______________________________________________")

// const t2 = new Tree();
// t2.addNode(1, t2.root);
// t2.addNode(2, t2.root);
// t2.addNode(3, t2.root);
// t2.addNode(4, t2.root);
// t2.addNode(7, t2.root);
// t2.addNode(5, t2.root);
// t2.addNode(6, t2.root);
// t2.postOrderTraversal(t2.root);
// console.log("++++++++++++++++++++++")
// t2.inOrderTraversal(t2.root);

// console.log("++++++++++++++++++++++")
// console.log("++++++++++++++++++++++")
// console.log("++++++++++++++++++++++")
// console.log("++++++++++++++++++++++")
const t3 = new Tree();
t3.addNode(5, t3.root);
t3.addNode(3, t3.root);
t3.addNode(7, t3.root);
t3.addNode(1, t3.root);
t3.addNode(9, t3.root);
t3.addNode(6, t3.root);
t3.addNode(4, t3.root);
t3.BFS(t3.root)
console.log("SUM++++++++++++++++++++++")
t3.getSumOfPaths(t3.root, 0);