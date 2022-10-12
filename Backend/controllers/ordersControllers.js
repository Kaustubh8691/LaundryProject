const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Orders = require('../models/Orders')

const JWT_SECRET="laundry-service"


//create user

const createOrder =async(req,res)=>{
    // check user already there or not
    try{
        
        const {orderItems,totalItems,totalPrice}=req.body
        // console.log(orderItems,"object")
        console.log(req.user  , "idddd") 
        const neworder=await Orders.create(
            {orderItems,
               totalPrice,
               totalItems,
            user:req.user.id
        })
        res.send({sucsess:"created"})
        
    }catch(err){
        console.log(err)
        res.status(500).json({error:"internal server error 1234"})
    }
}

const getOrderList =async(req,res)=>{
    try{
    const orderlist =await Orders.find({user:req.user.id})
   //const user = orderlist[1]._id
   //console.log(user)
    /*if (!orderlist){
        res.json(
            {order:"order not found"}
        )
    }*/
    res.json(
        orderlist)
    }catch(error){
        res.status(500).json({error:"internal server error at orders"})
    }

}

const deleteorder =async(req,res)=>{
    try{
    const idx = req.params.idx
    console.log(idx)
    const orderlist =await Orders.find({user:req.user.id})
    const user = orderlist[idx]._id
    console.log(user)
    const orderlist1 =await Orders.findOneAndDelete({_id:user})
    console.log(orderlist1)
    
    res.json(
        {status:"success"}
    )
    }catch(error){
        res.status(500).json({error:"internal server error at orders"})
    }
}

module.exports={createOrder,getOrderList,deleteorder}