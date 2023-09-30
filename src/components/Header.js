import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import header from '../css/header.css';
import Logoimg from '../images/logo-img.jpg'
import { Link, useNavigate } from 'react-router-dom';
import GreetingMarquee from './GreetingMarquee';
import userLogo from '../images/userLogo.avif'

const Header = () => {

    const navigate = useNavigate();

    const navigateLogin = () => {
        // 👇️ navigate to /
        navigate('/login');
    };
    const navigateRegister = () => {
        navigate('/register');
    }
    return (
        <>
            <Navbar expand="lg" className='headerColor' fixed='top'>
                <Container fluid>
                    <Navbar.Brand>
                        {/* <img src={Logoimg} width='160px' height='80px' 
                className='img-round' onClick={navigateHome}/>  */}
                        <Link to='/home'>
                            <img src={Logoimg} width='160px' height='80px'
                                className='img-round' />
                        </Link>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            {/* <div class="dropdown">
                                <button class="dropbtn" >HOME</button>
                                <div class="dropdown-content">
                                    <a href="#">Business</a>
                                    <a href="#">Society</a>
                                    <a href="#">Education</a>
                                </div>
                            </div> */}
                            <div class="dropdown">
                                <button class="dropbtn">PRODUCTS</button>
                                <div class="dropdown-content">
                                    <a href="#">Business</a>
                                    <a href="#">Society</a>
                                    <a href="#">Education</a>
                                </div>
                            </div>
                            <div class="dropdown">
                                <button class="dropbtn">SERVICES</button>
                                <div class="dropdown-content">
                                    <a href="#">Business</a>
                                    <a href="#">Society</a>
                                    <a href="#">Education</a>
                                </div>
                            </div>
                            <div class="dropdown">
                                <button class="dropbtn">CONTRIBUTION</button>
                                <div class="dropdown-content">
                                    <a href="#">Business</a>
                                    <a href="#">Society</a>
                                    <a href="#">Education</a>
                                </div>
                            </div>
                            <Form className="d-flex marginl">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                {/* <Button className='search-btn-bg' disabled>Search</Button> */}
                            </Form>
                        </Nav>
                        <div className='login-reg-btn'>
                            <Button className='btn-marg' onClick={navigateLogin}>Login</Button>
                            <Button className='btn-marg' onClick={navigateRegister}>Register</Button>
                            <Link to='#'>
                                <img src={userLogo} width='60px' height='50px'
                                    className='img-round' />
                            </Link>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <div className='headerColor'>
                <marquee className='text-mq'>Your are Welcome!!</marquee>
            </div> */}
            <GreetingMarquee />
        </>
    );
}

export default Header;