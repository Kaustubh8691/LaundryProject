
import React, { useState } from 'react';
import { NavLink,useNavigate } from 'react-router-dom'


export default function Login() {
    let history = useNavigate();

    const [newobject, setnewobject] = useState({email:"",password:""})
    const [islock, setislock] = useState(false);


    function handlechange(e){
        // console.log(e.target.value);
        // console.log(e.target.name);
            setnewobject({...newobject,[e.target.name]:e.target.value})
            // console.log(newobject)
    }


async function handlesubmit(e){
        e.preventDefault();
    //console.log(newobject)
    let f=false
    for (let field in newobject){
        if (! newobject[field]){
            alert("plese fill all fields")
            f=true
            break
        }
    }
    if (f){
        return}
        


const response=  await fetch("http://localhost:5000/login", {
  method: 'POST',
  body: JSON.stringify(newobject),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})

    const data= await response.json()

        console.log(data)

        if (data.success){
            localStorage.setItem('token',data.authtoken)
            localStorage.setItem('namee',data.name)
            localStorage.setItem('user',JSON.stringify(newobject))
            
            // alert("rigisterd successfully")

            history("/create")
            
        }else{
            console.log(data)
            alert(data.error)
        }
            
    }


  return (
      <section className='login-page'>


    <div className='left-login'>

        <div className='content'>
        <h1 className='title-login'>Laundry Service</h1>
        <p className='para-login'>Doorstep Wash & Dryclean service</p>
        <div className='btn-sec'>
            <p>Don't Have An Account?</p>
            <NavLink className="li" to={"/register"} ><button className='reg-btn'>Register</button></NavLink>
        </div>

        </div>
    </div>
    <div class="vl"></div>
  <div className='right-login'>
      <div className='form-login'>
      <h3>SIGN IN</h3>
      <form action="" onSubmit={handlesubmit}>
        <div className='field'>
            <label htmlFor="Email/phone">Mobile/Email</label>
            <input type="text" id='Email/phone'onChange={handlechange} name="email"/>
        <div className='under-line'></div>
        </div>
        <div className='field'>
            <label htmlFor="password">Password</label>
            <input type={!islock?  "password":""} id='password'onChange={handlechange} name="password"/>
            <i className='fa fa-eye'  onClick={()=>{setislock(!islock)}}> </i>
            <div className='under-line'></div>
            <div className='forgot'>
                <p>Forgot Password?</p>
            </div>
        </div>

        <button className='btn-signin'>Sign In</button>    
      </form >
      </div>

  </div>
  </section>
  )
}
