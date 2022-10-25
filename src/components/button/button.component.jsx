import './button.styles.scss';

export const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({ children, buttonType, isLoading, ...props }) => {
    return (
        <button disabled={isLoading} {...props} className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}>
            {isLoading ? (
                <div className="button-spinner"></div>
            ) : children}
        </button>
    )
}

export default Button;