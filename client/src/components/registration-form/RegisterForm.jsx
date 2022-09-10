import FormInput from '../form-input/FormInput';
import RadioBtn from '../radio-button/RadioBtn';
import './RegisterForm.css'
import male from '../../assets/male.svg'
import female from '../../assets/female.svg'
import backSign from '../../assets/back-btn-sign.svg'
import { Row } from 'react-bootstrap';
import { useState } from 'react'
import { useEffect } from 'react';
import Button from '../button/Button';
import { Link } from 'react-router-dom';

function RegisterForm() {

    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [gender, setGender] = useState('male');
    const [birthday, setBirthday] = useState(null);
    const [password, setPassword] = useState(null);


    return (
        <form className="registration-form">
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
            <Button classNames={['submit-btn']}>
                Sign Up
            </Button>
            <Link to={'/home'} className='back-btn'>
                <img src={backSign} />
                Back
            </Link>
        </form >
    );
}

export default RegisterForm;