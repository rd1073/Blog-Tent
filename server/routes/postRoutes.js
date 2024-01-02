const express = require("express");
const router = express.Router();
const multer = require('multer'); // for handling file uploads
const path=require("path")
const { User,Blogs  }=require("../config/db")


const protect=require("../config/protect")



const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
      cb(null,'public/Images')
    },
    filename:(req,file,cb)=>{
      cb(null,file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
  }) 
  
  
  const upload = multer({
    storage: storage
  });

  
router.post('/create',  protect, upload.single('file'), async (req, res) => {
    try {
      // Access data from the request body
      const { title, desc,   author, tags } = req.body;
  
      // Access the uploaded file (if applicable)
      const file = req.file;
    
     // console.log('Received Data:', { title, desc, tags, file, author});

      // Handle the file as needed (e.g., save it to MongoDB)
  
      const newBlog = new Blogs({
        title,
        desc,
        author,
        tags,
        image:req.file.filename,
      });
  
      const savedBlog = await newBlog.save();
  
      res.status(201).json(savedBlog);
     
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });
 
 
module.exports=  router ;