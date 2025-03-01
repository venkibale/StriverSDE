function restoreIpAddresses(s) {
    const result = [];
    
    // Helper function to validate each segment
    function isValid(segment) {
        // If the segment is greater than 255 or has leading zeros
        return segment.length > 0 && 
               parseInt(segment) <= 255 && 
               (segment[0] !== '0' || segment === '0');
    }
    
    // Backtracking function to generate all valid IP addresses
    function backtrack(start, parts) {
        // Base case: If we have 4 parts and the string is fully used
        if (parts.length === 4) {
            if (start === s.length) {
                result.push(parts.join('.'));
            }
            return;
        }
        
        // Try all possible lengths for the next segment (1, 2, or 3 digits)
        for (let len = 1; len <= 3; len++) {
            if (start + len <= s.length) {
                const segment = s.substring(start, start + len);
                if (isValid(segment)) {
                    parts.push(segment);  // Choose this segment
                    backtrack(start + len, parts);  // Recurse for the next part
                    parts.pop();  // Backtrack: remove the last segment
                }
            }
        }
    }
    
    // Edge case: If string is too short or too long, no valid IPs are possible
    if (s.length >= 4 && s.length <= 12) {
        backtrack(0, []);
    }
    
    return result;
}

// Example Usage
console.log(restoreIpAddresses("25525511135"));
// Output: ["255.255.11.135", "255.255.111.35"]
