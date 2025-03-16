const express = require("express");
const Razorpay = require("razorpay");
const port = 3000;

app = express();

app.use(express.static("public" ));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
})

// var instance = new Razorpay({ key_id: 'YOUR_KEY_ID', key_secret: 'YOUR_SECRET' })

// instance.orders.create({
//   amount: 50000,
//   currency: "INR",
//   receipt: "receipt#1",
//   notes: {
//     key1: "value3",
//     key2: "value2"
//   }
// })

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})