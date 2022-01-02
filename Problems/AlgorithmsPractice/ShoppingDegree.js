// Amazon Oa
// link: https://cybergeeksquad.co/2021/06/shopping-patterns-solution-amazon-oa.html
// difficulty: unknown


function shoppingDegree(n, edges){
    let min = Number.MIN_VALUE;

    const degrees = {};
    const isEdge = new Array();

    for(let i  = 0; i < n + 1; i++) isEdge.push(new Array(n + 1));

    for(let i in edges){
        console.log("HERE", degrees[edges[i][0]])
        degrees[edges[i][0]] = degrees[edges[i][0]] !== undefined ? degrees[edges[i][0]] += 1 : 1;
        degrees[edges[i][1]] = degrees[edges[i][1]] !== undefined ?  degrees[edges[i][1]] += 1 : 1;
        isEdge[edges[i][0]][edges[i][1]] = true;
        isEdge[edges[i][1]][edges[i][0]] = true;
    }

    for(let i = 0; i < edges.length; i++){
        for(let j = 1; j <= n; j++){
            if(isEdge[i][edges[i][0]] && isEdge[i][edges[i][1]]){
                let d = degrees[i] + degrees[edges[i][0]] + degrees[edges[i][0]] - 6;
                min = Math.min(d, min);
            }
        }
    }

    console.log(degrees);
    console.log(isEdge);
    return min;
}

const input = [[1,2],[1,3],[3,2],[4,1],[5,2],[3,6]];
const result = shoppingDegree(6, input);
console.log(result);
