package WeightedGraph;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;

public class WeightedGraph{
    
    int V;
    ArrayList<ArrayList<Vertice>> graph = new ArrayList<ArrayList<Vertice>>();

    public WeightedGraph(int V){
        this.V = V;
        for(int i = 0; i < V; i++){
            graph.add(new ArrayList<>());
        }
        System.out.println("Hello World!");
    }

    public static class Vertice<T> {
        int index;
        int weight;
        T value;

        Vertice(int index, int weight, T value){
            this.index = index;
            this.weight = weight;
            this.value = value;        
        }

        @Override
        public String toString(){
            return "[Index: " + this.index + " Weight: " + this.weight + " Value: " + this.value + "]";
        }

    }

    public void addEdge(int child, int index, int weight, String value){
        Vertice<String> v =  new Vertice<String>(index, weight, value);
        graph.get(child).add(v);
    }

    public void print(){
        for(int i = 0; i < this.V; i++){
            System.out.println("Index: " + i + graph.get(i).toString());
        }
    }

    public void BFS(int position){
        System.out.println("ROOT NODE: " + position);
       boolean[] visited = new boolean[V];
       LinkedList<Integer> queue = new LinkedList<Integer>();
    // Stack<Integer> queue = new Stack<Integer>();

       Arrays.fill(visited, false);

        visited[position] = true;
        queue.add(position);
        String prefix = "";
        while(queue.size() != 0){
            position = queue.poll(); 
            // position = queue.pop();

            ArrayList<Vertice> children = graph.get(position);
            for (int j = 0; j < children.size(); j++) 
            {
                int index = children.get(j).index;
                // check if we've already been here
                if (!visited[index])
                {
                    System.out.println(prefix + " " +children.get(j));
                    visited[index] = true;
                    queue.add(index);
                }
            }
         
        }
    }

    public void DFS(){

    }

    public static void main(String[] args) {
        System.out.println("Args " + Arrays.toString(args));
        WeightedGraph graph = new WeightedGraph(6);
        graph.addEdge(0, 1, 72, "Vancouver");
        // graph.addEdge(0, 2, 24, "Toronto");
        // graph.addEdge(0, 7, 24, "Halifax");
        // graph.addEdge(2, 5, 13, "Ottawa");
        graph.addEdge(1, 3, 13, "Calgary");
        graph.addEdge(1, 4, 13, "Edmonton");
        graph.addEdge(4, 5, 13, "Quebec");
 
        // graph.print();
        graph.BFS(0);
    }
}
