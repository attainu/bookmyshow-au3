import React from "react";
import logo from './header/logo.png';
import Resendmodal from "./modals/resend";
import Newsmodal from "./modals/newsletter";
const Footer=()=>{
    return(
    <div className="foot">
        <section className="footer">
            <div>
            <img src="https://img.icons8.com/cotton/64/000000/online-support.png" alt="..."/>
     <h6> 24/7 Customer Care</h6>
            </div>
            <div>
            <img src="https://img.icons8.com/carbon-copy/64/000000/ticket.png" alt="..."/>
            <Resendmodal/>
            </div>
            <div>
            <img src="https://img.icons8.com/ios/60/000000/email-open.png" alt="..."/>
            <Newsmodal/>
            </div>
        </section>
        <div className="divider">
            <h2><span className="line-center"><span className="footlogo"><h6>book</h6><img src={logo} width="30" height="30"  alt=""/><h6>show</h6></span></span></h2>
        </div>
        <div className="socialmedia">
        <img src="https://img.icons8.com/windows/40/000000/facebook-new.png " alt="..."/>
        <img src="https://img.icons8.com/metro/32/000000/instagram-new.png" alt="..."/>
        <img src="https://img.icons8.com/material-outlined/40/000000/youtube-play.png" alt="..."/>
        <img src="https://img.icons8.com/windows/40/000000/linkedin.png" alt="..."/>
        <img src="https://img.icons8.com/ios/32/000000/pinterest.png" alt="..."/>
        </div>
        <p>Copyright 2020 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.<br/>
The content and images used on this site are copyright protected and copyrights vests with the respective owners.<br/> The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.</p>
        </div>
    )
}
export default Footer