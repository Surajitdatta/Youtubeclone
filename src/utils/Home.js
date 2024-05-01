import React from 'react'
import "./home.css"
import useFetch from '../components/useFetch'
import { IoSaveOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { addContent } from '../Redux/Contentslice';
import { useState, useEffect, useContext, useNavigate } from 'react';
import { Context } from '../context/ContextProvider';
import { addCart } from '../Redux/Cartslice';
import { useSelector } from 'react-redux';


const Home = () => {
    const [data, setData] = useState([])
    const hide = useSelector(store => store.userEmail.hide)
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

    


  return hide ? (
    <>
    
    
    <div className='home'>
        {filteredData.map((item, index) => (
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
                    <i>{item.snippet.title} </i> &emsp; <button><IoSaveOutline title="save" onClick={()=>cartHandler(item,index)}/></button>
                </div>
            ))}
    

    </div>
    </>
  
  ):"Please Login..."
}

export default Home