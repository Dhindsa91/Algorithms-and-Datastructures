/**
 * Increment a version number
 *
 * @param version current version
 * @returns incremented version
 */
function nextVersion(version){
    if(!version) return "0.0.0";

    const versionArr = version.split(".");

    // increment version number;
    for(let i = versionArr.length - 1; i >= 0; i--){
        let digit = parseInt(versionArr[i]);
        if(digit === 9){
            if(i === 0) versionArr[i] = "10";
            else versionArr[i] = "0";
        } else {
            versionArr[i] = (digit + 1).toString();
            break;
        }
    }

    // convert string back to decimal format
    return versionArr.join(".")
}

/**
 * Create spiral array of dimension N*N
 *
 * @param size 2d dimension of array
 * @returns spiral populated array
 */
function createSpiral(size){
    if(!size || size < 1) return [];

    let spiralArr = new Array(size);
    for(let i = 0; i < spiralArr.length; i++) spiralArr[i] = new Array(size);

    let counter = 1;
    let right = size; 
    let down = size;
    let left = 0;
    let up = 0;

    // Populate spiral
    while(counter <= (size * size)){
        // fill moving right
        for(let i = left; i < right; i++){
            spiralArr[left][i] = counter;
            counter++;
        }
        up++;

        // fill moving down
        for(let i = up; i < down; i++){
            spiralArr[i][right - 1] = counter;
            counter++;
        }

        right--;

        // fill moving left
        for(let i = right - 1; i >= left; i--){
            spiralArr[down - 1][i] = counter;
            counter++;
        }

        down--;

        // fill moving up
        for(let i = down - 1; i >= up; i--){
            spiralArr[i][up - 1] = counter;
            counter++;
        }

        left++;
        console.log(up, right, down, left);
    }

    return spiralArr;
}

console.log(createSpiral(5));

module.exports = {
    createSpiral,
    nextVersion
}
