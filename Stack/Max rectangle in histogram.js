function largestRectangleArea(heights) {
    let stack = [];
    let maxArea = 0;

    // Traverse all bars in the histogram
    for (let i = 0; i <= heights.length; i++) {
        // Use a height of 0 for the imaginary bar after the last index
        let currentHeight = (i === heights.length) ? 0 : heights[i];

        // Process the stack when the current bar is shorter than the bar at the top of the stack
        while (stack.length > 0 && heights[stack[stack.length - 1]] > currentHeight) {
            let top = stack.pop(); // Index of the bar at the top of the stack

            // Height of the rectangle is the height of the popped bar
            let height = heights[top];

            // Width of the rectangle
            let width = (stack.length === 0) ? i : i - stack[stack.length - 1] - 1;

            // Calculate the area and update maxArea
            maxArea = Math.max(maxArea, height * width);
        }

        // Push the current index onto the stack
        stack.push(i);
    }

    return maxArea;
}

// Example Usage
let heights = [2, 1, 5, 6, 2, 3];
console.log(largestRectangleArea(heights)); // Output: 10
