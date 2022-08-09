import { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import DownContent from "./DOWN/accordion_content";
import UpContent from "./UP/accordion_content";
import styles from "./Home.module.css";
function Home(){
    const [down_time, setDownTime] = useState([]);
    const [up_time, setUpTime] = useState([]);
    const [nowtime, setNowTime] = useState(getTime());
    const IP = "43.200.27.101"

    async function getDownTime(){
        const response = await fetch("http://" + IP + `:8080/subway/running`);
          const json = await response.json();
          setDownTime(json.data)
      };

    async function getUpTime(limit){
        const response = await fetch("http://" + IP + `:8080/subway/current/${limit}`);
          const json = await response.json();
          setUpTime(json.data)
      };
    useEffect(() => {
        getDownTime();
        getUpTime(3);
        const id = setInterval(() => {
            setNowTime(getTime());
          }, 1000);
          return (() => clearInterval(id))
    },[]);

    return(
        <div className={styles.homeContainer}>
            <div className={styles.time}>현재 시간: {nowtime}</div>
            <div className={styles.downtitle}>등교</div>
            <Accordion defaultActiveKey="0">
                <DownContent 
                times={down_time} />
            </Accordion>
            <div className={styles.uptitle}>하교</div>
            <Accordion defaultActiveKey="0">
            <UpContent
            times={up_time}/>
            </Accordion>


        </div>
    )
}

function getTime(){
    let today = new Date();  
    return ( ('0' + today.getHours()).slice(-2) + ":" +('0' + today.getMinutes()).slice(-2) + ":" + ('0' + today.getSeconds()).slice(-2));
}
export default Home;