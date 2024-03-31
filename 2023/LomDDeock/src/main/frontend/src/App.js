import React, {useEffect, useState, lazy, Suspense} from 'react';
import { Routes, Route, BrowserRouter, Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';

/* 토큰 검증 및 갱신 */
import verifyToken from './verifyToken';
import refreshToken from './refreshToken';
import getUserInfo from './getUserInfo';
import { logout } from './logout.js';

/* 헤더, 푸터 */
import Header from './layout/Header';
import MainHeader from './layout/MainHeader';
import AdminHeader from './layout/AdminHeader';
import Footer from './layout/Footer';

/* 페이지 레이아웃 */
const MenuLayout = lazy(() => import('./layout/MenuLayout'))
const UserLayout = lazy(() => import('./layout/UserLayout'))
const MyLayout = lazy(() => import('./layout/MyLayout'))
const AdminLayout = lazy(() => import('./layout/AdminLayout'))
const BrandLayout = lazy(() => import('./layout/BrandLayout'))

/* 메인 페이지 */
const Main = lazy(() => import('./pages/main/Main'))

/* 마이페이지 */
const MyInfo = lazy(() => import('./pages/my/Info'))
const MyCoupon = lazy(() => import('./pages/my/Coupon'))
const MyOrder = lazy(() => import('./pages/my/Order'))
const MyPick = lazy(() => import('./pages/my/Pick'))
const MyQnaList = lazy(() => import('./pages/my/QnaList'))
const MyQnaView = lazy(() => import('./pages/my/QnaView'))

/* 사용자 페이지 */
const Login = lazy(() => import('./pages/user/Login'))
const Logout = lazy(() => import('./pages/user/Logout'))
const Signup = lazy(() => import('./pages/user/Signup'))
const Register = lazy(() => import('./pages/user/Register'))
const ConfirmEmail = lazy(() => import('./pages/user/ConfirmEmail'))

/* 상품 메뉴 페이지 */
const MenuList = lazy(() => import('./pages/menu/MenuList'))
const MenuView = lazy(() => import('./pages/menu/MenuView'))
const MenuCart = lazy(() => import('./pages/menu/MenuCart'))
const MenuOrder = lazy(() => import('./pages/menu/MenuOrder'))
const MenuOrderComplete = lazy(() => import('./pages/menu/MenuOrderComplete'))

/* 브랜드 페이지 */
const Introduce = lazy(() => import('./pages/brand/Introduce'))
const Terms = lazy(() => import('./pages/brand/Terms'))

/* 고객센터 페이지 */
const CsNotice = lazy(() => import('./pages/cs/CsNotice'))
const CsEventList = lazy(() => import('./pages/cs/CsEventList'))
const CsEventView = lazy(() => import('./pages/cs/CsEventView'))
const CsFaq = lazy(() => import('./pages/cs/CsFaq'))
const CsQnaList = lazy(() => import('./pages/cs/CsQnaList'))
const CsQnaWrite = lazy(() => import('./pages/cs/CsQnaWrite'))
const CsQnaView = lazy(() => import('./pages/cs/CsQnaView'))

/* 관리자 페이지 */
const AdminIndex = lazy(() => import('./pages/admin/AdminIndex'))
const AdminMenuList = lazy(() => import('./pages/admin/menu/AdminMenuList'))
const AdminMenuRegister = lazy(()=>import('./pages/admin/menu/AdminMenuRegister'))
const AdminMenuModify = lazy(() => import('./pages/admin/menu/AdminMenuModify'))
const AdminOrderStatus = lazy(() => import('./pages/admin/order/AdminOrderStatus'))
const AdminBanner = lazy(()=>import('./pages/admin/banner/AdminBanner'))
const AdminEventList = lazy(()=>import('./pages/admin/event/AdminEventList'))
const AdminEventRegister = lazy(()=>import('./pages/admin/event/AdminEventRegister'))
const AdminEventModify = lazy(()=>import('./pages/admin/event/AdminEventModify'))
const AdminCouponList = lazy(()=>import('./pages/admin/coupon/AdminCouponList'))
const AdminCouponPayment = lazy(()=>import('./pages/admin/coupon/AdminCouponPayment'))
const AdminNoticeList = lazy(()=>import('./pages/admin/notice/AdminNoticeList'))
const AdminNoticeWrite = lazy(()=>import('./pages/admin/notice/AdminNoticeWrite'))
const AdminFaqList = lazy(()=>import('./pages/admin/faq/AdminFaqList'))
const AdminFaqRegister = lazy(()=>import('./pages/admin/faq/AdminFaqRegister'))
const AdminQna = lazy(()=>import('./pages/admin/qna/AdminQna'))

/* 로딩중 표시 */
function fallBackData() {
    return <div>로딩중</div>;
}

function App() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const isLoggedIn = state.isLoggedIn;
    const [memberEmail, setMemberEmail] = useState(localStorage.getItem("email"));
    useEffect(()=>{
        setMemberEmail(localStorage.getItem("email"))
    },[useState(localStorage.getItem("email"))])
    useEffect(() => {
        // 사용자의 accessToken을 검증하여 해당 사용자의 로그인 여부를 체크
        const checkLoginStatus = async () => {
            console.log(memberEmail === null)
            const loggedIn = await verifyToken();
            console.log("isLoggedIn : " + loggedIn);
            if (loggedIn) {
                // 로그인 상태일 경우 store에 사용자 정보를 추가
                const member = await getUserInfo();
                const userInfo = {
                    isLoggedIn : loggedIn,
                    member : member
                }
                dispatch({type: "SET_INFO", payload: userInfo})
            } else {
                // 비 로그인 상태일 경우 store에 사용자 정보를 제거
                const userInfo = {
                    isLoggedIn : loggedIn,
                    member : {}
                }
                dispatch({type: "SET_INFO", payload: userInfo});
            }
        };
        checkLoginStatus();

        // refreshToken을 이용하여 토큰을 재발급 받는 로직
        const refreshAccessToken = async () => {
            try {
                // refreshToken() 함수를 호출해 accessToken갱신
                const response = await refreshToken();
            } catch (error) {
                // 에러 처리
                console.error('Error refreshing access token:', error);
            }
        };

        // 1시간마다 토큰을 재발급
        const tokenRefreshInterval = setInterval(() => {
            refreshAccessToken();
        }, 60 * 60 * 1000);

        // 컴포넌트 언마운트 시에 clearInterval을 호출하여 간격마다 실행되는 함수를 정리합니다.
        return () => clearInterval(tokenRefreshInterval);
    }, []);
    // 로그인 검증
    const loginValidate = () => {
        window.location.href = '/';
    }
    return (
        <BrowserRouter basename="/">
            <Routes>
                {/* 메인 페이지 */}
                <Route path="/" element={
                <Suspense fallback={fallBackData()}>
                    <MainHeader />
                    <Main />
                    <Footer />
                </Suspense>} />
                {/* 메뉴 페이지 */}
                <Route path="/menu/*" element={
                    <Suspense fallback={fallBackData()}>
                        <Header />
                        <MenuLayout>
                            <Routes>
                                <Route path="/menuList" element={<MenuList />} />
                                <Route path="/menuView/:cate/:menuNo" element={<MenuView />} />
                                <Route path="/menuCart" element={<MenuCart />} />
                                <Route path="/menuOrder" element={<MenuOrder />} />
                                <Route path="/menuOrderComplete" element={<MenuOrderComplete />} />
                            </Routes>
                        </MenuLayout>
                        <Footer />
                    </Suspense>
                  } />
                {/* 사용자 페이지 */}
                <Route path="/user/*" element={
                    <Suspense fallback={fallBackData()}>
                        <Header/>
                        <UserLayout>
                            <Routes>
                                <Route path="/login" element={<Login />} />
                                <Route path="/logout" element={<Logout />} />
                                <Route path="/signup" element={<Signup />} />
                                <Route path="/register" element={<Register />} />
                                <Route path="/confirmEmail" element={<ConfirmEmail />} />
                            </Routes>
                        </UserLayout>
                        <Footer/>
                    </Suspense>
                  } />
                {/* 마이 페이지 */}
                <Route path="/my/*" element={
                    <Suspense fallback={fallBackData()}>
                        <Header/>
                        <MyLayout>
                            <Routes>
                                <Route path="/myInfo" element={<MyInfo />} />
                                <Route path="/myCoupon" element={<MyCoupon />} />
                                <Route path="/myOrder" element={<MyOrder />} />
                                <Route path="/myPick" element={<MyPick />} />
                                <Route path="/myQnaList" element={<MyQnaList />} />
                                <Route path="/myQnaView/:cno" element={<MyQnaView />} />
                            </Routes>
                        </MyLayout>
                        <Footer/>
                    </Suspense>
                  } />
                {/* 관리자 페이지 */}
                <Route path="/admin/*" element={
                    <Suspense fallback={fallBackData()}>
                        <AdminHeader/>
                        <AdminLayout>
                            <Routes>
                                <Route path="/adminIndex" element={<AdminIndex />} />
                                <Route path="/menu/AdminMenuList" element={<AdminMenuList />} />
                                <Route path="/menu/AdminMenuRegister" element={<AdminMenuRegister />} />
                                <Route path="/menu/AdminMenuModify" element={<AdminMenuModify />} />
                                <Route path="/order/AdminOrderStatus" element={<AdminOrderStatus />}></Route>
                                <Route path="/banner/AdminBanner" element={<AdminBanner />} />
                                <Route path="/event/AdminEventList" element={<AdminEventList />} />
                                <Route path="/event/AdminEventRegister" element={<AdminEventRegister />} />
                                <Route path="/event/AdminEventModify/:cno" element={<AdminEventModify />} />
                                <Route path="/coupon/AdminCouponList" element={<AdminCouponList />} />
                                <Route path="/coupon/AdminCouponPayment" element={<AdminCouponPayment />} />
                                <Route path="/notice/AdminNoticeList" element={<AdminNoticeList />} />
                                <Route path="/notice/AdminNoticeWrite" element={<AdminNoticeWrite />} />
                                <Route path="/faq/AdminFaqList" element={<AdminFaqList />} />
                                <Route path="/faq/AdminFaqRegister" element={<AdminFaqRegister />} />
                                <Route path="/qna/AdminQna" element={<AdminQna />} />
                            </Routes>
                        </AdminLayout>
                        <Footer/>
                    </Suspense>
                  } />
                {/* 브랜드 페이지 */}
                <Route path="/brand/*" element={
                    <Suspense fallback={fallBackData()}>
                        <Header/>
                        <BrandLayout>
                            <Routes>
                                <Route path="/introduce" element={<Introduce />} />
                                <Route path="/terms" element={<Terms />} />
                            </Routes>
                        </BrandLayout>
                        <Footer/>
                    </Suspense>
                  } />
                {/* 고객센터 페이지 */}
                <Route path="/cs/*" element={
                    <Suspense fallback={fallBackData()}>
                        <Header/>
                        <BrandLayout>
                            <Routes>
                                <Route path="/CsNotice" element={<CsNotice />} />
                                <Route path="/CsEventList" element={<CsEventList />} />
                                <Route path="/CsEventView/:cno" element={<CsEventView />} />
                                <Route path="/CsFaq" element={<CsFaq />} />
                                <Route path="/CsQnaList" element={<CsQnaList />} />
                                <Route path="/CsQnaWrite" element={<CsQnaWrite />} />
                                <Route path="/CsQnaView/:cno" element={<CsQnaView />} />
                            </Routes>
                        </BrandLayout>
                        <Footer/>
                    </Suspense>
                  } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;