import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion}  from 'react-bootstrap';

function rendertime({isGo, times}){
    return(
        times.map((time, index) => {
            return (
                
                <Accordion.Item eventKey= {time.sbw_ID}>
                    <Accordion.Header>
                    #{index+1} {time.destination}행 {time.train_TIME} 
                    </Accordion.Header>
                    <Accordion.Body>
                      {isGo === '등교' ? <h1>등교의 {time.sbw_ID}번 바디</h1> : <h1>하교의 {time.sbw_ID}번 바디1</h1>}  
                    </Accordion.Body>
                </Accordion.Item>
            )
          })
       
    )
 
}

export default rendertime;