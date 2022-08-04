import 'bootstrap/dist/css/bootstrap.min.css';
import {Tab, Tabs} from 'react-bootstrap';

import DownTab from './DOWN/DownTab';
import UpTab from './UP/UPTab';
import EmptyPage from '../EMPTYPAGE/EmptyPage';

function Menu_Tab(){

    return(
      <Tabs
      style ={{paddingTop: '60px', fontFamily: "ONEMobileTitle"}}
      defaultActiveKey="go"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
      >
      <Tab eventKey="go" title="등교">
          <DownTab/>
      </Tab>
      <Tab eventKey="back" title="하교">
          <UpTab/>
      </Tab>
      <Tab eventKey="circle" title="학내순환"><EmptyPage/></Tab>
        
  </Tabs>
    )
}

export default Menu_Tab;