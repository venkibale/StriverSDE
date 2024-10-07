var merge = function(intervals) {
    // < Time: N*log(N) >
    // sort ints by value of starting points
    intervals.sort((a,b)=>a[0]-b[0]);  
   
    let res = [];
    let currentInterval = intervals[0];
    
    // < Time: N >
    // Check start from i=0, for case when interval array only have 1 element
    for(let i=0; i<intervals.length; i++) { 
        // First Check >>> check current interval if:
        
        // 1. can merge with next interval -> update current interval after the merge, proceed next iteration
        if(currentInterval[1] >= intervals[i][0]){
    
            currentInterval[1] = Math.max(currentInterval[1], intervals[i][1]);
            
        } else {
        // 2. cannot merge with next interval -> push current interval into result array
            res.push(currentInterval);
            
            currentInterval = intervals[i];
            
        }
        
        // 3**. if current index is last element in array, push currentInterval into result
        // from previous First Check, either current interval is merged interval 
        // Or current interval is simply the last interval of sorted array
        if(i === intervals.length-1) {
            
            res.push(currentInterval)
            
        }
        
    }
    
    // < Space: N (worst case) >
    return res;
    
};


// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].