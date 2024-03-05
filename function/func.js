
//การสร้างแบบที่1
function message(){
    alert("sudlhor");
}

function displayName(){
    document.write("Noppanat")
}

//การสร้างแบบที่2
function fullname(fnamem, lname){
    console.log("firstname =",fnamem, "Lastname =",lname);
}

fullname("Noppanat", "Nittayapaibool");

function cal(x,y){
    let total = x+y;
    console.log(total);
    
}
cal(10,20)

//การสร้างแบบที่3
//การส่งค่าใน function ออกมา 
function getComputerIp(){
    return "192.168"
}

let computerIp = getComputerIp(); //สร้างตัวแปลออกมารับค่าที่ส่งออกมาจาก function 
console.log(computerIp);

//ในกรณีไม่เอาไปใช้ต่อ 
function myAddress(){
    let city = "korat";
    return city;
}
console.log("living city = ", myAddress())

//การสร้างแบบที่4

function setSalary(salary){
    let bonus = 1000;
    return salary + bonus;
}
let total = setSalary(10000);
total-=500;
console.log("totalSalary = ", total)

let totalb = setSalary(16000);
console.log("totalSalary = ", totalb)

//การสร้างแบบกำหนกค่าใน parameter 
 
