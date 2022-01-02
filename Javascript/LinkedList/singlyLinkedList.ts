class ListNode {
    data;
    next: ListNode = null;
    constructor(data: number){
        this.data = data;
    }
}

class SinglyLinkedList {

    head: ListNode = null;

    addNode(data: number): void {
        const newNode = new ListNode(data);
        if(!this.head) this.head = newNode;
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    insertAtTail(data: number){
        const newNode = new ListNode(data);
        if(!this.head) this.head = newNode;
        else {
            let tail: ListNode = this.head;
            while(tail.next) {
                tail = tail.next
            }
            tail.next = newNode;
        }
    }

    print(node: ListNode): void {
        if(node !== null){
            console.log(node.data)
            this.print(node.next)
        }
    }
}

const sll = new SinglyLinkedList();
sll.addNode(1);
sll.addNode(2);
sll.addNode(3);
sll.addNode(4);
sll.addNode(5);
sll.insertAtTail(6);
// console.log(sll.head);
// console.log(sll.head.next);
// console.log(sll.head.next.next);
// console.log(sll.head.next.next.next);
// console.log(sll.head.next.next.next.next);
sll.print(sll.head);