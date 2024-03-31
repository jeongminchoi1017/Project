import axios from 'axios';

const getWishList = async (pg) => {
    const resp = await axios.get(`/api/getMyWishList?pg=${pg}`);
    return resp.data;
}

export { getWishList }