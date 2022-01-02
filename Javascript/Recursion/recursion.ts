interface Recursive {
    fact: (num: number) => number;
}

class Recursion implements Recursive {

        fact(num: number): number {
            if(num === 1) return 1;

            return num * this.fact(num - 1);
        }
}
const recursion = new Recursion();
console.log(recursion.fact(4));