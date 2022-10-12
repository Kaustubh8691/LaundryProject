

// import ok from "../img/ok.png"
import "./sucsess.css"
import React from 'react';
import { NavLink } from 'react-router-dom'



export default function OrderSucsess() {

  return (
      <div className="popup-box-sucsess">
  <div className="sucsess">
      <div className="sucsess-tick"><i class="fa fa-check" aria-hidden="true"></i></div>
        <div className="center">
      <h1>Your Order is Succsessfully.</h1>
      </div>
      <p>You can track the delivery in the "Orders" section.</p>
      <NavLink className="li" to={"/orderlist"} ><button className="go-order">Go to orders</button></NavLink>
            
  </div>
  </div>);
}
