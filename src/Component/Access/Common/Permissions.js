import React from "react";
import Table1 from "../tables/Table1";
import Table2 from "../tables/Table2";
import Table3 from "../tables/Table3";
import {Route} from "react-router-dom";

function Permissions() {
    return(
        <div>
            <Route path = "/" exact component={Table1}></Route>
            <Route path = "/Access/Table2" component={Table2}></Route>
            <Route path = "/Access/Table3" component={Table3}></Route>
        </div>    
    )
}

export default Permissions;