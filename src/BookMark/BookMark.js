import { useState } from "react";
import {AiOutlineStar, AiFillStar} from "react-icons/ai"

//click을 눌렀을 때 스토리지에 그 값만 저장
//현재 null값도 같이 같이 저장 됨
function BookMark({bookmark, sbw_id}){
    const [click, setClick] = useState(bookmark["id_"+sbw_id] === undefined ? 0 : 1);

    const ClickEvent = () =>{
        // 북마크 삭제
        if(click === 1) {
            delete bookmark["id_"+sbw_id];
            setClick(click => 0);
        }
        //북마크 설정
        else {
            bookmark["id_"+sbw_id] = 1;
            setClick(click => 1);
        }
        localStorage.setItem('bookmark', JSON.stringify(bookmark));

    }
    return (
        <div onClick={ClickEvent}>
            {click === 1 ? 
            <AiFillStar size={25} color="#f9ce49"/> : 
            <AiOutlineStar size={25}/>}
        </div>
    )
}

export default BookMark;