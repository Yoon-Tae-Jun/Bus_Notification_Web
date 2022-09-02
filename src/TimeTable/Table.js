import { useState, useEffect } from "react";
import styles from ".//timetable.module.css"
function TimeTable(){
    const [TimeImage, setTimeImage] = useState("");
    const IP = "43.200.27.101"
    async function getImage(){
        const response = await fetch("http://" + IP + `:8080/bus/image`);
            const json = await response.json();
            setTimeImage((TimeImage) => {
            return TimeImage =json.data.img_LINK;
            });
            
        };  
    useEffect(() => {
        getImage();

    },[]);

    return(
        <div style ={{paddingTop: '60px'}}>
            <img className={styles.img} alt ="timetable" src={TimeImage} />
        </div>
    )
}

export default TimeTable;