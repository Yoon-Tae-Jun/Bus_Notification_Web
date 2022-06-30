import axios from 'axios';

const GetTimes = async() =>{
        const apiData = await axios.get(`http://openAPI.seoul.go.kr:8088/514570704c786d733631517a447164/json/SearchSTNTimeTableByIDService/1/100/1408/1/1`)
        return apiData.SearchSTNTimeTableByIDService;
    }

export default GetTimes;
