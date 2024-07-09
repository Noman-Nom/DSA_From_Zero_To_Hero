//  recall while 

let count = 0 

while(count<2){
    // console.log("Count is :", count)
    count ++ ;
}


let number = 1
let sum = 0 

while(number<=10){
    sum += number 
    number ++

}
// console.log("sum = ", sum)


// Example Problems
// Problem 1: Binary Search
// Given a sorted array [1, 3, 4, 5, 6, 8, 9] and a target value 6, implement a binary search to find the index of 6.

 

                const BinarySearch = (arr , target)=>{
                            let left = 0;
                            let right = arr.length -1

                            while(left<=right){
                                const mid = Math.floor((left+right)/2)
                                // check  if mid is our target
                                if(arr[mid] === target){
                                    console.log(`${target} found in: ${mid}`)

                                    return
                                }
                                if(arr[mid] < target){

                                    left = mid + 1
                                    console.log("left")
                                }
                                else {
                                    right = mid -1
                                    console.log("Right")
                                }
                            }

                            console.log(target + " not found in array");


                }

                const arr =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                const target = 6 
                BinarySearch(arr , target)