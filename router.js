const express = require("express");
const router=express.Router()
const User=require('./user');
router.post('/add', async (req, res) => {
    console.log("req.body",req.body)
    const user = new User({
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
        phone_number: req.body.number,
        message: req.body.message
    })

    try {
        await user.save();
        res.status(200).json(user)
        console.log("Succesfully created user",user)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
        console.log("Error....",error)
    }
})


router.get('/getAllUser', async (req, res) => {
    try {
      const user= await User.find({})
      res.send(user)
  } catch (error) {
      console.log("errrororrrr....",error)
      res.status(400).send(error)
  }

})
module.exports = router;