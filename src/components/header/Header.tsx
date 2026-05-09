import logo from '../../assets/images/logo.jpg'
import './Header.css'


function Header() {
    return (
        <>
            <div id="header">
                <div id="header_content">
                    <img id="logo" src={logo} alt="logo" />
                    <h3 id="phone_number">050-550-5889 :טלפון</h3>
                </div>
            </div>
        </>
    )
}

export default Header