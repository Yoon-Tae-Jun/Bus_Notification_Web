import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion}  from 'react-bootstrap';
import AccordionContent from './bookmark_down_content';
function DownTab({time}){
    const [book_mark, setBookMark] = useState({});


  useEffect(() => {
        getBookMark(setBookMark);
    },[]);

  
    return ( 
      <Accordion defaultActiveKey="0">
          <AccordionContent 
            times={time} 
            bookmark = {book_mark} 
            setBookMark = {setBookMark}/>
      </Accordion>

  )
}

function getBookMark(setbookmark){
    //로컬 저장소에 북마크가 없으면 생성
    if (localStorage.bookmark=== undefined) {
      localStorage.setItem('bookmark', JSON.stringify({}));
    }
    //상태값에 북마크 불러오기
    setbookmark(JSON.parse(localStorage.getItem('bookmark')));
}
export default DownTab;