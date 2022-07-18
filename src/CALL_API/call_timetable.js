import axios from 'axios';

const GetTimes = async() =>{
        const apiData = await axios.get(`http://http://localhost:5000/subway/1/1`)
        return apiData.SearchSTNTimeTableByIDService;
    }

export default GetTimes;

