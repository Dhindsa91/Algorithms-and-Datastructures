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

class Solution {
    public void backtrack(int n, ArrayList<Integer> nums,List<List<Integer>> output,int first) {
      if (first == n)
        output.add(new ArrayList<Integer>(nums));
      for (int i = first; i < n; i++) {
        Collections.swap(nums, first, i);
        backtrack(n, nums, output, first + 1);
        Collections.swap(nums, first, i);
      }
    }
  
    public List<List<Integer>> permute(int[] nums) {
      List<List<Integer>> output = new LinkedList();
  
      ArrayList<Integer> nums_lst = new ArrayList<Integer>();
      for (int num : nums)
        nums_lst.add(num);
  
      int n = nums.length;
      backtrack(n, nums_lst, output, 0);
      return output;
    }
  }

class Solution {
    public List<String> generateParenthesis(int n) {
        List<String> combinations = new ArrayList();
        generateAll(new char[2 * n], 0, combinations);
        return combinations;
    }

    public void generateAll(char[] current, int pos, List<String> result) {
        if (pos == current.length) {
            if (valid(current))
                result.add(new String(current));
        } else {
            current[pos] = '(';
            generateAll(current, pos+1, result);
            current[pos] = ')';
            generateAll(current, pos+1, result);
        }
    }

    public boolean valid(char[] current) {
        int balance = 0;
        for (char c: current) {
            if (c == '(') balance++;
            else balance--;
            if (balance < 0) return false;
        }
        return (balance == 0);
    }
}