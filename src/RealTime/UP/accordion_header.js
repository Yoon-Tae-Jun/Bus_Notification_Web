import {IoMdSubway} from "react-icons/io"
import styles from './layout.module.css'

function Accordion_header({bus_time, time, destination, departure}){
    return(
        <div className={styles.container}>
            <div> {bus_time === null ? <IoMdSubway size="40" color="#d90033"/> : <IoMdSubway size="40" color="#0033ee"/>}</div>
             
            <div>
                <div className={styles.station} >
                    {departure}역 ➞ {destination}역
                </div> 
                <div className={styles.expect_time}>
                    {time} 출발 예정 
                </div>
            </div>
        </div>
          )
       
 
}

export default Accordion_header;