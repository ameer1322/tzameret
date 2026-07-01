import "../SuitePage.css"
import ImageCarousel from "../../components/image_carousel/ImageCarousel"
import Maps from "../../components/maps/maps"
import SuiteInfo from "../../components/suite_info/SuiteInfo"
import Prices from "../../components/prices/Prices"
import WhatsappButton from "../../components/whatsapp_button/WhatsappButton"
import SuiteInfoData from "../../assets/suite_info/Suite3Info"
import SuiteNotes from "../../components/suite_notes/SuiteNotes"
import suite_notes from "../../assets/suite_notes/suite_notes"
const imageModules = import.meta.glob("../../assets/images/suite_3_images/*.jpg", { eager: true })
const images = Object.values(imageModules).map((module: any) => module.default)


const suiteInfoData = SuiteInfoData

const whatsappLink = "https://wa.me/972525338813?text=שלום%20רציתי%20לברר%20פרטים%20על%20סויטת%אבן"

function Suite3() {
    return (
        <>
            <h1 className='suite-title'>סויטה מס' 3</h1>
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

export default Suite3