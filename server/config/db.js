const mongoose = require("mongoose")
require('dotenv').config();

const conn = mongoose.createConnection(process.env.MONGO_URL);
conn.on('connected', () => {
  console.log('Mongoose connected mongodb');
});
conn.on('error', (err) => {
  console.error(`Mongoose connection error: ${err}`);
});

 //users
const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        
    },
    firstname:{
        type:String,
        required:true,
        
    },
    lastname:{
        type:String,
        required:true,
        
    }
},{timestamps:true})
  

const User = conn.model('User', UserSchema);


//blogs
const BlogPostSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      unique:true
    },
    desc: {
      type: String,
      required: true,
    },
    image:{
        type:String,
        required:false,
        
    },
    author: {
      type: String,
      ref: 'User', // Assuming you have a User model
      required: true,
    },
    tags:{
        type:Array,
        
    },
    
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: null,
    },
    likes: {
      type: Number,
      default: 0,
    },
  });
  
  const Blogs = conn.model('Blogs', BlogPostSchema);


  //comments
  const CommentSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    blog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Blogs',
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

  const Comment = conn.model('Comment', CommentSchema);


module.exports = { conn, User, Blogs, Comment};