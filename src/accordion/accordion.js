import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion}  from 'react-bootstrap';

function accordion({isGo, times}){
    
      const rendertime = times.map(time => {
        return (
            <Accordion.Item eventKey= {String(time.id)}>
                <Accordion.Header>
                #{time.id} {time.where} {time.time} {time.isBus}
                </Accordion.Header>
                <Accordion.Body>
                  {isGo === '등교' ? <h1>등교의 {time.id}번 바디</h1> : <h1>하교의 {time.id}번 바디1</h1>}  
                </Accordion.Body>
            </Accordion.Item>
        )
      })
    return ( 
        <Accordion defaultActiveKey="0">
            {rendertime}
        </Accordion>
    )
}

export default accordion;