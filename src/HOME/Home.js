import { useState, useEffect } from "react";

import styles from "./Home.module.css";
function Home(){
    const [time, setTime] = useState([]);
    const IP = "127.0.0.1"

    async function getTime(){
        const response = await fetch("http://" + IP + `:8080/subway/all`);
          const json = await response.json();
          setTime(json.data)
      };

      
    useEffect(() => {
        getTime();
    },[]);

    return(
        <div className={styles.homeContainer}>
            {console.log(GetUpTime(time))}
            <div>등교</div>
            <div>하교</div>
            <div>즐겨찾기</div>
        </div>
    )
}

function GetUpTime(times) {
    let today = new Date();  
    
    for (var time of times){
        // down일 경우 continue
        if (time["updown"] === "2"){
            continue;
        }

        // time에서 시, 분 추출
        var hour = Number(time["train_TIME"].split(":")[0]);
        var min = Number(time["train_TIME"].split(":")[1]);
        
        // 시간이 지났으면 continue
        if (today.getHours() > hour){
            continue;
        }

        // 분이 아직 안지났다면 시간 return
        if (today.getMinutes() < min){
            return time;
        }
    }

}


export default Home;