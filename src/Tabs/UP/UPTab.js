import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion}  from 'react-bootstrap';
import Accordion_content from './accordion_content';
function UpTab(){
    const [arrive_time, setArriveTime] = useState([]);


    async function getArriveTime(updown){
      const response = await fetch(`http://192.168.2.3:8080/subway/${updown}`);
        const json = await response.json();
        setArriveTime(json.data)
    };

  useEffect(() => {
        getArriveTime(2);
    },[]);

  
    return ( 
      <Accordion defaultActiveKey="0">
          <Accordion_content times={arrive_time}/>
      </Accordion>
  )
}

export default UpTab;