import {Link, useLocation } from "react-router-dom";

// 카테고리 구분
function AdminFaqCate() {
    const location = useLocation();
    const isActive = (cate) => {
        const currentCate = new URLSearchParams(location.search).get('cate');
        return currentCate === cate;
    };
    return(
        <div className="AdminFaqCate">
            <Link to="/admin/faq/adminFaqList?cate=10" className={isActive('10') ? 'on' : ''}>이벤트</Link>
            <Link to="/admin/faq/adminFaqList?cate=11" className={isActive('11') ? 'on' : ''}>주문/결제</Link>
            <Link to="/admin/faq/adminFaqList?cate=12" className={isActive('12') ? 'on' : ''}>취소/환불</Link>
            <Link to="/admin/faq/adminFaqList?cate=13" className={isActive('13') ? 'on' : ''}>혜택</Link>
            <Link to="/admin/faq/adminFaqList?cate=14" className={isActive('14') ? 'on' : ''}>이용문의</Link>
            <Link to="/admin/faq/adminFaqList?cate=15" className={isActive('15') ? 'on' : ''}>회원정보</Link>
            <Link to="/admin/faq/adminFaqList?cate=16" className={isActive('16') ? 'on' : ''}>쿠폰</Link>
        </div>
    );

}

export default AdminFaqCate;