import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion}  from 'react-bootstrap';
import AccordionContent from './bookmark_up_content';
function UpTab(){
    const [arrive_time, setArriveTime] = useState([]);
    const [book_mark, setBookMark] = useState({});
    const IP = "43.200.27.101"

    async function getArriveTime(updown){
      const response = await fetch("http://" + IP + `:8080/subway/${updown}`);
        const json = await response.json();
        setArriveTime(json.data)
    };

  useEffect(() => {
        getArriveTime(1);
        getBookMark(setBookMark);
    },[]);

  
    return ( 
      <Accordion defaultActiveKey="0">
          <AccordionContent 
            times={arrive_time}
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
export default UpTab;