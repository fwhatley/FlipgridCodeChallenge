import React from 'react';

import './_ui.button.scss';

function UiButton(props) {

    const {
        type = '',
        children = '',
        textContent = '',
        className = '',
        ariaLabel = '',
        disabled = false,
        onClick = () => {},
    } = props;

    return (
        <button onClick={onClick}
                type={type}
                aria-label={ariaLabel}
                className={'ui-button ui-button--primary' + className}
                disabled={disabled}
        >
            {textContent || children}
        </button>
    );
}

export default UiButton;
