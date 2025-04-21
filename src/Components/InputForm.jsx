export default function InputForm({labelName,value,handleChange}) {
    return (
        <div className="form-group">
            <label className="form-label" htmlFor="name">{labelName}:</label>
            <input
                className="form-input"
                type="text"
                id="name"
                name="name"
                value={value}

                onChange={(event) => {
                    handleChange(event.target.value);
                }}
            />
        </div>
    )
}