var checkInclusion = function(s1, s2) {
    const s1Len = s1.length;
    const s2Len = s2.length;
    
    if (s1Len > s2Len) return false;

    // Create character frequency arrays for s1 and the initial window in s2
    const aCharCode = 'a'.charCodeAt(0);
    const s1Count = new Array(26).fill(0);
    const s2Count = new Array(26).fill(0);

    for (let i = 0; i < s1Len; i++) {
        s1Count[s1.charCodeAt(i) - aCharCode]++;
        s2Count[s2.charCodeAt(i) - aCharCode]++;
    }

    // Check if initial window matches
    if (arraysMatch(s1Count, s2Count)) return true;

    // Slide the window over s2
    for (let i = s1Len; i < s2Len; i++) {
        // Add the next character in the window
        s2Count[s2.charCodeAt(i) - aCharCode]++;
        // Remove the character that goes out of the window
        s2Count[s2.charCodeAt(i - s1Len) - aCharCode]--;

        // Check if the current window matches
        if (arraysMatch(s1Count, s2Count)) return true;
    }

    return false;
};

// Helper function to compare two arrays for equality
function arraysMatch(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}
