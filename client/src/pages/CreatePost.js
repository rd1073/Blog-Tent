import React, { useContext, useState } from 'react'
import { ImCross } from "react-icons/im";
import { useAuth } from '../context/authContext';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation


 
const CreatePost = () => {
    const [title,setTitle]=useState("")
    const [desc,setDesc]=useState("")
    const [file,setFile]=useState(null)
    const [tag,setTag]=useState("")
    const [tags,setTags]=useState([])
    const [user]=useAuth()
    const navigate = useNavigate();


    const deleteTag=(i)=>{
        let updatedTags=[...tags]
        updatedTags.splice(i)
        setTags(updatedTags)
     }
 
     const addTag=()=>{
         let updatedTags=[...tags]
         updatedTags.push(tag)
         setTag("")
         setTags(updatedTags)
     }



     const handleUpload=async (e)=>{
      e.preventDefault()
       
      console.log(user);
      const post={
        title,
        desc,
        author:user.user,
        
        tags:tags
      }

      const data=new FormData()
      data.append('file', file)
       


      if (file) {
        const data=new FormData()
        data.append('file', file)
        data.append('title', post.title)
        data.append('desc', post.desc)
        data.append('tags', post.tags)
        data.append('author', post.author)
        // img upload
        try {
          const imgUpload = await axios.post("http://localhost:5000/blog/create", data, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${user.token}` // Add this line to include the token in the request header
            }
          });
      
          // Handle the response from the server if needed
          console.log('Image upload successful', imgUpload.data);
        } catch (err) {
          // Handle errors
          console.error('Image upload failed', err);
        }
      
    navigate("/home")

      
     }}

  return (
    <div>
      <div className='px-6 md:px-[200px] mt-8'>
  <h1 className='font-bold md:text-2xl text-xl mb-4'>Create a Post</h1>
  <form className='w-full flex flex-col space-y-4 md:space-y-8 mt-4'>

    {/* Post Title */}
    <input
      onChange={(e) => setTitle(e.target.value)}
      type="text"
      placeholder='Enter post title'
      className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
    />

    {/* File Upload */}
    <label className='block text-sm font-medium text-gray-700'>Choose a Featured Image</label>
    <input
      onChange={(e) => setFile(e.target.files[0])}
      type="file"
      className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
    />

    {/* Post Tageegories (if needed) */}
     <div className='flex items-center space-x-4 md:space-x-8'>
      <input
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
        placeholder='Enter post Tag'
        type="text"
      />
      <div
        onClick={addTag}
        className='bg-black text-white px-4 py-2 font-semibold cursor-pointer rounded-md hover:bg-gray-800'
      >
        Add
      </div>
    </div>
    

    {/* Tagegories Display (if needed) */}
    
    <div className='flex px-4 mt-3'>
      {tags?.map((c, i) => (
        <div key={i} className='flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md'>
          <p>{c}</p>
          <p onClick={() => deleteTag(i)} className='text-white bg-black rounded-full cursor-pointer p-1 text-sm'><ImCross/></p>
        </div>
      ))}
    </div>
    

    {/* Post Description */}
    <textarea
      onChange={(e) => setDesc(e.target.value)}
      rows={8}
      className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
      placeholder='Enter post description'
    />

    {/* Create Button */}
    <button onClick={handleUpload}
      className='bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300'
    >
      Create Post
    </button>
  </form>
</div>

    </div>
  )
}

export default CreatePost