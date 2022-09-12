import { useState, useEffect } from "react";
import styles from "./Home.module.css";
import Up from "./UP";
import Down from "./DOWN";
import BookMark from "./BookMark/BookMark";
function Home(){
    const [times, setTimes] = useState([]);
    const [UpTime, setUpTime] = useState([]);
    const [DownTime, setDownTime] = useState([]);
    const [AdsImage, setAdsImage] = useState("");
    const IP = "43.200.27.101"




    async function getTimes(){
        const response = await fetch("http://" + IP + `:8080/subway/all`);
          const json = await response.json();
          
          setTimes(json.data);
          setUpTime((UpTime) => {
            return UpTime = GetUpTime(json.data)
          });
          setDownTime((DownTime) =>{
            return DownTime = GetDownTime(json.data)
          });
          
        };

    async function getAds(){
        const response = await fetch("http://" + IP + `:8080/Ads`);
            const json = await response.json();
            setAdsImage((AdsImage) => {
            return AdsImage =json.data.img_LINK;
            });
            
        };  
    useEffect(() => {
        getTimes();
        getAds();
        /* 에드핏 광고 */
        // let ins = document.createElement('ins');
        // let scr = document.createElement('script');
        // ins.className = 'kakao_ad_area';
        // ins.style = "display:none; width:100%;,";
        // scr.async = 'true';
        // scr.type = "text/javascript";
        // scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
        // ins.setAttribute('data-ad-width','320');
        // ins.setAttribute('data-ad-height','100');
        // ins.setAttribute('data-ad-unit','DAN-AwhVZ26kDl35LA7Q');
        // document.querySelector('.adfit').appendChild(ins);
        // document.querySelector('.adfit').appendChild(scr);
    },[]);

    return(
        <div className={styles.homeContainer}>
            
            <Down time = {DownTime}/>
            <Up time = {UpTime}/>
            <BookMark time = {times}/>
            <div className={styles.ads}>
                <a target="_blank" rel="noopener noreferrer" href="https://velog.velcdn.com/images/xmstlf0903/post/363d8913-7b68-44c7-a736-c01cc0e85e0b/image.jpg"> <img className={styles.img} alt="ads" src={AdsImage} /></a>
                {/* 에드핏 광고 */}
                {/* <div className="adfit"></div> */}
            </div>
            <div className={styles.pd}/>
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
    return null;


}

//등교
function GetDownTime(times) {
    for (var time of times){
        if (time["arrive_TIME"] !== null){
            return time;
        }
    }
    return null;

}


export default Home;