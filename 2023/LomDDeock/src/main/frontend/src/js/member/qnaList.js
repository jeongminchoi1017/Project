import axios from 'axios';


const getMyQnaList = async (pg, cateNo) => {
    const resp = await axios.get(`/api/getMyQnaList?pg=${pg}&cateNo=${cateNo}`);
    return resp.data;
}

const getQnaCate = async () => {
    const resp = await axios.get('/api/getQnaCate');
    return resp.data;
}


export { getMyQnaList, getQnaCate }