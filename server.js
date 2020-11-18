console.log("hello world");
const express = require("express")
const app = express()
const PORT = 3000

app.get('/', (req,res)=>{
    res.send('Hello World!')
})

app.listen(PORT, () =>{
    console.log("Example app listening")
})


// console.log(removedDrink);
// console.log(drinks);
// const drinks = ["coke zero", "pepsi", "coffee", "water"];
// const id = drinks.indexOf("pepsi"); 
// const removedDrink = drinks.splice(id,  1);
// // removing item

let drinks = [
    { id: 1, name: "coke zero", price: 1.00},
    { id: 2, name: "zero", price: 1.00},
    { id: 3, name: "cherry coke", price: 1.00},
    { id: 4, name: "", price: 1.00},
]
let drinks = [
    
]
drinks.splice(1,2)
console.log(drinks)
drinks.splice(id; 0,2)


// To get all drinnks
app.get("/drinks", (req, res) => {
    res.status(200).json(drinks);
})

/**
 *  app.delete("/drinks/:id", (req, res) => {
 *      let drinks = [
    { id: 1, name: "coke zero", price: 1.00},
    { id: 2, name: "zero", price: 1.00},
    { id: 3, name: "cherry coke", price: 1.00},
    { id: 4, name: "dr pepper", price: 1.00},
]

drinks[1].price

console.log(drinks);
let id = 2
for (let i = 0; i < drinks.length; i++) {
    if (drinks[i].id == id){
        drinks.splice(i, 1);
    }

}

console.log("\n\n*******************")
console.log(drinks);
 * })
 * 
 * 
 */







// drinks.push("water");
// //adding item

