import styles from "./Home.module.css";
import {IoMdArrowDropleftCircle} from "react-icons/io"
import {FaBusAlt} from "react-icons/fa";

function Down({time}){
    return(
        <div className={styles.upContainer}>
            <div className={styles.UpHeader}>등교</div>
            <div className={styles.upBodyContainer}>
                    {/* 셔틀 여부, 시간, 학내순환 여부 */}
                    {
                    time === null || time["bus_TIME"] === null ?
                    <div className={styles.UpStationContainer}>
                        <FaBusAlt size="35" color="#d90033"/>  
                        <div className={styles.UpNoBus}>셔틀없음</div>
                    </div>
                    :
                    <div className={styles.UpStationContainer}>
                        <FaBusAlt  className={styles.BusIcon} size="35" color="#0033ee"/>
                        <div className={styles.upBodyHeader}>
                            <div className={styles.UpBusText}>{Bus(time["bus_TIME"], time["term"], time["arrive_TIME"])} 출발 예정</div>
                            <div className={styles.UpCycleText}>{ConvertCycleToStr(time["cycle"])}</div>
                        </div>
                    </div>
                    }

                {/* 노선도 디자일 */}
                {
                    time === null ?
                    <IoMdArrowDropleftCircle className={styles.DownArrow} size = "2.5vh" color="#FFFFFF"/>
                    :
                    <IoMdArrowDropleftCircle className={styles.DownArrow} size = "2.5vh" color="#1B3C9B"/>
                    }
                
                <div className={styles.line}/>
                
                {/* 역명 */}
                {
                    time === null ?

                    <div className={styles.DownStationName}>
                    <div>신창</div>
                    <div>온양온천</div>
                    <div>배방</div>
                    </div>
                    :
                    <div className={styles.DownStationName}>
                        <div className={styles.DownArriveStation}>
                            신창
                            <div className={styles.DownArriveBusTime}> {Train(time["train_TIME"], time["arrive_TIME"])} 도착</div>
                        </div>
                        <div className={styles.DownArriveStation}>
                            {time["current_STN"]}
                            <div className={styles.DownArriveTime}> {time["arrive_TIME"]}분 후 도착</div>
                        </div>
                        <div>{time["departure"]}</div>
                    </div>
                    }                
            </div>
        </div>
    )
}

function ConvertCycleToStr(cycle){
    switch(cycle){
        case null:
            return "";
        case '1':
            return "신창역 ➞ 학내순환 ➞ 신창역";
        case '2':
            return "신창역 ➞ 후문";
        case '3':
            return "알수없음";
        default :
            return "ERROR";
    }
}
function Bus(bus_time, term, arrive_time){
    const date = new Date();
    //버스 시간 없을 때
    if (bus_time === null) return "없음";
    
    //도착 시간 있을 때(실시간 지하철 있을 때)
    else if (arrive_time !==null) {
        date.setMinutes(date.getMinutes()+Number(term) + Number(arrive_time))
        const time = ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2);
        return time;
    }
    
        //도착 시간 없을 때
    else return bus_time;
}

function Train(train_time, arrive_time){
    const date = new Date();
    //도착 시간 있을 때(실시간 지하철 있을 때)
    if (arrive_time !==null) {
        date.setMinutes(date.getMinutes() + Number(arrive_time))
        const time = ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2);
        return time;
    }
    
        //도착 시간 없을 때
    else return train_time;
}
export default Down;
