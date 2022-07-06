import 'bootstrap/dist/css/bootstrap.min.css';
import {Tab, Tabs} from 'react-bootstrap';

import Accordion from "../accordion/accordion";


function navbar(){

    return(
        
        <Tabs
            defaultActiveKey="go"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
            >
            <Tab eventKey="go" title="등교">
                <Accordion isGo = "등교" />
            </Tab>
            <Tab eventKey="back" title="하교">
                <Accordion isGo = "하교"/>
            </Tab>
            <Tab eventKey="chart" title="시간표">
                <h1>시간표</h1>
            </Tab>
        </Tabs>
    )
}

export default navbar;