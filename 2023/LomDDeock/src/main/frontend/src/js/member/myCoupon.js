import axios from 'axios';

const getMyCouponCount = async () => {
    const resp = await axios.get('/api/getMyCouponCount');
    return resp.data;
}

const getMyCouponList = async (pg, useYn) => {
    const resp = await axios.get(`/api/getMyCouponList?pg=${pg}&useYn=${useYn}`);
    return resp.data;
}

export { getMyCouponCount, getMyCouponList };