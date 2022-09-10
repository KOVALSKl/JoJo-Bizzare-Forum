import './Button.css'

function Button({ children, classNames = [], onClick, type }) {
    return (
        <button
            className={['btn', ...classNames].join(' ')}
            type={type}
            onClick={(e) => onClick()}>
            {children}
        </button>
    );
}

export default Button;