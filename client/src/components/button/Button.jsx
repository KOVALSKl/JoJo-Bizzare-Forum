import './Button.css'

function Button({ children, classNames = [], onClick, type }) {
    return (
        <button
            className={['button', ...classNames].join(' ')}
            type={type}
            onClick={(e) => onClick(e)}>
            {children}
        </button>
    );
}

export default Button;