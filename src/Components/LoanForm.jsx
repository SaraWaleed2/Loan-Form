import { useState } from 'react';
import './LoanForm.css';
import Model from './Model';
import InputForm from './InputForm';

export default function LoanRequestForm() {
    const [formInputs, setFormInputs] = useState({ name: "", phone: "", age: "", isEmployee: false, salary: "" });
    const [showModel, setShowModel] = useState(false);
    const [Message, setMessage] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        if (formInputs.name && formInputs.phone && formInputs.age) {

            if (formInputs.phone.length < 11) {
                setMessage("Invalid Phone Number");
            }
            else if (formInputs.age < 18 || formInputs.age > 80) {
                setMessage("The age is not allowed");
            }
            else {
                console.log("Form Data:", formInputs);
                setMessage("Loan request submitted successfully😊");
                setFormInputs({ name: "", phone: "", age: "", isEmployee: false, salary: "" });
            }
        } else {
            setMessage("Please fill in all fields correctly.");
        }
        setShowModel(true);
    }
    const btnIsDisabled = formInputs.name == "" || formInputs.phone == "" || formInputs.age == ""


    function closeModel() {
        if (showModel) {
            setShowModel(false);
        }
    }
    function handleNameChange(val) {
        setFormInputs({ ...formInputs, name: val });
    }
    function handlePhoneChange(val) {
        setFormInputs({ ...formInputs, phone: val });
    }
    function handleAgeChange(val) {
        setFormInputs({ ...formInputs, age: val });
    }

    return (
        <>
            <div className="loan-container" onClick={closeModel}>
                <div className="loan-form-card" >
                    <h2 className="loan-title">Requesting a Loan</h2>
                    <div className="form-divider"></div>

                    <form>
                        <InputForm labelName='Name' value={formInputs.name} handleChange={handleNameChange} />
                        <InputForm labelName='Phone Number' value={formInputs.phone} handleChange={handlePhoneChange} />
                        <InputForm labelName='Age' value={formInputs.age} handleChange={handleAgeChange} />

                        <div className="checkbox-group">
                            <label className="checkbox-label" htmlFor="isEmployee">Are you an employee?</label>
                            <input
                                className="checkbox-input"
                                type="checkbox"
                                id="isEmployee"
                                name="isEmployee"
                                checked={formInputs.isEmployee}
                                onChange={(event) => {
                                    setFormInputs({ ...formInputs, isEmployee: event.target.checked });
                                }}
                            />
                        </div>

                        <div className="form-group select-group">
                            <label htmlFor="salary">Salary:</label>
                            <select
                                className="form-select"
                                id="salary"
                                name="salary"
                                value={formInputs.salary}
                                onChange={(event) => {
                                    setFormInputs({ ...formInputs, salary: event.target.value });
                                }}
                            >
                                <option value="less than 500$">less than 500$</option>
                                <option value="500$ - 1000$">500$ - 1000$</option>
                                <option value="1000$ - 2000$">1000$ - 2000$</option>
                                <option value="more than 2000$">more than 2000$</option>
                            </select>
                        </div>

                        <div className="submit-container">
                            <button type="submit" disabled={btnIsDisabled} className={btnIsDisabled ? "unactive" : "submit-button"} onClick={handleSubmit} >
                                Submit
                            </button>
                        </div>
                    </form>
                    <Model Message={Message} closeModel={closeModel} showModel={showModel} />
                </div>
            </div>
        </>
    );
}