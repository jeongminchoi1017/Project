import axios from 'axios';

const loginForm = async (email, password) => {
    if (email === '' || password === '') {
        alert('이메일과 비밀번호를 작성해주세요.');
        return false;
    }
    const data = {
        email: email,
        password: password
    }
    const resp = await axios.post('/api/local/signin', data);
    return resp.data;
}

export { loginForm }