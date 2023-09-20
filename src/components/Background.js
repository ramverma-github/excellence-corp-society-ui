import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import BgImages from '../images/bg-business-img.jpg'

const Background = () => {
    return (
        <Container fluid>
            <Row>
                <img src={BgImages} height='450px' width='500px'/>
            </Row>
        </Container>
    );
}

export default Background;