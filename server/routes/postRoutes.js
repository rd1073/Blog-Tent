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




  router.get('/all-blogs', async (req, res) => {
    try {
      // Fetch all products from the database
      const blogs = await Blogs.find();
  
      // Return the products as JSON
      res.json(blogs);
      //console.log(products);
    } catch (error) {
      console.error('Error fetching products:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
   });


router.get('/my-blogs', async (req, res) => {

    const user = req.query.user;

    try {
      const blogs = await Blogs.find({author: user });
      res.json(blogs);
    } catch (error) {
      console.error('Error fetching posts:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }


   
   });
 


   router.get('/:blogId', async (req, res) => {

    const blogId = req.params.blogId;
    
    try {
    
      const blog = await Blogs.findById(blogId);
    
      if (!blog) {
    
        return res.status(404).json({ error: 'Blog not found' });
    
      }
    
      res.json(blog);
    
    } catch (error) {
    
      console.error('Error fetching blog:', error.message);
    
      res.status(500).json({ error: 'Internal Server Error' });
    
    }
  });
 
module.exports=  router ;