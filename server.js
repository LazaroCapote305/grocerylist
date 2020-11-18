console.log("hello world");
const express = require("express")
const app = express()
const PORT = 3000
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

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
    { id: 12, name: "coke zero", price: 1.00},
    { id: 122, name: "zero", price: 1.00},
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

app.delete("/drinks/:id", (req, res) => {
    const {id} = req.params;

    const index = drinks.findIndex(d => d.id == id);
    drinks.splice(index, 1);
    res.status(200).json({message: "sucesss"});
}) 

app.post("/drinks", (req, res) => {
    console.log(req.body);
    drinks.push(req.body);
    res.status(200).json({status: "success", body: req.body})
});

app.put("/drinks/:id", (req, res) => {
    
})