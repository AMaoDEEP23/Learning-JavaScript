let colors = ["red", "green", "blue", "yellow", "silver", "pink", "orange", "black", "purple", "white"]
// let x = colors.join("| ") 
// console.log(x)
console.log(colors.pop())
let x = colors.pop() 
console.log(x)
console.log(colors)

//รวม Array by using Concat
let a = ["ผักกาด", "คะน้า"];
let b = ["ส้ม", "ทุเรียน"];
let c = ["ชาม", "จาน"]

let d = a.concat(b,c);
console.log(d)


// เรียงลำดับใน Array แบบตัวเลข (น้อยไปมาก-มากไปน้อย)
//เป็นแบบการกำหนดค่า
let points = [20, 100, -100, 5, -25, 10]

points.sort(function(a,b){
    return b-a
});
console.log(points)

//เป็นการส่งค่าเข้าไปใน function
// function order(point) {
//     return point.sort((a,b) => a-b)
// }

// console.log(order([20, 100, -100, 5, -25, 10]))