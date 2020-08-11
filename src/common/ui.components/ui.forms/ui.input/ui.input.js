import React from 'react';

import './_ui.input.scss';

function UiInput(props) {

    const {
        label = '',
        value = '',
        type = '',
        ariaLabel = '',
        onChange = () => {},
    } = props;

    return (
        <label className={'ui-input'}>
            <div><b>{label}</b></div>
            <input value={value}
                   type={type}
                   aria-label={ariaLabel}
                   onChange={onChange}
            />
        </label>

    );
}

export default UiInput;
