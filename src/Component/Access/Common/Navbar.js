import React from "react";
import {NavLink} from "react-router-dom";
import permissions from "./rss_feed_24px.png";
import approval from "./view_module_24px.png";
import sync from "./sync_24px.png";
import "./Navbar.css"

function NavBar() {
    return(
        <>
            <nav className="hnav">
                <NavLink className ="hnavbutton p" to = '/Access/Permissions'>
                    <img className="permissions" src = {permissions} alt=""></img> 
                    Permissions
                </NavLink> {" | "}
                <NavLink className = "hnavbutton" to= '/Access/Approval'>
                    <img className ="approval"src = {approval} alt=""></img> 
                    <b className="letter-approval">Approval Matrix</b>
                </NavLink>
            </nav>
            <div className="sync">
                <img className = "syncicon" src = {sync} alt=""></img>
                Last synced 15 mins ago
            </div>
        </>
    )
}

export default NavBar;