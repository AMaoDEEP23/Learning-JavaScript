let titleEl = document.getElementById("title"); //อ้างอิงผ่าน id
let contentEl = document.querySelector(".content"); //อ้างอิงผ่านclass 
let allEl = document.querySelectorAll("p"); //อ้างอิงผ่าน tag

const box = document.querySelector(".light");
// titleEl.style.color = "red";
// titleEl.style.backgroundColor = "yellow";

function lightMode(){
    // titleEl.style.color = "red";
    // titleEl.style.backgroundColor = "yellow";
    // titleEl.style.fontSize = "60px";

    // contentEl.setAttribute("class", "noppanat");
    box.setAttribute("class", "light");
}

function darkMode(){
    // titleEl.style.color = "red";
    // titleEl.style.backgroundColor = "yellow";
    // titleEl.style.fontSize = "60px";

    // contentEl.setAttribute("class", "noppanat");
    box.setAttribute("class", "dark");
}