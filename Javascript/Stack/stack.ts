
interface IStack<T> {
    pop: () => T | null;
    push: (element: T) => void; 
    isEmpty: () => boolean;
    print: () => void;
}


class Stack implements IStack<number> {
    stack = [];

    constructor() {}

    // add element to stack
    push(int: number): void {
        this.stack.push(int);
    }

    // remove & return last appeded item;
    pop(): number {
        if(!this.stack.length) return null;
        return this.stack.pop();
    }

    print(): void {
        console.log(this.stack);
    }

    isEmpty(): boolean {
        return this.stack.length ? true : false;
    }

}

const stack = new Stack();
stack.push(99);
stack.print();
stack.push(11);
stack.print();
stack.push(21);
stack.print();
stack.pop();
stack.print();
