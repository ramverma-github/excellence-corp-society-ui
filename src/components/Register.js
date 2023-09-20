import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Header from './Header';
import Footer from './Footer';
import { Button } from 'react-bootstrap';
import Loginbtn from '../css/login.css'
import { Link } from 'react-router-dom';
import RegisterCss from '../css/register.css'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const [fullName, setFullName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [emailId, setEmailId] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [profession, setProfession] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [pin, setPin] = useState('');
    const [idProof, setIdProof] = useState('');
    const [idProofNumber, setIdProofNumber] = useState(0);
    const [nomineeName, setNomineeName] = useState('');
    const [nomineeIdProof, setNomineeIdProof] = useState('');
    const [nomineeIdProofNumber, setNomineeIdProofNumber] = useState('');
    const [agree, setAgree] = useState('');

    const navigate = useNavigate();
    const navigateLogin = () => {
        toast("Your are registerd Sucessfully!");
        // 👇️ navigate to /
        navigate('/notification');
        refreshData();
        toast("Your are registerd Sucessfully!");
    };
    const refreshData = () => {
        window.location.reload(false);
    }

    return (
        <>
            <Header />
            <div className=''>
                <div class="container">
                    <div class="row">
                        <div class="col"> </div>
                        <div class="card register-card-body">
                            <div class="card-header">
                                <h3 className='text-center'>Register Here!</h3>
                            </div>
                            <div class="card-body">
                                <div class="col mt-4">
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>Full Name:</Form.Label>
                                            <Form.Control type="text" placeholder="Your Full Name?" name='fullName'
                                                value={fullName} onChange={(e) => { setFullName(e.target.value) }} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>Date of Birth:</Form.Label>
                                            <Form.Control type="date" placeholder="Your Date of Birth?" name='dateOfBirth'
                                                value={dateOfBirth} onChange={(e) => { setDateOfBirth(e.target.value) }} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>Gender:</Form.Label>&nbsp;&nbsp;&nbsp;&nbsp;
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="gender" id="inlineRadio1"
                                                    value={gender} onChange={(e) => { setGender(e.target.value) }} />
                                                <label class="form-check-label" for="inlineRadio1" name='male'>Male</label>&nbsp;
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="gender" id="inlineRadio2"
                                                    value={gender} onChange={(e) => { setGender(e.target.value) }} />
                                                <label class="form-check-label" for="inlineRadio2" name='female'>Female</label>
                                            </div>

                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>Email Address:</Form.Label>
                                            <Form.Control type="email" placeholder="Your Email ID?" name='emailId'
                                            value={emailId} onChange={(e) => { setEmailId(e.target.value) }} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>Mobile Number:</Form.Label>
                                            <Form.Control name='mobileNumber' type="number" placeholder="Your Mobile Number?" 
                                            value={mobileNumber} onChange={(e) => { setMobileNumber(e.target.value) }}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>Profession:</Form.Label>
                                            <Form.Control name='profession' type="text" placeholder="Your profession?" 
                                            value={profession} onChange={(e) => { setProfession(e.target.value) }}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>ID Proof:</Form.Label>
                                            <select name='idProof' class="form-select" aria-label="ID Card Selector"
                                            value={idProof} onChange={(e) => { setIdProof(e.target.value) }} >
                                                <option value="1">Aadhar Card</option>
                                                <option value="2">Pan Card</option>
                                                <option value="3">Voter ID Card</option>
                                                <option value="4">Passport</option>
                                            </select>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>ID Proof Number:</Form.Label>
                                            <Form.Control name='idProofNumber' type="text" placeholder="Your ID Proof Number?" 
                                            value={idProofNumber} onChange={(e) => { setIdProofNumber(e.target.value) }}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>Address:</Form.Label>
                                            <Form.Control name='address' type="text" placeholder="Your Full Address?" 
                                            value={address} onChange={(e) => { setAddress(e.target.value) }}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>City:</Form.Label>
                                            <select name='city' class="form-select" aria-label="City Selector"
                                            value={city} onChange={(e) => { setCity(e.target.value) }}>
                                                <option value="1">Rajgarh</option>
                                                <option value="2">Bioura</option>
                                                <option value="3">Jirapur</option>
                                                <option value="4">Narsingharh</option>
                                                <option value="4">Bhopal</option>
                                                <option value="4">Indore</option>
                                            </select>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>State:</Form.Label>
                                            <select name='state' class="form-select" aria-label="State Selector"
                                            value={state} onChange={(e) => { setState(e.target.value) }}>
                                                <option selected>Madhya Pradesh</option>
                                                <option value="1">Rajisthan</option>
                                                <option value="4">Gurjrat</option>
                                                <option value="2">Maharastra</option>
                                                <option value="4">Chattishgarch</option>
                                                <option value="3">Uttar Pradesh</option>
                                            </select>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>Country:</Form.Label>
                                            <select name='country' class="form-select" aria-label="Country Selector"
                                            value={country} onChange={(e) => { setCountry(e.target.value) }}>
                                                <option selected>India</option>
                                                <option value="4">America</option>
                                                <option value="3">England</option>
                                            </select>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>Pin:</Form.Label>
                                            <Form.Control name='pin' type="text" placeholder="Your Pin Number?" 
                                            value={pin} onChange={(e) => { setPin(e.target.value) }}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>Nominee Name:</Form.Label>
                                            <Form.Control name='nomineeName' type="text" placeholder="Your Nominee Name?" 
                                            value={nomineeName} onChange={(e) => { setNomineeName(e.target.value) }}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>Nominee ID Proof:</Form.Label>
                                            <select name='nomineeIdProof' class="form-select" aria-label="Nominee ID Card Selector"
                                            value={nomineeIdProof} onChange={(e) => { setNomineeIdProof(e.target.value) }}>
                                                <option value="1">Aadhar Card</option>
                                                <option value="2">Pan Card</option>
                                                <option value="3">Voter ID Card</option>
                                                <option value="4">Passport</option>
                                            </select>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>Nominee ID Number:</Form.Label>
                                            <Form.Control name='nomineeIdProofNumber' type="text" placeholder="Your Nominee ID Number?" 
                                            value={nomineeIdProofNumber} onChange={(e) => { setNomineeIdProofNumber(e.target.value) }}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <div class="form-check">
                                                <input name="agree" class="form-check-input checkbox-border" type="checkbox" id="defaultCheck1" 
                                                value={agree} onChange={(e) => { setAgree(e.target.value) }}/>
                                                <label class="form-check-label bold-font" for="defaultCheck1">
                                                    Please confirm, if the filled data are correct?
                                                </label>
                                            </div>
                                        </Form.Group>

                                    </Form>
                                    <div className='text-center'>
                                        <button type='submit' className='btn btn-success register-btn'
                                            onClick={navigateLogin}>
                                            Submit</button>
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

export default Register;