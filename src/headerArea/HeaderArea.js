import React from 'react';
import "./HeaderArea.css";
import {AiOutlineSearch, AiFillHome, AiFillWallet} from "react-icons/ai";
import {MdOndemandVideo} from "react-icons/md";
import {FaUsers, FaRegFlag, FaPlusCircle, FaFacebookMessenger, FaBell} from "react-icons/fa";
import MainArea from "../mainArea/MainArea";

function HeaderArea() {
  return (
    <div className="homePage">
        <div className="header">
        <div className="first-header">
                <div className="logo">
                        <img src="/images/fb.png" alt="facebook logo" style={{height:"50px", padding:"1rem"}}/>
                </div>
                <div className="search">
                        <AiOutlineSearch style={{height:"4rem", fontSize:"2rem"}}/>
                        <input type="search" placeholder='Search Facebook'/>
                </div>
        </div>
        <div className="middle-header">
                <div className="icon">
                        <AiFillHome fontSize="2rem" color="#1877f2" />
                </div>
                <div className="icon">
                        <FaRegFlag fontSize="2rem" color="grey"/>
                </div>
                <div className="icon">
                        <MdOndemandVideo fontSize="2rem" color="grey" />
                </div>
                <div className="icon">
                        <FaUsers fontSize="2rem" color="grey"/>
                </div>
                <div className="icon">
                        <AiFillWallet fontSize="2rem" color="grey"/>
                </div>
        </div>
        <div className="third-header">
                <div className="plus">
                        <FaPlusCircle fontSize="2rem" color="grey"/>
                </div>
                <div className="plus">
                        <FaFacebookMessenger fontSize="2rem" color="grey"/>
                </div>
                <div className="plus">
                        <FaBell fontSize="2rem" color="grey"/>
                </div>
                <div className="pluss">
                        <img src="/images/dolphin.png" alt="profile" style={{height:"40px"}}/>
                </div>
        </div>
        </div>
        <MainArea/>
    </div>
  )
}

export default HeaderArea