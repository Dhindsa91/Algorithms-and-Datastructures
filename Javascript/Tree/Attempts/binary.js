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


const t = new Tree();
t.addNode(50, t.root);
t.addNode(25, t.root);
t.addNode(75, t.root);
t.addNode(1, t.root);
t.addNode(999, t.root);
t.addNode(60, t.root);
t.addNode(40, t.root);
t.addNode(0, t.root);
t.addNode(750, t.root);
t.addNode(65, t.root);
t.addNode(1000, t.root);
t.addNode(740, t.root);

t.preOrderTraversal(t.root);
console.log("=========================");
t.inOrderTraversal(t.root);
console.log("=========================");
t.postOrderTraversal(t.root);

console.log("=========================");
t.BFS(t.root);
console.log("=========================");
t.getHeight(t.root);
console.log("=========================");
t.getLevelN(t.root, 4);
console.log("=========================");
t.search(t.root, 999);
t.search(t.root, 1111);
