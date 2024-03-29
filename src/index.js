import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/Registration";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Notification from "./components/Notification";
import UserProfile from "./components/UserProfile";
import ForgotPassword from "./components/ForgotPassword";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/header" element={<Header />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);