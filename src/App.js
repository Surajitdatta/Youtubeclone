import React from 'react'
import Combine from './utils/Combine'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './utils/Home';
import Recent from './utils/Recent';
import Later from './utils/Later';
import {Provider} from "react-redux";
import { appStore } from './Redux/appStore';
import Profile from './utils/Profile';
import Login from './utils/Login';
import { useState } from 'react';

const App = () => {
  
  return (
    <Provider store = {appStore}>
    <div>
      
      <Router>
       <Combine/>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/> }/>
          <Route path="/recent" element={<Recent/>}/>
          <Route path="/later" element={<Later/>}/>
          <Route path="/profile" element={<Profile/>}/>
          {/* <Route path="/login" element={<Login/>}/> */}
        </Routes>
      </Router>
    </div>
    </Provider>
  )
}

export default App

