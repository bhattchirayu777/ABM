import React from "react";
import "./table3.css";
import expand from "./table-images/add_circle_outline_24px.png";
import less from "./table-images/do_disturb_on_24px.png";
import TableCommon from "./table-common";

function Table3(){
    return(
        <>
        <TableCommon></TableCommon>
        <div>

            <table className="table table-hover">
                <thead>
                    <tr className="title">
                        <th scope="col"></th>
                        <th scope="col" className="t1">Deparment/Role Name</th>
                        <th scope="col" className="t2">Access Level</th>
                        <th scope="col" className="t3">Summary</th>
                        <th scope="col" className="t4">Last Updated</th>
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
                                <div className="pill">All Access </div>
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
                
                {/* bidding starts here */}
                <tr>
                    <td><img src={less} alt=""></img> </td>
                    <td className="column-divide">
                        <p>Bidding</p>
                        <p className="p1">All aspects in the bidding module</p>
                        <h6 className="p2">Access Control </h6>
                        <div className="form-check-3">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                            <p className="p3">All access</p><p className="p4"> Can access all items</p>
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                            <p className="p3">Restricted Access</p><p className="p4">Can access only assigned or created items</p>
                        </div>
                        <h6 className="p5">Permissions</h6>
                        <ul className="check-list">     
                            <label className="container">
                                <input type="checkbox" className="check-box"/>
                                <b className ="unbold">View items in access</b>
                                <span className="checkmark"/>
                            </label>

                            <label className="container">
                                <input type="checkbox" checked="checked"/>
                                <b className ="unbold">Edit items in access</b>
                                <span className="checkmark"></span>
                            </label>
                            
                            <label className="container">
                                <input type="checkbox"/>
                                <b className ="unbold">Create items in access</b>
                                <span className="checkmark"/>
                            </label>
                            
                            <label className="container">
                                <input type="checkbox"/>
                                <b className ="unbold">Delete items in access</b>
                                <span className="checkmark"/>
                            </label>
                        </ul>
                    </td>
                
                    {/* bidding ends here */}
                    <td></td>
                    <td></td>
                    <td><div className="last-updated">1 min ago</div></td>
                    <td>
                        <label className="switch">
                            <input type="checkbox" checked/>
                            <span className="slider green"></span>
                        </label>   
                    </td>
                    </tr>


                    <tr className= "Row">
                    <td><img src={expand} alt=""></img> </td>  
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
                    <td><img src={expand} alt=""></img> </td>  
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
                    <td><img src={expand} alt=""></img> </td>  
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
                    <td><img src={expand} alt=""></img> </td>  
                    <td >Purchase Order/Work Order</td>
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
                    </tr>                    
                </tbody>
            </table>
        </div>
        </>
    )

}

export default Table3;