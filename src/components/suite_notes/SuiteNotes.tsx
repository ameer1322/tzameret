import "./SuiteNotes.css";

interface SuiteNotesProps {
    notes: string;
}


const SuiteNotes: React.FC<SuiteNotesProps> = ({ notes }) => {
    return (
        <div className="suite-notes">
            <h2 className="notes-title">הערות למחיר</h2>
            <h4 className="notes-content">{notes}</h4>
        </div>
    );
}

export default SuiteNotes