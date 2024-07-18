            // Quadratic Time Complexity - O(n²)    
// Checking All Pairs in an Array

    const arr = [1,2,3,4,5]
    const checkPair = (arr)=>{
        let pairs = []

        for (let i = 0; i < arr.length; i++) {
           for (let j = i + 1; j < arr.length; j++) {
            pairs.push([arr[i], arr[j]])
            
           }
            
        }
        return pairs


    }
            console.log(checkPair(arr))


            // Quadratic Space Complexity - O(n²)
            // Creating an Adjacency Matrix
    const createAdjencyMatrix = (n)=>{

        let matrix = []
        for (let i = 0; i < n; i++) {
            matrix[i]=[]
            for (let j = 0; j < n; j++) {
               matrix[i][j] = i
                
            }
            
        }
        return matrix

    }
    const n = 4
    console.log(createAdjencyMatrix(n))

                // TASK 
    // JavaScript code for finding pairs of values in an array whose sum equals a target, demonstrating quadratic time complexity (O(n²)):


    const arr2 = [1,2,3,4,5,6,7,8,9,0]
    const target = 10
    const findTargetPairs = (arr2 , target)=>{
        
        for (let i = 0; i < arr2.length; i++) {
                for (let j = i+ 1; j < arr2.length; j++) {
                    
                        if(arr2[i] + arr2[j]=== target){
                            console.log(`pairs : ${arr2[i]} , ${arr2[j]}`)
                        }

                }
            
        } 

    }
    console.log(findTargetPairs(arr2 , target))