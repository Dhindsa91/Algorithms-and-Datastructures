// Amazon OA
// link: https://cybergeeksquad.co/2021/06/robot-bounded-in-circle-solution-amazon-oa.html
// difficulty: Unknown

let direction = ['U', 'R', 'D', 'L'];

function robotBounded(instructions){
    let x = 0;
    let y = 0;

    let pointer = 0;

    for(let i = 0; i < instructions.length; i++){
        switch (instructions[i]) {
            case 'L':
                pointer = changeDirection(pointer, instructions[i]);
                break;
            case 'R':
                pointer = changeDirection(pointer, instructions[i]);
                break;
            case 'G':
                if(direction[pointer] === 'L'){
                    x -= 1;
                } else if(direction[pointer] === 'R'){
                    x += 1;
                } else if(direction[pointer] === 'D'){
                    y -= 1;
                } else {
                    y += 1;
                }
            default:
                break;
        }
    }

    return direction[pointer] !== 'U' || (x === 0 && y === 0);
}

function changeDirection(pointer, angle){
    if(angle === 'L'){
        if(pointer === 0){
            return pointer = direction.length - 1;
        } else {
            return pointer -= 1;
        }
    } else {
        if(pointer ===  direction.length - 1){
            return pointer = 0
        } else {
            return pointer += 1;
        }
    }
}

const input = ['G', 'G', 'L', 'L', 'G', 'G'];
const result = robotBounded(input);
console.log(result);

const input2 = ['G', 'G'];
const result2 = robotBounded(input2);
console.log(result2);

const input3 = ['G', 'L'];
const result3 = robotBounded(input3);
console.log(result3);