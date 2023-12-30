import React, { useContext, useState } from 'react'

 
const CreatePost = () => {
    const [title,setTitle]=useState("")
    const [desc,setDesc]=useState("")
    const [file,setFile]=useState(null)
    const [cat,setCat]=useState("")
    const [cats,setCats]=useState([])


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

    {/* Post Categories (if needed) */}
    {/* Uncomment this section if you want to include categories
    <div className='flex items-center space-x-4 md:space-x-8'>
      <input
        value={cat}
        onChange={(e) => setCat(e.target.value)}
        className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
        placeholder='Enter post category'
        type="text"
      />
      <div
        onClick={addCategory}
        className='bg-black text-white px-4 py-2 font-semibold cursor-pointer rounded-md hover:bg-gray-800'
      >
        Add
      </div>
    </div>
    */}

    {/* Categories Display (if needed) */}
    {/* Uncomment this section if you want to display categories
    <div className='flex px-4 mt-3'>
      {cats?.map((c, i) => (
        <div key={i} className='flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md'>
          <p>{c}</p>
          <p onClick={() => deleteCategory(i)} className='text-white bg-black rounded-full cursor-pointer p-1 text-sm'><ImCross/></p>
        </div>
      ))}
    </div>
    */}

    {/* Post Description */}
    <textarea
      onChange={(e) => setDesc(e.target.value)}
      rows={8}
      className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
      placeholder='Enter post description'
    />

    {/* Create Button */}
    <button
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
