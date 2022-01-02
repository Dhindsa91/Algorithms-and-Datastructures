// Amazon OA
// link: https://cybergeeksquad.co/2021/06/autoscale-policy-utilization-check-solution-amazon-oa.html
// difficulty: S-EASY
function autoScaleUtilizationCheck(instance, util){

    let i = 0;

    while(i < util.length){
        console.log(util[i]);
        if(util[i] < 25){
            instance /= 2;
            i += 11;
            continue;
        } else if(util[i] > 60) {
            instance *= 2;
            i += 11;
            continue;
        }

        i++;
    }

    return instance;
}


const input = [25,23,1,2,3,4,5,6,7,8,9,10,76,80];
const result = autoScaleUtilizationCheck(2, input);
console.log(result);