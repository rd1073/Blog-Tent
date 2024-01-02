const { User,Blogs  }=require("../config/db")
 
 


const CreateBlog = async (req, res) => {
    try{
        const newBlog=new Blogs(req.body)
        console.log(req.body)
        //const savedPost=await newPost.save()
        
       // res.status(200).json(savedPost)
    }
    catch(err){
        
        res.status(500).json(err)
    }
     


}




module.exports={CreateBlog}