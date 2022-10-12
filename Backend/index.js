
const express = require('express')
const app =express()


const mongoose = require('mongoose')
//connecting to DB
mongoose.connect('mongodb+srv://abc123:Tishaverma@cluster0.dhuyb.mongodb.net/?retryWrites=true&w=majority',{ useNewUrlParser: true }).then( () => console.log("MongoDB Connected")).catch( (err) => console.log("MongoDB error"))


// mongoose.connect('mongodb://localhost:27017/laundry-service',()=>{
//     console.log("mongosee connected");
// });

//external middleware
const cors = require('cors')
app.use(cors())

//built-in middleware
app.use(express.json())


//user routes
app.use( require("./routes/auth"))

//orders routes
app.use("/order" ,require("./routes/orders"))


const PORT= 5000

//creating server
app.listen(PORT,()=>{
    console.log("app is listing at port 5000");
})

