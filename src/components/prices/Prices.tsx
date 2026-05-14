import "./Prices.css"

interface PriceRow {
    type: string
    price: string
}



const suite_prices: PriceRow[] = [{ type: 'אמצ"ש בהזמנת לילה', price: "₪1000" },
{ type: 'אמצ"ש בהזמנת שתי לילות', price: "₪10000" },
{ type: 'סופ"ש בהזמנת לילה', price: "₪1000" },
{ type: 'סופ"ש בהזמנת שתי לילות', price: "₪10000" }
]

function Prices() {
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
                    {suite_prices.map((row, index) => (
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