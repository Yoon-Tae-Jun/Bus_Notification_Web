
function Accordion_body({bus_time, cycle, term, arrive_time }){
    const date = new Date();
    return(
        <div >
            <h4> 셔틀버스: { 
                (function() {
                    if (bus_time === null) return "없음";
                    else if (arrive_time !==null) {
                        date.setMinutes(date.getMinutes()+Number(term) + Number(arrive_time))
                        const time = ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2);
                        return ( time +" 출발 예정(간격: "+term+"분)");}
                    else return (bus_time+" 출발 예정(간격: "+term+"분)")
                })()
            }
             </h4>
            <h5>학내순환 여부: {cycle}</h5>
        </div>
         
          )
        
 
}

export default Accordion_body