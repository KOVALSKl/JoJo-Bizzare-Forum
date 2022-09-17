import './LoginPage.css'

import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import Form from "../../../components/form/Form";
import { Link } from 'react-router-dom';
import FormInput from '../../../components/form-input/FormInput'
import Button from '../../../components/button/Button';
import RadioBtn from '../../../components/radio-button/RadioBtn'
import { Container, Row } from 'react-bootstrap';
import { BASE_URL } from '../../../utils/consts';

import backSign from '../../../assets/back-btn-sign.svg'
import female from '../../../assets/female.svg'
import male from '../../../assets/male.svg'
import forgotSign from '../../../assets/forgot-password-sign.svg'

const axios = require('axios').default;

function LoginPage() {

    const [userlogin, setUserlogin] = useState(null);
    const [password, setPassword] = useState(null);

    const [cookies, setCookie] = useCookies(['token']);

    let navigate = useNavigate();

    async function login() {
        try {
            const response = await axios.post(`${BASE_URL}/api/user/login`, {
                userlogin: userlogin,
                password: password
            });
            let now = new Date();
            now.setDate(now.getDate() + 1);
            setCookie('token', response.data.token, { path: '/', expires: now });
            console.log(response.data);
            navigate('/home')
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Container>
            <div className="page login-block">
                <h2 className='block-title'>Login</h2>
                <Form classNames={['login-form']}>
                    <FormInput
                        name='username'
                        type='text'
                        placeholder='Username or Email'
                        onChange={setUserlogin} />
                    <div className='password-block'>
                        <FormInput
                            name='password'
                            type='password'
                            placeholder='Password'
                            onChange={setPassword} />
                        <div className='forgot-password-block'>
                            <Link to='/home'>
                                forgot your password
                            </Link>
                            <Link to='/home' id='question-sign-link'>
                                <img src={forgotSign} alt='forgot your password' />
                            </Link>
                        </div>
                    </div>
                    <Button classNames={['submit-btn']} onClick={login} type="button">
                        Log In
                    </Button>
                    <Link to={'/registration'} className='back-btn'>
                        SIGN UP
                    </Link>
                </Form>
            </div >
        </Container >

    );
}

export default LoginPage;