const arr = [0 ,1 ,2 ,3 , 4 , 5 ,6 , 7 , 8 , 9 , 10 ]
//  big-0 (1)  or constant - 0(1)
// console.log(arr[0])



//  space and time complexity example of constants 

// Time Complexity: O(1)

// An algorithm has constant time complexity when the time it takes to execute is independent of the size of the input data. This means that no matter how large the input is, the execution time remains the same.

// example 1 
  const arr1 = [0 ,1 ,20 ,3 , 4 , 5 ,6 , 7 , 8 , 9 , 10 ]

  function CheckTimeComplexity(array , index){

    return array[index]
  }

  console.log(CheckTimeComplexity(arr1 , 2));


//    Space Complexity --  0(1)

// An algorithm has constant space complexity when the amount of memory it requires does not change with the size of the input data. This means it uses a fixed amount of space regardless of the input size.



const arr2 = [0, 1 , 2 ,3 ,4 , 5]
console.log( "length of array ",arr2.length - 1)


// example 3  

const arr3 = [0, 1 , 2 ,3 ,4 , 5]

let num = 10 

// arr3[3] = arr3[3] + num
arr3[3] +=num

console.log(arr3[3]);



// example 4  swap two numbers

let a  = 10 
let b = 5 

console.log("a = ", a)
console.log("b = ", b)


let temp = a 

a = b 

b = temp 
console.log("swap a = ", a)
console.log("swap b = ", b)

