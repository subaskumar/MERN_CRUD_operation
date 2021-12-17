
const express = require("express")  // here we initiate express
const app = express();

const dotenv = require("dotenv")
const mongoose = require("mongoose")
dotenv.config()
// app.get('/', (req,res) => res.send("Hello World"))


// middleware
app.use(express.json());
app.use(express.urlencoded());

mongoose.connect(
    process.env.DB_CONNECT,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    ()=> console.log("connected to MongoDB")
)


const productRouts = require("./routers/product")
app.use("/api/product", productRouts)

app.listen(7000, () => console.log("server up and running on port 7000"));




// const homeRout = require("./routes/home")
// app.set('view engine','ejs');
// app.use('/home',homeRout)
// app.use(express.static("public"));