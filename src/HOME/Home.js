import { useState, useEffect } from "react";
import styles from "./Home.module.css";
import Up from "./UP";
import Down from "./DOWN";
function Home(){
    const [times, setTimes] = useState([]);
    const [UpTime, setUpTime] = useState([]);
    const [DownTime, setDownTime] = useState([]);
    const IP = "192.168.2.3"



    async function getTimes(){
        const response = await fetch("http://" + IP + `:8080/subway/all`);
          const json = await response.json();
          setTimes(json.data);
          setUpTime(GetUpTime(json.data));
          setDownTime(GetDownTime(json.data));
        };

      
    useEffect(() => {
        getTimes();
    },[]);

    return(
        <div className={styles.homeContainer}>
            <Down time = {DownTime}/>
            <Up time = {UpTime}/>
            <div>즐겨찾기</div>
       
            
        </div>
    )
}

//하교
function GetUpTime(times) {
    let today = new Date();

    //현재 시간 분으로 변환
    const now_time = today.getMinutes() + (today.getHours() * 60);

    //셔틀버스가 있을 때
    for (var time of times){
        // down일 경우 continue
        if (time["updown"] === "2"){
            continue;
        }

        // subway time 분으로 변환
        const hour = Number(time["train_TIME"].split(":")[0])*60;
        const min = Number(time["train_TIME"].split(":")[1]);
        var subway_time = hour + min;

        //셔틀버스가 있을 때
        if (time["term"] !== null){
            subway_time = subway_time - Number(time["term"]);
        }

        //가장 빠른 시간 조회
        if (now_time <= subway_time){
            return time;
        }

    }


}

//등교
function GetDownTime(times) {
    for (var time of times){
        if (time["arrive_TIME"] !== null){
            return time;
        }
    }


}


export default Home;