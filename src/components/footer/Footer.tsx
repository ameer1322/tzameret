// import "./Footer.css"
// import facebookIcon from '../../assets/images/facebook_icon.png'
// import whatsappIcon from '../../assets/images/whatsapp_icon.png'
// import instagramIcon from '../../assets/images/instagram_icon.png'

// function Footer() {
//     return (
//         <footer className="footer">
//             <div className="footer-content">
//                 <p>© 2024 צמרת הצימרים. כל הזכויות שמורות.</p>
//                 <a href="tel:052-533-8813" >
//                     <p className="contact-link">טלפון: 052-533-8813</p>
//                 </a>
//                 <a href="https://wa.me/972525338813" target="_blank" rel="noopener noreferrer">
//                     <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon-footer" />
//                 </a>
//                 <a href="https://www.instagram.com/tzameret_hatzemerem/" target="_blank" rel="noopener noreferrer">
//                     <img src={instagramIcon} alt="Instagram" className="instagram-icon-footer" />
//                 </a>
//                 <a href="https://www.facebook.com/zmrt.hzymrym?mibextid=wwXIfr&rdid=GUrQNkfot41JHTNt&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CX2JiGP3j%2F%3Fmibextid%3DwwXIfr" target="_blank" rel="noopener noreferrer">
//                     <img src={facebookIcon} alt="Facebook" className="facebook-icon-footer" />
//                 </a>
//             </div>
//         </footer>
//     )
// }

// export default Footer

import "./Footer.css"
import facebookIcon from '../../assets/images/facebook_icon.png'
import whatsappIcon from '../../assets/images/whatsapp_icon.png'
import instagramIcon from '../../assets/images/instagram_icon.png'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-brand">צמרת הצימרים</p>

                <hr className="footer-divider" />

                <a href="tel:052-533-8813" className="footer-phone-link">
                    052-533-8813
                </a>

                <div className="footer-social">
                    <a
                        href="https://wa.me/972525338813"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social-link"
                        aria-label="WhatsApp"
                    >
                        <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon-footer" />
                    </a>
                    <a
                        href="https://www.instagram.com/tzameret_hatzemerem/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social-link"
                        aria-label="Instagram"
                    >
                        <img src={instagramIcon} alt="Instagram" className="instagram-icon-footer" />
                    </a>
                    <a
                        href="https://www.facebook.com/zmrt.hzymrym?mibextid=wwXIfr&rdid=GUrQNkfot41JHTNt&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CX2JiGP3j%2F%3Fmibextid%3DwwXIfr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social-link"
                        aria-label="Facebook"
                    >
                        <img src={facebookIcon} alt="Facebook" className="facebook-icon-footer" />
                    </a>
                </div>

                <p className="footer-copy">© 2024 צמרת הצימרים. כל הזכויות שמורות.</p>
            </div>
        </footer>
    )
}

export default Footer
