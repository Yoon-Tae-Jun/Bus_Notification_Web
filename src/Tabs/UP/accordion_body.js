import {FaBusAlt} from "react-icons/fa"
import {GrPowerCycle} from "react-icons/gr"

function Accordion_body({bus_time, cycle, term, arrive_time }){
    const date = new Date();
    return(
        <div >
            <div> <FaBusAlt/> : { 
                Bus(bus_time, term, arrive_time, date)
            }
             </div>
            <div><GrPowerCycle/> : {ConvertCycleToStr(cycle)}</div>
        </div>
         
          )
        
 
}

function Bus(bus_time, term, arrive_time, date){
    //버스 시간 없을 때
    if (bus_time === null) return "없음";
    //도착 시간 없을 때
    else return (bus_time+" 출발 예정(간격: "+term+"분)")
}

function ConvertCycleToStr(cycle){
    switch(cycle){
        case '1':
            return "동문 ➞ 학내순환 ➞ 신창역";
        case '2':
            return "X";
        case '3':
            return "알수없음";
        default:
            return "ERROR";
    }
}
export default Accordion_body