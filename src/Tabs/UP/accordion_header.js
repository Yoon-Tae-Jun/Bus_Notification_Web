import {IoMdSubway} from "react-icons/io"
import styles from './layout.module.css'

function Accordion_header({time, destination}){
    return(
        <div className={styles.container}>
            
            <div><IoMdSubway size="40" color="#555"/></div> 
            <div>{destination}행 {time}</div>
        </div>
          )
       
 
}

export default Accordion_header;