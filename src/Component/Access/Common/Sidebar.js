import React from "react";
import {NavLink} from "react-router-dom";
import "./sidebar.css";
import MYSITE from "./icons/mYSITE.png";
import homeicon from "./icons/Subtract.png";
import dashboard from "./icons/dashboard_24px.png";
import org from "./icons/business_center_24px.png";
import access from "./icons/security_24px.png";
import oval from "./icons/Oval.png";
import notifications from "./icons/notifications_24px.png";
import help from "./icons/help_outline_24px.png";

function SideBar(){
    return(
        <div>
            <nav>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink to="/home"> 
                            <img className="subtract" src={homeicon} alt=""></img>
                            <img className ="mysite" src={MYSITE} alt=""></img> 
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Projects">
                            <div></div>
                            <img className ="dashboard" src = {dashboard} alt=""></img> 
                            <b className="left-letter">Projects</b>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Organisation">
                            <img className ="org" src = {org} alt=""></img> 
                            <b className="left-letter">Organisation Profile</b>
                        </NavLink>
                    </li>
                    <li className="nav-item-active">   
                        <NavLink className ="active" exact to="/">
                            <img className = "access"src = {access} alt=""></img> 
                            Access Control
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className  ="corner">
                <img className = "oval" src={oval} alt =""></img> 
                Kishore
                <img className = "notifications" src={notifications} alt = ""></img>
                <img className = "help" src={help} alt=""></img>
            </div>
        </div>
    )
}

export default SideBar;