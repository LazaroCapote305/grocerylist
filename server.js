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


console.log(removedDrink);
console.log(drinks);
const drinks = ["coke zero", "pepsi", "coffee", "water"];
const id = drinks.indexOf("pepsi"); 
const removedDrink = drinks.splice(id,  1);
// removing item

var drinks = ["coke zero", "pepsi", "coffee", "water"]
drinks.push("water");
//adding item





