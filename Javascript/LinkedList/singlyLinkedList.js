class ListNode {
    constructor(data) {
        this.next = null;
        this.data = data;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
    }
    addNode(data) {
        const newNode = new ListNode(data);
        if (!this.head)
            this.head = newNode;
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    insertAtTail(data) {
        const newNode = new ListNode(data);
        if (!this.head)
            this.head = newNode;
        else {
            let tail = this.head;
            while (tail.next) {
                tail = tail.next;
            }
            tail.next = newNode;
        }
    }
    print(node) {
        if (node !== null) {
            console.log(node.data);
            this.print(node.next);
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
