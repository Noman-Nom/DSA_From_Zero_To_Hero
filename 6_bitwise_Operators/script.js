                //  program without bitwise operators 

                //  check number is Even ier ODD using decimal 
                 const num =4 
                 if (num %2 ===0) {
                    console.log("Number is even")
                    
                 }
                 else{
                    console.log("Number is odd")
                 }

            //  Bitwise operators

            let a = 5;   // 0101 in binary
            let b = 3;   // 0011 in binary
            
            console.log(a & b);  // Output: 1 (0001 in binary)
            console.log(a | b);  // Output: 7 (0111 in binary)
            console.log(a ^ b);  // Output: 6 (0110 in binary)
            console.log(~a);     // Output: -6 (inverts the bits of 5)
            console.log(a << 1); // Output: 10 (1010 in binary)
            console.log(a >> 1); // Output: 2 (0010 in binary)
            console.log(a >>> 1);// Output: 2 (0010 in binary)