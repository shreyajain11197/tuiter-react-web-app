import React from "react";
import TuitList from "../tuit-list";
import WhatsHappening from "./whats-happening";
import "./index.css";

const HomeComponent = () => {
 return(
   <>
       <h2>Home</h2>
       <WhatsHappening/>
     <TuitList/>
   </>
 );
};
export default HomeComponent;