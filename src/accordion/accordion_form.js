import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion}  from 'react-bootstrap';

function rendertime({isGo, times}){
    return(
        times.SearchSTNTimeTableByIDService.row.map(time => {
            return (
                <Accordion.Item eventKey= {String(time.id)}>
                    <Accordion.Header>
                    #{time.id} {time.SUBWAYENAME}행 {time.LEFTTIME} 
                    </Accordion.Header>
                    <Accordion.Body>
                      {isGo === '등교' ? <h1>등교의 {time.id}번 바디</h1> : <h1>하교의 {time.id}번 바디1</h1>}  
                    </Accordion.Body>
                </Accordion.Item>
            )
          })
       
    )
 
}

export default rendertime;