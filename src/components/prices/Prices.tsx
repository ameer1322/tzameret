import "./Prices.css"

interface PriceRow {
    type: string
    price: string
}

interface PricesProps {
    rows: PriceRow[]
}

function Prices({ rows }: PricesProps) {
    return (
        <div className="prices-wrapper">
            <div className="prices-title">מחירון</div>
            <table className="prices-table">
                <thead>
                    <tr>
                        <th>סוג לינה</th>
                        <th>מחיר ללילה</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            <td>{row.type}</td>
                            <td>{row.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Prices