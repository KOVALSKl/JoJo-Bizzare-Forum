import './Form.css'

function Form({ classNames = [], children }) {
    return (
        <form className={['user-form', ...classNames].join(' ')}>
            {children}
        </form>
    );
}

export default Form;