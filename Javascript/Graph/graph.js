class Graph {
  vertex = null;
  graph = {
  };

  constructor(vertex) {
    this.vertex = vertex;
    for(let i = 0; i < vertex; i++){
      this.graph[i] = [];
    }
  }

  /**
   *
   * TopologicalSort/Cycle Detection
   *
   *
   */
  isCyclic2() {
    let visited = new Array(Object.keys(this.graph).length + 1).fill(false);
    let backtrack = new Array(Object.keys(this.graph).length + 1).fill(false);
    let stack = [];

    let result = false;
    for (let key in this.graph) {
      if(!visited[key]) result = this.isCyclicUtil2(key, visited, backtrack, stack);
    }

    console.log(stack.reverse());
    console.log(result);
    return result;
  }

  isCyclicUtil2(node, visited, backtrack, stack) {
    // console.log(node, backtrack[node], visited[node])
    if (backtrack[node]) {
      console.log("Backtracking Node", [node]);
      return true;
    }
    if (visited[node]) return false;

    visited[node] = true;
    backtrack[node] = true;

    let children = this.graph[node] || [];

    for (let n of children) {
      let r = this.isCyclicUtil2(n, visited, backtrack, stack);
      if (r) return true;
    }

    backtrack[node] = false;
    stack.push(node);
  }
  addEdge(parent, child) {
    this.graph[parent] !== undefined
      ? this.graph[parent].push(child)
      : (this.graph[parent] = [child]);
  }

  BFS(node) {
    let q = [];
    let visited = new Array(this.vertex);
    visited[node] = true;
    q.push(node);

    console.log(node);
    while (q.length) {
      let current = q.shift();
      let children = this.graph[current];
      if (children) {
        for (let i = 0; i < children.length; i++) {
          if (!visited[children[i]]) {
            console.log(children[i]);
            visited[children[i]] = true;
            q.push(children[i]);
          }
        }
      }
    }
  }
  // DFS doing topological sort
  DFS(node, stack = [], visited = {}) {
    visited[node] = true;
    let current = this.graph[node] || [];
    console.log(node);
    for (let el of current) {
      if (!visited[el]) this.DFS(el, stack, visited);
    }
    stack.push(node);
  }

  topologicalSort() {
    let visited = new Array(this.vertex).fill(false);
    let stack = [];
    for (let vertex in this.graph) {
      if (!visited[vertex]) {
        this.topologicalSortUtil(vertex, visited, stack);
      }
    }
    while (stack.length) {
      console.log(stack.pop());
    }
  }

  topologicalSortUtil(vertex, visited, stack) {
    visited[vertex] = true;
    let children = this.graph[vertex] || [];

    for (let v of children) {
      if (!visited[v]) {
        this.topologicalSortUtil(v, visited, stack);
      }
    }

    stack.push(vertex);
  }

  Kahns() {
    console.log("KAHNS ---- GRAPH", this.graph)
    let indegree = new Array(this.vertex).fill(0);

    for (let i = 0; i < this.vertex; i++) {
      let children = this.graph[i] || [];
      for (let node = 0; node < children.length; node++) {
        indegree[children[node]]++;
      }
    }
    console.log("INDEGREE", indegree)

    let q = [];
    for (let i = 0; i < this.vertex; i++) {
      if (indegree[i] == 0) q.push(i);
    }

    console.log("NO EDGES COMING INTO", q);

    let cnt = 0;

    let topOrder = [];
    while (q.length != 0) {
      let current = q.shift();
      topOrder.push(current);

      for (let i = 0; i < this.graph[current].length; i++) {
        let child = this.graph[current][i];
        indegree[child]--;
        if (indegree[child] == 0) q.push(this.graph[current][i]);
      }
      cnt++;
    }

    console.log("IS IT TOPOLOGICAL", cnt, this.vertex);
    console.log("RESULT", topOrder);
  }

  postOrderTraversal(node) {
    if (node === null) {
      return;
    }
    for (let el of this.graph[node] || []) {
      this.postOrderTraversal(el);
      console.log(el);
    }
    // console.log(node);
  }
}

// const g = new Graph(5);
// g.addEdge(0, 1);
// g.addEdge(0, 2);
// g.addEdge(1, 3);
// g.addEdge(2, 3);
// // g.addEdge(3, 6);
// // g.addEdge(4, 7);
// // g.addEdge(5, 2);
// // g.addEdge(5, 0);
// // g.addEdge(4, 0);
// // g.addEdge(4, 1);
// // g.addEdge(2, 3);
// // g.addEdge(3, 1);

// console.log(g);

// g.BFS(1);
// console.log("+++++++++++++++++++++++++++++++++++++");
// g.DFS(1);
// console.log("+++++++++++++++++++++++++++++++++++++");
// g.Kahns();
// g.topologicalSort();
// console.log("+++++++++++++++++++++++++++++++++++++");

// const g2 = new Graph(5);
// g2.addEdge(0, 1);
// g2.addEdge(0, 2);
// g2.addEdge(1, 2);
// g2.addEdge(2, 3);

// console.log(g2);
// console.log("+++++++++++++++++++++++++++++++++++++");
// let s = [];
// g2.DFS(0, s);
// console.log(s);
// console.log("+++++++++++++++++++++++++++++++++++++");
// const isCyclic = g2.isCyclic2();
// console.log(isCyclic);
// console.log("+++++++++++++++++++++++++++++++++++++");
// g2.postOrderTraversal(0);


// console.log("+++++++++++++++++++++++++++++++++++++");
// const g3 = new Graph(6);
// g3.addEdge(5, 2);
// g3.addEdge(5, 0);
// g3.addEdge(2, 3);
// g3.addEdge(3, 1);
// g3.addEdge(4, 0);
// g3.addEdge(4, 1);
// g3.Kahns(0);
// g3.topologicalSort();

const newG = new Graph(5);
newG.addEdge(0,1);
newG.addEdge(1,2);
newG.addEdge(2,3);
newG.addEdge(3,4);
console.log("Graph", newG.graph);
newG.isCyclic2();
newG.topologicalSort();

