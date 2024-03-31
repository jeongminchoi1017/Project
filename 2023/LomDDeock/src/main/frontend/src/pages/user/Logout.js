import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { logout } from '../../logout';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // 특정 페이지에 접근했을 때 호출할 함수
        handleLogout();
    }, []);

    const handleLogout = async () => {
        await logout(); // 로그아웃 함수 실행
        return navigate('/'); // 로그아웃 후 리디렉션
    };

    return (
        <div>
            <h1>Logout...</h1>
        </div>
    );
};

export default Logout;
