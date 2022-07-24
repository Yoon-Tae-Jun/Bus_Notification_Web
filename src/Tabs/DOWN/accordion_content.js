import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion}  from 'react-bootstrap';
import Accordion_header from './accordion_header';
function Accordion_content({times}){
    return(
        times.map((time) => {
            return (
                <Accordion.Item eventKey= {time.sbw_ID}>
                    <Accordion.Header >
                     <Accordion_header destination = {time.destination} departure = {time.departure} time = {time.train_TIME} current_stn = {time.current_STN} arrive_time = {time.arrive_TIME}/>
                    </Accordion.Header>
                    <Accordion.Body>
                      <h1>등교의 {time.sbw_ID}번 바디</h1>
                    </Accordion.Body>
                </Accordion.Item>
            )
          })
       
    )
 
}

export default Accordion_content;