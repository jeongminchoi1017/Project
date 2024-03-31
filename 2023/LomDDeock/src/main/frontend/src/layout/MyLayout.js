import React, { Suspense, useState } from 'react';
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from '../layout/Header';
import Footer from '../layout/Footer';
function MyLayout({ children }) {
    const [memberEmail, setMemberEmail] = useState(localStorage.getItem("email"));
    return (
        <>
            {/* 로그인 사용자가 아닐경우 메인 페이지로 튕겨내기 */}
            {memberEmail === null ? <Navigate to="/"/> : children}
        </>
    )
}
export default MyLayout;