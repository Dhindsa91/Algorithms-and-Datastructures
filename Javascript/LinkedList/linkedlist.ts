class Nod {

    next = null;
    last = null;
    data = null;

    constructor(data){
        this.data = data;
    }

}

class LinkedList{

    head = null;

    addNode(data) {    
        //Create a new node    
        var n = new Nod(data);    
            
        //Checks if the list is empty    
        if(this.head == null) {    
            //If list is empty, both head and tail will point to new node    
            this.head = n;    
        }    
        else {    
            //newNode will be added after tail such that tail's next will point to newNode       
            //newNode will become new tail of the list    

            n.next = this.head
            this.head = n;
            n
        }    
    }    

}

const LL = new LinkedList();
LL.addNode(1);
LL.addNode(2);
LL.addNode(3);
LL.addNode(4);
LL.addNode(5);

console.log(LL.head);