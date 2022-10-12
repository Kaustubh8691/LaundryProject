
import Shirts from "../img/shirts.jpg"
import TShirts from "../img/t-shirt.jpg"
import Trousers from "../img/trousers.jpg"
import Jeans from "../img/jeans.jpg"
import Boxers from "../img/boxers.jpg"
import Joggers from "../img/joggers.jpg"
import others from "../img/others.jpg"



import React, {useState,useEffect} from 'react';
import PopUp from '../ordersComponent/PopUp';
import Sidebar from '../ordersComponent/Sidebar';
import ProductType from './ProductType';
import { useNavigate } from "react-router-dom"


export default function OptionsPage() {
    let history = useNavigate();

    useEffect(() => {
        let user=localStorage.getItem('token')
        if(!user){
        history("/")}
    
      
    }, );

    const producttype=[
        {
            name:"Shirts",
            img:Shirts,
            description:"Lorem, ipsum dolor sit amet"
        },
        {
            name:"T-Shirts",
            img:TShirts,
            description:"Lorem, ipsum dolor sit amet"
        },
        {
            name:"Trousers",
            img:Trousers,
            description:"Lorem, ipsum dolor sit amet"
        },{
            name:"Jeans",
            img:Jeans,
            description:"Lorem, ipsum dolor sit amet"
        },{
            name:"Boxers",
            img:Boxers,
            description:"Lorem, ipsum dolor sit amet"
        },{
            name:"Joggers",
            img:Joggers,
            description:"Lorem, ipsum dolor sit amet"
        },{
            name:"others",
            img:others,
            description:"Lorem, ipsum dolor sit amet"
        },
    ]


    
    const [newOrder, setnewOrder] = useState([]);
    let [objs, setnewobjs] = useState({});

    let [finaldata, setfinaldata] = useState([]);
    // const [isdiseble, setdiseble] = useState(true);

    const [isOpen, setIsOpen] = useState(false);
    
    

    useEffect(() => {

        let item=newOrder.filter((ele)=>ele.name !== objs.name && ele.quantity >0 && ele.washes.length>0)
        setnewOrder([...item,objs])
     
    }, [objs]);
    


    function confirmOrder(e){
    e.preventDefault();

    if ( finaldata.length===0 || newOrder.length===0 ){
        alert("please select something")  
    }
   
    }
    
    const togglePopup = (e) => {
       
        e.preventDefault();

        let final =  newOrder.filter((list)=>(list.quantity >0 && list.washes.length>0))
         
        if(final.length===0){
          console.log("please select something")
          alert("please select something")  
         }else{
        setfinaldata(final)
        console.log(final) 
        setIsOpen(!isOpen)
         }
      }

const [iscancel, setiscancel] = useState(false);

function cancel(){
    setiscancel(!iscancel)
    setfinaldata([])
}


  return <div className='create'>
      <Sidebar/>

      <div className='create-right'>

      <div className='search-bar'>
    <h2>Create Order</h2>
    <form action="" >
        <div className='field field-search'>
            <label htmlFor="search"></label>
            <input type="text" id='Email/phone' name="emailPhone"/>            
            </div>
        <div className='under-line search-line'></div>
    </form >
    </div>
      
      <form action="" className='product-list' onSubmit={confirmOrder}>
    
          <div className='table'>
              <h3 className='product-type'>Product Type</h3>
              <h3 className='quantity'>quantity</h3>
              <h3 className='Wash-type'>Wash Type</h3>
              <h3 className='price'>Price</h3>
              <h3 className='other'>other</h3>   
          </div>
        {producttype.map((item,index)=>{
                return(
                    <ProductType item={item} key={index} index={index} setnewObjs={setnewobjs}  iscancel={iscancel}  />
                )
        })}
        <div className='confirm'>
            <li className="li"  ><p className='reg-btn' onClick={cancel}>Cancel</p></li>
            <li className="li"  ><button className='reg-btn btn-confirm'onClick={togglePopup} >Procced</button></li>

        </div>
      </form>
      </div>

    {
        isOpen && 
        <PopUp finaldata={finaldata}
                   handleClose={togglePopup}/>
    }    
  </div>;
}


