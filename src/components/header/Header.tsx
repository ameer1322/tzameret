import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/Logo.jpg'
import './Header.css'


function Header() {
    const navigate = useNavigate()
    return (
        <>
            <div className="header" onClick={() => navigate("/")}>
                <div className="header_content">
                    <img className="logo" src={logo} alt="logo" />
                    <a href="tel:052-533-8813">
                        <h3 className="phone_number">052-533-8813 :טלפון</h3>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Header