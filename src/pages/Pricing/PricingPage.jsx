import React from 'react';
import {useNavigate} from 'react-router-dom'

import style from './Pricing.module.css'

export default function PricingPage() {
  const navigate = useNavigate()
  return (
    <>
    
    <section className={style.container}>
    <div className={style.cardcontainer}>
      <div className={style.carddiv}>
        <h1 className={style.cardh1}><i>Monthly</i></h1>
        <h1 className={style.priceh1}><span className={style.price}>
         <span className={style.dollar}>$</span>
         <span className={style.number}>14<span className={style.slash}>/pass</span></span>
        </span>
         </h1>
        <ul className={style.mylistcard} >
        <li>Free Gym Access</li>
        <li>24 Access</li>
        
         </ul>
        
        <button className={style.btn}   onClick={()=>navigate("/login")}>Get started</button>
      </div>
      {/* 2 card  */}
      <div className={style.carddiv}>
        <h1 className={style.cardh1}><i>Annual</i></h1>
        <h1 className={style.priceh2}><span class={style.price}>
         <span class={style.dollar}>$</span>
         <span class={style.number}>90<span className={style.slash}>/month</span></span>
        </span>
         </h1>

        <ul className={style.mylistcard} >
        <li>$99 Joining Fee</li>
        <li>No Contract</li>
        <li>1 Group Class Included</li>
        <li>24 Hour Access</li>
        </ul>
        
        <button className={style.btn} onClick={()=>navigate("/login")}>Get started</button>
      </div>
     
    </div>


    </section>
  </>
  )
}

