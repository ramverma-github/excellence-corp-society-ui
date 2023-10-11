import Form from 'react-bootstrap/Form';
import Header from './Header';
import Footer from './Footer';
import { Button } from 'react-bootstrap';
import Loginbtn from '../css/login.css'
import { Link } from 'react-router-dom';
import React, { useState } from "react";

const ForgotPassword = () => {
    const [fullName, setFullName] = useState('');
    const [emailId, setEmailId] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    return (
        <>
            <Header />
            <div className=''>

                <div class="container">
                    <div class="row">
                        <div class="col"> </div>
                        <div class="card login-card-body">
                            <div class="card-header">
                                <h3 className='text-center'>Reset Password</h3>
                            </div>
                            <div class="card-body">
                                <div class="col mt-4">
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>Full Name:</Form.Label>
                                            <Form.Control type="text" placeholder="Your Full Name?" name='fullName'
                                                value={fullName} onChange={(e) => { setFullName(e.target.value) }} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>Email Address:</Form.Label>
                                            <Form.Control type="email" placeholder="Your Email ID?" name='emailId'
                                                value={emailId} onChange={(e) => { setEmailId(e.target.value) }} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>Date of Birth:</Form.Label>
                                            <Form.Control type="date" placeholder="Your Date of Birth?" name='dateOfBirth'
                                                value={dateOfBirth} onChange={(e) => { setDateOfBirth(e.target.value) }} />
                                        </Form.Group>
                                    </Form>
                                    <div className='text-center'>
                                        <button type='submit' className='btn btn-success login-btn'>Reset</button>
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
export default ForgotPassword;