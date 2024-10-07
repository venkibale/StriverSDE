var canConstruct = function (ransomNote, magazine) {
    for (const char of magazine) {
      ransomNote = ransomNote.replace(char, "");
    }
    
    if (!ransomNote) return true;
    else return false;
  };

//   Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true