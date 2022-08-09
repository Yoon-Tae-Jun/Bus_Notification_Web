import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion}  from 'react-bootstrap';
import AccordionHeader from './bookmark_up_header';
import AccordionBody from './bookmark_up_body';
import { useEffect } from 'react';
import EmptyBookmark from '../../EmptyPage/EmptyBookmark';

function Accordion_content({times, bookmark, setBookMark}){
    let allcounter = 0;
    let counter = 0; 
    useEffect(() => {
        setBookMark(bookmark);
    },[setBookMark,bookmark])
    return(
        times.map((time) => {
            allcounter = allcounter +1;
            if (bookmark["id_"+time.sbw_ID] !== undefined){
                counter = counter +1;
                return (
                    <Accordion.Item eventKey= {time.sbw_ID}>
                        <Accordion.Header>
                        <AccordionHeader
                            bus_time = {time.bus_TIME} 
                            destination = {time.destination}
                            departure = {time.departure}
                            time = {time.train_TIME} 
                            />
                        </Accordion.Header>
                        <Accordion.Body>
                        <AccordionBody 
                            bus_time = {time.bus_TIME} 
                            cycle = {time.cycle} 
                            term = {time.term} 
                            sbw_id = {time.sbw_ID}
                            bookmark = {bookmark}
                            />
                        </Accordion.Body>
                    </Accordion.Item>
                )
          }
          if (allcounter === Object.keys(times).length && counter === 0){
            return(
                <EmptyBookmark/>
            )}
        })
       
    )
 
}

export default Accordion_content;