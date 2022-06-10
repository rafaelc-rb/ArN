import React from 'react'
import { 
    Nav, 
    Navbar, 
    NavbarBrand, 
    NavbarToggler, 
    NavItem, 
    NavLink, 
    UncontrolledDropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem, 
    Collapse, 
} from 'reactstrap'
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
    const anps = () => {
        let path = '/anapolis';
        navigate(path);
    }
    const ov = () => {
        let path = '/ouro-verde';
        navigate(path);
    }
    const alxn = () => {
        let path = '/alexania';
        navigate(path);
    }
    const abdn = () => {
        let path = '/abadiania';
        navigate(path);
    }

    return (
        <div>
            <Navbar
                className='header'
                color="light"
                expand="lg"
                full
                light
            >
                <NavbarBrand href="/">
                    <img
                        src={logo}
                        alt='logo'
                        width='250px'
                    />
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                        style={{justifyItems:'space-evenly'}}
                    >
                        <NavItem>
                            <NavLink onClick={about}>
                                Sobre
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                Planos
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://www.speedtest.net/pt">
                                Teste de Conexão
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={contact}>
                                Atendimento
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown
                            inNavbar
                            nav
                        >
                            <DropdownToggle
                                caret
                                nav
                            >
                                Selecione sua cidade
                            </DropdownToggle>
                            <DropdownMenu >
                                <DropdownItem onClick={anps} >
                                    Anápolis
                                </DropdownItem>
                                <DropdownItem onClick={ov} >
                                    Ouro Verde
                                </DropdownItem>
                                <DropdownItem onClick={alxn} >
                                    Alexânia
                                </DropdownItem>
                                <DropdownItem onClick={abdn} >
                                    Abadiânia
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>                    
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar