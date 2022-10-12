

import "./modal.css"

import React,{useState,useEffect} from  "react";
import SummaryTable from "./SummaryTable";
import OrderSucsess from "./OrderSucsess";
const Popup = ({finaldata,handleClose}) => {
  const [isSucsess, setisSucsess] = useState(false);
  
  const [subTotal, setsubTotal] = useState(0)
  const [finalOrdervalue, setfinalOrderValue] = useState(0)
  const [totalItems, settotalTtems] = useState(0)

  const [isadress, setisadress] = useState(false);
  const [newAddress, setnewAddress] = useState({address:"" /*"#100,3rd Main, 4thcross,RajajiNagar, Bengaluru,560010"*/})
  
  function addNew(e){
    //setisadress(true)
    setisadress({[e.target.address]:e.target.value})
  }
  function handlechange(e){
    setnewAddress({[e.target.name]:e.target.value})
  }
  function handlesubmit(e){
    e.preventDefault();
    console.log(newAddress) 
    setisadress(false) 
  }


  

  // const [Total, setTotal] = useState(0)
  useEffect(() => {
    let totalval=0
    let itemsconut=0
    finaldata.forEach(element => {
      totalval+=element.subprice
      itemsconut+=  +element.quantity
    });
    setsubTotal(totalval)
    settotalTtems(itemsconut)
  const deliveryCharge=90  
  let finalOrder=totalval+deliveryCharge
  setfinalOrderValue(finalOrder)

  }, []);


let orderItems=finaldata
let totalPrice=finalOrdervalue
async function sucsessPop(){
console.log(finaldata,"final")
    const response=  await fetch("http://localhost:5000/order/createorder", {
  method: 'POST',
  body: JSON.stringify({orderItems,totalPrice,totalItems}),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    "auth-token":localStorage.getItem('token')
  },
})

  const data= await response.json()
  console.log(data)
  if (data.sucsess){
  setisSucsess(!isSucsess)}
}

  return (

    <div className="popup-box">

    <div className="box">

    <header className="summary-bar">
        
      <p>Summary</p>
       <p className="close-icon" onClick={handleClose}>x</p>
     
    </header>

    <div className="address-info">

    <div className="location">
      <div>
      <h4>jp Nagar</h4>
      <i className="fa fa-angle-down"></i>
      </div>
      <div className='under-line'></div>
    </div>  
    <div className="location">
      <h3>Store Address:</h3>
      <p>Near Phone Booth, 10th Cross</p>
      <div className='under-line'></div>
    </div>
    <div className="location">
      <h3>Phone:</h3>
      <p>+919876543211</p>
      <div className='under-line'></div>
    </div>
  </div > 

  <h5 className="order-detail">Order Details</h5>

<div className="summary-order">
{finaldata.map((item,index)=>{
return (<>
    <SummaryTable item={item} setsubTotal={setsubTotal}  subTotal = {subTotal} key={index} />
  <div className="under-line sum-line"></div>
  </>
    )})}

<div className="price-cont">
<div className="sub-total price">
      <p>total :</p>
      <h3>{subTotal} </h3>
      </div> 
        <div className="price-line"></div>
        </div>
<div className="price-cont">
<div className="sub-total price">
      <p>pickUp Charge:</p>
      <h3>90</h3>
      </div> 
        <div className="price-line"></div>
        </div>


<div className=" summary-bar  price-bar">
<div className="sub-total price-cont price allign">
      <p>Total </p>
      <h3>Rs {finalOrdervalue}</h3>
      </div> 
        </div>

        </div>  
  <div className="price-line"></div>
  
<div className="address-title"><h4>Address</h4> </div>

<section className="add-new-address">
   <div className="default-add">
      <h4>Home</h4>
       <p>#100,3rd Main, 4thcross,
         RajajiNagar, Bengaluru,560010
       </p>
      </div>

    <div className="default-add">
      <h4>Other</h4>
      <p>{newAddress.address} </p> 
      </div>
      {isadress ? <form action="" onSubmit={handlesubmit}>
        <div className='field reg-field'>
          <label htmlFor="address">Address</label>
          <input type="text" id='address' name="address" onChange={handlechange}/>
          <div className='under-line'></div>
          </div>
          <button className="add" type="submit">Add</button>
          </form>:  
      <h4 className="add-new" onClick={addNew}>+ ADD NEW</h4>}
    </section>
<footer className="foot">
<button className="con-firm" type="submit" onClick={sucsessPop}>Confirm</button>
{isSucsess ?  
<OrderSucsess/>:""}
 </footer>  
    </div>
    </div>
  );
};
 
export default Popup;

