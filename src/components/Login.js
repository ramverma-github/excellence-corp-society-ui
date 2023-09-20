
import Form from 'react-bootstrap/Form';
import Header from './Header';
import Footer from './Footer';
import { Button } from 'react-bootstrap';
import Loginbtn from '../css/login.css'
import { Link } from 'react-router-dom';

const Login = () => {
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
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                    </Form>
                                    <div className='text-center'>
                                        <button type='submit' className='btn btn-success login-btn'>Login</button>
                                        <span className='d-flex justify-content-center'>
                                            <Link to='#'>Forgot Password</Link>&nbsp;&nbsp;|
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