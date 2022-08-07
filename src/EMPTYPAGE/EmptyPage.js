import styles from './Empty.module.css'
import {AiOutlineWarning} from "react-icons/ai"

function EmptyPage(){
    return(
         <div className= {styles.container}>
            <div className={styles.item}>
                <div className={styles.icon}><AiOutlineWarning size= {100} color="#a6ce39"/></div>
                <div className={styles.head}>페이지 준비중입니다.</div>
                <div className={styles.content}>해당 서비스가 준비되지 않았습니다.</div>
            </div>
         </div>
          )
        
 
}

export default EmptyPage