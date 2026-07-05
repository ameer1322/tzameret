import './Home.css'
import CoverCard from '../../components/cover_card/CoverCard'
import StoneSuiteCover from '../../assets/images/cover_images/stoneSuiteCover.jpg'
import WoodSuiteCover from '../../assets/images/cover_images/woodSuiteCover.jpg'
import Suite1Suite2Cover from '../../assets/images/cover_images/suite1+2cover.jpg'
import Suite3Cover from '../../assets/images/cover_images/suite3cover.jpg'
import CoverCardInfo from '../../components/cover_card_info/CoverCardInfo'
import StoneCoverInfo from '../../assets/cover_card_info/StoneSuiteCoverInfo'
import WoodCoverInfo from '../../assets/cover_card_info/WoodSuiteCoverInfo'
import Suite1Suite2CoverInfo from '../../assets/cover_card_info/Suite1-2CoverInfo'
import Suite3CoverInfo from '../../assets/cover_card_info/Suite3CoverInfo'
import ImageCarousel from '../../components/home_page_carousel/HomePageCarousel'
import { useInView } from '../../hooks/useInView'

const imageModulesLower = import.meta.glob("../../assets/images/lower_area_general/*.jpg", { eager: true })
const general_lower_images = Object.values(imageModulesLower).map((module: any) => module.default)
const imageModulesUpper = import.meta.glob("../../assets/images/upper_area_general/*.jpg", { eager: true })
const general_upper_images = Object.values(imageModulesUpper).map((module: any) => module.default)

function Home() {

    const { ref: ref1, isInView: isInView1 } = useInView(0.2)
    const { ref: ref2, isInView: isInView2 } = useInView(0.2)
    const { ref: ref3, isInView: isInView3 } = useInView(0.2)

    const { ref: ref4, isInView: isInView4 } = useInView(0.2)


    return (
        <>
            <h2 className="welcome">ברוכים הבאים לאתר של צמרת הצימרים</h2>
            <h3 className="area_title">מתחם עליון</h3>
            <ImageCarousel images={general_upper_images} />
            <div className="cover_cards_container">
                <div className={`cover_card_container scroll-fade ${isInView1 ? 'in-view' : ''}`}
                    ref={ref1 as React.RefObject<HTMLDivElement>}
                    style={{ '--start_position': '100px' } as React.CSSProperties}>
                    <CoverCard imgSrc={StoneSuiteCover} cover_name="סויטת אבן משולב" route="/stone-suite" />
                    <div className="cover_card_info">
                        <CoverCardInfo info={StoneCoverInfo.info} />
                    </div>
                </div>
                <div className={"cover_card_container scroll-fade " + (isInView2 ? 'in-view' : '')}
                    ref={ref2 as React.RefObject<HTMLDivElement>}
                    style={{ '--start_position': '-100px' } as React.CSSProperties}>
                    <CoverCard imgSrc={WoodSuiteCover} cover_name="סויטת עץ משולב" route="/wood-suite" />
                    <div className="cover_card_info">
                        <CoverCardInfo info={WoodCoverInfo.info} />
                    </div>
                </div>
            </div>

            <h3 className="area_title">מתחם תחתון</h3>
            <ImageCarousel images={general_lower_images} />
            <div className="cover_cards_container">
                <div className={"cover_card_container scroll-fade " + (isInView3 ? 'in-view' : '')}
                    ref={ref3 as React.RefObject<HTMLDivElement>}
                    style={{ '--start_position': '100px' } as React.CSSProperties}>
                    <CoverCard imgSrc={Suite1Suite2Cover} cover_name="סויטות 1+2" route="/suite1-2" />
                    <div className="cover_card_info">
                        <CoverCardInfo info={Suite1Suite2CoverInfo.info} />
                    </div>
                </div>
                <div className={"cover_card_container scroll-fade " + (isInView4 ? 'in-view' : '')}
                    ref={ref4 as React.RefObject<HTMLDivElement>}
                    style={{ '--start_position': '-100px' } as React.CSSProperties}>
                    <CoverCard imgSrc={Suite3Cover} cover_name="סויטה 3" route="/suite3" />
                    <div className="cover_card_info">
                        <CoverCardInfo info={Suite3CoverInfo.info} />
                    </div>
                </div>
            </div >

        </>
    )
}

export default Home