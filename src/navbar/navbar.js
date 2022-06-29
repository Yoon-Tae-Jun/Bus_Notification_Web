import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tab, Tabs} from 'react-bootstrap';

import Accordion from "../accordion/accordion";

function navbar(){
    const arrival_times = [
        {
            id: 1,
            isAM: 1,
            time: '5:47',
            where: '신창행',
            isBus: '✅'
          },
          {
            id: 2,
            isAM: 1,
            time: '6:13',
            where: '광운대행',
            isBus: '❌'
          },
          {
            id: 3,
            isAM: 1,
            time: '6:28',
            where: '서울역행',
            isBus: '❌'
          }
    ];
    const depart_times = [
        {
          id: 1,
          isAM: 1,
          time: '5:00',
          where: '광운대행',
          isBus: '❌'
        },
        {
          id: 2,
          isAM: 1,
          time: '5:42',
          where: '광운대행',
          isBus: '❌'
        },
        {
          id: 3,
          isAM: 1,
          time: '6:09',
          where: '서울역행',
          isBus: '❌'
        }
      ];
    return(
        <Tabs
            defaultActiveKey="go"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
            >
            <Tab eventKey="go" title="등교">
                <Accordion isGo = "등교" times = {arrival_times}/>
            </Tab>
            <Tab eventKey="back" title="하교">
                <Accordion isGo = "하교" times = {depart_times}/>
            </Tab>
            <Tab eventKey="chart" title="시간표">
                <h1>시간표</h1>
            </Tab>
        </Tabs>
    )
}

export default navbar;