import "./SuiteInfo.css"


interface SuiteInfoRow {
    label: string
    value: string
}

interface SuiteInfoProps {
    info: SuiteInfoRow[]
}

function SuiteInfo({ info }: SuiteInfoProps) {
    return (
        <div className="suite-info">
            {info.map((row, index) => (
                <div key={index} className="suite-info-row">
                    <span className="suite-info-label">{row.label}</span>
                    <span className="suite-info-value">{row.value}</span>
                </div>
            ))}

            {/* <div className="suite-info-row">
                <span className="suite-info-label">מיקום</span>
                <span className="suite-info-value">{location}</span>
            </div>
            <div className="suite-info-row">
                <span className="suite-info-label">ייעוד</span>
                <span className="suite-info-value">{guests}</span>
            </div>
            <div className="suite-info-row">
                <span className="suite-info-label">בריכות</span>
                <span className="suite-info-value">{pool}</span>
            </div>
            <div className="suite-info-row">
                <span className="suite-info-label">מפרט כללי</span>
                <span className="suite-info-value">{general_info}</span>
            </div>
            <div className="suite-info-row">
                <span className="suite-info-label">חניה</span>
                <span className="suite-info-value">{parking}</span>
            </div>
            <div className="suite-info-row">
                <span className="suite-info-label">מפרט החצר</span>
                <span className="suite-info-value">{garden_info}</span>
            </div>
            <div className="suite-info-row">
                <span className="suite-info-label">נוף</span>
                <span className="suite-info-value">{view}</span>
            </div>
            <div className="suite-info-row">
                <span className="suite-info-label">אינטרנט</span>
                <span className="suite-info-value">{internet}</span>
            </div>
            <div className="suite-info-row">
                <span className="suite-info-label">הערות</span>
                <span className="suite-info-value">{notes}</span>
            </div> */}
        </div>
    )
}

export default SuiteInfo