import React from 'react'
import "./profile.css"
import "./home.css"
import useFetch from '../components/useFetch'
import { IoSaveOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { addContent } from '../Redux/Contentslice';
import { useState, useEffect, useContext } from 'react';
import { Context } from '../context/ContextProvider';
import { addCart } from '../Redux/Cartslice';
import { useSelector } from 'react-redux';
const Profile = () => {
    const [data, setData] = useState([])
    const getEmail = useSelector((store)=>store.userEmail.email)
    const { state } = useFetch()
    const dispatch = useDispatch();
    const { text } = useContext(Context);
    // console.log(text)
    const filteredData = state.filter(item => item.snippet.description.toLowerCase().includes(text.toLowerCase()));
    useEffect(()=>{
      const d =()=>{
        dispatch(addContent(state))

      }
      d()
    }, [])

    const cartHandler=(item, index)=>{
      dispatch(addCart(item))
      alert("Added")
    }

  return (
  <>
    
  
    <div className='home'>
    <div className='homeProfile'>
      <div className='homeProfileImg'>
         <h1>{getEmail.slice(0,1)}</h1>
      </div>
      <div className='homeEmail'>{getEmail}</div>
    </div>
        {state.map((item, index) => (
                <div key={index}>
                    <iframe
                        width="300"
                        height="205"
                        src={item.Videolink}
                        title={item.snippet.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    
                    <p>{item.snippet.description}</p>
                    <i>{item.snippet.title} </i> &emsp; 
                    {/* <button><IoSaveOutline title="save" onClick={()=>cartHandler(item,index)}/></button> */}
                </div>
            ))}
    

    </div>
    </>
  )
}

export default Profile