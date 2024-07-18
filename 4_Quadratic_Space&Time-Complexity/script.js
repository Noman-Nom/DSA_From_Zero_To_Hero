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