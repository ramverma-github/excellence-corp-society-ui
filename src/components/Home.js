import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Background from "./Background";

const Home = ()=>{
    return (
        <div>
            <Header/>
            <Background/>
            {/* <Sidebar/> */}
            <Footer/>
        </div>
    );
}
export default Home;