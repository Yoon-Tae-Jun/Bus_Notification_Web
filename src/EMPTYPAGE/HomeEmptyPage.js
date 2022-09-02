import styles from './Empty.module.css'
import {AiOutlineWarning} from "react-icons/ai"

function HomeEmptyPage(){
    return(
         <div className= {styles.HomeContainer}>
            <div className={styles.Homeitem}>
                <div className={styles.icon}><AiOutlineWarning size= {70} color="#a6ce39"/></div>
                <div className={styles.Homehead}>페이지 준비중입니다.</div>
                <div className={styles.Homecontent}>해당 서비스가 준비되지 않았습니다.</div>
            </div>
         </div>
          )
        
 
}

export default HomeEmptyPage