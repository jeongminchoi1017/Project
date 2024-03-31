import axios from 'axios';

const getEventList = async(pg) => {
    const resp = await axios.get(`/api/getEventList?pg=${pg}`);
    return resp.data;
}

export { getEventList }