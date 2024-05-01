import React from 'react'
import "./header.css"
import { LuMenu } from "react-icons/lu";
import { IoMdHome } from "react-icons/io";
import { MdOutlineRecentActors } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMdCut } from "react-icons/io";
import { MdOutlineSubscriptions } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect, useContext } from 'react';
import { Context } from '../context/ContextProvider';

import { addSearchslice } from '../Redux/Changesearchslice';
import { useDispatch } from 'react-redux';
import Ui from '../components/search/Ui';
import { addSearch } from '../Redux/Searchslice';
import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const Header = () => {
  const getContent = useSelector((store)=>store.userContent.content)
  const getSearch = useSelector((store)=>store.userSearch.search)
  const getList = useSelector((store)=>store.userListslice.list)

const getEmail = useSelector((store)=>store.userEmail.email)

  const[focus, setFocus] = useState(false)
  // console.log("len is", )
  // const len = getContent[1].length
  const {text, setText} = useContext(Context)
  const[search, setSearch] = useState("");
  const dispatch = useDispatch();

  
  const handleSearch=(e)=>{
    setText(search)
    search.length>0 && dispatch(addSearch(search))
  }
  const handleFocus=()=>{
    setFocus(true)


  }
  const removeFocus=()=>{
    setFocus(false)
  }
  const searchHandler=(e)=>{
    setSearch(e.target.value)
    dispatch(addSearchslice(e.target.value))
    setText(search)
    search.length>0 && dispatch(addSearch(search))

  }

  useEffect(()=>{
    getList.length > 0 && setSearch(getList)
    
  }, [getList])


  const navigate = useNavigate()
  const profileNavigate=()=>{
    navigate("/profile")
  }
  return (
    <div>
        <div className='header'>
            <input type="checkbox" id="check" />
            <label for = "check"><LuMenu id="icon"/></label>
            <logo>
                <img src="https://wallpapercave.com/wp/wp9133427.jpg" height="40px" width="100px" style={{borderRadius:"20px"}} onClick={profileNavigate}/>
            </logo>
            <ul>
                <li><Link to="/home" style={{color:"white", textDecoration:"none"}}><IoMdHome/> Home</Link></li>
                <li><Link to="/recent" style={{color:"white", textDecoration:"none"}}><MdOutlineRecentActors /> Recent</Link></li>
                <li><Link to="/later" style={{color:"white", textDecoration:"none"}}><MdOutlineWatchLater/> Watch later</Link></li>
                <li className='none'><IoMdCut/> Clips</li>
                <li className='none'><MdOutlineSubscriptions/> Subscription</li>
                <li className='none'><BiLike/> Liked Videos</li>
            </ul>
            <div className='searchMain'>

            <input type="text" placeholder='Search Videos...' 
            value={search} 
            onChange={searchHandler}  
            onFocus={handleFocus} 
            onBlur={removeFocus}
            
            />
            <div className='iconDiv'>
            <CiSearch id="iconSearch" onClick={handleSearch}/>
            </div>
            </div>
            <div className='badge'>
              
                <IoIosNotificationsOutline className='notification' /> <h2>{getEmail.slice(0,1)}</h2>
              
                

            
              {/* <IoIosNotificationsOutline className='notification' />&emsp;
               <img src="https://i.pinimg.com/originals/e3/63/16/e36316cfd05ca21e44d8fabcf1a192be.jpg" height="25px" width="25px"/> */}

            </div>
            
            

        </div>
        {focus && <Ui/>}

    </div>
  )
}

export default Header