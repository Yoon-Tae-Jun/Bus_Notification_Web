import styles from "./Home.module.css";
import {IoMdArrowDropleftCircle} from "react-icons/io"
import {FaBusAlt} from "react-icons/fa";
import {GrPowerCycle} from "react-icons/gr"

function Down({time}){
    return(
        <div className={styles.upContainer}>
            {console.log(time)}
            <div className={styles.UpHeader}>등교</div>
            <div className={styles.upBodyContainer}>
                    <div className={styles.UpReload}><GrPowerCycle size="15" /></div>
                    {/* 셔틀 여부, 시간, 학내순환 여부 */}
                    {
                    time["bus_TIME"] === null ?
                    <div className={styles.UpStationContainer}>
                        <FaBusAlt size="30" color="#d90033"/>  
                        <div className={styles.UpNoBus}>셔틀없음</div>
                    </div>
                    :
                    <div className={styles.UpStationContainer}>
                        <FaBusAlt size="25" color="#0033ee"/>
                        <div className={styles.upBodyHeader}>
                            <div className={styles.UpBusText}>{time["bus_TIME"]} 출발 예정</div>
                            <div className={styles.UpCycleText}>{ConvertCycleToStr(time["cycle"])}</div>
                        </div>
                    </div>
                    }

                {/* 노선도 디자일 */}
                <IoMdArrowDropleftCircle className={styles.DownArrow} size = "20" color="#1B3C9B"/>
                <div className={styles.line}/>
                
                {/* 역명 */}
                <div className={styles.DownStationName}>
                    <div>신창</div>
                    <div>{time["current_STN"]}</div>
                    <div>{time["departure"]}</div>
                </div>

                {/* 도착 시간, 예상 도착 시간 */}
                <div className={styles.DownArriveTimeBox}>
                <div className={styles.DownArriveBusTime}> {time["train_TIME"]} 도착</div>
                <div className={styles.DownArriveTime}> {time["arrive_TIME"]}분 후 도착</div>
                </div>
            </div>
        </div>
    )
}

function ConvertCycleToStr(cycle){
    switch(cycle){
        case null:
            return "";
        case '1':
            return "동문 ➞ 학내순환 ➞ 신창역";
        case '2':
            return "X";
        case '3':
            return "알수없음";
        default :
            return "ERROR";
    }
}
export default Down;
