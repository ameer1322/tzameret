import Header from '../../components/header/Header'
import ImageCarousel from '../../components/image_carousel/ImageCarousel'
import Maps from '../../components/maps/maps'
import SuiteInfo from '../../components/suite_info/SuiteInfo'
import Prices from '../../components/prices/Prices'
import '../SuitePage.css'
import WhatsappButton from '../../components/whatsapp_button/WhatsappButton'
import SuiteInfoData from '../../assets/suite_info/StoneSuiteInfo'
import SuiteNotes from '../../components/suite_notes/SuiteNotes'
import suite_notes from '../../assets/suite_notes/SuiteNotes'
const imageModules = import.meta.glob("../../assets/images/stone_suite_images/*.jpg", { eager: true })
const images = Object.values(imageModules).map((module: any) => module.default)

const suiteInfoData = SuiteInfoData

const whatsappLink = "https://wa.me/972525338813?text=שלום%20רציתי%20לברר%20פרטים%20על%20סויטת%20אבן"

function StoneSuite() {
    return (
        <>
            <Header />
            <h1 className='suite-title'>סויטת אבן</h1>
            <div className="suite-content">
                <ImageCarousel images={images} />
                <div className="suite-sidebar">
                    <Maps />
                    <Prices />
                    <WhatsappButton link={whatsappLink} />
                </div>
            </div>
            <SuiteNotes notes={suite_notes} />
            <SuiteInfo {...suiteInfoData} />

        </>
    )
}

export default StoneSuite