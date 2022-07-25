import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion}  from 'react-bootstrap';
import Accordion_content from './accordion_content';
function DownTab(){
    const [arrive_time, setArriveTime] = useState([]);
    async function getArriveTime(weekend, updown){
      const response = await fetch(`http://192.168.123.101:5001/subway/${weekend}/${updown}`);
        const json = await response.json();
        setArriveTime(json.data)
    };

  useEffect(() => {
        getArriveTime(1,2);
    },[]);

  
    return ( 
      <>
      <div>{getDate()} </div>
      <Accordion defaultActiveKey="0">
          <Accordion_content times={arrive_time}/>
      </Accordion>

      </>
  )
}

function getDate(){
  let today = new Date()
  let year = today.getFullYear();
  let month = today.getMonth() + 1;  // 월
  let date = today.getDate();  // 날짜
  let day = today.getDay();
  let hours = today.getHours(); // 시
  let minutes = today.getMinutes();  // 분
  let seconds = today.getSeconds();  // 초
  let result = year + '/' + month + '/' + date + ' ' + hours + ':' + minutes + ':' + seconds + " "+day
  return result
}
export default DownTab;