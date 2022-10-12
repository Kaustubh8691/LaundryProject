


import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import OrderList from './OrderList';
import Popuplist from './Popuplist';

export default function AllorderTable({ele,idx}) {
    const [isopenlist, setisopenlist] = useState(false);
    function handlesummary(){
        setisopenlist(!isopenlist)
    }

    
    
  return <div>
      <div className='table-list-data' onClick={handlesummary}>
            <p className='Order-Id '>{ele._id}</p>
              <p className='date-time '>{ele.createdAt}</p>
              <p className='store-location '>JP Nagar</p>
              <p className='city'>Bengaluru</p>
              <p className='store-phone '>9123456789</p>
              <p className='total-items '>{ele.totalItems}</p>
              <p className='Total-Price '>{ele.totalPrice}</p>
              <p className='status '>ready to deliver</p>
              <p className='delete'>cancel order</p>
              <p className='view '><i className='fa fa-eye'></i></p>
                </div>

        {isopenlist ? 
       <Popuplist idx={idx} finaldata={ele.orderItems} handleClose={handlesummary} />  :"" }
  </div>;
}
