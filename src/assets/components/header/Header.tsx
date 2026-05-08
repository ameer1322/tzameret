import React from 'react'
import './Header.css'


function Header() {
    return (
        <>
            <div className="header">
                <div>
                    <img id="logo" src="/assets/images/logo.png" alt="logo" />
                    <h3 className="phone_number">050-550-5889 :טלפון</h3>
                </div>
            </div>
        </>
    )
}

export default Header