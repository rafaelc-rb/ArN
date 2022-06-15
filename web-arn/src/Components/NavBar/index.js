import React from 'react'
import {
    Nav,
    Navbar,
    Container
} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './styles.css'
import logo from '../../Assets/Img/logo.png'
import CitySelection from '../CitySelection'

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
    // const anps = () => {
    //     let path = '/anapolis';
    //     navigate(path);
    // }
    // const ov = () => {
    //     let path = '/ouro-verde';
    //     navigate(path);
    // }
    // const alxn = () => {
    //     let path = '/alexania';
    //     navigate(path);
    // }
    // const abdn = () => {
    //     let path = '/abadiania';
    //     navigate(path);
    // }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/"><img
                    src={logo}
                    alt='logo'
                    width='250px'
                /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={about}>Sobre nós</Nav.Link>
                        <Nav.Link href="#plans">Planos</Nav.Link>
                        <Nav.Link href="https://aranet.speedtestcustom.com">Teste de Velocidade</Nav.Link>
                        <Nav.Link onClick={contact}>Contato</Nav.Link>
                    </Nav>
                    <Nav>
                        <CitySelection />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavBar