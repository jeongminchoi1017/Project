import { removeCookieToken } from './storage/Cookie';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
const logout = async () => {
    const kakaoToken = localStorage.getItem('kakao_token');
    removeCookieToken();
    localStorage.removeItem("email")
    localStorage.removeItem('token')
    if (kakaoToken !== null) {
        debugger;
        const resp = await axios.post(
            'https://kapi.kakao.com/v1/user/logout',
            {},
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Bearer ' + kakaoToken
                }
            }
        );
        localStorage.removeItem('kakao_token')
        window.location.href="https://kauth.kakao.com/oauth/logout?client_id=591789449e2da1495d41e7af46686eb7&logout_redirect_uri=http://localhost:3000/user/logout";
    }
    window.location.href = '/';
}

export { logout };