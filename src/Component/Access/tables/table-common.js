import React from "react";
import arrow from "./table-images/arrow_back_24px.png";
import edit_ from "./table-images/edit2.png";

function TableCommon() {
    return(
        <div className="c">
            <div className="c-header">
                <img src ={arrow} className ="c1 arrow" alt=""></img>
                <p className ="c1 text">Management Team</p>
                <img scr={edit_} alt=""></img>              

            </div>
            <div className="c-header-2">
                <p className="text2 _1">Access Control</p>
                <p className="text2 _2">Assigned Members</p>
            </div>
        </div>
    )
}

export default TableCommon;