import styles from "./Home.module.css";
import {IoMdArrowDroprightCircle} from "react-icons/io"
import {FaBusAlt} from "react-icons/fa";

function Up({time}){
    return(
        <div className={styles.upContainer}>
            <div className={styles.UpHeader}>하교</div>
            <div className={styles.upBodyContainer}>
                    {/* 셔틀 여부, 시간, 학내순환 여부 */}
                    {
                    time === null || time["bus_TIME"] === null?
                    <div className={styles.UpStationContainer}>
                        <FaBusAlt size="35" color="#d90033"/>  
                        <div className={styles.UpNoBus}>셔틀없음</div>
                    </div>
                    :
                    <div className={styles.UpStationContainer}>
                        <FaBusAlt size="35" color="#0033ee"/>
                        <div className={styles.upBodyHeader}>
                            <div className={styles.UpBusText}>{time["bus_TIME"]} 출발 예정</div>
                            <div className={styles.UpCycleText}>{ConvertCycleToStr(time["cycle"])}</div>
                        </div>
                    </div>
                    }
                    {/* 노선도 디자일 */}
                    {
                    time === null ?
                    <IoMdArrowDroprightCircle className={styles.UpArrow} size = "2.5vh" color="#FFFFFF"/>
                    :
                    <IoMdArrowDroprightCircle className={styles.UpArrow} size = "2.5vh" color="#1B3C9B"/>
                    }
                <div className={styles.line}/>
                
                {/* 역명 */}
                {
                    time !== null ?

                    <div className={styles.UpStationName}>
                        <div>신창</div>
                        <div>{time["destination"]}</div>
                    </div>
                    :
                    <div className={styles.UpStationName}>
                        <div>신창</div>
                        <div>온양온천</div>
                    </div>
                }
                {/* 도착 시간, 예상 도착 시간 */}
                {
                    time !== null ?
                    <div className={styles.UpArrivedTime}> {time["train_TIME"]} 출발</div>  
                    :
                    <div></div>
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
            return "후문 ➞ 학내순환 ➞ 신창역";
        case '2':
            return "후문 ➞ 신창역";
        case '3':
            return "알수없음";
        default :
            return "ERROR";
    }
}
export default Up;
