import React, { useState, FormEvent, ChangeEvent } from 'react';
import { AppDiv, InputText, InputDiv } from '../styles/styles';
import { LoginProps } from '../config/type';
import { Redirect } from 'react-router-dom';

const Login: React.FC<LoginProps> = ({ history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [auth, setAuth] = useState(false);

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        console.log('email: ', email);
        console.log('password: ', password);
        e.preventDefault();
        setEmail(email);
        setPassword(password);
        if (email === 'test@test.com' && password === 'tester') {
            setAuth(true);
        }

        if (auth) {
            alert('Login Successfully');
            return history.push('/');
        }
    };

    return (
        <AppDiv>
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit}>
                <InputDiv>
                    <InputText
                        onChange={handleEmailChange}
                        name='email'
                        type='email'
                        placeholder='email'
                    />
                </InputDiv>
                <InputDiv>
                    <InputText
                        onChange={handlePasswordChange}
                        name='password'
                        type='password'
                        placeholder='password'
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
