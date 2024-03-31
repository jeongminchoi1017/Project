import axios from 'axios';

const emailConfirm = async (fullEmail) => {
    return checkEmail(fullEmail);
}

// 사용자가 입력한 이메일이 등록된 이메일인지 확인한다.
const checkEmail = async (email) => {
    const resp = await axios.get(`/api/checkEmail?email=${email}`);
    return resp.data;
}

// 사용자가 입력한 이메일로 인증코드 전송
const getEmailCode = async (email) => {
    const resp = await axios.get(`/api/getEmailCode?email=${email}`);
    // 1이면 성공 그외 에는 실패
    return resp.data == 1;
}

const emailCodeConfirm = async (emailCode) => {
    const resp = await axios.get(`/api/confirmEmailCode?code=${emailCode}`);
    return resp.data == 1;
}


export { emailConfirm, getEmailCode, emailCodeConfirm };