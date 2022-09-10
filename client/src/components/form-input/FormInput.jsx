import './FormInput.css'

function FormInput({ name, type, placeholder }) {
    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            className='form-input'
        />
    );
}

export default FormInput