import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Background from "./Background";
import MarqueeBgColor from "../css/userProfile.css"

const UserProfile = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <Footer />
        </>
    );
}

export default UserProfile;