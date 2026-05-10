import "./CoverCard.css"
import { useNavigate } from 'react-router-dom'


function CoverCard({ imgSrc, cover_name, route }: { imgSrc: string, cover_name: string, route: string }) {
    const navigate = useNavigate()

    return (
        <>
            <div className="cover_card" onClick={() => navigate(route)}>
                <img className="cover_card_img" src={imgSrc} alt="Cover" />
                <div className="cover_card_overlay" />
                <h3 className="cover_card_title">{cover_name}</h3>
            </div>
        </>
    )
}

export default CoverCard