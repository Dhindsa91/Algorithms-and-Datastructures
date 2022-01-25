import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.LinkedList;

public class Graph {
    
    private int V;
    private ArrayList<ArrayList<Integer>> adj = new ArrayList<ArrayList<Integer>>();

    Graph(int v){
        V = v;
        for(int i = 0; i < v; i++) adj.add(i, new ArrayList<Integer>());
    }

    void addEdge(int vertice, int child){
        adj.get(vertice).add(child);
    }

    void BFS(int s){
        boolean visited[] = new boolean[V];

        LinkedList<Integer> queue = new LinkedList<Integer>();
        visited[s] = true;
        queue.add(s);

        System.out.println("Visited Nodes: " + Arrays.toString(visited));

        while(queue.size() != 0){
            s = queue.poll(); 
            System.out.print(s + " ");

            // Get s vertice children
            Iterator<Integer> i = adj.get(s).listIterator();
            while (i.hasNext())
            {
                // current node
                int n = i.next();
                // check if we've already been here
                if (!visited[n])
                {
                    visited[n] = true;
                    queue.add(n);
                }
            }
        }
    }

    public static void main(String[] args) {
        Graph graph = new Graph(5);

        graph.addEdge(0, 1);
        graph.addEdge(0, 2);
        graph.addEdge(1, 3);
        graph.addEdge(1, 4);
        // graph.addEdge(4, 5);
        // graph.addEdge(4, 6);

        graph.BFS(1);
 

    }
}
