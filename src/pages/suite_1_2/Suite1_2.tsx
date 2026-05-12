import Header from "../../components/header/Header"
import ImageCarousel from "../../components/image_carousel/ImageCarousel"
import Maps from "../../components/maps/maps"
import Prices from "../../components/prices/Prices"
import SuiteInfo from "../../components/suite_info/SuiteInfo"
import WhatsappButton from "../../components/whatsapp_button/WhatsappButton"
import "../SuitePage.css"
const imageModules = import.meta.glob("../../assets/images/suite_1+2_images/*.jpg", { eager: true })
const images = Object.values(imageModules).map((module: any) => module.default)

const suiteInfoData = {
    info: [
        {
            label: "מיקום",
            value: "אזור מישור החוף, דלית אל כרמל"
        },
        {
            label: "ייעוד",
            value: "זוגות, משפחות, קבוצות, ימי הולדת"
        },
        {
            label: "בריכות",
            value: ` בריכת שחייה מחוממת ומקורה.
הבריכה מגודרת. 
    `}, {
            label: `המקום מכיל:`,
            value: `ארון בגדים
    ספרים לקריאה
    מיטה זוגית
    מזגן בכל חדר
    פינת אוכל
    מרפסת פרטית עם שולחן וכסאות 
גקוזי זוגי עגול פונה לנוף
מטבח מאובזר: פינת קפה, קומקום חשמלי, מקרר, מיקרוגל, סירים, מחבתות, כלי הגשה, כיריים חשמליות.
חדר רחצה: מגבות, שמפו, תחליב רחצה. 
`}, {
            label: "חנייה",
            value: " 	חנייה חינם. "
        }, {
            label: "מפרט החצר",
            value: `בריכת שחייה מחוממת ומקורה.
הבריכה מגודרת.
מדשאה, מנגל, פרגולות, תאורה רומנטית צבעונית לשעות הערב, פרחי נוי, פינת ישיבה מול הנוף. 
`
        }, {
            label: "נוף",
            value: "נוף גלילי קסום. "
        },
        {
            label: "ויפי",
            value: "ויפי חינם."
        },
        {
            label: "הערות",
            value: ` בקרבת המקום: מסעדות, מסלולי טיולים, טרקטורונים, רכיבה על סוסים, גיפים.
ארוחת ערב בתיאום מראש.
ארוחת בוקר בתיאום מול המארחים.
סידור המקום לימי הולדת, הצעות נישואין ושאר אירועים מיוחדים.
ישנה נגישות לנכים.
מקבלים בעלי חיים. 
    `}
    ]
}

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
            <SuiteInfo {...suiteInfoData} />

        </>
    )
}

export default Suite1_2