class Graph {
  vertex = null;
  graph = {
    0: [],
    1: [],
  };
  constructor(vertex) {
    this.vertex = vertex;
  }


    /**
   * 
   * TopologicalSort/Cycle Detection
   * 
   * 
   */
  isCyclic2(){
    let visited = new Array(Object.keys(this.graph).length + 1).fill(false);
    let backtrack = new Array(Object.keys(this.graph).length + 1).fill(false);
    let stack = [];

    let result = false;
    for(let key in this.graph){
      result = this.isCyclicUtil2(key, visited, backtrack, stack);
    }

    console.log(stack)
    return result;
  }

  isCyclicUtil2(node, visited, backtrack, stack){
    // console.log(node, backtrack[node], visited[node])
    if(backtrack[node]) {
      console.log(node, visited)
      return true
    }
    if(visited[node]) return false;

    visited[node] = true;
    backtrack[node] = true;

    let children = this.graph[node] || [];

    let r = false;
    for(let n of children){
        r = this.isCyclicUtil2(n, visited, backtrack, stack);
        if(r) return true;
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

  // isCyclic() {
  //   let visited = new Array(V).fill(false);
  //   let recStack = new Array(V).fill(false);

  //   for (let i = 0; i < V; i++)
  //     if (isCyclicUtil(i, visited, recStack)) return true;

  //   return false;
  // }

  // isCyclicUtil(i, visited, recStack) {
  //   if (recStack[i]) return true;
  //   if (visited[i]) return false;

  //   visited[i] = true;
  //   recStack[i] = true;

  //   let children = adj[i];

  //   for (let c = 0; c < children.length; c++)
  //     if (isCyclicUtil(children, visited, recStack)) return true;

  //   recStack[i] = false;
  //   return false;
  // }

  postOrderTraversal(node){
    if(node === null){
      return;
    }
    for(let el of this.graph[node] || []){
      this.postOrderTraversal(el);
      console.log(el);
    }
    // console.log(node);
  }
}

const g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 3);
// g.addEdge(3, 6);
// g.addEdge(4, 7);
// g.addEdge(5, 2);
// g.addEdge(5, 0);
// g.addEdge(4, 0);
// g.addEdge(4, 1);
// g.addEdge(2, 3);
// g.addEdge(3, 1);

console.log(g);

g.BFS(1);
console.log("+++++++++++++++++++++++++++++++++++++");
g.DFS(1);
console.log("+++++++++++++++++++++++++++++++++++++");
g.topologicalSort();
console.log("+++++++++++++++++++++++++++++++++++++");

const g2 = new Graph(5);
g2.addEdge(0, 1);
g2.addEdge(0, 2);
g2.addEdge(1, 2);
g2.addEdge(2, 3);


console.log(g2);
console.log("+++++++++++++++++++++++++++++++++++++");
let s = [];
g2.DFS(0, s);
console.log(s);
console.log("+++++++++++++++++++++++++++++++++++++");
const isCyclic = g2.isCyclic2();
console.log(isCyclic);
console.log("+++++++++++++++++++++++++++++++++++++");
g2.postOrderTraversal(0);