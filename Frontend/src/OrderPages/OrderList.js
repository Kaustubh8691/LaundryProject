
import React,{useEffect, useState} from 'react';
import Sidebar from '../ordersComponent/Sidebar';
import { NavLink, useNavigate } from 'react-router-dom'
import AllorderTable from './AllorderTable';

export default function OrderList() {
    let history = useNavigate();

    useEffect(() => {
        let user=localStorage.getItem('token')
        if(!user){
        history("/")}
    
      
    }, );


    const [allorders, setallorders] = useState([]);

   
    useEffect(() => {
        
    fetch("http://localhost:5000/order/orderlist", {
  method: 'GET',
  
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    "auth-token":localStorage.getItem('token')
  },
}).then((response)=>
   response.json() 
).then((data)=>{
    console.log(data)
    setallorders(data)
}).catch((err)=>{
    console.log(err)
    
})

    }, []);
    

  return<div className='create'>
  <Sidebar/>
  <div className='create-right'>
      
        <div className='search-bar'>

        <div className='search-bar'>
    <h2> Orders |{allorders.length}</h2>
    <form action="" className='order-list'>

      <NavLink to={"/option"}><button className=''>Create</button></NavLink>
            <div>
        <div className='field field-search'>
            <label htmlFor="search"></label>
            <input type="text" id='Email/phone' name="emailPhone"/>            
            </div>
        <div className='under-line search-line'></div>
        </div>
    </form >
    </div>
            
        </div>
        <div className='table-list'>
              <p className='Order-Id '>Order Id</p>
              <p className='date-time '>Order Date & Time</p>
              <p className='store-location '>Store Location</p>
              <p className='city'>City</p>
              <p className='store-phone '>Store Phone</p>
              <p className='total-items '>Total items</p>
              <p className='Total-Price '>Total Price</p>
              <p className='status '>status</p>
              <p className='delete'>cancel</p>
              <p className='view '>view</p>
          </div>
          <div className='arrenge-table'>
        {
            allorders.map((ele,idx)=>{
                return(
                    <AllorderTable idx={idx} ele={ele} key={allorders._id}  />
                )
            })
        }</div>


  </div>

</div>;
}
