import axios from './interceptor.js';

// 사용자 토큰을 이용해서 사용자 정보를 가져와 리턴해준다.
const getUserInfo = async () => {
    try {
        const response = await axios.get('/api/info');
        return response.data;
    } catch (error) {
        // 오류가 발생한 경우의 추가 로직
        console.error('Error during sign-in:', error);
    }
}

export default getUserInfo;