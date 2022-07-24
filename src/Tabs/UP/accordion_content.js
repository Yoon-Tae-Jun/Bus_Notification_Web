import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion}  from 'react-bootstrap';
import Accordion_header from './accordion_header';
function Accordion_content({times}){
    return(
        times.map((time, index) => {
            return (
                <Accordion.Item eventKey= {time.sbw_ID}>
                    <Accordion.Header>
                    <Accordion_header destination = {time.destination} time = {time.train_TIME}/>
                    </Accordion.Header>
                    <Accordion.Body>
                    <h1>하교의 {time.sbw_ID}번 바디1</h1>
                    </Accordion.Body>
                </Accordion.Item>
            )
          })
       
    )
 
}

export default Accordion_content;