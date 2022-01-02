// OA
// link: https://leetcode.com/discuss/interview-question/985703/amazon-oa-rover-control
// difficulty: EASY


function roverControl(dimension, moves){

    // const board = new Array(4).fill(new Array(4).fill(-1));

    let x = 0;
    let y = 0;

    for(let i = 0; i < moves.length; i++){
           switch (moves[i]) {
                case 'TOP':
                   if(y - 1 >= 0){
                        y -= 1;
                   }
                   break;
                case 'RIGHT':
                    if(x + 1 < dimension){
                        x += 1;
                    }                
                    break;
                case 'DOWN':
                    if(y + 1 < dimension){
                        y += 1;
                    }                  
                    break;
                case 'LEFT':
                    if(x - 1 >= 0){
                        x -= 1;
                    }                  
                    break;
               default:
                   break;
           }
    }
    let result = (y*dimension) + (x*1);
    return result;
}


const input = ['RIGHT', 'UP', 'DOWN', 'LEFT', 'DOWN', 'DOWN'];
const result = roverControl(4, input); // Should be 12
console.log(result)


const input2 = ['RIGHT', 'DOWN', 'LEFT', 'LEFT', 'DOWN'];
const result2 = roverControl(4, input2); // Should be 8 
console.log(result2)