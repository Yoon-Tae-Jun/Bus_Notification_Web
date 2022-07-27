
function Accordion_body({bus_time, cycle, term}){

    return(
        <div >
            <h4> 셔틀버스 시간: { bus_time === null ? "없음": bus_time+"(간격: "+term+"분)"} </h4>
            <h5>학내순환 여부: {cycle}</h5>
        </div>
         
          )
        
 
}

export default Accordion_body