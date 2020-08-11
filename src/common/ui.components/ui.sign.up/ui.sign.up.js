import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { setCurrentUser } from '../../../redux.app.state/actions/current.user.actions';
import UserDetails from '../../data.models/api/user.details';
import UiInput from '../ui.forms/ui.input/ui.input';
import UiButton from '../ui.forms/ui.button/ui.button';

import './_ui.sign.up.scss';
import UserDetailsService from '../../services/micro.services/user.details.service';


function UiSignUp() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showErrorMsg, setShowErrorMsg] = useState(false);

    const onSignUp = (e) => {
        e.preventDefault();
        if (!firstName || !email || !password) {
            setShowErrorMsg(true);
            return;
        }

        const navigateRoute = 'sign-up-confirmation';
        const userDetails = new UserDetails({
            firstName,
            email,
            password,
        });
        // send to api

        UserDetailsService.signUpUser(userDetails).then((res) => {
                dispatch(setCurrentUser(res.userDetails));
                history.push(navigateRoute);
            }).catch((err) => {
                // nothing for now since response is mocked and it will always succeed
            });

    };

    const onChangeFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <section className='px-5 py-5 ui-sign-up app-white-bg'>
            <h1>Let's</h1>
            <h1 className={'ui-sign-up__strong-title'}>Sign Up</h1>
            <p className={'pt-3'}>
                Use the form below to sign up for this super awesome service.
                You're only a few steps away!
            </p>

            <form onSubmit={onSignUp}>
                <UiInput
                    label={'First Name'}
                    type={'text'}
                    value={firstName}
                    ariaLabel={'First Name'}
                    onChange={onChangeFirstName}
                />
                <UiInput
                    label={'Email Address'}
                    type={'email'}
                    value={email}
                    ariaLabel={'Email Address'}
                    onChange={onChangeEmail}
                />
                <UiInput
                    label={'Password'}
                    type={'password'}
                    value={password}
                    ariaLabel={'Password'}
                    onChange={onChangePassword}
                />

                { showErrorMsg && <p className={'app-red'}>
                    Please provide all fields to continue.
                </p>
                }
                <div className={'ui-sign-up__action-buttons'}>
                    <UiButton
                        type={'submit'}
                        className={''}
                        ariaLabel={'Sign Up'}
                        onClick={onSignUp}
                    >
                        Sign Up
                    </UiButton>
                </div>

            </form>
        </section>
    );
}

export default UiSignUp;
