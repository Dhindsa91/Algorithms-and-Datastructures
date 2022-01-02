var Tree = (function () {
    function Tree(size) {
        this.tree = [];
        for (var i = 0; i <= size; i++) {
            this.tree[i] = [];
        }
    }
    Tree.prototype.addChild = function (parent, child) {
        this.tree[parent].push(child);
    };
    Tree.prototype.print = function () {
        console.log(this.tree);
    };
    Tree.prototype.BFS = function (root) {
        var visited = [false, false, false, false, false, false, false, false, false, false, false, false, false];
        var queue = [];
        var level = [null, null, null, null, null, null, null, null, null, null, null, null, null];
        var children = [];
        visited[root] = true;
        queue.push(root);
        level[root] = 0;
        while (queue.length) {
            var current = queue.shift();
            var list = this.tree[current];
            for (var j = 0; j < list.length; j++) {
                if (!visited[list[j]]) {
                    level[list[j]] = level[current] + 1;
                    visited[list[j]] = true;
                    queue.push(list[j]);
                    if (level[list[j]] === 3)
                        children.push(list[j]);
                }
            }
        }
        console.log(children, level);
    };
    Tree.prototype.DFS = function (root) {
        var queue = [];
        queue.push(root);
        while (queue.length) {
            var current = queue.shift();
            var list = this.tree[current];
            console.log(current);
            for (var j = 0; j < list.length; j++) {
                this.DFS(list[j]);
            }
        }
    };
    Tree.prototype.DFS2 = function (root) {
        var visited = [false, false, false, false, false, false];
        var queue = [];
        visited[root] = true;
        queue.push(root);
        while (queue.length) {
            var current = queue.pop();
            var list = this.tree[current];
            console.log(current);
            for (var j = list.length - 1; j >= 0; j--) {
                if (!visited[list[j]]) {
                    visited[list[j]] = true;
                    queue.push(list[j]);
                }
            }
        }
    };
    return Tree;
}());
var tree = new Tree(12);
tree.addChild(0, 1);
tree.addChild(0, 2);
tree.addChild(1, 3);
tree.addChild(1, 4);
tree.addChild(2, 5);
tree.addChild(2, 6);
tree.addChild(3, 7);
tree.addChild(3, 8);
tree.addChild(4, 9);
tree.addChild(4, 10);
tree.addChild(5, 11);
tree.addChild(5, 12);
tree.BFS(0);
//# sourceMappingURL=tree.js.map