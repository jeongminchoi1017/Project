import { Link } from 'react-router-dom';
import logo from '../images/LomDDeock-letterlogo-korean.png';
import 'bootstrap/dist/css/bootstrap.min.css';
function AdminHeader() {
    return (
        <header className="adminHeader">
            <div className="d-flex justify-content-center">
                <Link to="/"><img src={logo} alt="로고" /></Link>
                <Link to="/admin/adminIndex"><div className="adminFontLogo">ADMIN</div></Link>
                <div className="adminLogout"><a>로그아웃</a></div>
            </div>
        </header>
    )
}

export default AdminHeader;