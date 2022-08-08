import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion}  from 'react-bootstrap';
import AccordionHeader from './accordion_header';
import AccordionBody from './accordion_body';

function Accordion_content({times}){

    return(
        times.map((time) => {
            return (
                <Accordion.Item eventKey= {time.sbw_ID}>
                    <Accordion.Header>
                    <AccordionHeader 
                        destination = {time.destination}
                        time = {time.train_TIME} 
                        departure = {time.departure}
                        bus_time = {time.bus_TIME}
                    />
                    </Accordion.Header>
                    <Accordion.Body>
                    <AccordionBody 
                        bus_time = {time.bus_TIME} 
                        cycle = {time.cycle} 
                        term = {time.term} 
                        arrive_time  ={time.arrive_TIME}
                        />
                    </Accordion.Body>
                </Accordion.Item>
            )
          })
       
    )
 
}

export default Accordion_content;