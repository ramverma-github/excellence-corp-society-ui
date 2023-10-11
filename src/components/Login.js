
import Form from 'react-bootstrap/Form';
import Header from './Header';
import Footer from './Footer';
import { Button } from 'react-bootstrap';
import Loginbtn from '../css/login.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = () => {
        console.log("email: ", email)
    let loginData = {
            email:email,
            password:password
        }
        console.log(loginData);
        alert("Login Data: "+loginData.email);
        //Can call API here to verify the login details:
    }

    return (
        <>
            <Header />
            <div className=''>

                <div class="container">
                    <div class="row">
                        <div class="col"> </div>
                        <div class="card login-card-body">
                            <div class="card-header">
                                <h3 className='text-center'>Login Here!</h3>
                            </div>
                            <div class="card-body">
                                <div class="col mt-4">
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email"
                                                onChange={(e) => { setEmail(e.target.value) }} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control name='password' type="password" placeholder="Password"
                                                onChange={(e) => { setPassword(e.target.value) }} />
                                        </Form.Group>
                                    </Form>
                                    <div className='text-center'>
                                        <button type='submit' className='btn btn-success login-btn' onClick={loginUser}>Login</button>
                                        <span className='d-flex justify-content-center'>
                                            <Link to='/forgotPassword'>Forgot Password</Link>&nbsp;&nbsp;|
                                            New User?&nbsp;<Link to='/register'>Register</Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col"> </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Login;