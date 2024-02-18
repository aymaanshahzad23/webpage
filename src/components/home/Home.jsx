import React from "react";
import Contact from "../contact/Contact.jsx"
import "./home.css";
import About from "../about/About.jsx";
import Music from "../music/Music.jsx";
    
function Home (){
    return(
        <>
            <div className="intro" id="home">
                <img src="pfp.jpg" alt="My Pic" className="pfp"/>
                <div className="about">
                    <div className="header">Hello I'm</div>
                    <div className="name">Aymaan Shahzad</div>
                    <div className="body">
                        I hail from Jabalpur, Madhya Pradesh, 
                    and am currently pursuing B.Tech in The Energy Science and Engineering Department from IIT Bombay.
                    I'm a Sophomore and my passion lies in exploring the fascinating 
                     world of Energy & Technology.
                    </div>
                    <div className="body-mobile">
                        I hail from Jabalpur, Madhya Pradesh, 
                    and am currently pursuing B.Tech in The Energy Science and Engineering Department from IIT Bombay.
                    I'm a Sophomore and my passion lies in exploring the fascinating 
                     world of Energy & Technology.
                    </div>
                </div>
            </div>
            <hr className="basic"/>
            <About/>
            <hr className="basic"/>
            <Music/>
            <hr className="basic"/>
            {/* <Quote1/> */}
            <Contact/>
        </>
    )
}

export default Home;