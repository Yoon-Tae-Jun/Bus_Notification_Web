import styles from './Empty.module.css'
import {AiOutlineWarning} from "react-icons/ai"

function HomeEmptyBookmark(){
    return(
         <div className= {styles.HomeContainer}>
            <div className={styles.Homeitem}>
                <div className={styles.icon}><AiOutlineWarning size= {70} color="#a6ce39"/></div>
                <div className={styles.HomebookmarkHead}>즐겨찾기 된 시간이 없습니다.</div>
                <div className={styles.HomebookmarkContent}>실시간 셔틀버스에서 주로 이용하는  </div>
                <div className={styles.HomebookmarkContent}>시간을 즐겨찾기 해보세요.</div>
            </div>
         </div>
          )
        
 
}

export default HomeEmptyBookmark