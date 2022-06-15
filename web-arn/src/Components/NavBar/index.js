import React from 'react'
import {
    Nav,
    Navbar,
    Container
} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './styles.css'
import logo from '../../Assets/Img/logo.png'

function NavBar() {

    let navigate = useNavigate();
    const about = () => {
        let path = '/about';
        navigate(path);
    }
    const contact = () => {
        let path = '/contact';
        navigate(path);
    }

    return (
        <div className='header'>
            <Navbar variant='dark' expand="lg">
                <Container className='header-nav'>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            alt='logo'
                            width='250px'
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse >
                        <Nav className="me-auto" />

                        <Nav className='header-text'>
                            <Nav.Link onClick={about}>Sobre nós</Nav.Link>
                            <Nav.Link href="#plans">Planos</Nav.Link>
                            <Nav.Link href="https://aranet.speedtestcustom.com">Teste de Velocidade</Nav.Link>
                            <Nav.Link onClick={contact}>Atendimento</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    )
}

export default NavBar