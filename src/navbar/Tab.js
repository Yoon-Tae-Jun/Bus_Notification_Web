import 'bootstrap/dist/css/bootstrap.min.css';
import {Tab, Tabs} from 'react-bootstrap';

import TimeTable from '../accordion/accordion';


function Menu_Tab(){

    return(
      <Tabs
      defaultActiveKey="go"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
      >
      <Tab eventKey="go" title="등교">
          <TimeTable isGo = "등교" />
      </Tab>
      <Tab eventKey="back" title="하교">
          <TimeTable isGo = "하교"/>
      </Tab>
      <Tab eventKey="circle" title="학내순환"><h1>학내순환</h1></Tab>
        
  </Tabs>
    )
}

export default Menu_Tab;