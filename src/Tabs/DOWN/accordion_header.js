import {IoMdSubway} from "react-icons/io"
import styles from './layout.module.css'

function Accordion_header({bus_time, time, destination, current_stn, arrive_time, departure}){

    return(
        //초록색: #00bb33
        <div className={styles.container}>
            <div> {bus_time === null ? <IoMdSubway size="40" color="#d90033"/> : <IoMdSubway size="40" color="#0033ee"/>}</div>
            <div>
                <div className={styles.station} >{departure}역 ➞ {destination}역</div> 
                <div className={styles.expect_time}>{time} 도착 예정 </div>
                
            </div>
            <div className={styles.current_time_div}>
                {current_stn ?  
                    ( <>
                        <div className={styles.station}>현재 {current_stn}역<br/></div>  <div className={styles.current_time}>{arrive_time}분 후 도착</div>
                    </>)
                    : ""}
            </div>
        </div>
          )
        
 
}


export default Accordion_header;