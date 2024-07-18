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
