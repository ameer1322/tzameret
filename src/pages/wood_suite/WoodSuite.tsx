import "./WoodSuite.css"
import Header from "../../components/header/Header"
import ImageCarousel from "../../components/image_carousel/ImageCarousel"
import Maps from "../../components/maps/maps"
import SuiteInfo from "../../components/suite_info/SuiteInfo"

const imageModules = import.meta.glob("../../assets/images/wood_suite_images/*.jpg", { eager: true })
const images = Object.values(imageModules).map((module: any) => module.default)


const suiteInfoData = {
    location: "אזור מישור החוף, דלית אל כרמל",
    guests: "זוגות, משפחות, קבוצות, ימי הולדת",
    pool: `
    בריכת שחייה מחוממת ומקורה.
הבריכה מגודרת. 
    `,
    general_info: `המקום מכיל:

    ארון בגדים
    ספרים לקריאה
    מיטה זוגית
    מזגן בכל חדר
    פינת אוכל
    מרפסת פרטית עם שולחן וכסאות 
גקוזי זוגי עגול פונה לנוף
מטבח מאובזר: פינת קפה, קומקום חשמלי, מקרר, מיקרוגל, סירים, מחבתות, כלי הגשה, כיריים חשמליות.
חדר רחצה: מגבות, שמפו, תחליב רחצה. 
`,
    parking: " 	חנייה חינם. ",
    garden_info: `בריכת שחייה מחוממת ומקורה.
הבריכה מגודרת.
מדשאה, מנגל, פרגולות, תאורה רומנטית צבעונית לשעות הערב, פרחי נוי, פינת ישיבה מול הנוף. 
`,
    view: "נוף גלילי קסום. ",
    internet: "ויפי חינם.",
    notes: `
    בקרבת המקום: מסעדות, מסלולי טיולים, טרקטורונים, רכיבה על סוסים, גיפים.
ארוחת ערב בתיאום מראש.
ארוחת בוקר בתיאום מול המארחים.
סידור המקום לימי הולדת, הצעות נישואין ושאר אירועים מיוחדים.
ישנה נגישות לנכים.
מקבלים בעלי חיים. 
    `
}


function WoodSuite() {
    return (
        <>
            <Header />
            <h1>Wood Suite</h1>
            <div className="suite-content">
                <ImageCarousel images={images} />
                <Maps />
            </div>
            <SuiteInfo {...suiteInfoData} />

        </>
    )
}

export default WoodSuite