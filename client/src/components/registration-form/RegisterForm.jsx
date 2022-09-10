import FormInput from '../form-input/FormInput';
import RadioBtn from '../radio-button/RadioBtn';
import './RegisterForm.css'
import male from '../../assets/male.svg'
import female from '../../assets/female.svg'
import { Row } from 'react-bootstrap';
import { useState } from 'react'
import { useEffect } from 'react';

function RegisterForm() {

    const [gender, setGender] = useState('male');

    useEffect(() => {
        console.log(gender);
    }, [gender])

    return (
        <form className="registration-form">
            <FormInput
                name='username'
                type='text'
                placeholder='Enter your username' />
            <FormInput
                name='email'
                type='email'
                placeholder='Enter your e-mail' />
            <Row className='gender-radios'>
                <RadioBtn name={'gender'}
                    bgImage={male}
                    id='male'
                    value='male'
                    classNames={['male-btn']}
                    setValue={setGender}>
                    <span className='radio-label-text'>Male</span>
                </RadioBtn>
                <RadioBtn name={'gender'}
                    bgImage={female}
                    id='female'
                    value='female'
                    setValue={setGender}>
                    <span className='radio-label-text' id='female-label-text-pos'>Female</span>
                </RadioBtn>
            </Row>
            <FormInput
                name='birthday'
                type='date'
                placeholder='Your birthday' />
            <FormInput
                name='password'
                type='password'
                placeholder='Password' />
        </form>
    );
}

export default RegisterForm;