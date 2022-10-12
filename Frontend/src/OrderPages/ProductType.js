

import "../img/shirts.jpg"

import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function ProductType({item,index,setnewObjs ,iscancel}) {
    let history = useNavigate();
    let user=localStorage.getItem('token')
    if(!user){
    history("/")}
    const washTypes=[
        {   
            name:"Washing",
            imgNormal:"../img/washing-machine.png",
            imgBlue:"../img/washing-machine-blue.png",
            price:20,
            id:1
        },
        {
            name:"Ironing",
            imgNormal:"../img/ironing.png",
            imgBlue:"../img/ironing-blue.png",
            price:15,
            id:2
        },{
            name:"Folding",
            imgNormal:"../img/towel.png",
            imgBlue:"../img/towel.png",
            price:10,
            id:3
        },{
            name:"Packing",
            imgNormal:"../img/bleach.png",
            imgBlue:"../img/bleach-blue.png",
            price:25,
            id:4
        },
    ]

        


    let [sigleCount, setsingeCount] = useState(0);
    let [washlist, setwashlist] = useState([]);
    
    
    let [price, setprice] = useState(0);

    let [totalprice, settotalprice] = useState(0);

    
    
    

    function handleclick(obj){
        let result=true
        washlist.forEach(element => {
            if(element.id===obj.id){
                
                result =false
            }})

        // console.log(result)

        if (result){
            console.log(obj)
            setwashlist([...washlist,obj])
            console.log("added list")
        }
        }
        
        useEffect(() => {
            
                let totalwash =0
                if(washlist){
                washlist.forEach((element)=>{
                totalwash = element.price+totalwash})}
                setprice(totalwash)
        }, [washlist]);

        useEffect(() => {
            
        settotalprice(price*sigleCount)
         let totalval=price*sigleCount
          const  newobj ={
            name:item.name,
            subprice:totalval,
            quantity:sigleCount,
            washprice:price,
            washes:washlist,
        }
        setnewObjs(newobj)
 
        }, [price,sigleCount]);

        useEffect(() => {
        setwashlist([])
        setsingeCount(0) 

        }, [iscancel]);
        


    function handlechange(e){
        // console.log(e.target.value)

        setsingeCount(e.target.value)

    }

    function reset(e){
        e.preventDefault();
        setwashlist([])
        setsingeCount(0)
    }


    

  return( 
    
  <div>
       <div className=' data'>
              <div className='product-type'>
                  <div className='product-type-img'>
              <img  className='product-img' src={item.img} alt="product" />
              </div>
                <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                </div>   
              </div>

              <div className='quantity'>
                  <input className='quantity-input' type="Number" min="0" value={sigleCount ? sigleCount:""} onChange={handlechange}/>
              </div>

              <div className='Wash-type-section'>
                  <div className={` normal1 ${washlist.find((ele)=>ele.id===1) ? "blue1":""}`} onClick={()=>handleclick(washTypes[0])}></div>
                  <div className={` normal2 ${washlist.find((ele)=>ele.id===2) ? "blue2":""}`}  onClick={()=>{handleclick(washTypes[1])}}></div>
                  <div className={` normal3 ${washlist.find((ele)=>ele.id===3) ? "blue3":""}`}  onClick={()=>{handleclick(washTypes[2])}}></div>
                  <div className={` normal4 ${washlist.find((ele)=>ele.id===4) ? "blue4":""}`}  onClick={()=>{handleclick(washTypes[3])}}></div>
              </div>

              <div className='price'>
                  { sigleCount ?
                   <h3> {sigleCount} x {price} ={totalprice} </h3> :
                  <h3>--</h3> }
              </div>

              <div className='other'>
                {sigleCount || price ?             
            <li className="li"  ><button className='reg-btn btn-reset' onClick={reset}>Reset</button></li> : ""
                }
              </div>

          </div>
  </div>)
}

