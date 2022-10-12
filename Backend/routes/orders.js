


const express = require('express')
const { createOrder, getOrderList, deleteorder } = require('../controllers/ordersControllers')
const fetchuser = require('../middlewares/featchUser')
const router =express.Router()
// const { createUser, checkLogin } = require('../controllers/userContollers')


//createOrder   --
        //method-post
router.post("/createorder",fetchuser,createOrder)

//get orderlist
router.get("/orderlist",fetchuser,getOrderList)

router.delete("/orderlist/:idx",fetchuser,deleteorder)

module.exports=router