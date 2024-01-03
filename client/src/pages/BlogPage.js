import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogPage = () => {
  const { blogId } = useParams();

  //const decodedTitle = decodeURIComponent(blogtitle);
  const [blog, setBlog] = useState(null);


  useEffect(() => {
    
    fetchBlog();
  }, );


  const fetchBlog = async () => {
    try {
      const response = await fetch(`http://localhost:5000/blog/${blogId}`);
      if (!response.ok) {
        throw new Error('Blog not found');
      }
      const data = await response.json();
      setBlog(data);
    } catch (error) {
      console.error('Error fetching blog:', error.message);
    }
  };

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
   
 
    <div className="relative">
        
         <br />

        <div className="w-full md:w-2/5 mx-auto">
            
            <div className="w-full text-gray-800 text-4xl px-5 font-bold leading-none">
                {blog.title}
            </div>
            
            <br />
            <br />
            
            <div className="mx-5 text-center">
  <img
    src={`http://localhost:5000/Images/${blog.image}`}
    alt={blog.title}
    className="max-w-2xl h-auto mx-auto"
  />
</div>

            <br />
            <br />
             
            
            <div className="w-full text-gray-600 font-thin italic px-5 pt-3">
                By <strong className="text-gray-700">{blog.author}</strong><br />
                {blog.createdAt}<br />
                
            </div>
 
            
            <div className="px-5 w-full mx-auto">
  <h1 className="my-5 text-3xl font-light text-gray-800 text-left">{blog.desc.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ))}</h1>
</div>


        </div>
        
        
    </div>
 
   
  )
}

export default BlogPage
