const getLargestNumber = (array) => {   
    let largestNumber = array[0];    
    for (let i = 1; i < array.length; i++) {     
        if (array[i] > largestNumber) {       
            largestNumber = array[i];     
        }   
    }    
    return largestNumber; 
}
console.log(getLargestNumber( [4, 6, 8, 2, 10]));