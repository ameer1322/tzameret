import whatsappIcon from '../../assets/images/whatsapp_icon.png';
import './WhatsappButton.css';

function WhatsappButton({ link }: { link: string }) {
    return (
        <a href={link} target="_blank" rel="noreferrer">
            <button className="whatsapp-button">
                <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
                שלח הודעה בוואטסאפ
            </button>
        </a>
    );
}

export default WhatsappButton;