
// You are given an array A of N integers. You will have to return number of distinct elements of the array.
// input: A = [3, 3, 3, 9, 0, 1, 0]
// output: 4

module.exports = { 
    //param A : array of integers
    //return an integer
       solve : function(A){
           let freqSet = new Set()
           for(let i=0;i<A.length;i++) {
               if(!freqSet.has(A[i])) {
                   freqSet.add(A[i])
               }
           }
           return freqSet.size
       }
   };