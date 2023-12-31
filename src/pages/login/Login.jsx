import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import style from "./login.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const[email, setEmail]=useState("")
  const[password, setPassword]= useState("")
  const [error, setError]= useState("")
  const navigate = useNavigate()

function handleLoginSubmit(event){
  event.preventDefault();
  let holder = JSON.parse(localStorage.getItem("Details"));
  const isUserExists=holder.some(user=>user.email===email && user.password===password)
 

  if(isUserExists){
    toast("Register successfully");
    setTimeout(() => {
      navigate("/")
    }, 4000);
   
  }else{
   
    setError("Invalid Credentials")
  }
 
 
}
  return (
    <div className={style.loginContainer}>
       
        <form onSubmit={handleLoginSubmit} className={style.loginForm}>
          <h1 style={{color:"white"}}>Login to your account</h1>
          {error && <span>{error}</span>}
        <input type='email' placeholder='Enter your Email Id' onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password' placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)}/>
        <button type="submit" className={style.loginBtn}>Login</button>
        <p>New user <Link to={"/register"}>Register here</Link></p>
        </form>
        <ToastContainer />
    </div>
  )
}

export default Login
