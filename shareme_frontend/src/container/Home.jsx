import React, { useState, useRef, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Pins from "./Pins";
import { AiFillCloseCircle } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { client } from "../client";
import logo from "../assets/logo.png";
import { Sidebar, UserProfile } from "../components";

const Home = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);

  //Where I left off
  return (
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
      <div className="hidden md:flex h-screen flex-initial">
        <Sidebar />
      </div>

       <div className = "flex md:hidden flex-row">
         <HiMenu fontSize={40} className = "cursor-pointer" onClick={()=> setToggleSideBar(false)} />
          <Link to='/'>
            <img src ={logo} alt = "logo" className = "w-28"/>
          </Link>
          <Link to={`user-profile/${user?._id}`}>
            
          </Link>
       </div>
      
    </div>
  );
};

export default Home;
