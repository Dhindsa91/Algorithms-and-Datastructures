import java.util.*;

public class Whiteboard {

    int V;
    ArrayList<ArrayList<Integer>> adj;

    void topologicalSort() {
        Stack<Integer> stack = new Stack<Integer>();

        boolean visited[] = new boolean[V];
        for (int i = 0; i < V; i++)
            visited[i] = false;

        for (int i = 0; i < this.V; i++)
            if (visited[i] == false)
                this.topologicalSortUtil(i, visited, stack);

        // Print contents of stack
        while (stack.empty() == false)
            System.out.print(stack.pop() + " ");
    }

    void topologicalSortUtil(int v, boolean visited[], Stack<Integer> stack) {

        visited[v] = true;
        Integer i;

        Iterator<Integer> it = adj.get(v).iterator();
        while (it.hasNext()) {
            i = it.next();
            if (!visited[i])
                topologicalSortUtil(i, visited, stack);
        }

        stack.push(new Integer(v));
    }

    // private void minHeapify(int position) {

    //     // check whether the given node is non-leaf and greater than its right and left
    //     // child
    //     if (!checkLeaf(position)) {
    //         if (heapData[position] > heapData[getLeftChildPosition(position)]
    //                 || heapData[position] > heapData[getRightChildPosition(position)]) {

    //             // swap with left child and then heapify the left child
    //             if (heapData[getLeftChildPosition(position)] < heapData[getRightChildPosition(position)]) {
    //                 swap(position, getLeftChildPosition(position));
    //                 minHeapify(getLeftChildPosition(position));
    //             }

    //             // Swap with the right child and heapify the right child
    //             else {
    //                 swap(position, getRightChildPosition(position));
    //                 minHeapify(getRightChildPosition(position));
    //             }
    //         }
    //     }
    // }

}