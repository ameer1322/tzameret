import Header from "../../components/header/Header"
import ImageCarousel from "../../components/image_carousel/ImageCarousel"
import Maps from "../../components/maps/maps"
import Prices from "../../components/prices/Prices"
import SuiteInfo from "../../components/suite_info/SuiteInfo"
import WhatsappButton from "../../components/whatsapp_button/WhatsappButton"
import "../SuitePage.css"
import SuiteInfoData from "../../assets/suite_info/Suite1-2Data"
import suite_notes from "../../assets/suite_notes/suite_notes"
import SuiteNotes from "../../components/suite_notes/SuiteNotes"

const imageModules = import.meta.glob("../../assets/images/suite_1+2_images/*.jpg", { eager: true })
const images = Object.values(imageModules).map((module: any) => module.default)

const suiteInfoData = SuiteInfoData

const whatsappLink = "https://wa.me/972525338813?text=שלום%20רציתי%20לברר%20פרטים%20על%20סויטות%201-2"


function Suite1_2() {
    return (
        <>
            <Header />
            <h1 className='suite-title'>סויטות מס' 1+2</h1>
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

export default Suite1_2