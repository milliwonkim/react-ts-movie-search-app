import React, { useState, FormEvent, ChangeEvent } from 'react';
import { AppDiv, InputText, InputDiv } from '../styles/styles';
import { LoginState } from '../config/type';

const Login: React.FC<LoginState> = ({ history, auth, dispatch }) => {
    const [login, setLogin] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        console.log('email: ' + login.email + ', password: ' + login.password);

        if (login.email === 'test@test.com' && login.password === 'tester') {
            dispatch({
                type: 'AUTH_SUCCESS',
            });
        }
    };

    return (
        <AppDiv>
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit}>
                <InputDiv>
                    <InputText
                        onChange={handleChange}
                        name='email'
                        type='email'
                        placeholder='email'
                        authcomplete='on'
                    />
                </InputDiv>
                <InputDiv>
                    <InputText
                        onChange={handleChange}
                        name='password'
                        type='password'
                        placeholder='password'
                        autocomplete='on'
                    />
                </InputDiv>
                <InputDiv>
                    <InputText type='submit' placeholder='password' />
                </InputDiv>
            </form>
        </AppDiv>
    );
};

export default Login;
