function plusMinus(arr) {
    let fracPos = 0;
    let fracNeg = 0;
    let fracZero = 0;
    const size = arr.length; 
    
    for (let i in arr) {
        let val = arr[i];
        if (val > 0) {
            fracPos += 1;
        } else {
            if (val < 0) {
                fracNeg += 1;
            } else {
                fracZero += 1; 
            }
        }
    }
    
    console.log(fracPos/size); 
    console.log(fracNeg/size);
    console.log(fracZero/size);
}
