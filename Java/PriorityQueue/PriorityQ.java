import java.util.*;

public class PriorityQ {

    public static void main(String[] args){
        PriorityQueue<Integer> pq = new PriorityQueue();
        pq.add(5);
        pq.add(9);
        pq.add(1);
        System.out.println(pq.toString());
        System.out.println(pq.peek());
        System.out.println(pq.poll());
        System.out.println(pq.toString());
    }
}
