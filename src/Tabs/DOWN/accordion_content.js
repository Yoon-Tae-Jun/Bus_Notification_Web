import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion}  from 'react-bootstrap';
import Accordion_header from './accordion_header';
import Accordion_body from './accordion_body';
function Accordion_content({times}){
    return(
        times.map((time) => {
            return (
                <Accordion.Item eventKey= {time.sbw_ID}>
                    <Accordion.Header >
                     <Accordion_header bus_time = {time.bus_TIME} destination = {time.destination} departure = {time.departure} time = {time.train_TIME} current_stn = {time.current_STN} arrive_time = {time.arrive_TIME}/>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Accordion_body bus_time = {time.bus_TIME} cycle = {time.cycle} term = {time.term}/>
                    </Accordion.Body>
                </Accordion.Item>
            )
          })
       
    )
 
}

export default Accordion_content;