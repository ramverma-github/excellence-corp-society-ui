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
import axios from "axios";

const Register = () => {
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();
    let registerData = {
        fullName: '',
        dateOfBirth: '',
        gender: '',
        emailId: '',
        mobileNumber: '',
        profession: '',
        address: '',
        city: 'Rajgarh',
        state: 'Madhya Pradesh',
        country: 'India',
        pin: '',
        idProof: 'Aadhar Card',
        idProofNumber: '',
        nomineeName: '',
        nomineeIdProof: 'Aadhar Card',
        nomineeIdProofNumber: ''
    }

    const [userData, setUserData] = useState(registerData)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log("Inside: ", name, value);
        setUserData({
            ...userData,
            [name]: value
        });
    }

    const registerUser = (e) => {
        e.preventDefault();
        userData['agree'] = agree;
        // Call Post API to save data into DB
        let header = {authorization:"Barear dgheafkvdsfhweldm.dsgererefew.edgdgwgdsfvw"}
        axios.post("http://localhost:8082/api/contributor/register", registerData,{headers:header})
        .then((resp)=>{
            console.log(resp);
            if(resp.data){
             //   navigate('/home');
              toast("Data Created Sucessfully!");
              setTimeout(() => {
                console.log('Hello, World!')
                navigate('/home');
              }, 3000);
            }
        }).catch((error)=>{
            console.log(error);
            toast("Somethig went wrong!!");
        })
        setUserData(registerData);
        setAgree(false)
        console.log(userData);
        // toast("Data Created Sucessfully!");
        // setTimeout(() => {
        //     navigate('/home');
        //   }, 3000);
    };

    const isActive = () => {
        setAgree(!agree)
    }
    // setAgree(true)
    // const refreshData = () => {
    //     window.location.reload(false);
    // }

    return (
        <>
            <Header />
            <ToastContainer />
            <div className=''>
                <div className="container">
                    <div className="row">
                        <div className="col"> </div>
                        <div className="card register-card-body">
                            <div className="card-header">
                                <h3 className='text-center'>Register Here!</h3>
                            </div>
                            <div className="card-body">
                                <div className="col mt-4">
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>Full Name:</Form.Label>
                                            <Form.Control type="text" placeholder="Your Full Name?" name='fullName'
                                                value={userData.fullName} onChange={handleInputChange} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>Date of Birth:</Form.Label>
                                            <Form.Control type="date" placeholder="Your Date of Birth?" name='dateOfBirth'
                                                value={userData.dateOfBirth} onChange={handleInputChange} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>Gender:</Form.Label>&nbsp;&nbsp;&nbsp;&nbsp;
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input checkbox-border" type="radio" name="gender" id="inlineRadio1"
                                                    value="Male"
                                                    checked={userData.gender == "Male"}
                                                    onChange={handleInputChange} />
                                                <label className="form-check-label" for="inlineRadio1" name='male'>Male</label>&nbsp;
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input checkbox-border" type="radio" name="gender" id="inlineRadio2"
                                                    value="Female"
                                                    checked={userData.gender == "Female"}
                                                    onChange={handleInputChange} />
                                                <label className="form-check-label" for="inlineRadio2" name='female'>Female</label>
                                            </div>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>Email Address:</Form.Label>
                                            <Form.Control type="email" placeholder="Your Email ID?" name='emailId'
                                                value={userData.emailId} onChange={handleInputChange} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>Mobile Number:</Form.Label>
                                            <Form.Control name='mobileNumber' type="number" placeholder="Your Mobile Number?"
                                                value={userData.mobileNumber} onChange={handleInputChange} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>Profession:</Form.Label>
                                            <Form.Control name='profession' type="text" placeholder="Your profession?"
                                                value={userData.profession} onChange={handleInputChange} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>ID Proof:</Form.Label>
                                            <select name='idProof' className="form-select" aria-label="ID Card Selector"
                                                value={userData.idProof} onChange={handleInputChange} >
                                                <option selected value="Aadhar Card">Aadhar Card</option>
                                                <option value="Pan Card">Pan Card</option>
                                                <option value="Voter ID Card">Voter ID Card</option>
                                                <option value="Passport">Passport</option>
                                            </select>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>ID Proof Number:</Form.Label>
                                            <Form.Control name='idProofNumber' type="text" placeholder="Your ID Proof Number?"
                                                value={userData.idProofNumber} onChange={handleInputChange} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>Address:</Form.Label>
                                            <Form.Control name='address' type="text" placeholder="Your Full Address?"
                                                value={userData.address} onChange={handleInputChange} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>City:</Form.Label>
                                            <select name='city' className="form-select" aria-label="City Selector"
                                                value={userData.city} onChange={handleInputChange}>
                                                <option selected value="Rajgarh">Rajgarh</option>
                                                <option value="Biaora">Biaora</option>
                                                <option value="Jirapur">Jirapur</option>
                                                <option value="Narsingharh">Narsingharh</option>
                                                <option value="Bhopal">Bhopal</option>
                                                <option value="Indore">Indore</option>
                                            </select>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>State:</Form.Label>
                                            <select name='state' className="form-select" aria-label="State Selector"
                                                value={userData.state} onChange={handleInputChange}>
                                                <option selected value="Madhya Pradesh">Madhya Pradesh</option>
                                                <option value="Rajisthan">Rajisthan</option>
                                                <option value="Gurjrat">Gurjrat</option>
                                                <option value="Maharashtra">Maharashtra</option>
                                                <option value="Chattishgarch">Chattishgarch</option>
                                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                            </select>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>Country:</Form.Label>
                                            <select name='country' className="form-select" aria-label="Country Selector"
                                                value={userData.country} onChange={handleInputChange}>
                                                <option selected value="India">India</option>
                                                <option value="America4">America</option>
                                                <option value="England">England</option>
                                            </select>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>Pin:</Form.Label>
                                            <Form.Control name='pin' type="text" placeholder="Your Pin Number?"
                                                value={userData.pin} onChange={handleInputChange} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>Nominee Name:</Form.Label>
                                            <Form.Control name='nomineeName' type="text" placeholder="Your Nominee Name?"
                                                value={userData.nomineeName} onChange={handleInputChange} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>Nominee ID Proof:</Form.Label>
                                            <select name='nomineeIdProof' className="form-select" aria-label="Nominee ID Card Selector"
                                                value={userData.nomineeIdProof} onChange={handleInputChange}>
                                                <option selected value="Aadhar Card">Aadhar Card</option>
                                                <option value="Pan Card">Pan Card</option>
                                                <option value="Voter ID Card">Voter ID Card</option>
                                                <option value="Passport">Passport</option>
                                            </select>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>Nominee ID Number:</Form.Label>
                                            <Form.Control name='nomineeIdProofNumber' type="text" placeholder="Your Nominee ID Number?"
                                                value={userData.nomineeIdProofNumber} onChange={handleInputChange} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <div className="form-check">
                                                <label className="form-check-label bold-font" for="defaultCheck1">
                                                    <input className="form-check-input checkbox-border"
                                                        type="checkbox"
                                                        checked={agree}
                                                        onClick={isActive}
                                                    />
                                                    Please confirm, if the filled data are correct?
                                                </label>
                                            </div>
                                        </Form.Group>

                                    </Form>
                                    <div className='text-center'>
                                        <button type='submit' className='btn btn-success register-btn'
                                            onClick={registerUser}>
                                            Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col"> </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Register;