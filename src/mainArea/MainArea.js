import React from 'react';
import "./MainArea.css";
import {FaFontAwesomeFlag, FaMedrt, FaFacebookMessenger, FaAngleDown, FaUserFriends, FaSearch, FaGrin, FaRegThumbsUp, FaCommentAlt, FaRegShareSquare} from "react-icons/fa"
import {MdVideoCall, MdMoreHoriz} from "react-icons/md";
import {AiFillFileImage} from "react-icons/ai";

function MainArea() {
  return (
    <div className="main">
        <div className="left-side">
                <div className="left-side-profile">
                        <img src="images/dolphin.png" alt="profile" style={{height:"50px", padding:"1rem"}}/>
                        Biru Skai
                </div>
                <div className="left-icon">
                        <FaFontAwesomeFlag color="green" fontSize="2rem"/>
                        <div>Pages</div>
                </div>
                <div className="left-icon">
                        <FaMedrt color="blue" fontSize="2rem"/>
                        <div>COVID 19 Information Center</div>
                </div>
                <div className="left-icon">
                        <FaFacebookMessenger color="green" fontSize="2rem"/>
                        <div>Messenger Kids</div>
                </div>
                <div className="left-icon">
                        <FaUserFriends color="blue" fontSize="2rem"/>
                        <div>Friends</div>
                </div>
                <div className="left-icon">
                        <FaAngleDown color="green" fontSize="2rem"/>
                        <div>See More</div>
                </div>
                <br></br>
                <div className="left-side-profile">
                        <img src="images/react-group.png" alt="profile" style={{height:"3rem", padding:"1rem"}}/>
                        Developer community
                </div>
                <div className="left-side-profile">
                        <img src="images/react-group.png" alt="profile" style={{height:"3rem", padding:"1rem"}}/>
                        React Learning
                </div>
                <div className="left-side-profile">
                        <img src="images/react-group.png" alt="profile" style={{height:"3rem", padding:"1rem"}}/>
                        Meetup
                </div>
                <div className="left-side-profile">
                        <img src="images/react-group.png" alt="profile" style={{height:"3rem", padding:"1rem"}}/>
                        Software Engineer platform
                </div>
                <div className="left-side-icon2">
                        <FaAngleDown color="blue" fontSize="2rem"/>
                        See More
                </div>
        </div>
        <div className="mid-side">
                <div className="add-story">
                        <div className="story">
                                <img src="/images/dolphin.png" alt="story" style={{height:"60px", width:"50px", borderRadius:"30%"}}/>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <span className="story-name">Biru Skai</span>
                                
                        </div>
                        <div className="story">
                                <img src="/images/dolphin.png" alt="story" style={{height:"60px", width:"50px", borderRadius:"30%"}}/>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <span className="story-name">Biru Skai</span>
                                
                        </div>
                        <div className="story">
                                <img src="/images/dolphin.png" alt="story" style={{height:"60px", width:"50px", borderRadius:"30%"}}/>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <span className="story-name">Biru Skai</span>
                                
                        </div>
                        <div className="story">
                                <img src="/images/dolphin.png" alt="story" style={{height:"60px", width:"50px", borderRadius:"30%"}}/>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <span className="story-name">Biru Skai</span>
                                
                        </div>
                        <div className="story">
                                <img src="/images/dolphin.png" alt="story" style={{height:"60px", width:"50px", borderRadius:"30%"}}/>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <span className="story-name">Biru Skai</span>
                                
                        </div>
                </div>
                <br></br><br></br>
                <div className="message">
                        <div className="post-call-container">
                                <div className="post">
                                        <img src="images/dolphin.png" alt="PIC"/>
                                        <input type="mind" placeholder="What's in your mind, Skai"/>
                                </div>
                                <div className="call">
                                        <div className="ico">
                                                <div className="icone">
                                                        <MdVideoCall fontSize="2rem" color="red"/>
                                                        <div>Live Video</div>
                                                </div>
                                                <div className="icone">
                                                        <AiFillFileImage fontSize="2rem" color="green"/>
                                                        <div>Photo/Video</div>
                                                </div>
                                                <div className="icone">
                                                        <FaGrin fontSize="2rem" color="orange"/>
                                                        <div>Feeling/Activity</div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
                <div className="posted">
                        <div className="poster">
                                <div className="subposter">
                                        <div className="subposter-profile">
                                                <img src="/images/dolphin.png" alt="pic" style={{height:"50px", width:"50px", borderRadius:"50%"}}/>
                                                <span className="profile-name">Biru Skai</span>
                                        </div>
                                        <div className="update">Updated his cover image</div>
                                </div>
                        </div>
                        <div className="edit"><MdMoreHoriz fontSize="1.5rem"/></div>
                
                        <div className="caption">
                                My rencent journey to Northern Europe.
                        </div>
                        <br></br>
                        <div className="facebookImg">
                                <img src="images/aurora.jpg" alt="aurora pic" style={{height:"auto", width:"100%"}}/>
                        </div>
                        <div className="comment">
                                <div className="like">
                                        <FaRegThumbsUp color="grey"/>Like
                                </div>
                                <div className="like">
                                        <FaCommentAlt color="grey"/>Comment
                                </div>
                                <div className="like">
                                        <FaRegShareSquare color="grey"/>Share
                                </div>
                        </div>
                </div>
        </div>
        <div className="right-side">
                <div className="contacts">
                        <div className="contact">
                                Contacts
                        </div>
                </div>
                <div className="chat-icon">
                        <div className="icons">
                                <MdVideoCall fonstSize="1.8rem"/>
                        </div>
                        <div className="icons">
                                <FaSearch fonstSize="1.6rem"/>
                        </div>
                        <div className="icons">
                                <MdMoreHoriz fonstSize="1.6rem"/>
                        </div>
                </div>
                <div className="concise">
                        <div className="profilee">
                                <img src="images/dolphin.png" alt="logo" style={{height:"35px", padding:"1rem"}}/>
                                Spiderman
                        </div>
                        <div className="profilee">
                                <img src="images/dolphin.png" alt="logo" style={{height:"35px", padding:"1rem"}}/>
                                Batman
                        </div>
                        <div className="profilee">
                                <img src="images/dolphin.png" alt="logo" style={{height:"35px", padding:"1rem"}}/>
                                Zeus
                        </div>
                        <div className="profilee">
                                <img src="images/dolphin.png" alt="logo" style={{height:"35px", padding:"1rem"}}/>
                                Catwoman
                        </div>
                        <div className="profilee">
                                <img src="images/dolphin.png" alt="logo" style={{height:"35px", padding:"1rem"}}/>
                                Brunnete
                        </div>
                </div>
        </div>
        
    </div>
    
  )
}

export default MainArea