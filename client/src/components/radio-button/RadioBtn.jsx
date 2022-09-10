import './RadioBtn.css'

function RadioBtn({ id, name, value, bgImage, alt, classNames = [], setValue, children }) {
    return (
        <div className={['radio-btn-container col-6', ...classNames].join(' ')}>
            <label className="radio-input-label" htmlFor={id}>
                <img src={bgImage} alt={alt} />
                {children}
            </label>
            <input
                id={id}
                className="radio-btn"
                type='radio'
                name={name}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value)
                }}
            />
        </div>
    );
}

export default RadioBtn;