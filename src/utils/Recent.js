import React from 'react'
import "./recent.css"
import { useSelector } from 'react-redux';
import { useState } from 'react';
import "./home.css"
const Recent = () => {
    const[recent, setRecent] = useState([])
    const getContent = useSelector((store)=>store.userContent.content)
    // console.log("grt", getContent[1])
    const secondArray = getContent[3];
    console.log("grt", getContent)


  return (
    <div className='recent'>
        <h2>Recent Uploaded</h2>
        <div className='recentMain'>
        {
            getContent[3].slice(0,3).map((v, i)=>{
                return(
                    <div key={i} className='recentCard'>
                        <div className="recentVideo">
                        <iframe
                        width="120"
                        height="70"
                        src={v.Videolink}
                        title={v.snippet.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                        </div>
                        <div className="recntPara">
                          <p>{v.snippet.description}</p>
                          <i>{v.snippet.title} </i> 

                        </div>
                    </div>
                    
                )
            })
        }

        </div>
        
        

    </div>
  )
}

export default Recent