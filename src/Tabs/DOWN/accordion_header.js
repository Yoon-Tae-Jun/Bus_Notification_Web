import {IoMdSubway} from "react-icons/io"
import styles from './layout.module.css'

function Accordion_header({bus_time, time, destination, current_stn, arrive_time, departure}){

    return(
        <div className={styles.container}>
            <div> {bus_time === null ? <IoMdSubway size="40" color="#ff0033"/> : <IoMdSubway size="40" color="#33ee66"/>}</div>
            <div>
                {departure}역 ➞ {destination}역 
                <div className={styles.expect_time}>{time} 도착 예정 </div>
                
            </div>
            <div className={styles.current_time_div}>
                {current_stn ?  
                    ( <>
                        현재 {current_stn}역 <br/> <div className={styles.current_time}>{arrive_time}분 후 도착</div>
                    </>)
                    : ""}
            </div>
        </div>
          )
        
 
}


export default Accordion_header;