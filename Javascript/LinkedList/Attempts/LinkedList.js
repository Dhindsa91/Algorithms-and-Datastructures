class Node {

    value = null
    next = null;
    prev = null;

    constructor(value){
        this.value = value;
    }
}

class LinkedList {
    head = null;

    // add node to list head:[Node(1)] -> next:[Node(2)]
    recursiveAddNode(head, value){
        let n = new Node(value);
        if(!this.head) {
            this.head = n;
        } else {
            if(!head.next) {
                head.next = n;
                n.prev = head;
            }
            else this.recursiveAddNode(head.next, value);
        }
    }

    addNode(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next !== null){
                current = current.next;
            }
            current.next = newNode;
            newNode.prev = current;
        }
    }

    recursiveRemoveNode(value){
        
    }

    insertAtPosition(){
        
    }

    print(head){
        if(head){
            console.log("NODE ", "prev:", head.prev ? head.prev.value : "none", "|", head.value, "|", "next:", head.next ? head.next.value : "none");
            this.print(head.next);
        }
    }
}

const l = new LinkedList();
l.recursiveAddNode(l.head, 1);
l.recursiveAddNode(l.head, 2);
l.recursiveAddNode(l.head, 3);
l.print(l.head);

console.log();
console.log("************Divider************")
console.log();

const l2 = new LinkedList();
l2.addNode(1);
l2.addNode(2);
l2.addNode(3);
l2.print(l2.head);