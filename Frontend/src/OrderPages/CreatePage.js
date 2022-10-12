


import React, { useEffect } from 'react';
import Sidebar from '../ordersComponent/Sidebar';
import { NavLink ,useNavigate} from 'react-router-dom'


export default function CreatePage() {
    let history = useNavigate();

    useEffect(() => {
        let user=localStorage.getItem('token')
        if(!user){
        history("/")}
    
      
    }, );
    
    


  return <div className='create'>
      <Sidebar/>
      <div className='create-right'>
          
            <div className='search-bar'>

                <h2>Orders</h2>
                <form action="" >
                    <div className='field field-search'>
                        <label htmlFor="search"></label>
                        <input type="text" id='Email/phone' name="emailPhone"/>            
                        </div>
                    <div className='under-line search-line'></div>
                </form >
            </div>

            <div className='create-sec'>
            <p>No Orders Available</p>
            <NavLink className="li" to={"/option"} ><button className='reg-btn'>Create</button></NavLink>
        </div>

      </div>

      

  </div>;
}
