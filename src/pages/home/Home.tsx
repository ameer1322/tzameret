import './Home.css'
import Header from '../../components/header/Header'
import CoverCard from '../../components/cover_card/CoverCard'
import StoneSuiteCover from '../../assets/images/cover_images/stoneSuiteCover.jpg'
import WoodSuiteCover from '../../assets/images/cover_images/woodSuiteCover.jpg'
import Suite1Suite2Cover from '../../assets/images/cover_images/suite1+2cover.jpg'
import Suite3Cover from '../../assets/images/cover_images/suite3cover.jpg'
function Home() {
    return (
        <>
            <Header />
            <h3 className="welcome">ברוכים הבאים לאתר של צמרת הצימרים</h3>
            <p className="welcome-sub">בחרו את הסויטה שלכם</p>
            <div className="cover_cards_container">
                <CoverCard imgSrc={StoneSuiteCover} cover_name="סויטת אבן" route="/stone-suite" />
                <CoverCard imgSrc={WoodSuiteCover} cover_name="סויטת עץ" route="/wood-suite" />
                <CoverCard imgSrc={Suite1Suite2Cover} cover_name="סויטת 1+2" route="/suite1-2" />
                <CoverCard imgSrc={Suite3Cover} cover_name="סויטת 3" route="/suite3" />
            </div>
        </>
    )
}

export default Home