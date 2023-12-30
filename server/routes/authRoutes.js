const express = require("express");

const { Register, Login } =require("../controllers/authController");
 
const router = express.Router();

const protect=require("../config/protect")

  
router.route("/signup").post(Register);
router.route("/loginn").post(Login);

 //protected User routes for the react
router.route("/private").get(protect, (req, res) => {
    res.status(200).send({ ok: true });
  });
 
 
module.exports=  router ;