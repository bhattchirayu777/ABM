import React from "react";
import NavBar from "./Common/Navbar";
import Approval from "./Common/Approval"
import Permissions from "./Common/Permissions";
import {Route} from 'react-router-dom';
import SelectTable from "./tables/select_table"
import Table1 from "./tables/Table1";
import Table2 from "./tables/Table2";
import Table3 from "./tables/Table3";

function Access(){
    return(
        <>
            <NavBar></NavBar>
            <Route path = "/Access/Permissions" component={Permissions}></Route>
            <Route path = "/Access/Approval" component={Approval}></Route>     
            <SelectTable></SelectTable>
            <Route path = "/" exact component={Table1}></Route>
            <Route path = "/Access/Table2" component={Table2}></Route>
            <Route path = "/Access/Table3" component={Table3}></Route> 
        </>
    )
}

export default Access;