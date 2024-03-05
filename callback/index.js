//ทบทวน callback function
function calculate(x,y){
    setTimeout(() =>{
        return x+y;
    }, 3000)
}

function display(result){
    console.log(`ผลบวก= ${result}`);
}

const sum = calculate(100,50)
display(sum)
