import axios from 'axios';

const register = async(data) => {
    const resp = await axios.post('/api/local/signup', data)
    return resp.data;
}

export { register }