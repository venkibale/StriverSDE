function graphColoring(graph, M) {
    const N = graph.length;
    const color = Array(N).fill(-1); // Initialize all vertices with no color (-1)

    // Helper function to check if it's safe to color vertex u with color c
    function isSafe(u, c, color) {
        for (let v = 0; v < N; v++) {
            if (graph[u][v] === 1 && color[v] === c) {
                return false; // An adjacent vertex has the same color
            }
        }
        return true;
    }

    // Backtracking function to assign colors
    function solve(u) {
        // If all vertices are assigned a color, return true
        if (u === N) {
            return true;
        }

        // Try every color for vertex u
        for (let c = 1; c <= M; c++) {
            // Check if it's safe to color vertex u with color c
            if (isSafe(u, c, color)) {
                color[u] = c; // Assign color c to vertex u

                // Recur to assign color to the next vertex
                if (solve(u + 1)) {
                    return true;
                }

                // Backtrack: If no color works, reset the color
                color[u] = -1;
            }
        }
        return false; // No color can be assigned to vertex u
    }

    // Start solving from the first vertex
    return solve(0);
}

// Example usage:
const graph = [
    [0, 1, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 1],
    [1, 0, 1, 0]
];

const M = 3; // Number of colors
console.log(graphColoring(graph, M)); // Output: true or false
