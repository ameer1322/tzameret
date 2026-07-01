import "./CoverCardInfo.css"

interface InfoRow {
    label: string
    value: string
}

interface CoverCardInfoProps {
    info: InfoRow[]
}

function CoverCardInfo({ info }: CoverCardInfoProps) {
    return (
        <>
            <div className="cover_card_info_rows">
                {info.map((row, index) => (
                    <div key={index} className="cover_card_info_row">
                        <span className="cover_card_info_label">{row.label}</span>
                        <span className="cover_card_info_value">{row.value}</span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CoverCardInfo