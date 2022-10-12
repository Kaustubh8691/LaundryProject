const jwt = require('jsonwebtoken')

const JWT_SECRET="laundry-service"


const fetchuser=(req,res,next)=>{
    
    const token =req.header('auth-token')
    if (!token){
        res.status(400).send("pls provide valid token")
    }
    try{
        const data =jwt.verify(token, JWT_SECRET)
        console.log(data,"data")

        req.user=data.user   //id userid
    }catch(error){
        res.status(400).send("pls provide valid token")
    }

    next()

}

module.exports=fetchuser;