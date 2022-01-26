// min-heap: smallest (priority) element at top.
// max-heap: largest (priority) element at top.
// complete tree -> all levels except last and left to right


// Parent: (i - 1)/2 
// left child: (2i + 1), right child: (2i+2);


class Heap {

    heap = null;
    index = 0;

    // TODO: implement
    constructor(size){
        this.heap = [];
    }

    getParentPosition(pos){
        return Math.floor((pos - 1)/2);
    }

    getLeftChild(pos){
        return 2 * pos + 1;
    }

    getRightChild(pos){
        return 2 * pos + 2;
    }

    swap(pos1, pos2){
        let temp = this.heap[pos1];
        this.heap[pos1] = this.heap[pos2];
        this.heap[pos2] = temp;
    }

    // Incomplete
    insertNode(val){
        this.heap.push(val);

        let current = this.heap.length - 1;
        while(this.heap[current] < this.heap[this.getParentPosition(current)]){
            this.swap(current, this.getParentPosition(current));
            current = this.getParentPosition(current);
        }
    }

    minifyHeap(pos){
        if(this.heap[pos] > this.heap[this.getLeftChild(pos)] || this.heap[pos] > this.heap[this.getLeftChild(pos)]){
            if(this.heap[this.getLeftChild(pos)] < this.heap[this.getRightChild(pos)]){
                this.swap(pos, this.getLeftChild(pos));
                this.minifyHeap(this.getLeftChild(pos));
            } else {
                this.swap(pos, this.getRightChild(pos));
                this.minifyHeap(this.getRightChild(pos));
            }
        }
    }

    printHeap(){
        console.log(this.heap);
    }
}

const h = new Heap(7);
h.insertNode(99);
h.insertNode(9);
h.insertNode(10);
h.insertNode(11);
h.insertNode(12);
h.insertNode(13);
h.insertNode(9.5);
h.minifyHeap(0);
h.printHeap();