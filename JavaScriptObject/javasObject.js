let product = {
    name: "mouse",
    price: "1500",
    colors: "Black",
    category: "Computer",
    size:"M",
    displayProduct:function(){
        return "ชื่อสินค้า =" + this.name + "ราคา =" + this.price;
    }
}

console.log(product.displayProduct());

//object
// console.log("ชื่อสินค้า =",product.name)
// console.log(product.price)

//array
// let items = ["mouse", "1500", "white", "Computer", "M"]

// console.log(items[0])
// console.log(items[1])