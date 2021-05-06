import React from "react"
import { Route } from 'react-router';
import Mysite from "./Component/Mysite";
import Organisation from "./Component/Organisation";
import Projects from "./Component/Projects";
import Sidebar from "./Component/Access/Common/Sidebar";
import Access from "./Component/Access/Access";

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <Route path = "/home" exact component={Mysite}></Route>
      <Route path ="/" component={Access}></Route>
      <Route path ="/Organisation" component={Organisation}></Route>
      <Route path ="/Projects" component={Projects}></Route>
    </div>
  );
}

export default App;
