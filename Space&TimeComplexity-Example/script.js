const arr = [0 ,1 ,2 ,3 , 4 , 5 ,6 , 7 , 8 , 9 , 10 ]
//  big-0 (1)  or constant - 0(1)
// console.log(arr[0])



//  space and time complexity example of constants 

// Time Complexity: O(1)

// An algorithm has constant time complexity when the time it takes to execute is independent of the size of the input data. This means that no matter how large the input is, the execution time remains the same.

  const arr1 = [0 ,1 ,20 ,3 , 4 , 5 ,6 , 7 , 8 , 9 , 10 ]

  function CheckTimeComplexity(array , index){

    return array[index]
  }

  console.log(CheckTimeComplexity(arr1 , 2));