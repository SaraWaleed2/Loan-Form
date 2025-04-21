import './LoanForm.css';

export default function Model({ Message, closeModel, showModel }) {
    return (
        <>
            {
                showModel ?
                    <div className="model">
                        <div className="content">
                            <h2>{Message}</h2>
                            <button onClick={closeModel} className="submit-button" style={{ marginTop: "20px" }}>Close</button>
                        </div>
                    </div>
                    : null
            }

        </>
    )
}