import axios from 'axios';

const getNoticeList = async (pg) => {
    const resp = await axios.get(`/api/getNoticeList?pg=${pg}`);
    return resp.data;
}

export { getNoticeList }