import React from 'react'
import "./later.css"
import { useSelector } from 'react-redux';
const Later = () => {
  const getCart = useSelector((store)=>store.userCart.cart)
  return (
    <div className='later'>
      <div className='btn'>
        <button>All</button>
      </div>
      <div className='laterCardMain'>
        {
          getCart.length>0?(
          getCart.map((v)=>{
            return(
              <div className='single_later'>
                 <div className="laterCard">
                    <iframe
                        width="120"
                        height="120"
                        src={v.Videolink}
                        // title={v.snippet.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>


                 </div>
                 <div className='laterContent'>
                   <p>{v.snippet.description}</p>
                   <i>{v.snippet.title} </i> <br/>
                   <i>Publish : {v.snippet.publishTime.substring(0,4)} </i> 


                 </div>
              
              </div>
            )
          })
        ):"No video is saved"
        }
        
      </div>
      
    </div>
  )
}

export default Later