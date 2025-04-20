import './LoanForm.css';

export default function Model({ Message, closeModel }) {
    return (
        <div className="model" onClick={closeModel}>
            <div className="content">
                <h2>{Message}</h2>
                <button onClick={closeModel} className="submit-button" style={{ marginTop: "20px" }}>Close</button>
            </div>
        </div>
    )
}