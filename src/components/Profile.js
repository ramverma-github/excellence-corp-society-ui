import React, { useEffect, useState } from "react";
import axios from "axios";
import CreateContributor from "./Registration";

const Home=()=> { 
    const [respData, setRespData] =useState([])
    const apiCall=()=>{
        console.log("Api Call!!");
        let id=101
        axios.get(`http://localhost:8085/contributions/${id}`)
        .then((resp)=>{
            console.log(resp.data);
            setRespData(resp.data)
        })

    }
    useEffect(() => { 
        console.log("I Only run once (When the component gets mounted)") 
        }); 


    return(
        <div>
            <button onClick={apiCall}>Click Me</button>
            <table border={1} align="center">
                <thead style={{color:'red',backgroundColor:'greenyellow'}}>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AMOUNT</th> 
                </thead>
                {
            respData?.map((item, index)=>(
                <tbody key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.amount}</td>
                </tbody>
            ))}
            </table>
            
            <CreateContributor name="Ram"/>
        </div>
    );
}

export default Home;