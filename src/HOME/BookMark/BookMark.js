import 'bootstrap/dist/css/bootstrap.min.css';
import {Tab, Tabs} from 'react-bootstrap';
import styles from "../Home.module.css";
import EmptyPage from '../../EmptyPage/HomeEmptyPage';
import DownTab from './DOWN/DownTab';
import UpTab from './UP/UPTab';

function Menu_Tab(){

    return(
        <div className={styles.upContainer}>
        <div className={styles.UpHeader}>즐겨찾기</div>
        <div className={styles.BookMarkTabContainer}>
        <Tabs
        style ={{ paddingTop: "1vmin", fontFamily: "ONEMobileTitle",}}
        defaultActiveKey="go"
        transition={false}
        id="noanim-tab-example"
        >
        <Tab eventKey="go" title="등교" >
        <DownTab/>
        </Tab>
        <Tab eventKey="back" title="하교">
        <UpTab/>
        </Tab>
        <Tab eventKey="circle" title="학내순환"><EmptyPage/></Tab>
            
    </Tabs>
    </div>
    </div>
    )
}

export default Menu_Tab;