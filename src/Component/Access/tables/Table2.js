import React from "react";
import "./table2.css";
import expand from "./table-images/add_circle_outline_24px.png";
import TableCommon from "./table-common";

function Table2(){
    return(
        <>
            <TableCommon></TableCommon>
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr className="title">
                            <th scope="col"></th>
                            <th scope="col">Deparment/Role Name</th>
                            <th scope="col">Access Level</th>
                            <th scope="col" className="sum">Summary</th>
                            <th scope="col" className="sum">Last Updated</th>
                            <th scope="col" className="switch-align"></th>
                        </tr>
                    </thead>

                    <tbody>
                        
                        <tr className= "Row">
                        <th><img src = {expand} alt=""></img></th>      
                        <td>Budget</td>
                        <td>
                            <div className = "rounded-pill">
                            <div className="green-letters">
                                All Access 
                            </div>
                            </div>
                        </td>
                        <td className="suncon">View | Create | Edit | Delete</td>
                        <td><div className="last-updated">1 min ago</div></td>
                        <td>
                            <label className="switch">
                                <input type="checkbox" checked/>
                                <span className="slider green"></span>
                            </label>   
                        </td>
                        </tr>

                        <tr className= "Row">
                        <th><img src = {expand} alt=""></img></th>
                        <td>Bidding</td>
                        <td>
                            <div className = "grey-rounded-pill"> 
                                <div className= "grey-letters">
                                    No Access
                                </div>
                            </div>
                        </td>
                        <td className="suncon">-</td>
                        <td><div className="last-updated">1 min ago</div></td>
                        <td>
                            <label className="switch">
                                <input type="checkbox" checked/>
                                <span className="slider"></span>
                            </label>   
                        </td>
                        </tr>

                        <tr className= "Row">
                        <th>
                            <img src = {expand} alt=""></img>
                        </th>
                        <td>Vendor Portal</td>
                        <td>
                            <div className = "red-rounded-pill"> 
                            <div className= "red-letters">
                            Restricted Access
                            </div>
                            </div>
                        </td>
                        <td className="suncon">View | Create</td>
                        <td><div className="last-updated">1 min ago</div></td>
                        <td>
                            <label className="switch">
                                <input type="checkbox" checked/>
                                <span className="slider green"></span>
                            </label>   
                        </td>
                        </tr>

                        <tr className= "Row">
                        <th>
                            <img src = {expand} alt=""></img>
                        </th>

                        <td>Purchase Order/Work Order</td>
                        <td > 
                        <div className = "red-rounded-pill"> 
                        <div className= "red-letters">
                            Restricted Access
                        </div>
                        </div>
                        </td>
                        <td className="suncon">View | Create</td>
                        <td><div className="last-updated">1 min ago</div></td>
                        <td>
                            <label className="switch">
                                <input type="checkbox" checked/>
                                <span className="slider green"></span>
                            </label>   
                        </td>
                        </tr>

                        <tr className= "Row">
                        <th>
                            <img src = {expand} alt=""></img>
                        </th>
                        <td>Organisational Profile</td>
                        <td >
                        <div className = "rounded-pill">
                            <div className="green-letters"> 
                            All Access
                            </div>
                        </div>
                        </td>
                        <td className="suncon">View | Create | Edit | Delete</td>
                        <td><div className="last-updated">1 min ago</div></td>
                        <td>
                            <label className="switch">
                                <input type="checkbox" checked/>
                                <span className="slider green"></span>
                            </label>   
                        </td>
                        </tr>

                        <tr className= "Row">
                        <th>
                        <img src = {expand} alt=""></img>
                        </th>
                        <td>Purchase Order/Work Order</td>
                        <td > 
                        <div className = "grey-rounded-pill"> 
                        <div className= "grey-letters">
                            No Access
                        </div>
                        </div>
                        </td>
                        <td className="suncon">-</td>
                        <td><div className="last-updated">1 min ago</div></td>
                        <td>
                            <label className="switch">
                                <input type="checkbox" checked/>
                                <span className="slider"></span>
                            </label>   
                        </td>
                        </tr>   

                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>                 
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table2;