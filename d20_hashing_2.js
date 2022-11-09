// Given an integer array A of size N, find the first repeating element in it.
// We need to find the element that occurs more than once and whose index of the first occurrence is the smallest.
// If there is no repeating element, return -1.

// Input:  A = [10, 5, 3, 4, 3, 5, 6]
// output:  5

module.exports = { 
    //param A : array of integers
    //return an integer
       solve : function(A){
           let freqMap = new Map();
           for(let i=0; i<A.length; i++) {
               if(freqMap.has(A[i])) {
                   freqMap.set(A[i], freqMap.get(A[i])+1)
               } else {
                   freqMap.set(A[i], 1)
               }            
           }
           for(let i=0; i<A.length; i++) {
               if(freqMap.get(A[i])>1) {
                   return A[i]
               }           
           }
           return -1
           
       }
   };
   