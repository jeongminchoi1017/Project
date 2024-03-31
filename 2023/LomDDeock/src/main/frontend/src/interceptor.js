import axios from 'axios';

// 헤더에 토큰인증(로그인 여부)이 필요한 경우 자동으로 헤더에 토큰을 넣어서 보내주는 역할을 함
// request interceptor
axios.interceptors.request.use(
    function(request) {
        if (request.headers.Authorization === undefined) {
            const token = localStorage.getItem('token');
            if (token && token != 'undefined') {
                // 토큰이 존재한다면 헤더에 추가
                request.headers.Authorization = token;
            }
        }
        return request;
    },
    function (error) {
        return Promise.reject(error);
    }
);


export default axios;
