

const FormRow = ({type, name, value, handleChange, labelText}) => {
    return (
        <div className='form-row'>
            <label htmlFor={name} className='form-label'>{labelText || name}</label>
            <input
                id={name}
                type={type}
                name={name}
                className='form-input'
                onChange={handleChange}
                value={value} 
            />
        </div>
    )
}

export default FormRow
