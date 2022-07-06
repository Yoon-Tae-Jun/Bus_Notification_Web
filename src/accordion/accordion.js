import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion}  from 'react-bootstrap';
import data from "../CALL_API/data.json"
import Rendertime from "./accordion_form";
function accordion({isGo}){
      const arrival_times = data
      const depart_times = data

    return ( 
        <Accordion defaultActiveKey="0">
            <Rendertime isGo={isGo} times={depart_times}/>
        </Accordion>
    )
}

export default accordion;