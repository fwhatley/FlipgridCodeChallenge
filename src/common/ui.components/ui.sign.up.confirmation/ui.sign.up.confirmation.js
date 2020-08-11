import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import UiButton from '../ui.forms/ui.button/ui.button';

import './_ui.sign.up.confirmation.scss';

function UiSignUpConfirmation() {

    const currentUser = useSelector((state) => state.currentUser);
    const history = useHistory();

    const onGoToSignUp = () => {
        history.push('/sign-up');
    }

    if (!currentUser) {
        return <div>
            <p>There is no current user signed up.</p>
            <UiButton
                onClick={onGoToSignUp}
                ariaLabel={'Go to Sign Up'}
            >
                Go to Sign Up
            </UiButton>
        </div>
    }

    return (
        <section className='px-5 py-5 ui-sign-up-confirmation app-white-bg'>
            <h1>Welcome</h1>
            <h1 className={'ui-sign-up-confirmation__strong-title'}>{currentUser.firstName}!</h1>
            <p>
                You have been registered for this awesome service.
                Please check your email listed below for instructions.
            </p>
            <p><b>{currentUser.email}</b></p>
            <div className={'ui-sign-up-confirmation__action-buttons'}>
                <UiButton ariLabel={'Sing In'}>
                    Sing In
                </UiButton>
            </div>
        </section>
    );
}

export default UiSignUpConfirmation;
