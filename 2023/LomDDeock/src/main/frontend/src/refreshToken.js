import axios from 'axios';

// refreshToken을 서버로 보내서 사용자의 accessToken을 갱신시킨다
const refreshToken = async () => {
  try {
    const response = await axios.post('/api/refreshToken');
    // localStorage에 token이라는 이름으로 accessToken을 저장
    localStorage.setItem("token", response.data.accessToken);
  } catch (error) {
    return false;
  }
};

export default refreshToken;