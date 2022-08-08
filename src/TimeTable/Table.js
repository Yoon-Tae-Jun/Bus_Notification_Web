import TimeTableimg from ".//Timetable.jpg"
import styles from ".//timetable.module.css"
function TimeTable(){

    return(
        <div style ={{paddingTop: '60px'}}>
            <img className={styles.img} alt ="timetable" src={TimeTableimg} />
        </div>
    )
}

export default TimeTable;