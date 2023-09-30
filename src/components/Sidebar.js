import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import sidebar from '../css/sidebar.css'

const Sidebar = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={2} className='sidebar-bg-color' >
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link eventKey="link-1">Dashboard</Nav.Link>
                        <Nav.Link eventKey="link-2">Contributors</Nav.Link>
                        <Nav.Link eventKey="link-2">List of Members</Nav.Link>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled
                        </Nav.Link>
                    </Nav>
                </Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>
    );
}

export default Sidebar;