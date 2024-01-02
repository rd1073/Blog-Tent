import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
     
 useEffect(() => {
    // Fetch products when the component mounts
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('http://localhost:5000/blog/all-blogs');
      const data = await response.json();

      // Update state with the fetched products
      setBlogs(data);
      console.log(data)
    } catch (error) {
      console.error('Error fetching products:', error.message);
    }
  };

  const blogPosts = [
    {
      title: 'How to use sticky note for problem solving',
      image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      link: '#',
      date: '20 October 2019',
    },
    // Add more blog posts as needed
  ];


  return (
    <section className="dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
    <h1 class="text-base font-bold leading-relaxed mt-0 mb-0 text-pink-800">
    "Blogging is not just about sharing your thoughts; it's about creating a conversation, inspiring minds, and building a community of like-minded individuals. It's a journey of self-expression, continuous learning, and the art of making a meaningful impact, one post at a time."
        </h1>
        <footer class="block text-pink-600">
        - Someone famous Somewhere
        </footer>
        <br />
        <br />
        <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Discover...</h1>
      <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
      
      
        {/* Blog posts */}
        {blogs.map((blog, index) => (
          <div key={index} className="lg:flex">
            <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={'http://localhost:5000/Images/'+blog.image} alt={blog.title} />

            <div className="flex flex-col justify-between py-6 lg:mx-6">
              <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white">
                {blog.title}
              </a>

              <span className="text-sm text-gray-500 dark:text-gray-300">Updated: {blog.createdAt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Blogs
