const express = require("express")
const connectDB = require("./db/connectdb.js")
const authRoute = require('./routes/auth.js')
const userRoute = require('./routes/users.js')
const postRoute = require('./routes/posts.js')
const categoryRoute = require('./routes/categories.js')
const app = express();
const port  = process.env.PORT || "5000"
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://0.0.0.0:27017";
const multer = require("multer")
// DataBase Connection
connectDB(DATABASE_URL);


app.use(express.json());

    
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, "images");
    },
    filename:(req,file,cb)=>{
        cb(null, file.fieldname + "-" + Date.now()+".jpg");
    },
});

const upload = multer({storage:storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
    // res.status(200).json("file has been uploaded!!!!!")
    res.send("Image has been uploaded")
});

//Load Routes
app.use("/api/auth/",authRoute);
app.use("/api/user/",userRoute);
app.use("/api/post/",postRoute);
app.use("/api/category/",categoryRoute);


app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`)
})



