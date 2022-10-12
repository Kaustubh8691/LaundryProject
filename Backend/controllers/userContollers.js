

const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const JWT_SECRET="laundry-service"


//create user

const createUser =async(req,res)=>{
    // check user already there or not
    try{
        const user= await User.findOne({email:req.body.email })

        if (!user){
        
        const salt = await bcrypt.genSalt(10)
        const securePassword = await bcrypt.hash(req.body.password,salt)

        //new usr creadentials

        const newUseInfo={
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            password:securePassword,
            pincode:req.body.pincode,
            district:req.body.district,
            address:req.body.address,
            state:req.body.state
        }

        const newuser =await User.create(newUseInfo)

        const data ={
            user:{
                id:newuser.id
            }
        }

        const authtoken =jwt.sign(data,JWT_SECRET)

        const success=true
        res.send({success,authtoken,name:user.name})

    }else{
        res.status(400).json({error:"sorry this user alredy rigistered"})}
        
    }catch(err){
        console.log(err)
        res.status(500).json({error:"internal server error"})
    }
}





const checkLogin = async(req,res)=>{

     //checking validat
    
    const {email, password }=req.body
    try{
    const user =await User.findOne({email})

    let success=false
    console.log(user)
//check email present or not
    if (!user){
        return  res.json({success,error:"try to login with correct credintials"})
    }
    
    //checking password
    const password_compare_res= await bcrypt.compare(password,user.password)

    if (!password_compare_res){
        return  res.json({success,error:"wrong password"})
    }

    const data = {
        user: {
          id: user.id
        }
      }

    const authtoken =jwt.sign(data,JWT_SECRET)

    success=true

    res.json({success,authtoken,name:user.name})
    }catch(err){
        console.log(err)
        res.status(500).json({error:"internal server error while login"})
    }

}


module.exports={createUser,checkLogin}