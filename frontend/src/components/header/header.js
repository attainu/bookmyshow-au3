import React from "react";
import "./header.scss"
import logo from './logo.png';
import Langmodal from "../modals/langmodal";
import SignInModal from "../modals/signmodal";
const Header=()=>{
    return(
        <div>
          <div className="navbar">
            <ul>
              <li className="logobms"><h6>book</h6><img src={logo} width="30" height="30"  alt=""/><h6>show</h6></li>
              <li className="searchbox"><input  type="search" placeholder="Search For Movies" aria-label="Search"/></li>
            </ul>
            <ul className="sidenav">
              <li><Langmodal/></li>
              <li><SignInModal/></li>
            </ul>
          </div>
        </div>
    )
}
export default Header