interface IQueue <T> {
    poll: () => T;
    push: (element: T) => void;
    isEmpty: () => boolean;
}

class Queue implements IQueue<number> {

    queue = [];

    push(element: number): void {
        this.queue.push(element);
    }

    poll(): number {
        return this.queue.shift();
    }

    isEmpty(): boolean {
        return this.queue.length > 0;
    }

    print(){
        console.log(this.queue);
    }

}


const queue = new Queue();
queue.push(1);
queue.print();
queue.push(2);
queue.print();
queue.push(3);
queue.poll();
queue.print();