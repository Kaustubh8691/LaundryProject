import home from "../img/home-run (1).png"
import more from "../img/more.png"
import list from "../img/list.png"
import homeblue from '../img/download.png'


import morewhite from "../img/more-white.png"
import listblue from "../img/list-blue.jpg"

// import homewhite from ".."
// import homewhite from "../img/home-run (1).png"
// import homewhite from "../img/home-run (1).png"




import React from 'react';
import { NavLink ,useLocation} from 'react-router-dom'

export default function Sidebar() {

  const location =useLocation()

  return <div className='sidebar'>
      <ul className='side-list'>

      <div className={`normal ${location.pathname==="/create"? "whitee":""}  `} >
      <NavLink to={"/create"} className={"side-item1"}  ><img className="side-item" src={location.pathname==="/create"? homeblue :home} alt="" /> </NavLink>

      </div>
            <div className={`normal ${location.pathname==="/option"? "whitee":""}  `}>
          <NavLink to={"/option"} className="   side-item2"  ><img className="side-item" src={location.pathname==="/option"? more :morewhite} alt="" /> </NavLink>

          </div>
          <div className={`normal ${location.pathname==="/orderlist"? "whitee":""}  `}>
        <NavLink to={"/orderlist"} className="side-item3"  ><img className="side-item" src={location.pathname==="/orderlist"? listblue :list} alt="" /> </NavLink>
        </div>

      </ul>
  </div>;
}
