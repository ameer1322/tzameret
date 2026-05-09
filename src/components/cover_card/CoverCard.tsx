import "./CoverCard.css"



function CoverCard({ imgSrc, cover_name }: { imgSrc: string, cover_name: string }) {
    return (
        <>
            <div className="cover_card">
                <h3 className="cover_card_title">{cover_name}</h3>
                <img className="cover_card_img" src={imgSrc} alt="Cover" />
            </div>
        </>
    )
}

export default CoverCard