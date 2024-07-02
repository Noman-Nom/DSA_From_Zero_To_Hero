// Linear Space Complexity: O(n)

// An algorithm has linear space complexity when the amount of memory it requires is directly proportional to the size of the input data.

//  example 1 

const arr1 = [ 1, 2 ,3 ,4 ,5 , 6 , 7, 8]

for (let i = 0; i < arr1.length -1 ; i++) {
    const element = arr1[i];

    // console.log(element);
    
}

// example 2  Copying array 

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