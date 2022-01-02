// Amazon OA
// link: https://cybergeeksquad.co/2021/06/five-star-seller-maximum-average-pass-ratio-amazon-oa.html
// difficulty: MEDIUM

function maximumPassRatio(classes, extraStudents){

    let smallestRatio = Number.POSITIVE_INFINITY;
    let smallestIndex = 0;
    let result = 0;

    for(let i = 0; i < classes.length; i++){
        let current = classes[i];
        let ratio = current[0]/current[1];

        if(ratio < smallestRatio){
            // console.log("I", i );
            smallestRatio = ratio;
            smallestIndex = i;
        }
    }

    classes[smallestIndex][0] += extraStudents;
    classes[smallestIndex][1] += extraStudents;

    for(let i = 0; i < classes.length; i++){
        let current = classes[i];
        let ratio = current[0]/current[1];
        result += ratio;
    }
    console.log(classes);
    return (result)/classes.length;
}

const input = [[1,2],[3,5],[2,2]];
const result = maximumPassRatio(input, 2);
console.log(result);

const input2 = [[2,4],[3,9],[4,5],[2,10]];
const result2 = maximumPassRatio(input2, 4);
console.log(result2);