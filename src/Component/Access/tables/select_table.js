import React from "react";
import {NavLink} from "react-router-dom";
import "./table1.css";

function SelectTable() {
    return (
        <nav>
            <NavLink to = "/" exact className="select">Table1</NavLink>
            <NavLink to = "/Access/table2" className="select">Table2</NavLink> 
            <NavLink to = "/Access/table3" className="select">Table3</NavLink>
        </nav>
    )
}

export default SelectTable;