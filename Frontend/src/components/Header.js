import React,{useEffect} from 'react';
import { NavLink,useLocation } from 'react-router-dom'

export default function Header() {

  const location =useLocation()
  useEffect(() => {
    //console.log(location)
    
   }, [location])
  
  let user=localStorage.getItem('token')

function logout(){
  localStorage.setItem('token',"")
}
  return <div className='navbar'>
      <nav className='navs'>
          
          <ul><h1><NavLink className='logo' to={"/"} >LAUNDRY CART</NavLink></h1></ul>
          <ul className='nav-list'>

          <NavLink className={`li ${location.pathname==="/"? "active":""}`} to={"/"} >Home</NavLink>
          <NavLink className={`li ${location.pathname==="/"? "active":""}`} to={"/"} >Pricing</NavLink>
        <NavLink  className={`li ${location.pathname==="/"? "active":""}`} to={"/"}  >Career</NavLink>
        {!user?
        <NavLink  className='btn li' to={"/"}>Sign In</NavLink>:
        <NavLink  className='btn li' to={"/"} onClick={logout}>Logout</NavLink>}
          </ul>
      </nav>
  </div>;
}
//import React,{useEffect} from 'react';
//import { NavLink,useLocation } from 'react-router-dom';
//import {Nav,NavDropdown} from 'react-bootstrap';
// import {Link,useNavigate} from 'react-router-dom';

// export default function Header() {

//   // const location =useLocation()
//   // useEffect(() => {
//   //   //console.log(location)
    
//   //  }, [location])
  
//   let user=localStorage.getItem('token')
//   let display=localStorage.getItem('namee')
 
// const history=useNavigate();

// function logout(){
//   localStorage.clear();
//   history("/")
// }
//   return <div className='maindiv'>
//     <div className='firstdiv'>
//     <h1><Link className='logo' to={"/"} >LAUNDRY </Link></h1>
//     </div>
//     <div className='seconddiv'>
//       <Nav className='now' >
//         {
//           !user ?
//             <>
//               <p className='active' to="#" >Home</p>
//               <p className='active' to="#" >Pricing</p>
//               <p className='active' to="#" >Career</p>
//             </>:
//             <>
//               <p className='active' to="#" ></p>
//               <p className='active' to="#" >Pricing</p>
//               <p className='active' to="#" >Career</p>
               
//             </>
//         }
//       </Nav>
//     </div>
//     <div className='thirddiv'>
//       {
//           user ?
//           <Nav className='lastcolor'>
//             <NavDropdown  className='dis li' title={display}>
//               <NavDropdown.Item className='diss lii'  onClick={logout} to={"/"}>Logout</NavDropdown.Item>
//             </NavDropdown>
//           </Nav>:
//           <Nav className='lastcolor'>
//             <Link  className='dis li' to={"/"} >Sign In</Link>

//           </Nav>
//         }
//         </div>
      

//   </div>;
// }