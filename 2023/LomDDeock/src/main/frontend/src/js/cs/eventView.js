import axios from 'axios';

const getEventView = async(cno) => {
    const resp = await axios.get(`/api/getEventView?cno=${cno}`);
    return resp.data;
}

export { getEventView }