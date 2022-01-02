

class Tree {

    tree: number[][] = [];

    constructor(size: number){
        for(let i = 0; i <= size; i++){
            this.tree[i] = [];
        }
    }

    addChild(parent: number, child: number){
        this.tree[parent].push(child);
    }

    print(): void{
        console.log(this.tree);
    }

    BFS(root: number){
        var visited: boolean[] = [false, false, false, false, false, false, false, false, false, false, false, false, false];
        var queue: number[] = [];

        // record the level in order to get what level we're at
        var level =  [null, null, null, null, null, null, null, null, null, null, null, null, null];
        let children = []

        visited[root] = true;
        queue.push(root);
        level[root] = 0;

        while(queue.length){

            let current = queue.shift();

            let list = this.tree[current];
            for(let j = 0; j < list.length; j++){   
        
                if(!visited[list[j]]){
                    level[list[j]] = level[current] + 1;
                    visited[list[j]] = true;
                    queue.push(list[j]);
                    if(level[list[j]] === 3) children.push(list[j])
                }
            }
        }
        console.log(children, level);
    }

    DFS(root: number){
        var queue: number[] = [];

        queue.push(root);
        while(queue.length){
            
            let current = queue.shift();
            let list = this.tree[current];

            console.log(current)
            for(let j = 0; j < list.length; j++){      

                    this.DFS(list[j])
            }
        }
    }

    DFS2(root: number){
        
        var visited: boolean[] = [false, false, false, false, false, false];
        var queue: number[] = [];

        visited[root] = true;
        queue.push(root);
        // let level = 1;
        while(queue.length){
            
            let current = queue.pop();
            let list = this.tree[current];
            // if(list.length) {
            //     console.log(`Level ${level}`);
            //     level++;
            // }
            console.log(current);
            for(let j = list.length - 1; j >= 0; j--){      
                if(!visited[list[j]]){
                    visited[list[j]] = true;
                    queue.push(list[j]);
                }
            }
        }
    }
}

const tree = new Tree(12);
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

// tree.BFS(0);
// console.log("_______________________");
// tree.DFS(0);
// console.log("_______________________");
// tree.DFS2(0);
tree.BFS(0);
