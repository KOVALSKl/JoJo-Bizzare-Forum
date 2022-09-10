import './FormInput.css'

function FormInput({ name, type, placeholder, onChange }) {
    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={(e) => {
                onChange(e.target.value)
            }}
            className='form-input'
        />
    );
}

export default FormInput