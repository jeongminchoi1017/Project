import axios from 'axios';

// 사용자의 accessToken을 서버로 보내서 해당 토큰이 유효한지 검증
const verifyToken = async () => {
    try {
        // localStorage에 token이라는 이름으로 담긴 accessToken을 가져온다
        const token = localStorage.getItem('token');
        if (!token) {
          // 토큰이 없으면 로그인되어 있지 않은 것으로 판단
          return false;
        }
        // 서버에 토큰 검증 요청
        const response = await axios.post('/api/verifyToken', token);
        if (response.data) {
          // 토큰이 유효하면 로그인되어 있음
          return true;
        } else {
          // 토큰이 유효하지 않으면 로그인되어 있지 않음
          return false;
        }
    } catch (error) {
        console.error('Error verifying token:', error);
        // 에러가 발생하면 로그인되어 있지 않은 것으로 판단
        return false;
    }
};

export default verifyToken;
