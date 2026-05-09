import logo from '../../assets/images/logo.jpg'
import './Header.css'


function Header() {
    return (
        <>
            <div className="header">
                <div className="header_content">
                    <img className="logo" src={logo} alt="logo" />
                    <h3 className="phone_number">050-550-5889 :טלפון</h3>
                </div>
            </div>
        </>
    )
}

export default Header