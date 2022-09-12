import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tab, Tabs} from 'react-bootstrap';

import DownTab from './DOWN/DownTab';
import UpTab from './UP/UPTab';
import EmptyPage from '../EmptyPage/EmptyPage';
import styles from './DOWN/layout.module.css'

function Menu_Tab(){
    const [times, setTimes] = useState([]);
    const IP = "43.200.27.101"

    async function getTimes(){
      const response = await fetch("http://" + IP + `:8080/subway/all`);
        const json = await response.json();
        setTimes(json.data);
      };
      
    useEffect(() => {
      getTimes();
    },[]);

    return(
      <Tabs
      style ={{paddingTop: '60px', fontFamily: "ONEMobileTitle"}}
      defaultActiveKey="go"
      transition={false}
      id="noanim-tab-example"
      >
      <Tab eventKey="go" title="등교" className={styles.bbb}>
        <DownTab time = {GetDOWNTime(times)}/>
      </Tab>
      <Tab eventKey="back" title="하교">
          <UpTab time = {GetUPTime(times)}/>
      </Tab>
      <Tab eventKey="circle" title="학내순환"><EmptyPage/></Tab>
        
  </Tabs>
    )
}

function GetUPTime(times) {
  return times.filter((time) =>{
      if(time["updown"] === "1"){
          return time
      }
  }
  )


}

function GetDOWNTime(times) {
  return times.filter(time =>{
      if(time["updown"] === "2"){
          return time
      }
  }
  )


}
export default Menu_Tab;