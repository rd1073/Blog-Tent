require('dotenv').config();

const express = require("express");
const conn=require("./config/db")
const app = express();
const cors = require('cors');
const multer=require("multer")
const authRoutes=require("./routes/authRoutes")
const postRoutes=require("./routes/postRoutes")
const cookieParser=require('cookie-parser')



app.use(express.json());
app.use(express.static('public'))

app.use(
    cors({
      origin: "http://localhost:3000",
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      // <-- location of the react app were connecting to
      credentials: true,
    }) 
  );
app.use(cors());

app.use(cookieParser())


app.use("/auth", authRoutes);
app.use("/blog", postRoutes);





{/*app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.file);
   
});*/}








app.listen(process.env.PORT,console.log(`Server running on 5000`));