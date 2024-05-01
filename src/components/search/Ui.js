import React from 'react'
import "./ui.css"
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addlist } from '../../Redux/Listslice';
const Ui = () => {
  const getSearch = useSelector((store)=>store.userSearch.search)
  const getSearchslice = useSelector((store)=>store.userChangesearchslice.change)
  console.log("onChange searching...", getSearchslice)
  console.log("onClick...", getSearch)

  const[arr, setArr] = useState([])
  const newArr = []
  // newArr = getSearch.filter((f=>getSearchslice.includes("h")  )
    const x = getSearch.filter((f)=>{

    return f.includes(getSearchslice)

  })

  const dispatch = useDispatch()
  const listHandler =(v)=>{
    dispatch(addlist(v))
  }
  console.log("new",x)
  return (
    <div className='ui'>
      
        <div className='suggest'>
          {
            x.map((v)=>{
              return(
                <>
                  <div >
                  <ul  >
                    <li onMouseOver={()=>listHandler(v)} style={{display:"none"}}>{v}</li>
                  </ul>
                </div>
                </>
              )
            })
          }
        </div>
    </div>
  )
}

export default Ui