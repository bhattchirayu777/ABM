import React from "react";
import "./table1.css"
import eye from "./table-images/remove_red_eye_24px.png";
import deleteicon from "./table-images/delete_24px.png";
import edit from "./table-images/edit2.png";

function Table1(){
    return(
        <>
         <button className="button">+ Add Role</button>
         <img className ="delete"src = {deleteicon} alt=""></img>
         <img className ="edit" src = {edit} alt=""></img>
            <table className="table1 table-hover">
                <thead>
                    <tr className="title">
                        <th scope="col"></th>
                        <th scope="col">Deparment/Role Name</th>
                        <th scope="col">Access Level</th>
                        <th scope="col">No of members</th>
                        <th scope="col">Last Updated</th>
                        <th scope="col"></th>
                    </tr>
                </thead>

                <tbody>
                    
                    <tr className= "Row">

                        <th scope="row">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                            </div>
                        </th>      
                    
                    
                        <td>Management Team</td>
                        <td>
                            <div className = "rounded-pill">
                                <div className="green-letters">All Access </div>
                            </div>
                        </td>
                        <td><div className ="number">4</div></td>
                        <td><div className ="time">1 min ago</div></td>
                        <td><img src={eye} alt =""></img></td>
                    </tr>

                    <tr className= "Row">
                        <th scope="row">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                            </div>
                        </th>
                        <td>Procurement Team</td>
                        <td>
                            <div className = "red-rounded-pill"> 
                                <div className= "red-letters">Restricted Access</div>
                            </div>
                        </td>
                        <td><div className="number">8</div></td>
                        <td><div className ="time">1 min ago</div></td>
                        <td><img src={eye} alt =""></img></td>
                    </tr>

                    <tr className= "Row">
                        <th scope="row">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                            </div>
                        </th>
                        <td>Project Team</td>
                        <td>
                            <div className = "red-rounded-pill"> 
                                <div className= "red-letters">Restricted Access</div>
                            </div>
                        </td>
                        <td><div className ="number">16</div></td>
                        <td><div className ="time">1 min ago</div></td>
                        <td><img src={eye} alt =""></img></td>
                    </tr>

                    <tr className= "Row">
                        <th scope="row">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                            </div>
                        </th>
                        <td>IT Team</td>
                        <td > 
                        <div className = "red-rounded-pill"> 
                            <div className= "red-letters">Restricted Access</div>
                        </div>
                        </td>
                        <td><div className ="number">4</div></td>
                        <td><div className ="time">1 min ago</div></td>
                        <td><img src={eye} alt =""></img></td>
                    </tr>

                    <tr className= "Row">
                        <th scope="row">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                            </div>
                        </th>
                        <td>Super Admin</td>
                        <td >
                        <div className = "rounded-pill">
                            <div className="green-letters"> All Access</div>
                        </div>
                        </td>
                        <td><div className ="number">1</div></td>
                        <td><div className ="time">1 min ago</div></td>
                        <td><img src={eye} alt =""></img></td>
                    </tr>
                </tbody>
            </table>
        </>
        
    )

}
export default Table1;