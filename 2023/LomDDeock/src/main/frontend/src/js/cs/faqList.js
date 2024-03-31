import axios from 'axios';

const getFaqList = async (pg, cateNo) => {
    const resp = await axios.get(`/api/getFaqList?pg=${pg}&cateNo=${cateNo}`);
    return resp.data;
}

export { getFaqList }