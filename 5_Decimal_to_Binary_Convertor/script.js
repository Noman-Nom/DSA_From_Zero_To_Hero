        const Convertor = (num)=>{
                    if(num===0) return 0


                    let binary = ''
                   
                    while(num>0){
                      let  rem = num % 2
                        num = Math.floor(num/2)

                        binary = rem + binary
                        
                    }
                    return binary

        }

        console.log(Convertor(10))