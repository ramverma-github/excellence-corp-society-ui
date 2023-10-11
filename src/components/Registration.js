import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration=(props)=>{
    console.log("Props: ", props.name);
    const	[fullName, setFullName] = useState('');
    const	[dateOfBirth, setDateOfBirth] = useState('');
    const	[gender, setDasetteOfBirth] = useState('');
    const	[emailId, setEmailId] = useState('');
    const   [mobileNumber, setMobileNumber] = useState('');
    const	[profession, setProfession] = useState('');
    const	[address, setAddress] = useState('');
    const	[pin, setPin] = useState('');
    const	[idProof, setIdProof] = useState('');
    const	[idNumber, setIdNumber] = useState(0);
    const	[nomineeName, setNomineeName] = useState('');
    const	[nomineeIdProof, setNomineeIdProof] = useState('');
    const	[nomineeIdNumber, setNomineeIdNumber] = useState('');


    const navigate = useNavigate();

    const register = ()=>{
        console.log("Inside register function...");
        let data = {fullName: fullName, emailId:emailId};
        let header = {authorization:"Barear dgheafkvdsfhweldm.dsgererefew.edgdgwgdsfvw"}

        axios.post("http://localhost:8085/api/contributor", data,{headers:header})
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
    }
    return (
        <div>
            <ToastContainer />
            <form>
                <table align="center" border={1} bgcolor="orange">
                <h3>*SIGN UP*</h3>
                <label>Full Name: <input type="text" placeholder="Enter Your Full Name" name="fullName" value={fullName} onChange={(e)=>{setFullName(e.target.value)}}/>
                </label><br/>
                <label>Date Of Birth: <input type="date" name="dateOfBirth" value={dateOfBirth} onChange={(e)=>{setDateOfBirth(e.target.value)}}/>
                </label><br/>
                <label>Email ID: <input type="text" name="emailId" placeholder="Enter Your Email ID" value={emailId} onChange={(e)=>{setEmailId(e.target.value)}}/>
                </label><br/>
                <label>Mobile Number: <input type="text" name="mobileNumber" placeholder="Enter Your Mobile Number" value={mobileNumber} onChange={(e)=>{setMobileNumber(e.target.value)}}/>
                </label><br/>
                <label>Profession: <input type="text" name="profession" placeholder="Enter Your Profession" value={profession} onChange={(e)=>{setProfession(e.target.value)}}/>
                </label><br/>
                <label>Address: <input type="text" name="address" placeholder="Enter Your Full Address" value={address}  onChange={(e)=>{setAddress(e.target.value)}}/>
                </label><br/>
                <label>PIN: <input type="text" name="pin" placeholder="Enter Your Full Address PIN" value={pin}  onChange={(e)=>{setPin(e.target.value)}}/>
                </label><br/>
                <label>ID Proof: 
                <select name="idProof" value={idProof} onChange={(e)=>{setIdProof(e.target.value)}}>
                        <option value="">--Select--</option>
                        <option value="aadharCard">Aadhar Card</option>
                        <option value="panCard">PAN Card</option>
                        <option value="electionCard">Election Card</option>
                        <option value="passport">Passport</option>
                    </select>
                </label><br/>
                <label>ID Number: <input type="number" placeholder="Enter Your ID Number" value={idNumber} name="idProof" onChange={(e)=>{setIdNumber(e.target.value)}}/>
                </label><br/>
                <label>Nominee: <input type="text"  name="nomineeName" placeholder="Enter Your Nominee Name"  value={nomineeName} onChange={(e)=>{setNomineeName(e.target.value)}}/>
                </label><br/>
                <label>Nominee ID Proof: 
                    <select name = "nomineeIdProof" value={nomineeIdProof} onChange={(e)=>{setNomineeIdProof(e.target.value)}}>
                        <option value="">--Select--</option>
                        <option value="aadharCard">Aadhar Card</option>
                        <option value="panCard">PAN Card</option>
                        <option value="electionCard">Election Card</option>
                        <option value="passport">Passport</option>
                    </select>
                </label><br/>
                <label>Nominee ID Number: <input type="number" name="nomineeIdNumber" placeholder="Enter Your Nominee ID Number" value={nomineeIdNumber} onChange={(e)=>{setNomineeIdNumber(e.target.value)}}/>
                </label><br/>
                <button onClick={register}>Register Me</button>
                </table>
            </form>
            
            <p>Registered Successfully!!</p>
        </div>
    );
}

export default Registration;