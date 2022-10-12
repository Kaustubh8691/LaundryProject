
const mongoose = require('mongoose');
const { Schema } = mongoose;

const ordersSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
  
  shippingInfo: {
        userAddress: {
          type: String,
        },
        storeAddress: {
          type: String,
        },
        storephone: {
          type: Number,
        },
      },
      totalPrice:{
        type:Number
      },
      totalItems:{
        type:Number
      },

      orderItems:[
        {
          name: {
            type: String,
          },
          subprice: {
            type: Number,
          },
          quantity: {
            type: Number,
          },
          price: {
            type: Number,
          },
          washprice: {
            type: Number,
          },  
        
        washes:[
            {
                name: {
                    type: String,
                  },
                price:{
                    type: Number,
                },imgNormal: {
                  type: String,
                },imgBlue: {
                  type: String,
                },
                id:{
                  type: Number,
              },
                
            }
        ]
    }

      ],
      createdAt: {
        type: Date,
        default: Date.now,}
      
    });
    
  const  Orders = mongoose.model("Order", ordersSchema);
  module.exports = Orders;



