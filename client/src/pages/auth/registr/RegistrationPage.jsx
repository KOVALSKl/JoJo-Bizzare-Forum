import './RegistrationPage.css'

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

const axios = require('axios').default;

function AuthPage() {

    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [gender, setGender] = useState('male');
    const [birthday, setBirthday] = useState(null);
    const [password, setPassword] = useState(null);

    const [cookies, setCookie] = useCookies(['token']);

    let navigate = useNavigate();

    async function registration() {
        try {
            const response = await axios.post(`${BASE_URL}/api/user/registration`, {
                nickname: username,
                email: email,
                birthday: birthday,
                password: password
            });
            let now = new Date();
            now.setDate(now.getDate() + 1);
            setCookie('token', response.data.token, { path: '/', expires: now });
            navigate('/home')
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Container>
            <div className="page auth-block">
                <h2 className='block-title'>Registration</h2>
                <Form classNames={['registration-form']}>
                    <FormInput
                        name='username'
                        type='text'
                        placeholder='Enter your username'
                        onChange={setUsername} />
                    <FormInput
                        name='email'
                        type='email'
                        placeholder='Enter your e-mail'
                        onChange={setEmail} />
                    <Row className='gender-radios'>
                        <RadioBtn name={'gender'}
                            bgImage={male}
                            id='male'
                            value='male'
                            classNames={
                                (gender === 'female')
                                    ? ['male-btn', 'blur']
                                    : ['male-btn']
                            }
                            onChange={setGender}>
                            <span className='radio-label-text'>Male</span>
                        </RadioBtn>
                        <RadioBtn name={'gender'}
                            bgImage={female}
                            id='female'
                            value='female'
                            onChange={setGender}
                            classNames={
                                (gender === 'male')
                                    ? ['blur']
                                    : []
                            }>
                            <span className='radio-label-text' id='female-label-text-pos'>Female</span>
                        </RadioBtn>
                    </Row>
                    <FormInput
                        name='birthday'
                        type='date'
                        placeholder='Your birthday'
                        onChange={setBirthday} />
                    <FormInput
                        name='password'
                        type='password'
                        placeholder='Password'
                        onChange={setPassword} />
                    <Button classNames={['submit-btn']} onClick={registration} type="button">
                        Sign Up
                    </Button>
                    <Link to={'/home'} className='back-btn'>
                        <img src={backSign} />
                        Back
                    </Link>
                </Form>
            </div>
        </Container>

    );
}

export default AuthPage;