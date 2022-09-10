import { useState } from "react";
import { Container } from "react-bootstrap";
import LoginForm from "../../components/login-form/LoginForm";
import RegisterForm from "../../components/registration-form/RegisterForm";
import './AuthPage.css'

function AuthPage() {

    const [isAuth, setIsAuth] = useState(false)

    return (

        <Container className="auth-block">
            <h2 className="block-title">
                {
                    (!isAuth)
                        ? 'Registration'
                        : 'Login'
                }
            </h2>
            {
                (!isAuth)
                    ? <RegisterForm />
                    : <LoginForm />
            }
        </Container>

    );
}

export default AuthPage;