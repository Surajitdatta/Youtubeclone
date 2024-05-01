import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Header from './Header'
import { useNavigate } from 'react-router-dom';
const Combine = () => {
  const [p, setP]  = useState(window.location.pathname)
  const x = window.location.pathname;
  console.log("lo", x)
  const getEmail = useSelector((store)=>store.userEmail.email)
  const hide = useSelector(store => store.userEmail.hide)
  const navigate = useNavigate()
  // useEffect(()=>{
  //   getEmail.length === 0 && navigate("/login")
  // },[getEmail])

  return (
    <div>
        {/* {
          p==="/login"?"":<Header/>
        } */}
        
        {hide? <Header/>:""}
        
        
       

    </div>
  )
}

export default Combine