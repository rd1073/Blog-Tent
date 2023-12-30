const { User }=require("../config/db")
const generateToken = require("../config/generateToken");
const bcrypt = require("bcrypt");

 


const Register = async (req, res) => {
    try {
      const { username, password, email, firstname, lastname } = req.body;
      console.log("Request Body:", req.body);
  
      if (!username || !password || !email || !firstname || !lastname) {
        res.status(400).json({ error: "Please enter all the fields" });
        return;
      }
  
      // Check if user already exists
      const userExists = await User.findOne({ username });
  
      if (userExists) {
        res.status(400).json({ error: "Username is already taken" });
        return;
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user instance
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        firstname,
        lastname,
      });
  
      // Save the user instance to the database
      const user = await newUser.save();
  
      console.log("User saved:", user);
  
      res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error probably" });
    }
  };



  
  const Login = async (req, res) => {
    try {
        const { identifier, password } = req.body;
    
        if (!identifier || !password) {
          return res.status(400).json({ msg: "Identifier and password are required" });
        }
    
        // Check if the identifier is an email
        let user = await User.findOne({
        
            email: identifier,
        
        });
    
        // If the identifier is not an email, check if it's a username
        if (!user) {
          user = await User.findOne({
            
              username: identifier,
            
          });
        }
    
        // Check if the user with the specified email or username exists
        if (!user) {
          return res.status(404).json({ msg: "User not found" });
        }
        console.log(user);
        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(400).json({ msg: "Wrong Password" });
    
        const userId = user.id;
        const username = user.username;
        const email = user.email;
        const firstname = user.firstname;
        const lastname = user.lastname;

        const accessToken = generateToken(userId);
    
        res.json({
          userId: userId,
          username: username,
          email: email,
          firtname: firstname,
          lastname: lastname,
          accessToken: accessToken,
        });
      } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error" });
      }};


  module.exports={ Register, Login}
  