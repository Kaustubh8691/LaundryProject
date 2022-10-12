

import React  from 'react';

export default function SummaryTable({item,setsubTotal}) {
   

  return <div className="">
  <div className="summary-table">

  <h3 className="items">{item.name}</h3>
  <div>
  <div className="washes">   
    {
    item.washes.map((type)=>{

      return(
          <p>{type.name},</p>
      )
    }
    )}
    </div>
  </div>
    <div className="price">
  <h3 >{item.quantity}x{item.washprice} =</h3>
  <h3 className="blue">{item.subprice}</h3>
  </div>
  </div>


  </div>;
}
