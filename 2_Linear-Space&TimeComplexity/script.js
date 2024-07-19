// Linear Space Complexity: O(n)

// An algorithm has linear space complexity when the amount of memory it requires is directly proportional to the size of the input data.

//  example 1 

const arr1 = [ 1, 2 ,3 ,4 ,5 , 6 , 7, 8]

for (let i = 0; i < arr1.length -1 ; i++) {
    const element = arr1[i];

    // console.log(element);
    
}



// example 2  Copying array   ------->   The amount of memory used by newArray is directly proportional to the size of the input array.

// Therefore, the space complexity is O(n)

const arr2 = [ 1, 2 ,3 ,4 ,5 , 6 , 7, 8, 9]

const copyArrayFunction = ()=>{


    let  newArray = []
    for (let i = 0; i < arr2.length; i++) {
        newArray.push(arr2[i])

        
    }
    return newArray
}

      copyArray  = copyArrayFunction(arr2)
      console.log("Array = ", arr2)
      console.log("Copy Array =", copyArray )


    //   example 3 Sum of Elements in an Array  ---->The number of operations increases linearly with the number of elements in the array.
    // Therefore, the time complexity is O(n).


            const arr3 = [ 1, 2 ,3 ,4 ,5 , 6 , 7, 8, 9]

            const sumArrayFunction = (arr3)=>{

                let sum = 0

                for (let i = 0; i < arr3.length; i++) {
                    sum = sum + arr3[i]


                    
                }
                return sum
            }

            sumOfArray = sumArrayFunction(arr3)
            console.log("Array = ", arr3)
            console.log("Sum of array = ", sumOfArray)