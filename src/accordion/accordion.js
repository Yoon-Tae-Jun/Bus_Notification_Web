import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion}  from 'react-bootstrap';
import Rendertime from "./accordion_form";

function TimeTable({isGo}){
      const [arrive_time, setArriveTime] = useState([]);
      const [depart_time, setDepartTime] = useState({});

      async function getArriveTime(weekend, updown){
        const response = await fetch(
          `http://localhost:5000/subway/${weekend}/${updown}`
          );
          const json = await response.json();
          setArriveTime(json.data)
    
    };
    useEffect(() => {
        if (isGo === "등교"){
            getArriveTime(1,2);
        }
        else{
            getArriveTime(1,1);
        }
      },[]);

    return ( 
        <Accordion defaultActiveKey="0">
            <Rendertime isGo={isGo} times={arrive_time}/>
        </Accordion>
    )
}

export default TimeTable;