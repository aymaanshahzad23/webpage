import React from "react";
import "../contact/contact.css"
function Contact (){
    return(
        <div className="contact-page" id="contact">
            {/* <iframe src="https://open.spotify.com/embed/track/0QNCKgGsCvEhtQ02Ga5XQc?utm_source=generator" 
            width="100%" height="352" allow="autoplay; 
            clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe> */}
            <div className="contact-card">
                <div className="container-header">
                    <header className="head">Connect</header>
                </div>
                <div className="container">
                    <ul>
                        <div className="links">
                            <li>
                                <a href="https://www.linkedin.com/in/aymaanshahzad23/" target="_blank" rel='noreferrer'>
                                    <img src="linkedin.png" className="connect linked" alt="linkedin.com"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/aymaanshahzad23" target="_blank" rel='noreferrer'>
                                    <img src="github.png" className="connect github" alt="github.com"/>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:aymaanshahzad23@gmail.com" target="_blank" rel='noreferrer'>
                                    <img src="gmail.png" className="connect gmail" alt="gmail.com"/>
                                </a>
                            </li>
                        </div>
                    </ul>
                    {/* <ul>
                        <div className="links">
                            <li>
                                <img src="github.png" className="connect github" alt="github.com"/>
                            </li>
                        </div>
                    </ul> */}
                </div>
            </div>
        </div>
    )
}

export default Contact;